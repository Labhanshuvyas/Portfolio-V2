(()=>{
  const navToggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.nav-links');
  if(navToggle&&nav){
    navToggle.addEventListener('click',()=>{const expanded=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false');navToggle.focus()}});
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const dialog=document.getElementById('reportViewer');
  if(!dialog)return;
  const image=dialog.querySelector('#viewerImage'),viewport=dialog.querySelector('.viewer-viewport'),status=dialog.querySelector('.viewer-status'),zoomLabel=dialog.querySelector('output'),title=dialog.querySelector('.viewer-title');
  let scale=1,fitScale=1,opener=null,fitMode=true;
  function applyScale(){image.style.width=Math.round(image.naturalWidth*scale)+'px';zoomLabel.textContent=Math.round(scale*100)+'%';dialog.querySelector('[data-zoom="out"]').disabled=scale<=fitScale/2;dialog.querySelector('[data-zoom="in"]').disabled=scale>=2;}
  function fit(){if(!image.naturalWidth)return;fitScale=Math.min((viewport.clientWidth-48)/image.naturalWidth,(viewport.clientHeight-48)/image.naturalHeight,1);fitScale=Math.max(.08,fitScale);scale=fitScale;fitMode=true;applyScale();viewport.scrollTo(0,0)}
  function close(){dialog.close()}
  document.querySelectorAll('[data-report]').forEach(button=>button.addEventListener('click',()=>{
    opener=button;title.textContent=button.dataset.title||'Visual product report';image.alt=title.textContent;image.hidden=true;status.hidden=false;status.textContent='Loading the full-resolution report…';zoomLabel.textContent='—';
    document.body.classList.add('body-lock');dialog.showModal();
    image.onload=()=>{image.hidden=false;status.hidden=true;fit()};
    image.onerror=()=>{image.hidden=true;status.hidden=false;status.textContent='The report could not load. Close this viewer and try again.'};
    image.src=button.dataset.report;
  }));
  dialog.querySelector('[data-close-viewer]').addEventListener('click',close);
  dialog.addEventListener('close',()=>{document.body.classList.remove('body-lock');if(opener)opener.focus()});
  dialog.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{
    if(!image.naturalWidth)return;
    const action=button.dataset.zoom;
    if(action==='fit'){fit();return}
    fitMode=false;scale=action==='actual'?1:Math.max(fitScale/2,Math.min(2,scale*(action==='in'?1.25:.8)));applyScale();
  }));
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()}});
  window.addEventListener('resize',()=>{if(dialog.open&&fitMode)fit()});
})();
