import React,{forwardRef,useRef,useEffect,useImperativeHandle} from 'react';
import {Player} from '@remotion/player';
import {FirstTrace,FILM} from './remotion/FirstTrace';
export default forwardRef(function IntroPlayer({playing,onFrame,onEnd,onError},ref){
  const player=useRef();
  useImperativeHandle(ref,()=>({seekTo:frame=>player.current?.seekTo(frame)}),[]);
  useEffect(()=>{const p=player.current;if(!p)return;const frame=e=>onFrame(e.detail.frame);p.addEventListener('frameupdate',frame);p.addEventListener('ended',onEnd);p.addEventListener('error',onError);return()=>{p.removeEventListener('frameupdate',frame);p.removeEventListener('ended',onEnd);p.removeEventListener('error',onError)}},[onFrame,onEnd,onError]);
  useEffect(()=>{if(playing)player.current?.play();else player.current?.pause()},[playing]);
  return <Player ref={player} component={FirstTrace} compositionWidth={FILM.width} compositionHeight={FILM.height} durationInFrames={FILM.durationInFrames} fps={FILM.fps} controls={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} moveToBeginningWhenEnded={false} style={{width:'100%',height:'100%'}} errorFallback={()=>null}/>;
});
