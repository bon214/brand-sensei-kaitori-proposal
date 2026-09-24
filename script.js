'use strict';
const form=document.getElementById('consult-form');
const confirmation=document.getElementById('confirmation');
const completion=document.getElementById('completion');
const fields={name:document.getElementById('name'),phone:document.getElementById('phone'),item:document.getElementById('item'),message:document.getElementById('message')};
function setStage(stage){form.hidden=stage!==1;confirmation.hidden=stage!==2;completion.hidden=stage!==3;[1,2,3].forEach(n=>{const el=document.getElementById('step-'+n);el.classList.toggle('active',n===stage);if(n===stage)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current')});}
function error(field,message){document.getElementById(field+'-error').textContent=message;const el=field==='agree'?document.getElementById('demo-agree'):fields[field];el.setAttribute('aria-invalid',String(Boolean(message)));el.setAttribute('aria-describedby',field+'-error');}
form.addEventListener('submit',event=>{event.preventDefault();let first=null;const name=fields.name.value.trim(),phone=fields.phone.value.trim();error('name',name?'':'お名前を入力してください。');if(!name)first=fields.name;const validPhone=/^[0-9０-９\s()+－ー-]+$/.test(phone)&&/^[0-9]{10,11}$/.test(phone.replace(/[０-９]/g,c=>String.fromCharCode(c.charCodeAt(0)-65248)).replace(/[^0-9]/g,''));error('phone',validPhone?'':'電話番号を10〜11桁の数字で入力してください。');if(!validPhone&&!first)first=fields.phone;const agree=document.getElementById('demo-agree');error('agree',agree.checked?'':'体験用フォームであることをご確認ください。');if(!agree.checked&&!first)first=agree;if(first){first.focus();return}const dl=document.getElementById('confirm-values');dl.replaceChildren();Object.entries({name:'お名前',phone:'電話番号',item:'お品物',message:'気になること'}).forEach(([id,label])=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=fields[id].value.trim()||'記入なし';dl.append(dt,dd)});setStage(2);document.getElementById('confirm-title').focus();});
document.getElementById('back-button').addEventListener('click',()=>{setStage(1);fields.name.focus()});
document.getElementById('complete-button').addEventListener('click',()=>{setStage(3);form.reset();document.getElementById('confirm-values').replaceChildren();document.getElementById('complete-title').focus()});
document.getElementById('reset-button').addEventListener('click',()=>{form.reset();['name','phone','agree'].forEach(f=>error(f,''));setStage(1);fields.name.focus()});
setStage(1);

// Show the mobile consultation link only after the reassurance sections.
const mobileCta=document.querySelector('.mobile-cta');
const invitation=document.getElementById('invitation');
const contact=document.getElementById('contact');
let ctaTicking=false;
function updateCta(){const ready=invitation.getBoundingClientRect().top<window.innerHeight*0.55;const formVisible=contact.getBoundingClientRect().top<window.innerHeight*0.85&&contact.getBoundingClientRect().bottom>0;mobileCta.hidden=!ready||formVisible;ctaTicking=false;}
window.addEventListener('scroll',()=>{if(!ctaTicking){requestAnimationFrame(updateCta);ctaTicking=true;}},{passive:true});
window.addEventListener('resize',updateCta);
updateCta();
