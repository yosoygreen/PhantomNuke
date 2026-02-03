const $=sel=>document.querySelector(sel)
const $$=sel=>Array.from(document.querySelectorAll(sel))
const pad3=n=>String(n).padStart(3,'0')
const norm=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
const cap1=s=>s? s.charAt(0).toUpperCase()+s.slice(1):s
const CANON_TYPES={electrico:'Eléctrico',psiquico:'Psíquico',dragon:'Dragón'}
const canonType=t=>{const k=norm(t);return CANON_TYPES[k]||cap1(k)}
const typeClass=t=>'type-'+norm(t)

const qEl=$('#q'), typeSel=$('#typeSel'), catSel=$('#catSel'), appEl=$('#app')

const catLists={'legendario Mayor':["Alifeat","Aligolver","Mewtwo"],'legendario Menor':["Innybit","Centurala","Regirest","Regigneo","Regitube"],'mitico':["Trevus","Pincomarina","Meloetta"],'pseudo legendario':["Bullayer"],'starter':["Budew","Roselia","Roserade","Spheal","Litwick","Lampent","Chandelure","Sealeo","Walrein"],'fosil':["Okarópodo","Clarinopodo"]}
const categoryOf=name=>{for(const k of Object.keys(catLists)) if(catLists[k].some(n=>n===name)) return k; return 'estandar'}

const coerceStat=v=>Math.max(0,Math.min(255,parseInt(v||0,10)||0))
const shapeStats=s=>{const x=s||{};return{hp:coerceStat(x.hp||x.HP),attack:coerceStat(x.attack||x.atk||x.ATK),defense:coerceStat(x.defense||x.def||x.DEF),SpAttack:coerceStat(x.SpAttack||x.spattack||x.spAtk||x['special-attack']||x.SPA),SpDef:coerceStat(x.SpDef||x.spdef||x.spDef||x['special-defense']||x.SPD),speed:coerceStat(x.speed||x.SPE||x.Sp||x.velocidad||x.VEL)}}

const POKE=(window.PokemonData||[]).map((p,i)=>{const stats=shapeStats(p.stats);const total=Object.values(stats).reduce((a,b)=>a+b,0);return{...p,name:p.name,num:i+1,numTxt:pad3(i+1),numLabel:'# '+pad3(i+1),category:categoryOf(p.name),types:(p.types||[]).map(canonType),height:parseFloat(p.height)||0,weight:parseFloat(p.weight)||0,habitat:p.habitat||'Desconocido',abilities:Array.isArray(p.abilities)?p.abilities:[p.abilities].filter(Boolean),stats:{...stats,Total:p.stats?.Total||total},image:p.image||('img/'+pad3(i+1)+'.png')}})

const typeSet=new Set(POKE.flatMap(p=>p.types))
const typesAll=Array.from(typeSet).sort((a,b)=>a.localeCompare(b,'es',{sensitivity:'base'}))
typesAll.forEach(t=>{const o=document.createElement('option');o.value=t;o.textContent=t;typeSel.appendChild(o)})

let team=[]
let isMobile=false
const setResponsive=()=>{isMobile=window.matchMedia('(max-width: 560px)').matches||('ontouchstart'in window);document.body.classList.toggle('mobile',isMobile)}
setResponsive()
window.addEventListener('resize',setResponsive)

const isCaphumo=p=>norm(p.name)==='caphumo'
const cardTypes=p=>isCaphumo(p)?['Hada','Fuego']:p.types
const detailTypes=(p,m)=>isCaphumo(p)?[m==='lux'?'Fuego':'Hada']:p.types
const badgeRowHtml=types=>types.map(t=>`<span class="type-badge ${typeClass(t)}">${t}</span>`).join('')

const renderCards=()=>{
  const q=norm(qEl?.value?.trim())
  const t=typeSel?.value
  const c=catSel?.value
  const items=POKE.filter(p=>{
    if(t && !cardTypes(p).includes(t)) return false
    if(c && p.category!==c) return false
    if(!q) return true
    if(q.startsWith('#')) return pad3(p.num).includes(q.replace('#',''))
    return norm(p.name).includes(q)
  })
  appEl.innerHTML=''
  items.forEach(p=>{
    const card=document.createElement('article')
    card.className='card'
    card.dataset.num=p.num
    card.innerHTML=`
      <button class="addTeam" title="Agregar al equipo">+</button>
      <div class="thumb"><img src="${p.image}" alt=""></div>
      <div class="title"><span class="num">${p.numLabel}</span><h3>${p.name}</h3></div>
      <div class="type-row">${badgeRowHtml(cardTypes(p))}</div>
      <div class="info-row">
        <span class="info">Altura ${p.height} m</span>
        <span class="info">Peso ${p.weight} kg</span>
        <span class="info habitat">Hábitat ${p.habitat}</span>
      </div>
    `
    card.addEventListener('click',()=>{openDetail(p); sfx.plink()})
    card.querySelector('.addTeam').addEventListener('click',e=>{
      e.stopPropagation()
      const ok=addToTeam(p)
      if(ok) sfx.catch(); else sfx.block()
    })
    appEl.appendChild(card)
  })
}

qEl?.addEventListener('keydown',e=>{if(e.key==='Enter') sfx.plink()})
qEl?.addEventListener('input',renderCards)
typeSel?.addEventListener('change',()=>{renderCards(); sfx.plink()})
catSel?.addEventListener('change',()=>{renderCards(); sfx.plink()})

const detail=$('#detail'), card3d=$('.card3d')
const dNum=$('#dNum'), dName=$('#dName'), dTypes=$('#dTypes'), dImg=$('#dImg')
const dHeight=$('#dHeight'), dWeight=$('#dWeight'), dHabitat=$('#dHabitat'), dDesc=$('#dDesc'), dAbilities=$('#dAbilities')
const bars=$('#bars'), radar=$('#radar')
const mvTitle=$('#mvTitle'), moveListEl=$('#moveList')
const trainerSil=$('#trainerSil'), pokeSil=$('#pokeSil'), sizeInfo=$('#sizeInfo')
const shinyBtn=$('#shinyBtn'), luxBtn=$('#luxBtn')

let current=null
let mode='base'

const audioCtx=()=>window._ac||(window._ac=new (window.AudioContext||window.webkitAudioContext)())
const tone=(t=440,d=.15,v=.25,type='square')=>{const ctx=audioCtx();const o=ctx.createOscillator();const g=ctx.createGain();o.type=type;o.frequency.value=t;o.connect(g);g.connect(ctx.destination);g.gain.setValueAtTime(0.0001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(v,ctx.currentTime+0.01);g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+d);o.start();o.stop(ctx.currentTime+d+0.01)}
const sfx={plink:()=>tone(1200,.10,.3,'triangle'),block:()=>tone(160,.18,.35,'sine'),catch:()=>{const ctx=audioCtx();const now=ctx.currentTime;[[660,.08],[880,.08],[1320,.12]].forEach(([f,d],i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type='square';o.frequency.value=f;o.connect(g);g.connect(ctx.destination);g.gain.setValueAtTime(0.0001,now+i*0.09);g.gain.exponentialRampToValueAtTime(0.35,now+i*0.09+0.01);g.gain.exponentialRampToValueAtTime(0.0001,now+i*0.09+d);o.start(now+i*0.09);o.stop(now+i*0.09+d+0.01)})}}

const statOrder=[['hp','HP'],['attack','Atk'],['defense','Def'],['speed','Spe'],['SpAttack','SpA'],['SpDef','SpD']]
const axisColors=['#228833','#EE6677','#4477AA','#CCBB44','#AA3377','#66CCEE']
const statColor=v=>v<=50?'red':v<=101?'orange':v<=152?'yellow':v<=203?'lgreen':'green'
const statMax=255

const drawBars=p=>{
  bars.innerHTML=''
  let total=0
  statOrder.forEach(([k,label])=>{
    const v=p.stats[k]||0; total+=v
    const div=document.createElement('div')
    div.className='bar '+statColor(v)
    const pct=Math.max(0,Math.min(1,v/statMax))*100
    div.innerHTML=`<label>${label}</label><div class="track"><div class="fill" style="width:${pct}%"></div></div><small>${v}</small>`
    bars.appendChild(div)
  })
  const end=document.createElement('div')
  end.style.textAlign='right'
  end.style.fontWeight='800'
  end.style.marginTop='6px'
  end.textContent='Total: '+(p.stats.Total||total)
  bars.appendChild(end)
}

const drawRadar=p=>{
  if(!radar) return
  const ratio=window.devicePixelRatio||1
  const w=radar.clientWidth||400, h=radar.clientHeight||400
  radar.width=w*ratio; radar.height=h*ratio
  const ctx=radar.getContext('2d')
  ctx.setTransform(ratio,0,0,ratio,0,0)
  ctx.clearRect(0,0,w,h)
  const cx=w/2, cy=h/2, r=Math.min(cx,cy)-12
  const N=6
  for(let ring=1;ring<=5;ring++){
    ctx.beginPath()
    for(let i=0;i<N;i++){
      const a=(Math.PI*2*i/N)-Math.PI/2
      const pr=r*ring/5
      const x=cx+pr*Math.cos(a), y=cy+pr*Math.sin(a)
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y)
    }
    ctx.closePath()
    ctx.strokeStyle='rgba(255,255,255,.35)'
    ctx.stroke()
  }
  for(let i=0;i<N;i++){
    const a=(Math.PI*2*i/N)-Math.PI/2
    ctx.beginPath()
    ctx.moveTo(cx,cy)
    ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a))
    ctx.strokeStyle='rgba(255,255,255,.35)'
    ctx.stroke()
  }
  const vals=statOrder.map(([k])=>Math.max(0,Math.min(1,(p.stats[k]||0)/statMax)))
  const verts=vals.map((v,i)=>{const a=(Math.PI*2*i/N)-Math.PI/2;return[cx+r*v*Math.cos(a),cy+r*v*Math.sin(a)]})
  ctx.beginPath()
  verts.forEach(([x,y],i)=>{if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)})
  ctx.closePath()
  ctx.save()
  ctx.clip()
  ctx.globalCompositeOperation='lighter'
  for(let i=0;i<N;i++){
    const a=(Math.PI*2*i/N)-Math.PI/2
    const gx=cx+r*Math.cos(a), gy=cy+r*Math.sin(a)
    const g=ctx.createLinearGradient(cx,cy,gx,gy)
    g.addColorStop(0,'rgba(0,0,0,0)')
    g.addColorStop(Math.max(0,Math.min(1,vals[i])), axisColors[i]+'ee')
    g.addColorStop(1,'rgba(0,0,0,0)')
    ctx.fillStyle=g
    ctx.fillRect(0,0,w,h)
  }
  ctx.restore()
  ctx.beginPath()
  verts.forEach(([x,y],i)=>{if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)})
  ctx.closePath()
  ctx.lineWidth=2
  ctx.strokeStyle='#ffffff'
  ctx.stroke()
}

const LUX_SET=new Set(['rotom','goreilla','gleebin','gimmighoul','llameru','oinkologne','garchomp','unlukat','octorture','atawana','toxtricity','condorimno','topystar','snover','abomasnow','bullayer','relicanth','esperift','caphumo'])

const imgForMode = base => {
  if (!base) return base

  if (mode === 'shiny') {
    // img/025.png → img-s/025-s.png
    return base
      .replace(/^img\//, 'img-s/')
      .replace(/\.png$/, '-s.png')
  }

  if (mode === 'lux') {
    // se mantiene como está (img/xxx-var.png)
    return base.replace(/\.png$/, '-var.png')
  }

  return base
}


const safeSet=(img,src,fallback)=>{img.onerror=null;img.src=src;img.onerror=()=>{img.onerror=null;img.src=fallback}}

const applyMode=()=>{
  const base=dImg.dataset.base||''
  safeSet(dImg,imgForMode(base),base)
  if(shinyBtn){const on=mode==='shiny'; shinyBtn.classList.toggle('active',on); shinyBtn.setAttribute('aria-pressed',on?'true':'false')}
  if(luxBtn){const on=mode==='lux'; luxBtn.classList.toggle('active',on); luxBtn.setAttribute('aria-pressed',on?'true':'false')}
  if(current){dTypes.innerHTML=badgeRowHtml(detailTypes(current,mode)); if(window.Size) Size.build(current,mode)}
  sfx.plink()
}

const openDetail=p=>{
  current=p
  mode='base'
  dNum.textContent=p.numLabel
  dName.textContent=p.name
  dTypes.innerHTML=badgeRowHtml(detailTypes(p,mode))
  dImg.dataset.base=p.image
  safeSet(dImg,p.image,'img/000.png')
  if(shinyBtn){shinyBtn.classList.remove('active'); shinyBtn.setAttribute('aria-pressed','false')}
  if(luxBtn){luxBtn.classList.remove('active'); luxBtn.setAttribute('aria-pressed','false'); luxBtn.style.display=LUX_SET.has(norm(p.name))?'grid':'none'}
  dHeight.textContent='Altura '+p.height+' m'
  dWeight.textContent='Peso '+p.weight+' kg'
  dHabitat.textContent='Hábitat '+p.habitat
  dDesc.textContent=p.description||''
  const abs=p.abilities||[]
  dAbilities.innerHTML=abs.map((a,i)=>`<span class="ability ${(abs.length>1 && i===abs.length-1)?'hidden':''}">${a}${(abs.length>1 && i===abs.length-1)?' (Oculta)':''}</span>`).join('')
  if(mvTitle) mvTitle.textContent='# '+pad3(p.num)+' – '+p.name
  buildMoveList(p)
  if(window.Size) Size.build(p,mode)
  detail.classList.remove('hidden')
  card3d.classList.remove('flipped')
  requestAnimationFrame(()=>{drawRadar(p); drawBars(p)})
}

$('#closeDetail')?.addEventListener('click',()=>{detail.classList.add('hidden'); sfx.plink()})
$('#closeBack')?.addEventListener('click',()=>{detail.classList.add('hidden'); sfx.plink()})
$('#backToInfo')?.addEventListener('click',()=>{card3d.classList.remove('flipped'); sfx.plink()})
$('#movesBtn')?.addEventListener('click',()=>{card3d.classList.add('flipped'); sfx.plink()})

shinyBtn?.addEventListener('click',()=>{
  mode=mode==='shiny'?'base':'shiny'
  if(mode==='shiny'&&luxBtn){luxBtn.classList.remove('active'); luxBtn.setAttribute('aria-pressed','false')}
  applyMode()
})
luxBtn?.addEventListener('click',()=>{
  if(luxBtn.style.display==='none') return
  mode=mode==='lux'?'base':'lux'
  if(mode==='lux'&&shinyBtn){shinyBtn.classList.remove('active'); shinyBtn.setAttribute('aria-pressed','false')}
  applyMode()
})

const nameVariants=name=>{const n=name||'';return[n,cap1(n.toLowerCase()),n.toLowerCase(),n.toUpperCase()]}
const parseMoves=name=>{
  const src=(window.POKE_MOVESET||{})
  let list=[]
  for(const k of nameVariants(name)){ if(src[k]){ list=src[k]; break } }
  return (list||[]).map(s=>{
    if(typeof s==='object' && s.id) return {id:s.id,lvl:parseInt(s.lvl||1,10)}
    const m=/^(m\d+)\((\d+)\)$/.exec(String(s))
    if(m) return {id:m[1],lvl:parseInt(m[2],10)}
    return {id:String(s),lvl:1}
  })
}
const buildMoveList=p=>{
  const rows=parseMoves(p.name).map(({id,lvl})=>{
    const mv=(window.movimientos||{})[id]||{}
    const pow=mv.potencia??0, acc=mv.precision??0, pp=mv.pp??0
    const tip=mv.tipo?canonType(mv.tipo):''
    return {lvl,tipo:tip,cat:mv.categoria||'',nombre:(mv.nombre||'').replace(/\s*\([^)]+\)\s*$/,''),pow,acc,pp}
  }).sort((a,b)=>a.lvl-b.lvl)
  moveListEl.innerHTML=''
  const header=document.createElement('div')
  header.className='mv'
  header.innerHTML=`<div class="lvl">LV</div><div>Movimiento</div><div>Tipo</div><div>Categoría</div><div>Daño</div><div>Precisión</div><div>PP</div>`
  moveListEl.appendChild(header)
  rows.forEach(r=>{
    const row=document.createElement('div')
    row.className='mv'
    row.innerHTML=`
      <div class="lvl">${r.lvl}</div>
      <div>${r.nombre||'-'}</div>
      <div>${r.tipo?`<span class="type-badge ${typeClass(r.tipo)} small">${r.tipo}</span>`:''}</div>
      <div>${r.cat||'-'}</div>
      <div>${r.pow||0}</div>
      <div>${r.acc? r.acc+'%':'0'}</div>
      <div>${r.pp||0}</div>
    `
    moveListEl.appendChild(row)
  })
}

const teamBtn=$('#teamBtn'), teamModal=$('#teamBuilder')
$('#closeTeam')?.addEventListener('click',()=>{teamModal.classList.add('hidden'); sfx.plink()})
teamBtn?.addEventListener('click',()=>{renderTeam(); teamModal.classList.remove('hidden'); sfx.plink()})

const teamSlots=$('#teamSlots'), teamStats=$('#teamStats'), teamCoverage=$('#teamCoverage')
const addToTeam=p=>{if(team.length>=6) return false; if(team.find(x=>x.num===p.num)) return false; team.push(p); renderTeam(); return true}
const removeFromTeam=i=>{team.splice(i,1); renderTeam()}

const renderTeam=()=>{
  teamSlots.innerHTML=''
  for(let i=0;i<6;i++){
    const slot=document.createElement('div'); slot.className='slot'
    if(team[i]){
      slot.innerHTML=`<img src="${team[i].image}" alt=""><div class="x">✕</div>`
      slot.addEventListener('click',()=>{
        const armed=slot.classList.contains('armed')
        $$('.slot.armed').forEach(el=>el.classList.remove('armed'))
        if(armed){ removeFromTeam(i); sfx.plink(); return }
        slot.classList.add('armed')
      })
    }else{
      slot.innerHTML='<img src="img/000.png" alt="">'
      slot.style.opacity=.35
    }
    teamSlots.appendChild(slot)
  }
  const totals={hp:0,attack:0,defense:0,SpAttack:0,SpDef:0,speed:0}
  team.forEach(p=>{for(const k in totals) totals[k]+=p.stats[k]||0})
  const totalSum=Object.values(totals).reduce((a,b)=>a+b,0)
  teamStats.innerHTML=`
    ${[['hp','HP'],['attack','Atk'],['defense','Def'],['speed','Spe'],['SpAttack','SpA'],['SpDef','SpD']].map(([k,lab])=>`<div class="bar ${statColor((totals[k]/(team.length||1)))}"><label>${lab}</label><div class="track"><div class="fill" style="width:${Math.min(100,totals[k]/(255*6)*100)}%"></div></div><small>${totals[k]}</small></div>`).join('')}
    <div style="text-align:right;font-weight:900">Total: ${totalSum}</div>
  `
  const offensive=new Set(team.flatMap(p=>p.types))
  const canHit=typeRows.filter(def=>Array.from(offensive).some(at=>mult(at,def)>1))
  const resWeakImm={resist:{},weak:{},immune:{}}
  typeRows.forEach(t=>{resWeakImm.resist[t]=0;resWeakImm.weak[t]=0;resWeakImm.immune[t]=0})
  team.forEach(p=>{
    p.types.forEach(tt=>{
      const t=canonType(tt)
      if(!defMods[t]) return
      defMods[t].resist.forEach(x=>resWeakImm.resist[x]++)
      defMods[t].weak.forEach(x=>resWeakImm.weak[x]++)
      defMods[t].immune.forEach(x=>resWeakImm.immune[x]++)
    })
  })
  teamCoverage.innerHTML=`
    <p><strong>STAB que golpea eficaz:</strong> ${canHit.length?canHit.join(', '):'–'}</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
      <div><strong>Resistencias</strong><p>${Object.entries(resWeakImm.resist).filter(([_,n])=>n>0).map(([k,n])=>`${k} (${n})`).join(', ')||'–'}</p></div>
      <div><strong>Debilidades</strong><p>${Object.entries(resWeakImm.weak).filter(([_,n])=>n>0).map(([k,n])=>`${k} (${n})`).join(', ')||'–'}</p></div>
      <div><strong>Inmunidades</strong><p>${Object.entries(resWeakImm.immune).filter(([_,n])=>n>0).map(([k,n])=>`${k} (${n})`).join(', ')||'–'}</p></div>
    </div>
  `
}

appEl.addEventListener('dblclick',e=>{
  const card=e.target.closest('.card'); if(!card) return
  const p=POKE.find(x=>x.num===parseInt(card.dataset.num,10))
  const ok=addToTeam(p)
  if(ok) sfx.catch(); else sfx.block()
})

renderCards()
if(window.Size) Size.init()
  const chartBtn=$('#typeChartBtn'), chart=$('#typeChart'), chartGrid=$('#chartGrid')
chartBtn?.addEventListener('click',()=>{renderTypeGrid(); chart.classList.remove('hidden'); sfx.plink()})
$('#closeChart')?.addEventListener('click',()=>{chart.classList.add('hidden'); sfx.plink()})

  const typeRows = [
    'Normal','Fuego','Agua','Eléctrico','Planta','Hielo','Lucha','Veneno',
    'Tierra','Volador','Psíquico','Bicho','Roca','Fantasma','Dragón',
    'Siniestro','Acero','Hada','Sonido'
  ]
  const typeIcon = t =>
    `<img src="types/${norm(t)}.png"
          alt="${t}"
          title="${t}"
          style="width:28px;height:28px;vertical-align:middle;">`
          const atkMap = {}
          typeRows.forEach(t => atkMap[t] = { super:[], weak:[], immune:[] })
          
          atkMap['Normal'].weak=['Roca','Acero']; atkMap['Normal'].immune=['Fantasma']
          atkMap['Fuego'].super=['Planta','Hielo','Bicho','Acero']; atkMap['Fuego'].weak=['Fuego','Agua','Roca','Dragón']
          atkMap['Agua'].super=['Fuego','Tierra','Roca','Sonido']; atkMap['Agua'].weak=['Agua','Planta','Dragón']
          atkMap['Eléctrico'].super=['Agua','Volador','Sonido']; atkMap['Eléctrico'].weak=['Eléctrico','Planta','Dragón']; atkMap['Eléctrico'].immune=['Tierra']
          atkMap['Planta'].super=['Agua','Tierra','Roca']; atkMap['Planta'].weak=['Fuego','Planta','Veneno','Volador','Bicho','Dragón','Acero']
          atkMap['Hielo'].super=['Planta','Tierra','Volador','Dragón']; atkMap['Hielo'].weak=['Fuego','Agua','Hielo','Acero','Sonido']
          atkMap['Lucha'].super=['Normal','Hielo','Roca','Siniestro','Acero']; atkMap['Lucha'].weak=['Veneno','Volador','Psíquico','Bicho','Hada']; atkMap['Lucha'].immune=['Fantasma']
          atkMap['Veneno'].super=['Planta','Hada']; atkMap['Veneno'].weak=['Veneno','Tierra','Roca','Fantasma']; atkMap['Veneno'].immune=['Acero']
          atkMap['Tierra'].super=['Fuego','Eléctrico','Veneno','Roca','Acero']; atkMap['Tierra'].weak=['Planta','Bicho']; atkMap['Tierra'].immune=['Volador']
          atkMap['Volador'].super=['Planta','Lucha','Bicho']; atkMap['Volador'].weak=['Eléctrico','Roca','Acero']
          atkMap['Psíquico'].super=['Lucha','Veneno']; atkMap['Psíquico'].weak=['Psíquico','Acero','Sonido']; atkMap['Psíquico'].immune=['Siniestro']
          atkMap['Bicho'].super=['Planta','Psíquico','Siniestro']; atkMap['Bicho'].weak=['Fuego','Lucha','Veneno','Volador','Fantasma','Acero','Hada']
          atkMap['Roca'].super=['Fuego','Hielo','Volador','Bicho']; atkMap['Roca'].weak=['Lucha','Tierra','Acero']
          atkMap['Fantasma'].super=['Psíquico','Fantasma']; atkMap['Fantasma'].weak=['Siniestro']; atkMap['Fantasma'].immune=['Normal']
          atkMap['Dragón'].super=['Dragón']; atkMap['Dragón'].weak=['Acero']; atkMap['Dragón'].immune=['Hada']
          atkMap['Siniestro'].super=['Psíquico','Fantasma']; atkMap['Siniestro'].weak=['Lucha','Hada']
          atkMap['Acero'].super=['Hielo','Roca','Hada']; atkMap['Acero'].weak=['Fuego','Agua','Eléctrico','Acero']
          atkMap['Hada'].super=['Lucha','Dragón','Siniestro']; atkMap['Hada'].weak=['Fuego','Veneno','Acero']
          atkMap['Sonido'].super=['Agua','Bicho','Psíquico','Hielo','Volador']; atkMap['Sonido'].weak=['Acero','Dragón','Eléctrico','Roca','Tierra']; atkMap['Sonido'].immune=['Fantasma','Sonido']
          const mult = (atk, def) => {
            if (atkMap[atk].immune.includes(def)) return 0
            let m = 1
            if (atkMap[atk].super.includes(def)) m *= 2
            if (atkMap[atk].weak.includes(def)) m *= 0.5
            return m
          }
          const renderTypeGrid = () => {
    const tbl = document.createElement('table')
    tbl.className = 'type-table'
  
    // HEADER
    const thead = document.createElement('thead')
    const hRow = document.createElement('tr')
    hRow.innerHTML =
'<th style="font-size:12px;text-align:center">' +
  '<div title="Tipo atacante">⚔️</div>' +
  '<div title="Tipo defensor" style="opacity:.6">🛡️</div>' +
'</th>' +
      typeRows.map(t => `<th>${typeIcon(t)}</th>`).join('')
    thead.appendChild(hRow)
    tbl.appendChild(thead)
  
    // BODY
    const tbody = document.createElement('tbody')
  
    typeRows.forEach((atk, rIndex) => {
      const row = document.createElement('tr')
      row.dataset.row = rIndex    
      let html = `<th>${typeIcon(atk)}</th>`
  
      html += typeRows.map((def, cIndex) => {
        const m = mult(atk, def)
      

        let bg = '#ffffff'
let txt = '#102a43'

if (m === 0) {
  bg = '#1a1a1a'
  txt = '#f5f5f5'
}
else if (m > 1) {
  bg = 'linear-gradient(135deg, #4caf50, #2e7d32)'
  txt = '#ffffff'
}
else if (m < 1) {
  bg = 'linear-gradient(135deg, #ff9800, #ef6c00)'
  txt = '#ffffff'
}
  
return `
<td style="
  background:${bg};
  color:${txt};
  font-weight:800;
  text-align:center;
  line-height:1.1;
">
  <div style="font-size:11px;opacity:.75">DMG</div>
  <div style="font-size:16px">${m}×</div>
</td>`
      }).join('')
  
      row.innerHTML = html
      tbody.appendChild(row)
    })
  
    tbl.appendChild(tbody)
    chartGrid.innerHTML = ''
    chartGrid.appendChild(tbl)
  }
  function getEvolutionsFrom(pokemonName) {
  const rules = window.EvolutionRules || {};
  const out = [];

  for (const key in rules) {
    if (!key.includes(">")) continue;

    const cleanKey = key.split("#")[0]; // por si hay variantes
    const [from, to] = cleanKey.split(">");

    if (from === pokemonName) {
      out.push({ from, to, rule: rules[key] });
    }
  }
  return out;
}

function getPreEvolutionsTo(pokemonName) {
  const rules = window.EvolutionRules || {};
  const ins = [];

  for (const key in rules) {
    if (!key.includes(">")) continue;

    const cleanKey = key.split("#")[0];
    const [from, to] = cleanKey.split(">");

    if (to === pokemonName) {
      ins.push({ from, to, rule: rules[key] });
    }
  }
  return ins;
}

function ruleToText(rule) {
  if (!rule) return "";
  if (rule.no_evo) return "No evoluciona";

  switch (rule.method) {
    case "level":
      return `Nivel ${rule.level}` +
        (rule.time ? ` · ${rule.time}` : "") +
        (rule.weather ? ` · clima ${rule.weather}` : "") +
        (rule.location ? ` · ${rule.location}` : "");

    case "item":
      return `Usar ${rule.item}`;

    case "trade":
      return "Intercambio";

    case "trade_item":
      return `Intercambio con ${rule.item}` +
        (rule.alternative ? ` o ${rule.alternative}` : "");

    case "level_hold":
      return `Subir de nivel sosteniendo ${rule.item}` +
        (rule.level ? ` (nivel ${rule.level})` : "") +
        (rule.time ? ` · ${rule.time}` : "");

    case "friendship":
      if (typeof rule.value === "number") return `Amistad ${rule.value}`;
      return `Alta amistad` +
        (rule.time ? ` · ${rule.time}` : "") +
        (rule.item ? ` · ${rule.item}` : "");

    case "move":
      return `Subir de nivel con ${rule.move}`;

    case "friendship_move":
      return `Alta amistad + mov. tipo ${rule.moveType}`;

    case "location":
      return `Subir de nivel en ${rule.location}`;

    case "item_gender":
      return `Usar ${rule.item} (${rule.gender})`;

    case "special":
      return rule.details || "Condición especial";

    default:
      return "Condición especial";
  }
}
