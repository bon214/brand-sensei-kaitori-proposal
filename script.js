'use strict';
const form=document.getElementById('consult-form');
const confirmation=document.getElementById('confirmation');
const completion=document.getElementById('completion');
const fields={name:document.getElementById('name'),phone:document.getElementById('phone'),item:document.getElementById('item'),message:document.getElementById('message')};
function setStage(stage){form.hidden=stage!==1;confirmation.hidden=stage!==2;completion.hidden=stage!==3;[1,2,3].forEach(n=>{const el=document.getElementById('step-'+n);el.classList.toggle('active',n===stage);if(n===stage)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current')});}
function error(field,message){document.getElementById(field+'-error').textContent=message;const el=fields[field];el.setAttribute('aria-invalid',String(Boolean(message)));el.setAttribute('aria-describedby',field+'-error');}
form.addEventListener('submit',event=>{event.preventDefault();let first=null;const name=fields.name.value.trim(),phone=fields.phone.value.trim();error('name',name?'':'お名前を入力してください。');if(!name)first=fields.name;const validPhone=/^[0-9０-９\s()+－ー-]+$/.test(phone)&&/^[0-9]{10,11}$/.test(phone.replace(/[０-９]/g,c=>String.fromCharCode(c.charCodeAt(0)-65248)).replace(/[^0-9]/g,''));error('phone',validPhone?'':'電話番号を10〜11桁の数字で入力してください。');if(!validPhone&&!first)first=fields.phone;if(first){first.focus();return}const dl=document.getElementById('confirm-values');dl.replaceChildren();Object.entries({name:'お名前',phone:'電話番号',item:'お品物',message:'気になること'}).forEach(([id,label])=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=fields[id].value.trim()||'記入なし';dl.append(dt,dd)});setStage(2);document.getElementById('confirm-title').focus();});
document.getElementById('back-button').addEventListener('click',()=>{setStage(1);fields.name.focus()});
document.getElementById('complete-button').addEventListener('click',()=>{setStage(3);form.reset();document.getElementById('confirm-values').replaceChildren();document.getElementById('complete-title').focus()});
document.getElementById('reset-button').addEventListener('click',()=>{form.reset();['name','phone'].forEach(f=>error(f,''));setStage(1);fields.name.focus()});
setStage(1);

// Match the placeholder text in the PC and mobile design frames.
const mobileView=window.matchMedia('(max-width: 760px)');
function updatePlaceholder(){fields.name.placeholder=mobileView.matches?'例：山田 花子':'例：山田 花子（架空のお名前）';}
mobileView.addEventListener('change',updatePlaceholder);
updatePlaceholder();

// Figma shows the final answer expanded on desktop and collapsed on mobile.
const followupQuestion=document.querySelector('.faq-followup');
function updateFaqDefault(){followupQuestion.open=!mobileView.matches;}
mobileView.addEventListener('change',updateFaqDefault);
updateFaqDefault();
