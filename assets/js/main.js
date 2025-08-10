
// mobile menu
document.querySelector('.menu-toggle')?.addEventListener('click',()=>{
  document.querySelector('.nav')?.classList.toggle('open');
});
// slider
let idx = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
function show(i){
  slides.forEach((s,j)=>s.classList.toggle('active',j===i));
  dots.forEach((d,j)=>d.classList.toggle('active',j===i));
}
dots.forEach((d,i)=>d.addEventListener('click',()=>{idx=i;show(idx);}));
if(slides.length){ show(idx); setInterval(()=>{idx=(idx+1)%slides.length;show(idx);},7000); }
