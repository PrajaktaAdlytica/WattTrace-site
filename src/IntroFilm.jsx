import React,{lazy,Suspense,useState,useRef,useEffect,useCallback} from 'react';
import {ArrowDown,Pause,Play,ArrowCounterClockwise} from '@phosphor-icons/react';
import './intro.css';
const IntroPlayer=lazy(()=>import('./IntroPlayer'));
const motionAllowed=()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!navigator.connection?.saveData;
export default function IntroFilm(){
  const root=useRef(),player=useRef(),pendingSeek=useRef(null);
  const [enabled,setEnabled]=useState(motionAllowed),[wanted,setWanted]=useState(motionAllowed),[visible,setVisible]=useState(true),[pageVisible,setPageVisible]=useState(!document.hidden),[chapter,setChapter]=useState(0),[ended,setEnded]=useState(false),[failed,setFailed]=useState(false);
  const onFrame=useCallback(f=>setChapter(Math.min(2,Math.floor(f/120))),[]);
  const onEnd=useCallback(()=>{setWanted(false);setEnded(true)},[]);
  const onError=useCallback(()=>{setFailed(true);setWanted(false)},[]);
  const bindPlayer=useCallback(node=>{player.current=node;if(node&&pendingSeek.current!==null){node.seekTo(pendingSeek.current);pendingSeek.current=null}},[]);
  useEffect(()=>{const measure=()=>{const box=root.current?.getBoundingClientRect();setVisible(Boolean(box&&box.bottom>120&&box.top<window.innerHeight))};const scroll=measure;window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);measure();const visibility=()=>setPageVisible(!document.hidden);document.addEventListener('visibilitychange',visibility);const mq=window.matchMedia('(prefers-reduced-motion: reduce)');const reduce=()=>{if(mq.matches){setWanted(false);setEnabled(false)}};mq.addEventListener('change',reduce);return()=>{window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);document.removeEventListener('visibilitychange',visibility);mq.removeEventListener('change',reduce)}},[]);
  const seek=(index)=>{setEnabled(true);setEnded(false);setChapter(index);if(player.current)player.current.seekTo(index*120);else pendingSeek.current=index*120;setWanted(true)};
  const toggle=()=>{if(ended){seek(0);return}setEnabled(true);setWanted(p=>!p)};
  const playing=enabled&&wanted&&visible&&pageVisible&&!failed;
  return <section ref={root} className="intro-film" data-in-view={visible} aria-label="The First Trace — WattTrace introduction">
    <div className="intro-media" aria-hidden="true"><img className="intro-poster" src="/assets/intro/recorder-wide.webp" alt="" fetchPriority="high"/>{enabled&&!failed&&<div className="intro-player"><Suspense fallback={null}><IntroPlayer ref={bindPlayer} playing={playing} onFrame={onFrame} onEnd={onEnd} onError={onError}/></Suspense></div>}</div>
    <div className="intro-shade"/>
    <div className="intro-edition"><span>THE FIRST TRACE</span><span>AN INTRODUCTION TO WATTTRACE</span></div>
    <div className="intro-chapters" role="group" aria-label="Intro film chapters">{['The paper','The trace','The record'].map((name,i)=><button key={name} disabled={failed} onClick={()=>seek(i)} aria-label={`Play chapter ${i+1}: ${name}`} aria-current={chapter===i?'step':undefined}><span>0{i+1}</span><b/>{name}</button>)}</div>
    <div className="intro-bottom"><div className="intro-identity"><img src="/assets/brand/wordmark-cream.svg" alt="WattTrace" width="800" height="160"/><span>CLARITY BEFORE INTERVENTION.</span></div><div className="intro-message"><p>Every decision<br/>begins with <i>a trace.</i></p><a href="#plant-context" onClick={()=>setWanted(false)}>Explore WattTrace <ArrowDown size={20}/></a></div></div>
    <div className="intro-footnote"><span>CONCEPT FILM · ILLUSTRATIVE</span><span className="intro-film-caption">Paper. Trace. A record to question.</span>{!failed?<button onClick={toggle} aria-label={ended?'Replay introduction':playing?'Pause introduction':'Play introduction'}>{ended?<ArrowCounterClockwise size={14}/>:playing?<Pause size={14}/>:<Play size={14}/>}<span>{ended?'Replay':playing?'Pause film':'Play film'}</span></button>:<span>STILL PREVIEW</span>}</div>
  </section>;
}
