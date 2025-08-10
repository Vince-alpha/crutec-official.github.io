
let idx=0;
const slides=()=>document.querySelectorAll('.hero .slide');
function show(i){slides().forEach((el,ix)=>el.classList.toggle('active',ix===i));}
function next(){idx=(idx+1)%slides().length;show(idx);}
show(0);
setInterval(next,5000);
