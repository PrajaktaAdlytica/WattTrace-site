import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// No pinning or scroll interception: the existing product scenes own their motion.
export default function ScrollReveals(){
  const {pathname}=useLocation();
  useEffect(()=>{
    let frame;
    const media=gsap.matchMedia();
    frame=requestAnimationFrame(()=>media.add('(prefers-reduced-motion: no-preference)',()=>{
      const ctx=gsap.context(()=>{
        const selector=[
          '.hero-copy','.hero-bottom','.section-heading>div','.section-heading>p',
          '.workbench-preview','.offer-row','.roles-section>div:first-child','.role-list>a',
          '.trust-grid>div','.weeks>div','.pilot-gate','.faq-section>div:first-child',
          '.faq-section details','.closing>div','.footer-top>div','.footer-invite','.footer-links>div',
          '.page-hero','.article-layout article>section','.resource-grid>a','.scorecard',
          '.product-hero>div','.product-detail-grid>div','.inquiry-intro','.form-panel',
          '.signin>div','.signin>section','.standard-section>h2','.standard-section>p',
          '.demo-title','.demo-summary'
        ].join(',');
        const candidates=[...document.querySelectorAll(selector)].filter(el=>
          !el.closest('.layer-section,.evidence-section,.pin-spacer')
        );
        // A nested target belongs to its outer reveal; never animate it twice.
        const groups=candidates.filter(el=>!candidates.some(parent=>parent!==el&&parent.contains(el)));
        const mobile=window.innerWidth<641;
        groups.forEach((group,index)=>{
          group.dataset.scrollReveal=index%2?'right':'left';
          const children=[...group.children].filter(el=>!['STYLE','SCRIPT'].includes(el.tagName));
          const items=children.length?children:[group];
          const direction=index%2?1:-1;
          const distance=mobile?32:86;
          let tween;
          const finish=()=>{tween?.kill();gsap.set(items,{clearProps:'transform,opacity,filter'});};
          const reset=()=>{tween?.kill();gsap.set(items,{opacity:0,x:direction*distance,y:18});};
          const reveal=(back=false)=>{
            if(group.contains(document.activeElement)){finish();return;}
            tween?.kill();
            tween=gsap.fromTo(items,{opacity:0,x:direction*distance*(back?-1:1),y:back?-16:22},{
              opacity:1,x:0,y:0,duration:mobile?.75:1.05,stagger:mobile?.065:.11,
              ease:'power3.out',overwrite:'auto',onComplete:()=>gsap.set(items,{clearProps:'transform,opacity'})
            });
          };
          reset();
          ScrollTrigger.create({trigger:group,start:'top 94%',end:'bottom top',
            onEnter:()=>reveal(false),onEnterBack:()=>reveal(true),
            onLeave:()=>{if(!group.contains(document.activeElement))reset();},onLeaveBack:reset,
            onRefresh:self=>{if(self.isActive)finish();}
          });
          // Keyboard users should never focus an invisible control.
          group.addEventListener('focusin',finish);
          group._revealCleanup=()=>{tween?.kill();group.removeEventListener('focusin',finish);delete group.dataset.scrollReveal;delete group._revealCleanup;};
        });
        ScrollTrigger.refresh();
      });
      return()=>{
        document.querySelectorAll('[data-scroll-reveal]').forEach(el=>el._revealCleanup?.());
        ctx.revert();
      };
    }));
    return()=>{cancelAnimationFrame(frame);media.revert();};
  },[pathname]);
  return null;
}
