import{j as a,r as c}from"./react-cef3dd34.js";import{c as w}from"./react-dom-8554dc1a.js";import{L as o,B as N}from"./react-router-dom-b8b3c7b6.js";import{b as P,d as M,e as u}from"./react-router-f4e4f71e.js";import{a as m}from"./axios-21b846bc.js";import{u as j,Q as _,a as q}from"./@tanstack-eb3c0d30.js";import{M as b,T as y,G as v}from"./react-leaflet-d901b35e.js";import{H as x}from"./highlight.js-e37aa62c.js";import"./scheduler-765c72db.js";import"./@remix-run-8989dd9f.js";import"./use-sync-external-store-afc56f9d.js";import"./leaflet-b02a3cd0.js";import"./@react-leaflet-355099b2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function B(){const e=P().pathname;return a.jsx("header",{className:"w-full flex justify-center top-0 right-0 sticky z-20 shadow-sm bg-primary",children:a.jsxs("div",{className:"navbar px-6 py-2 max-w-7xl",children:[a.jsx("div",{className:"flex-1",children:a.jsx(o,{className:"hover:text-white aria-[current=page]:text-secondary","aria-label":"Home Button","aria-current":e==="/"?"page":void 0,to:"/",children:a.jsx("h3",{className:"text-lg font-medium",children:"WhatGeo: Indonesian Map"})})}),a.jsx("div",{className:"hidden font-medium items-center sm:flex",children:a.jsx("nav",{children:a.jsxs("ul",{className:"hidden items-center gap-x-8 sm:flex",children:[a.jsx("li",{children:a.jsx(o,{className:"hover:text-white aria-[current=page]:text-secondary","aria-label":"Document Button","aria-current":e==="/doc"?"page":void 0,to:"/doc",children:"Dok"})}),a.jsx("li",{children:a.jsx(o,{className:"hover:text-white aria-[current=page]:text-secondary","aria-label":"Guide Button","aria-current":e==="/guide"?"page":void 0,to:"/guide",children:"Petunjuk"})}),a.jsx("li",{children:a.jsx(o,{className:"hover:text-white aria-[current=page]:text-secondary","aria-label":"Example Button","aria-current":e==="/example"?"page":void 0,to:"/example",children:"Contoh"})}),a.jsx("li",{children:a.jsx(o,{to:"https://github.com/Z4nR/GeoAPI-Doc",target:"_blank",rel:"noreferrer",className:"hover:text-white aria-[current=page]:text-secondary",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})]})})}),a.jsxs("div",{className:"dropdown dropdown-end font-medium sm:hidden",children:[a.jsx("label",{tabIndex:0,className:"btn btn-ghost btn-square",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),a.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] p-2 menu bg-white shadow rounded-box px-1",children:[a.jsx("li",{children:a.jsx(o,{className:"hover:bg-accent hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Document Button","aria-current":e==="/doc"?"page":void 0,to:"/doc",children:"Dokumentasi"})}),a.jsx("li",{children:a.jsx(o,{className:"hover:bg-accent hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Guide Button","aria-current":e==="/guide"?"page":void 0,to:"/guide",children:"Petunjuk"})}),a.jsx("li",{children:a.jsx(o,{className:"hover:bg-accent hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Example Button","aria-current":e==="/example"?"page":void 0,to:"/example",children:"Contoh"})}),a.jsx("li",{children:a.jsxs(o,{to:"https://github.com/Z4nR/GeoAPI-Doc",target:"_blank",rel:"noreferrer",className:"hover:bg-accent hover:text-white",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),a.jsx("p",{children:"Github"})]})})]})]})]})})}function K(){return a.jsx("footer",{className:"w-full py-10 text-center bg-primary",children:"Created by Zulham 👋"})}const f=t=>{let e=[];return t&&t.find(s=>{const i=s.provFeature;e.push(i)}),e},h="https://zulham.ahlitani.com/geo/v1",C=async()=>m.get(`${h}/prov/page`).then(t=>t.data.page),D=async t=>m.get(`${h}/prov?page=${t}`).then(e=>e.data),I=async t=>m.get(`${h}/prov/isle/page?island=${t}`).then(e=>e.data.page),T=async(t,e)=>m.get(`${h}/prov/isle?island=${t}&page=${e}`).then(s=>s.data);function L(){const{data:t}=j({queryKey:["prov-data"],queryFn:async()=>{const s=await C();let i=[];for(let r=1;r<=s;r++){const n=await D(r);i.push(n)}return i.flat()},staleTime:3600,refetchOnWindowFocus:!1}),e=c.useMemo(()=>f(t),[t]);return a.jsxs("div",{className:"py-4",children:[a.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi"}),a.jsxs(b,{center:[-1.2480891,122],zoom:5,scrollWheelZoom:!0,children:[a.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e==null?void 0:e.map((s,i)=>a.jsx(v,{data:s},i))]})]})}function S(){const[t,e]=c.useState(""),{data:s,refetch:i}=j({queryKey:["prov-data",t],queryFn:async()=>{const l=await I(t);let d=[];for(let p=1;p<=l;p++){const k=await T(t,p);d.push(k)}return d.flat()},staleTime:36e5,refetchOnWindowFocus:!1}),r=c.useMemo(()=>f(s),[s]),n={right:[{btnTitle:"Provinsi di Wilayah Sulawesi",island:"Sulawesi"},{btnTitle:"Provinsi di Wilayah Papua",island:"Papua"},{btnTitle:"Provinsi di Wilayah Kep. BalNusRa",island:"BalNusra"},{btnTitle:"Provinsi di Wilayah Kep. Maluku",island:"Maluku"}],left:[{btnTitle:"Provinsi di Wilayah Jawa",island:"Jawa"},{btnTitle:"Provinsi di Wilayah Sumatera",island:"Sumatera"},{btnTitle:"Provinsi di Wilayah Kalimantan",island:"Kalimantan"}]};return a.jsxs("div",{className:"py-4",children:[a.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi berdasarkan Pulau dan Kepulauannya"}),a.jsxs(b,{center:[-1.2480891,122],zoom:5,scrollWheelZoom:!0,children:[a.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r==null?void 0:r.map((l,d)=>a.jsx(v,{data:l},d))]}),a.jsxs("div",{className:"grid grid-flow-col gap-2 my-4",children:[a.jsx("div",{className:"grid grid-flow-row content-start gap-2 justify-center",children:n.left.map((l,d)=>a.jsx("button",{onClick:()=>{e(l.island),i()},className:"btn btn-sm w-full md:max-w-xs btn-secondary text-xs text-white",children:l.btnTitle},d))}),a.jsx("div",{className:"grid grid-flow-row content-start gap-2 justify-center",children:n.right.map((l,d)=>a.jsx("button",{onClick:()=>{e(l.island),i()},className:"btn btn-sm w-full md:max-w-xs btn-secondary text-xs text-white",children:l.btnTitle},d))})]})]})}function W(){return a.jsxs("div",{className:"px-6",children:[a.jsx("h1",{className:"text-4xl text-center text-black font-bold",children:"WhatGeo: Indonesia"}),a.jsx("h2",{className:"pt-4 text-3xl text-center text-black font-bold",children:"API Data GeoJSON Indonesia"}),a.jsx("p",{className:"text-justify py-6",children:"Kalian tidak perlu lagi memasukan file peta ke dalam projek kalian. Cukup panggil API ini, kalian sudah mendapatkan akses ke peta provinsi dan kota/kabupaten di Indonesia."}),a.jsx(L,{}),a.jsx(S,{})]})}const F=`// Bisa menggunakan for loop ataupun while
async () => {
  for (let i = 1; i <= totalPage; i++) {
    await getProvByPage(i);
  }
}`,R=`// Simpan data kedalam sebuah array

// Variable untuk minympan data
let data = []

async () => {

  // Proses looping data berdasarkan jumlah halaman
  for (let i = 1; i <= totalPage; i++) {
    const prov = await getProvByPage(i);

    // Menyimpan data ke dalam variable yang telah disediakan
    data.push(prov)
  }
}`,A=`// Flatting data dalam array menjadi satu array

const map = data.flat()
// map = [data1, data2, data3, ..., data-n]`,G=`// Proses mengolah data untuk dimuat ke dalam map

// Variable untuk minympan data
let coordinate = [];

if (map) {

  // Mencari properti object dalam sebuah array
  map.find((d) => {

    // Key yang dicari dan diolah
    const feature = d.provFeature;

    // Menyimpan data ke dalam vaiable yang telah disediakan 
    coordinate.push(feature);
  });
}`;function O(){return c.useEffect(()=>{x.highlightAll()},[]),a.jsxs("div",{className:"pt-4",children:[a.jsx("h1",{className:"text-lg font-bold",children:"Memuat Data Peta"}),a.jsxs("p",{className:"py-2 text-justify",children:["Supaya dapat menampilkan semua data yang telah dijadikan satu dalam sebuah array. Selanjutnya kita hanya perlu mencari properti object dengan key"," ",a.jsx("span",{className:"badge badge-accent font-mono",children:"provFeature"})," untuk Data Provinsi dan"," ",a.jsx("span",{className:"badge badge-accent font-mono",children:"cityFeature"})," untuk Data Kota/Kabupaten menggunakan array method ",a.jsx("b",{children:"find()"}),". Lalu simpan data tersebut ke dalam variable dengan nilai ",a.jsx("b",{children:"[array]"}),"."]}),a.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:a.jsx("pre",{children:a.jsx("code",{className:"language-javascript hjls",children:G})})}),a.jsx("div",{className:"divider"})]})}function z(){return c.useEffect(()=>{x.highlightAll()},[]),a.jsxs("div",{className:"pt-4",children:[a.jsx("h1",{className:"text-lg font-bold",children:"Menyatukan data map/page dalam 1 array"}),a.jsxs("p",{className:"py-2 text-justify",children:["Untuk dapat memuat seluruh data map berdasarkan page query. Kita perlu mengetahui jumlah page menggunakan router"," ",a.jsx("span",{className:"badge badge-accent font-mono",children:"/page"})," yang berfungsi untuk melaksanakan proses looping. Proses looping dilakukan dengan menjadikan jumlah halaman yang diperoleh menjadi batas maksimal nilai. Dalam proses looping, kita juga melakukan pengambilan data pada router dengan query yang membutuhkan nilai dari nomor page. Berikut contoh penulisan kode looping:"]}),a.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:a.jsx("pre",{children:a.jsx("code",{className:"language-javascript hjls",children:F})})}),a.jsxs("p",{className:"py-2 text-justify",children:["Dari proses looping tersebut kemudian lakukan push data ke dalam variable dengan nilai ",a.jsx("b",{children:"[array]"})," ."]}),a.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:a.jsx("pre",{children:a.jsx("code",{className:"language-javascript hjls",children:R})})}),a.jsxs("p",{className:"py-2 text-justify",children:["Maka tampilan data yang tersimpan dalam variable data akan menjadi seperti ini"," ",a.jsx("span",{className:"badge badge-accent font-mono",children:"[[data-1], [data-2], ..., [data-n]]"})," ","Kemudian lakukan proses penyatuan beberapa sub array dalam variable data menggunakan method ",a.jsx("b",{children:"flat()"})," ."]}),a.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:a.jsx("pre",{children:a.jsx("code",{className:"language-javascript hjls",children:A})})}),a.jsx("div",{className:"divider"})]})}function E(){return a.jsxs("div",{className:"px-6",children:[a.jsx(z,{id:"load-all"}),a.jsx(O,{id:"load-map"})]})}const U=[{router:"{base_url}/prov/page",describe:"Untuk mengetahui jumlah halaman keseluruhan data provinsi",param:"-",query:"-"},{router:"{base_url}/prov",describe:"Memuat tiga data provinsi per halaman",param:"-",query:"page : number"},{router:"{base_url}/prov/isle/page",describe:"Untuk mengetahui jumlah halaman data provinsi sesuai pulau",param:"-",query:"-"},{router:"{base_url}/prov/isle",describe:"Memuat tiga data provinsi per halaman sesuai pulau",param:"-",query:"island : string, page : number"},{router:"{base_url}/prov/:id/map",describe:"Untuk mengetahui koordinat geojson berdasarkan id provinsi",param:"id : string",query:"-"},{router:"{base_url}/prov/:id/detail",describe:"Untuk mengetahui infomrasi singkat berdasarkan id provinsi",param:"id : string",query:"-"}],$=[{router:"{base_url}/city/page",describe:"Untuk mengetahui jumlah halaman keseluruhan data kota",param:"-",query:"-"},{router:"{base_url}/city",describe:"Memuat lima data kota per halaman",param:"-",query:"page : number"},{router:"{base_url}/city/prov/page",describe:"Untuk mengetahui jumlah halaman data kota sesuai pulau",param:"-",query:"-"},{router:"{base_url}/city/prov",describe:"Memuat lima data kota per halaman sesuai pulau",param:"-",query:"prov : number, page : number"},{router:"{base_url}/city/isle/page",describe:"Untuk mengetahui jumlah halaman data kota sesuai pulau",param:"-",query:"-"},{router:"{base_url}/city/isle",describe:"Memuat lima data kota per halaman sesuai pulau",param:"-",query:"island : string, page : number"},{router:"{base_url}/city/:id/map",describe:"Untuk mengetahui koordinat geojson berdasarkan id kota",param:"id : string",query:"-"},{router:"{base_url}/city/:id/destiny",describe:"Untuk mengetahui daftar lokasi liburan berdasarkan id kota",param:"id : string",query:"-"}],H=[{prov_id:11,regency_id:"1101 - 1118",city_id:"1171 - 1175",prov_name:"Aceh",island:"Sumatera"}];function g({route:t}){return a.jsx(a.Fragment,{children:a.jsx("div",{className:"overflow-x-auto py-2",children:a.jsxs("table",{className:"table table-md",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Route"}),a.jsx("th",{children:"Kegunaan"}),a.jsx("th",{children:"Param : Type"}),a.jsx("th",{children:"Query : Type"})]})}),a.jsx("tbody",{children:t.map((e,s)=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("div",{className:"badge badge-accent w-fit font-medium font-mono",children:e.router})}),a.jsx("td",{children:e.describe}),a.jsx("td",{children:e.param}),a.jsx("td",{children:e.query})]},s))})]})})})}function J({data:t}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"divider"}),a.jsx("h1",{className:"text-lg font-bold",children:"Kode Data Provinsi dan Kab/Kota"}),a.jsx("div",{className:"overflow-x-auto py-2",children:a.jsxs("table",{className:"table table-md text-center",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Prov Id"}),a.jsx("th",{children:"City Id"}),a.jsx("th",{children:"Provinsi"}),a.jsx("th",{children:"Pulau"})]})}),a.jsx("tbody",{children:t.map((e,s)=>a.jsxs("tr",{children:[a.jsx("td",{className:"text-center",children:e.prov_id}),a.jsxs("td",{children:[a.jsxs("div",{className:"pb-2",children:[a.jsx("span",{className:" font-medium",children:"Kode Kab :"})," ",a.jsx("br",{})," ",e.regency_id]}),a.jsxs("div",{children:[a.jsx("span",{className:" font-medium",children:"Kode Kota :"})," ",a.jsx("br",{})," ",e.city_id]})]}),a.jsx("td",{children:e.prov_name}),a.jsx("td",{children:e.island})]},s))})]})})]})}function Q(){return c.useEffect(()=>{x.highlightAll()},[]),a.jsxs("div",{className:"py-4 px-6",children:[a.jsx("div",{className:"mockup-code xs:w-fit xs:max-w-screen-sm pl-5",children:a.jsx("pre",{children:a.jsx("code",{className:"language-javascript hjls",children:"const base_url = `zulham.ahlitani.com/geo/v1`"})})}),a.jsx("div",{className:"divider"}),a.jsx("h1",{className:"text-lg font-bold",children:"Router Provinsi"}),a.jsx(g,{route:U}),a.jsx("div",{className:"divider"}),a.jsx("h1",{className:"text-lg font-bold",children:"Router Kota"}),a.jsx(g,{route:$}),a.jsx(J,{data:H})]})}function Z(){return a.jsx("p",{className:"text-md",children:"Contoh"})}const V=new _;function X(){return a.jsxs(a.Fragment,{children:[a.jsx("a",{className:"sr-only focus:not-sr-only text-white bg-blue-500 p-2 rounded-sm",href:"#main",children:"Skip Navigation"}),a.jsx(B,{}),a.jsx("main",{id:"main",className:"w-full px-4 md:px-0 my-4 max-w-7xl min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh]",children:a.jsx(q,{client:V,children:a.jsxs(M,{children:[a.jsx(u,{path:"/",element:a.jsx(W,{})}),a.jsx(u,{path:"/guide",element:a.jsx(E,{})}),a.jsx(u,{path:"/doc",element:a.jsx(Q,{})}),a.jsx(u,{path:"/example",element:a.jsx(Z,{})})]})})}),a.jsx(K,{})]})}w.createRoot(document.getElementById("root")).render(a.jsx(N,{basename:"/WhatGeo",children:a.jsx(X,{})}));
