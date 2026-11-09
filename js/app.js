(()=>{
"use strict";
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money=n=>"$"+Number(n||0).toLocaleString("en-US");
const KEY="nexo_data_v2";
const CLS=["Felony","Misdemeanor","Infraction","Misdemeanor/Infraction","N/A"];
const ck=c=>/felony/i.test(c)?"bad":/misd/i.test(c)?"warn":/infr/i.test(c)?"ok":"mu";
const kf=d=>d.category+"|"+d.code;
const tm=t=>t===0?"0 (DENDA)":typeof t==="number"?t+" mnt":esc(t);
const short=c=>c.split(" – ")[0];
let list=load();
let unlocked=sessionStorage.getItem("nexo_ok")==="1",cat="all",cls="all",srt="orig",q="",fails=0,until=0,editing=null,armed=null;
const CK="nexo_cfg_v1";
const imgur=u=>{u=(u||"").trim();const m=u.match(/^https?:\/\/(?:www\.)?imgur\.com\/([A-Za-z0-9]{5,8})$/);return m?"https://i.imgur.com/"+m[1]+".png":u};
const bad=u=>/imgur\.com\/(a|gallery)\//i.test(u||"");
let brand=(()=>{let s={};try{s=JSON.parse(localStorage.getItem(CK))||{}}catch(e){}return{...CONFIG,...s}})();
function applyBrand(){
  const lg=imgur(brand.logo)||"assets/logo.svg",bn=imgur(brand.banner),h=$(".hero");
  document.querySelectorAll(".lg").forEach(i=>{i.referrerPolicy="no-referrer";i.onerror=()=>{i.onerror=null;i.src="assets/logo.svg"};i.src=lg});
  $("link[rel=icon]").href=lg;
  h.style.setProperty("--bn",bn?'url("'+bn.replace(/"/g,"%22")+'")':"none");h.classList.toggle("hasbn",!!bn);
  document.querySelectorAll("[data-site]").forEach(e=>e.textContent=brand.siteName||"Nexotis Roleplay");
  document.title=(brand.siteName||"Nexotis Roleplay")+" Penal Code";
}
const sel=new Map();
const tb=$("#tb");

function load(){
  try{const s=JSON.parse(localStorage.getItem(KEY));if(Array.isArray(s)&&s.length&&s[0].code&&s[0].category)return s}catch(e){}
  return (typeof charges!=="undefined"?charges:[]).map(d=>({...d}));
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(list))}catch(e){toast("err","Gagal menyimpan","Penyimpanan browser tidak tersedia.")}}
const cats=()=>[...new Set(list.map(d=>d.category))];

function mini(type,title,msg,ms){
  ms=ms||3200;
  const el=document.createElement("div");el.className="tn "+type;el.style.setProperty("--d",ms+"ms");
  el.innerHTML=`<b>${esc(title)}</b><span>${esc(msg)}</span><button class="x tx" aria-label="Tutup">&times;</button><i class="pg"></i>`;
  const box=$("#toasts");box.appendChild(el);
  while(box.children.length>4)box.firstChild.remove();
  const kill=()=>{el.classList.add("out");setTimeout(()=>el.remove(),250)};
  el.querySelector(".tx").onclick=kill;setTimeout(kill,ms);
}

/* Notifikasi popup (gaya SweetAlert) */
const ICO={ok:"&#10003;",err:"&times;",info:"!"};
function toast(type,title,msg){
  const old=$(".al");if(old)old.remove();
  const el=document.createElement("div");el.className="al";
  el.innerHTML=`<div class="ab ${type}" role="alertdialog" aria-modal="true"><div class="ai ${type}"><span>${ICO[type]||"!"}</span></div><h3>${esc(title)}</h3><p>${esc(msg)}</p><button class="btn pri aok" type="button">OK</button></div>`;
  document.body.appendChild(el);
  requestAnimationFrame(()=>el.classList.add("show"));
  const kill=()=>{document.removeEventListener("keydown",key,true);el.classList.remove("show");setTimeout(()=>el.remove(),220)};
  const key=e=>{if(e.key==="Escape"||e.key==="Enter"){e.preventDefault();e.stopPropagation();kill()}};
  document.addEventListener("keydown",key,true);
  el.querySelector(".aok").onclick=kill;
  el.addEventListener("click",e=>{if(e.target===el)kill()});
  el.querySelector(".aok").focus();
}
const open=id=>$(id).classList.add("show");

/* ---------- Publik ---------- */
function chips(){
  fcats();
  $("#chips").innerHTML=[["all","Semua"],...cats().map(c=>[c,short(c)])]
    .map(([v,l])=>`<button class="chip${v===cat?" on":""}" data-v="${esc(v)}" title="${esc(v)}">${esc(l)}</button>`).join("");
}
function fcats(){$("#fcats").innerHTML=cats().map(c=>`<a href="#" data-cat="${esc(c)}">${esc(c)}</a>`).join("")}
document.addEventListener("click",e=>{const a=e.target.closest("[data-cat]");if(!a)return;e.preventDefault();cat=a.dataset.cat;chips();render();tab("public")});
function view(){
  const k=q.toLowerCase(),num=t=>typeof t==="number"?t:1e9;
  let r=list.filter(d=>(cat==="all"||d.category===cat)&&(cls==="all"||ck(d.class)===cls)&&(!k||(d.code+" "+d.name+" "+(d.desc||"")).toLowerCase().includes(k)));
  if(srt==="time")r=[...r].sort((a,b)=>num(b.time)-num(a.time));
  else if(srt==="fine")r=[...r].sort((a,b)=>b.fine-a.fine);
  else if(srt==="name")r=[...r].sort((a,b)=>a.name.localeCompare(b.name));
  return r;
}
function row(d,i){
  const on=sel.has(kf(d));
  return `<tr data-k="${esc(kf(d))}" class="${on?"sel":""}" style="--i:${Math.min(i,12)}">
  <td class="code">${esc(d.code)}</td><td class="nm">${esc(d.name)}</td><td class="cat">${esc(short(d.category))}</td>
  <td><span class="badge ${ck(d.class)}">${esc(d.class)}</span></td><td>${tm(d.time)}</td><td>${money(d.fine)}</td>
  <td class="act"><button class="btn" data-a="info">Detail</button><button class="btn ${on?"arm":"pri"}" data-a="add">${on?"Hapus":"Tambah"}</button></td></tr>`;
}
function render(){
  if(cat!=="all"&&!cats().includes(cat))cat="all";
  const r=view();
  tb.innerHTML=r.length?r.map(row).join(""):`<tr><td colspan="7" class="empty">${list.length?"Tidak ada pasal ditemukan.":"Belum ada pasal. Buka tab Admin untuk menambahkan."}</td></tr>`;
  $("#sub").textContent=(cat==="all"?"Semua kategori":cat)+" - "+r.length+" pasal";
}
function paint(tr){
  const on=sel.has(tr.dataset.k),b=tr.querySelector('[data-a="add"]');
  tr.classList.toggle("sel",on);b.textContent=on?"Hapus":"Tambah";b.className="btn "+(on?"arm":"pri");
}
function totals(){
  const L=list.filter(d=>sel.has(kf(d))).map(d=>({d,n:sel.get(kf(d))}));
  let m=0,f=0,life=false;
  L.forEach(({d,n})=>{if(typeof d.time==="number")m+=d.time*n;else life=true;f+=(+d.fine||0)*n});
  return{L,m,f,life,cnt:L.reduce((a,x)=>a+x.n,0)};
}
function tween(el,to,fmt){
  const from=+el.dataset.v||0,t0=performance.now();el.dataset.v=to;
  (function f(t){const p=Math.min((t-t0)/350,1),e=1-Math.pow(1-p,3);el.textContent=fmt(Math.round(from+(to-from)*e));if(p<1)requestAnimationFrame(f)})(t0);
}
function summary(){
  const t=totals();$("#bCount").textContent=t.cnt;
  if(t.life){$("#bTime").textContent="Life";$("#bTime").dataset.v=0}else tween($("#bTime"),t.m,v=>v+" mnt");
  tween($("#bFine"),t.f,money);
  $("#bar").classList.toggle("show",t.L.length>0);document.body.classList.toggle("hasbar",t.L.length>0);
}
function info(k){
  const d=list.find(x=>kf(x)===k);
  $("#dTitle").textContent=d.name;
  $("#dBody").innerHTML=[["Kode",esc(d.code)],["Kategori",esc(d.category)],["Klasifikasi",`<span class="badge ${ck(d.class)}">${esc(d.class)}</span>`],["Hukuman",tm(d.time)],["Denda",money(d.fine)],["Keterangan",d.desc?esc(d.desc):"-"]]
    .map(r=>`<div class="kv"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("");
  open("#ovD");
}
function showTotals(){
  const t=totals();
  $("#tList").innerHTML=t.L.length?t.L.map(({d,n})=>`<div class="li"><span><b>${esc(d.code)}</b>${esc(d.name)}</span>
    <span class="qty"><button class="x" data-q="-1" data-k="${esc(kf(d))}">-</button><b class="qn">${n}</b><button class="x" data-q="1" data-k="${esc(kf(d))}">+</button></span></div>`).join(""):'<div class="empty">Belum ada pasal dipilih.</div>';
  $("#tTime").textContent=t.life?"Life":t.m+" menit";$("#tFine").textContent=money(t.f);
}
function copySummary(){
  const t=totals();if(!t.L.length)return toast("info","Belum ada pasal","Tambahkan pasal terlebih dahulu.");
  const codes=t.L.map(({d,n})=>n>1?d.code+" x"+n:d.code).join(", ");
  const txt=codes+" - "+t.f+"$";
  (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast("ok","Disalin",txt)).catch(()=>toast("err","Gagal menyalin","Browser menolak akses clipboard."));
}

tb.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  const tr=b.closest("tr"),k=tr.dataset.k;
  if(b.dataset.a==="info")return info(k);
  const add=!sel.has(k);add?sel.set(k,1):sel.delete(k);
  paint(tr);summary();
  const d=list.find(x=>kf(x)===k);
  mini(add?"ok":"info",add?"Pasal ditambahkan":"Pasal dihapus",d.code+" - "+d.name,1800);
});
$("#chips").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.v;chips();render()});
$("#q").addEventListener("input",e=>{q=e.target.value;render()});
$("#bOpen").onclick=()=>{showTotals();open("#ovT")};
$("#copy").onclick=copySummary;
$("#reset").onclick=()=>{sel.clear();render();summary();showTotals();mini("info","Total direset","Semua pasal dihapus dari daftar.",1800)};
$("#tList").addEventListener("click",e=>{
  const b=e.target.closest("[data-q]");if(!b)return;
  const k=b.dataset.k,n=(sel.get(k)||0)+ +b.dataset.q;
  n<1?sel.delete(k):sel.set(k,n);
  const tr=tb.querySelector(`tr[data-k="${CSS.escape(k)}"]`);if(tr)paint(tr);
  summary();showTotals();
});

/* ---------- Admin ---------- */
async function sha(s){
  const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));
  return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("");
}
async function login(){
  const now=Date.now(),card=$("#lf");
  if(now<until)return toast("err","Terlalu banyak percobaan","Tunggu "+Math.ceil((until-now)/1000)+" detik.");
  if(!window.crypto||!crypto.subtle)return toast("err","Tidak bisa verifikasi","Butuh koneksi HTTPS.");
  if(await sha($("#pw").value)===CONFIG.passHash){
    unlocked=true;fails=0;sessionStorage.setItem("nexo_ok","1");renderAdmin();toast("ok","Login berhasil","Mode admin aktif.");
  }else{
    if(++fails>=5){until=Date.now()+30000;fails=0}
    toast("err","Login gagal","Password salah.");card.classList.remove("shake");void card.offsetWidth;card.classList.add("shake");
  }
}
function adminRows(k){
  k=(k||"").toLowerCase();
  return list.filter(d=>!k||(d.code+" "+d.name).toLowerCase().includes(k)).map(d=>`<tr><td class="code">${esc(d.code)}</td>
  <td class="nm">${esc(d.name)}<br><small class="mut2">${esc(short(d.category))}</small></td><td><span class="badge ${ck(d.class)}">${esc(d.class)}</span></td><td>${tm(d.time)}</td><td>${money(d.fine)}</td>
  <td class="act"><button class="btn" data-act="edit" data-k="${esc(kf(d))}">Edit</button><button class="btn" data-act="del" data-k="${esc(kf(d))}">Hapus</button></td></tr>`).join("")
  ||'<tr><td colspan="6" class="empty">Tidak ada hasil.</td></tr>';
}
function renderAdmin(){
  const box=$("#adminBody");
  if(!unlocked){
    box.innerHTML=`<div class="card narrow"><h2>Login Admin</h2><p class="mut">Masukkan password untuk mengelola daftar pasal.</p>
    <form id="lf"><input id="pw" type="password" placeholder="Password" autocomplete="off"><div class="acts"><button class="btn pri">Masuk</button></div></form></div>`;
    return;
  }
  const v=(editing&&list.find(d=>kf(d)===editing))||{code:"",name:"",category:"",class:"Misdemeanor",time:"",fine:"",desc:""};
  box.innerHTML=`<div class="card"><div class="ch"><h2>${editing?"Edit Pasal":"Tambah Pasal"}</h2><button class="btn" data-act="logout">Keluar Admin</button></div>
  <form id="pf" class="grid">
    <label>Kode<input name="code" required value="${esc(v.code)}"></label>
    <label>Nama Pasal<input name="name" required value="${esc(v.name)}"></label>
    <label class="full">Kategori (pilih atau ketik kategori baru)<input name="category" list="catlist" required value="${esc(v.category)}"></label>
    <datalist id="catlist">${cats().map(c=>`<option value="${esc(c)}">`).join("")}</datalist>
    <label>Klasifikasi<select name="class">${CLS.map(c=>`<option${v.class===c?" selected":""}>${c}</option>`).join("")}</select></label>
    <label>Waktu (menit, atau tulis Life)<input name="time" required value="${esc(v.time)}"></label>
    <label>Denda ($)<input name="fine" type="number" min="0" required value="${esc(v.fine)}"></label>
    <label class="full">Keterangan / Detail<textarea name="desc" rows="3">${esc(v.desc)}</textarea></label>
    <div class="full acts">${editing?'<button type="button" class="btn" data-act="cancel">Batal</button>':""}<button class="btn pri">Simpan Pasal</button></div>
  </form></div>
  <div class="card"><div class="ch"><h2>Daftar Pasal (${list.length})</h2><div class="acts" style="margin:0"><button class="btn" data-act="export">Ekspor data.js</button><button class="btn" data-act="resetdef">Reset ke Default</button></div></div>
  <input id="as" type="search" placeholder="Cari di daftar admin..." style="margin-bottom:12px">
  <div class="tbl"><table><thead><tr><th>Kode</th><th>Nama</th><th>Klasifikasi</th><th>Waktu</th><th>Denda</th><th></th></tr></thead><tbody id="atb">${adminRows()}</tbody></table></div></div>
  <div class="card"><div class="ch"><h2>Tampilan &amp; Gambar</h2><button class="btn" data-act="expcfg">Ekspor config.js</button></div>
  <p class="mut">Tempel link gambar Imgur (contoh: https://i.imgur.com/abc123.png). Link imgur.com/abc123 otomatis diubah. Link album (imgur.com/a/...) tidak bisa dipakai.</p>
  <form id="af" class="grid">
    <label class="full">Nama Server<input name="siteName" value="${esc(brand.siteName)}"></label>
    <label>Link Logo<input name="logo" placeholder="https://i.imgur.com/xxxxx.png" value="${esc(brand.logo)}"></label>
    <label>Link Banner (latar header)<input name="banner" placeholder="https://i.imgur.com/xxxxx.png" value="${esc(brand.banner)}"></label>
    <div class="full acts"><button type="button" class="btn" data-act="resetcfg">Reset Tampilan</button><button class="btn pri">Simpan Tampilan</button></div>
  </form></div>`;
}
function confirmed(btn,key){
  if(armed&&armed.key===key){clearTimeout(armed.t);armed=null;return true}
  if(armed){clearTimeout(armed.t);armed.b.textContent=armed.txt;armed.b.classList.remove("arm")}
  const txt=btn.textContent;btn.textContent="Yakin?";btn.classList.add("arm");
  armed={key,b:btn,txt,t:setTimeout(()=>{btn.textContent=txt;btn.classList.remove("arm");armed=null},3000)};
  return false;
}
function exportJs(){
  const txt="const charges="+JSON.stringify(list,null,1)+";\n";
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt],{type:"text/javascript"}));a.download="data.js";a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1500);
  toast("info","Data diekspor","Ganti file js/data.js dengan file ini lalu deploy ulang.",4500);
}
function refresh(){chips();render();summary();renderAdmin()}
const admin=$("#adminBody");
admin.addEventListener("submit",e=>{
  e.preventDefault();
  if(e.target.id==="lf")return login();
  if(e.target.id==="af"){
    const f=Object.fromEntries(new FormData(e.target));
    if(bad(f.logo)||bad(f.banner))return toast("err","Link album tidak bisa","Buka gambar di Imgur, klik kanan, lalu salin alamat gambar (i.imgur.com/...).",4500);
    const o={siteName:f.siteName.trim()||"Nexotis Roleplay",logo:imgur(f.logo),banner:imgur(f.banner)};
    brand={...brand,...o};try{localStorage.setItem(CK,JSON.stringify(o))}catch(x){}
    applyBrand();renderAdmin();return toast("ok","Tampilan disimpan","Klik Ekspor config.js agar berlaku untuk semua pengunjung.",4500);
  }
  const f=Object.fromEntries(new FormData(e.target)),tv=f.time.trim();
  const o={code:f.code.trim(),name:f.name.trim(),category:f.category.trim(),class:f.class,time:/^\d+$/.test(tv)?+tv:tv,fine:Math.max(0,+f.fine||0),desc:f.desc.trim()};
  if(!o.code||!o.name||!o.category)return toast("err","Data tidak lengkap","Kode, nama, dan kategori wajib diisi.");
  const nk=kf(o);
  if(list.some(d=>kf(d)===nk&&nk!==editing))return toast("err","Kode sudah dipakai","Pasal "+o.code+" sudah ada di kategori ini.");
  if(editing){
    list[list.findIndex(d=>kf(d)===editing)]=o;
    if(sel.has(editing)){const n=sel.get(editing);sel.delete(editing);sel.set(nk,n)}
    toast("ok","Pasal diperbarui",o.code+" - "+o.name);
  }else{
    let i=-1;list.forEach((d,j)=>{if(d.category===o.category)i=j});
    i<0?list.push(o):list.splice(i+1,0,o);
    toast("ok","Pasal ditambahkan",o.code+" - "+o.name);
  }
  editing=null;save();refresh();
});
admin.addEventListener("input",e=>{if(e.target.id==="as")$("#atb").innerHTML=adminRows(e.target.value)});
admin.addEventListener("click",e=>{
  const b=e.target.closest("[data-act]");if(!b)return;
  const a=b.dataset.act,k=b.dataset.k;
  if(a==="edit"){editing=k;renderAdmin();window.scrollTo({top:0,behavior:"smooth"})}
  else if(a==="cancel"){editing=null;renderAdmin()}
  else if(a==="logout"){unlocked=false;editing=null;sessionStorage.removeItem("nexo_ok");renderAdmin();toast("info","Keluar admin","Sesi admin diakhiri.")}
  else if(a==="export")exportJs();
  else if(a==="expcfg"){
    const txt="const CONFIG = "+JSON.stringify({passHash:CONFIG.passHash,siteName:brand.siteName,logo:imgur(brand.logo),banner:imgur(brand.banner)},null,1)+";\n";
    const l=document.createElement("a");l.href=URL.createObjectURL(new Blob([txt],{type:"text/javascript"}));l.download="config.js";l.click();
    setTimeout(()=>URL.revokeObjectURL(l.href),1500);toast("info","Config diekspor","Ganti file js/config.js dengan file ini lalu deploy ulang.",4500);
  }
  else if(a==="resetcfg"){localStorage.removeItem(CK);brand={...CONFIG};applyBrand();renderAdmin();toast("info","Tampilan direset","Kembali ke isi config.js.")}
  else if(a==="del"){
    if(!confirmed(b,"del"+k))return;
    list=list.filter(d=>kf(d)!==k);sel.delete(k);save();refresh();toast("info","Pasal dihapus",k.split("|")[1]);
  }else if(a==="resetdef"){
    if(!confirmed(b,"reset"))return;
    localStorage.removeItem(KEY);list=load();sel.clear();editing=null;refresh();toast("info","Data direset","Kembali ke data default.");
  }
});

/* ---------- Umum ---------- */
function tab(n){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("on",v.id==="v-"+n));
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("on",t.dataset.tab===n));
  if(n==="admin")renderAdmin();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");if(t){e.preventDefault();tab(t.dataset.tab)}});
document.querySelectorAll(".ov").forEach(o=>o.addEventListener("click",e=>{
  if(e.target===o||e.target.hasAttribute("data-close"))o.classList.remove("show");
}));
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")document.querySelectorAll(".ov.show").forEach(o=>o.classList.remove("show"));
  else if(e.key==="/"&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();tab("public");$("#q").focus()}
});
$("#yr").textContent=new Date().getFullYear();
applyBrand();chips();render();summary();
})();
