import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
export const FILM={width:1920,height:1080,fps:30,durationInFrames:360};
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'};
function Shot({src,startScale,endScale,origin,fade=0,duration=150}){
  const frame=useCurrentFrame();
  return <AbsoluteFill style={{opacity:fade?interpolate(frame,[0,fade],[0,1],clamp):1}}>
    <Img src={staticFile(src)} style={{width:'100%',height:'100%',objectFit:'cover',scale:interpolate(frame,[0,duration],[startScale,endScale],clamp),transformOrigin:origin}}/>
  </AbsoluteFill>;
}
export function FirstTrace(){return <AbsoluteFill style={{background:'#211b19',overflow:'hidden'}}>
  <Sequence name="01 · The paper" from={0} durationInFrames={150} premountFor={30}>
    <Shot src="assets/intro/recorder-wide.webp" startScale={1.23} endScale={1.13} origin="65% 64%" duration={150}/>
  </Sequence>
  <Sequence name="02 · The trace" from={120} durationInFrames={150} premountFor={30}>
    <Shot src="assets/intro/recorder-detail.webp" startScale={1.06} endScale={1.14} origin="74% 48%" fade={30} duration={150}/>
  </Sequence>
  <Sequence name="03 · The record" from={240} durationInFrames={120} premountFor={30}>
    <Shot src="assets/intro/recorder-wide.webp" startScale={1.09} endScale={1} origin="70% 45%" fade={30} duration={119}/>
  </Sequence>
</AbsoluteFill>}
