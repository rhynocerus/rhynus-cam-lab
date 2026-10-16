'use strict';
const $ = id => document.getElementById(id);
const video = $('camera'), canvas = $('overlay'), ctx = canvas.getContext('2d');
const sample = document.createElement('canvas');sample.width=96;sample.height=54;
const sc=sample.getContext('2d',{willReadFrequently:true});
let stream=null,frame=0,previous=null,shownUntil=0,lastAnalyze=0;
const persistenceMs=2600;
const setStatus=(message,active=false)=>{$('status').textContent=message;$('status').classList.toggle('active',active)};
$('threshold').addEventListener('input',()=>{$('thresholdValue').textContent=$('threshold').value});
function sizeCanvas(){const r=canvas.getBoundingClientRect();const scale=Math.min(devicePixelRatio||1,2);const w=Math.round(r.width*scale),h=Math.round(r.height*scale);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}ctx.setTransform(scale,0,0,scale,0,0)}
function rhinoceros(){const w=canvas.clientWidth,h=canvas.clientHeight,x=w/2,y=h/2,s=Math.min(w,h)/270;ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';ctx.lineWidth=5;ctx.strokeStyle='#071c2a';ctx.fillStyle='#869fab';function path(pts){ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fill();ctx.stroke()}
 // ears
 path([[-60,-44],[-82,-102],[-35,-84],[-27,-48]]);path([[60,-44],[82,-102],[35,-84],[27,-48]]);ctx.fillStyle='#e98f9a';path([[-56,-57],[-68,-87],[-43,-75],[-39,-55]]);path([[56,-57],[68,-87],[43,-75],[39,-55]]);
 // head
 ctx.fillStyle='#91a9b5';ctx.beginPath();ctx.ellipse(0,6,77,82,0,0,Math.PI*2);ctx.fill();ctx.stroke();
 // horn
 ctx.fillStyle='#edf8fa';path([[-18,-54],[0,-118],[18,-54],[12,-22],[-12,-22]]);
 // eyes
 ctx.fillStyle='#0a2838';for(const a of [-30,30]){ctx.beginPath();ctx.arc(a,0,6,0,Math.PI*2);ctx.fill()}
 // muzzle
 ctx.fillStyle='#bacbd1';ctx.beginPath();ctx.ellipse(0,47,49,34,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#163244';for(const a of [-20,20]){ctx.beginPath();ctx.ellipse(a,35,5,7,0,0,Math.PI*2);ctx.fill()}
 ctx.beginPath();ctx.arc(0,45,19,0,Math.PI);ctx.stroke();ctx.restore()}
function animate(now){if(!stream)return;sizeCanvas();ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);if(video.readyState>=2 && now-lastAnalyze>100){lastAnalyze=now;try{sc.drawImage(video,0,0,96,54);const data=sc.getImageData(0,0,96,54).data;let score=0;if(previous){let changed=0;for(let i=0;i<data.length;i+=16){const diff=Math.abs(data[i]-previous[i])+Math.abs(data[i+1]-previous[i+1])+Math.abs(data[i+2]-previous[i+2]);if(diff>54)changed++}score=Math.round(changed/(data.length/16)*100);if(score>Number($('threshold').value)*0.16)shownUntil=now+persistenceMs}previous=new Uint8ClampedArray(data);$('motionValue').textContent=String(score).padStart(3,'0');$('motionBar').style.width=Math.min(score*3,100)+'%'}catch(e){setStatus('Error al analizar fotogramas')}}if(now<shownUntil){rhinoceros();setStatus('🦏 Movimiento detectado / Rino activo',true)}else{setStatus('● Cámara activa · observando',true)}frame=requestAnimationFrame(animate)}
async function start(){if(stream)return;try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:false});video.srcObject=stream;await video.play();$('placeholder').classList.add('hidden');$('start').disabled=true;$('stop').disabled=false;$('camSignal').textContent='● LIVE';$('camSignal').classList.add('online');previous=null;shownUntil=0;frame=requestAnimationFrame(animate)}catch(err){if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}setStatus('No se pudo abrir la cámara: '+(err.name||'Error'));}}
function stop(){cancelAnimationFrame(frame);if(stream)stream.getTracks().forEach(t=>t.stop());stream=null;video.srcObject=null;previous=null;shownUntil=0;ctx.clearRect(0,0,canvas.width,canvas.height);$('placeholder').classList.remove('hidden');$('start').disabled=false;$('stop').disabled=true;$('camSignal').textContent='● STANDBY';$('camSignal').classList.remove('online');$('motionBar').style.width='0';$('motionValue').textContent='000';setStatus('Cámara inactiva')}
$('start').addEventListener('click',start);$('stop').addEventListener('click',stop);
$('test').addEventListener('click',()=>{if(!stream){setStatus('Activa primero la cámara');return}shownUntil=performance.now()+persistenceMs;setStatus('🦏 Rino de prueba',true)});
window.addEventListener('pagehide',stop);
