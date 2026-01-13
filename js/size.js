(function(){
  const $=s=>document.querySelector(s)
  const setSrc=(img,src,fallback)=>{img.onerror=null;img.src=src;img.onerror=()=>{img.onerror=null;img.src=fallback}}
  const srcForMode = (base, mode) => {
    if (mode === 'shiny') {
      return base
        .replace(/^img\//, 'img-s/')
        .replace(/\.png$/, '-s.png');
    }
    return base;
  };
    let lastP=null,lastMode='base'
  const compute=(p,mode)=>{
    const wrap=$('.scaleWrap')
    const trainer=$('#trainerSil')
    const poke=$('#pokeSil')
    const info=$('#sizeInfo')
    const d=$('#dImg')
    if(!wrap||!trainer||!poke||!info||!d) return
    const H=(wrap.clientHeight&&wrap.clientHeight>50)?wrap.clientHeight:220
    const baseH=1.75
    const ph=Math.max(0.01,parseFloat(p.height)||0.01)
    const tallest=Math.max(baseH,ph)
    const pxPerM=(H-8)/tallest
    const trainerPx=Math.max(40,baseH*pxPerM)
    const pokePx=Math.max(34,ph*pxPerM)
    trainer.src='ima/trn.png'
    trainer.style.height=trainerPx+'px'
    trainer.style.width='auto'
    const base=d.dataset.base||p.image
    setSrc(poke,srcForMode(base,mode),'img/000.png')
    poke.style.height=pokePx+'px'
    poke.style.width='auto'
    info.textContent='Altura '+(parseFloat(p.height)||0)+' m • Peso '+(p.weight||0)+' kg'
  }
  const build=(p,mode)=>{lastP=p;lastMode=mode||'base';requestAnimationFrame(()=>compute(lastP,lastMode))}
  const rebuild=()=>{if(!lastP) return;requestAnimationFrame(()=>compute(lastP,lastMode))}
  window.Size={build,rebuild}
  window.addEventListener('resize',rebuild)
  const flip=['#movesBtn','#backToInfo']
  flip.forEach(id=>{const el=$(id);if(el) el.addEventListener('click',()=>setTimeout(rebuild,260))})
})()
