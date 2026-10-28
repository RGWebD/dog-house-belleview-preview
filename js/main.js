(function(){var d=document;d.documentElement.classList.add('js');
var tabs=d.querySelectorAll('.tab'),panels=d.querySelectorAll('.gpanel');
function show(k){tabs.forEach(function(t){t.classList.toggle('on',t.dataset.tab===k)});panels.forEach(function(p){p.classList.toggle('on',p.dataset.panel===k)})}
if(tabs.length){tabs.forEach(function(t){t.addEventListener('click',function(e){e.preventDefault();show(t.dataset.tab);history.replaceState(null,'','#'+t.dataset.tab)})});show((location.hash||'#grooms').slice(1)in{grooms:1,salon:1,pups:1}?location.hash.slice(1)||'grooms':'grooms')}
var lb=d.getElementById('lb');if(!lb)return;var img=lb.querySelector('img'),list=[],i=0;
function open(n){i=(n+list.length)%list.length;img.src=list[i].href;img.alt=list[i].querySelector('img').alt;lb.hidden=false}
d.querySelectorAll('a.lb').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();list=[].slice.call(a.closest('.ggrid').querySelectorAll('a.lb'));open(list.indexOf(a))})});
lb.querySelector('.lbx').onclick=function(){lb.hidden=true};lb.querySelector('.lbp').onclick=function(){open(i-1)};lb.querySelector('.lbn').onclick=function(){open(i+1)};
lb.addEventListener('click',function(e){if(e.target===lb)lb.hidden=true});
d.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')open(i-1);if(e.key==='ArrowRight')open(i+1)})})();
