// movedex.js – Movedex con filtros y meta enriquecida
(function(){

  // === Mobile detection: add .is-mobile on <html> when small screens / coarse pointer
  function setMobileClass(){
    const mobile = window.matchMedia('(max-width: 640px)').matches || window.matchMedia('(pointer: coarse)').matches;
    document.documentElement.classList.toggle('is-mobile', mobile);
  }
  setMobileClass();
  window.addEventListener('resize', setMobileClass);

  const listEl   = document.getElementById('mdxList');
  const searchEl = document.getElementById('mdxSearch');
  const typeSel  = document.getElementById('mdxType');
  const catSel   = document.getElementById('mdxCat');

  // Helpers
  const toKey   = (s)=> (s||'').toLowerCase();
  const normalizeType = (s)=> (s||'')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/\s+/g,'');
  const engName = (nombre)=>{
    const m = /\(([^)]+)\)\s*$/.exec(nombre||'');
    return m ? m[1] : '';
  };
  const catIconBy = (categoria)=>{
    // Físico -> fisico.png, Especial -> especial.png, Estado -> otro.png
    const c = (categoria||'').toLowerCase();
    if (c.startsWith('fís') || c.startsWith('fis')) return 'fisico';
    if (c.startsWith('esp')) return 'especial';
    return 'otro';
  };

  // 1) Construir entries desde movimientos.js (global "movimientos")
  const entries = Object.entries(window.movimientos || {})
    .sort((a,b)=>{
      const na = parseInt(a[0].slice(1),10)||0;
      const nb = parseInt(b[0].slice(1),10)||0;
      return na - nb;
    })
    .map(([id, mv])=>{
      const en = engName(mv.nombre);
      return [id, { ...mv, _id:id, _en: en }];
    });

  // 2) Poblar filtros (tipos y categorías únicas)
  const uniq = (arr)=> Array.from(new Set(arr)).sort((a,b)=> a.localeCompare(b,'es',{sensitivity:'base'}));
  const allTypes = uniq(entries.map(([_,mv])=> mv.tipo).filter(Boolean));
  const allCats  = uniq(entries.map(([_,mv])=> mv.categoria).filter(Boolean));

  if (typeSel && !typeSel.dataset.filled){
    allTypes.forEach(t=>{
      const opt = document.createElement('option');
      opt.value = t; opt.textContent = `Tipo: ${t}`;
      typeSel.appendChild(opt);
    });
    typeSel.dataset.filled = '1';
  }
  if (catSel && !catSel.dataset.filled){
    allCats.forEach(c=>{
      const opt = document.createElement('option');
      opt.value = c; opt.textContent = `Categoría: ${c}`;
      catSel.appendChild(opt);
    });
    catSel.dataset.filled = '1';
  }

  function render(items){
    listEl.innerHTML = '';
    items.forEach(([id, mv])=>{
      const card = document.createElement('article');
      card.className = 'mdx-card type-' + normalizeType(mv.tipo);

      // Título del movimiento
      const h = document.createElement('h3');
      h.className = 'mdx-title';
      h.textContent = mv.nombre.replace(/\s*\([^)]+\)\s*$/,'').trim(); // nombre en español, sin el (English)
      card.appendChild(h);

      // Chips: tipo y categoría (con icono)
      const chips = document.createElement('div');

      // Tipo (chip con clase ya existente de tipo)
      const chipTipo = document.createElement('span');
      chipTipo.className = 'mdx-chip type-badge type-' + normalizeType(mv.tipo);
      const typeImg = document.createElement('img');
      typeImg.className = 'type-icon';
      typeImg.src = `types/${normalizeType(mv.tipo)}.png`;
      typeImg.alt = mv.tipo;
      const typeTxt = document.createElement('span');
      typeTxt.textContent = mv.tipo;
      chipTipo.append(typeImg, typeTxt);
      chips.appendChild(chipTipo);

      // Categoría con icono
      const chipCat = document.createElement('span');
      chipCat.className = 'mdx-chip cat-badge';
      const catImg = document.createElement('img');
      catImg.className = 'cat-icon';
      catImg.src = `ima/${catIconBy(mv.categoria)}.png`;
      catImg.alt = mv.categoria;
      const catTxt = document.createElement('span');
      catTxt.textContent = mv.categoria;
      chipCat.append(catImg, catTxt);
      chips.appendChild(chipCat);

      card.appendChild(chips);

      // Meta en columna: potencia / precisión / PP (colores)
      const stats = document.createElement('div');
      stats.className = 'mdx-stats';

      const rowP = document.createElement('div');
      rowP.className = 'mdx-stat';
      rowP.innerHTML = `<span class="stat-label">Potencia:</span> <strong class="stat-power">${mv.potencia ?? 0}</strong>`;
      stats.appendChild(rowP);

      const rowA = document.createElement('div');
      rowA.className = 'mdx-stat';
      const prec = (mv.precision ?? 0);
      rowA.innerHTML = `<span class="stat-label">Precisión:</span> <strong class="stat-acc">${prec}${prec>0?'%':''}</strong>`;
      stats.appendChild(rowA);

      const rowPP = document.createElement('div');
      rowPP.className = 'mdx-stat';
      rowPP.innerHTML = `<span class="stat-label">PP:</span> <strong class="stat-pp">${mv.pp ?? 0}</strong>`;
      stats.appendChild(rowPP);

      card.appendChild(stats);

      // Descripción
      const d = document.createElement('p');
      d.className = 'mdx-desc';
      d.textContent = mv.descripcion || '';
      card.appendChild(d);

      // Nombre en inglés (itálica + brillo leve)
      if (mv._en){
        const en = document.createElement('div');
        en.className = 'mdx-en';
        en.textContent = mv._en;
        card.appendChild(en);
      }

      // ID casi transparente
      const small = document.createElement('div');
      small.className = 'mdx-id';
      small.textContent = `ID: ${id}`;
      card.appendChild(small);

      listEl.appendChild(card);
    });
  }

  function applyFilters(){
    const q   = toKey(searchEl?.value?.trim());
    const typ = typeSel?.value || '';
    const cat = catSel?.value || '';

    const filtered = entries.filter(([id, mv])=>{
      // Filtro por tipo/categoría (si se seleccionó algo)
      if (typ && mv.tipo !== typ) return false;
      if (cat && mv.categoria !== cat) return false;

      // Búsqueda (por ID o nombre —es/inglés— y también por tipo/categoría)
      if (!q) return true;
      return id.toLowerCase().includes(q)
        || (mv.nombre||'').toLowerCase().includes(q)
        || (mv._en||'').toLowerCase().includes(q)
        || (mv.tipo||'').toLowerCase().includes(q)
        || (mv.categoria||'').toLowerCase().includes(q);
    });

    render(filtered);
  }

  // Primer pintado
  render(entries);

  // Eventos
  searchEl?.addEventListener('input', applyFilters);
  typeSel ?.addEventListener('change', applyFilters);
  catSel  ?.addEventListener('change', applyFilters);
})();
