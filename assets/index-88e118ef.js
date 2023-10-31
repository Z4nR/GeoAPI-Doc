import{j as e,r as c}from"./react-cef3dd34.js";import{c as N}from"./react-dom-8554dc1a.js";import{L as o,B as w}from"./react-router-dom-b8b3c7b6.js";import{b as P,d as M,e as u}from"./react-router-f4e4f71e.js";import{a as m}from"./axios-21b846bc.js";import{u as v,Q as _,a as q}from"./@tanstack-eb3c0d30.js";import{M as x,T as g,G as y}from"./react-leaflet-d901b35e.js";import{H as j}from"./highlight.js-e37aa62c.js";import"./scheduler-765c72db.js";import"./@remix-run-8989dd9f.js";import"./use-sync-external-store-afc56f9d.js";import"./leaflet-b02a3cd0.js";import"./@react-leaflet-355099b2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function B(){const a=P().pathname;return e.jsx("header",{className:"w-full flex justify-center top-0 right-0 sticky z-20 shadow-sm bg-accent",children:e.jsxs("div",{className:"navbar px-6 py-2 max-w-7xl",children:[e.jsx("div",{className:"flex-1",children:e.jsx(o,{className:"text-white hover:text-primary aria-[current=page]:text-secondary","aria-label":"Home Button","aria-current":a==="/"?"page":void 0,to:"/",children:e.jsx("h3",{className:"text-lg font-medium",children:"WhatGeo: Indonesian Map"})})}),e.jsx("div",{className:"hidden font-medium items-center sm:flex",children:e.jsx("nav",{children:e.jsxs("ul",{className:"hidden items-center gap-x-8 sm:flex",children:[e.jsx("li",{children:e.jsx(o,{className:"text-white hover:text-primary aria-[current=page]:text-secondary","aria-label":"Document Button","aria-current":a==="/doc"?"page":void 0,to:"/doc",children:"Dok"})}),e.jsx("li",{children:e.jsx(o,{className:"text-white hover:text-primary aria-[current=page]:text-secondary","aria-label":"Guide Button","aria-current":a==="/guide"?"page":void 0,to:"/guide",children:"Petunjuk"})}),e.jsx("li",{children:e.jsx(o,{className:"text-white hover:text-primary aria-[current=page]:text-secondary","aria-label":"Example Button","aria-current":a==="/example"?"page":void 0,to:"/example",children:"Contoh"})}),e.jsx("li",{children:e.jsx(o,{to:"https://github.com/Z4nR/GeoAPI-Doc",target:"_blank",rel:"noreferrer",className:"text-white hover:text-primary aria-[current=page]:text-secondary",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})]})})}),e.jsxs("div",{className:"dropdown dropdown-end font-medium sm:hidden",children:[e.jsx("label",{tabIndex:0,className:"btn btn-ghost btn-square",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",className:"hover:text-primary w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),e.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] p-2 menu bg-white shadow rounded-box px-1",children:[e.jsx("li",{children:e.jsx(o,{className:"hover:bg-accent hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Document Button","aria-current":a==="/doc"?"page":void 0,to:"/doc",children:"Dokumentasi"})}),e.jsx("li",{children:e.jsx(o,{className:"hover:bg-accent hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Guide Button","aria-current":a==="/guide"?"page":void 0,to:"/guide",children:"Petunjuk"})}),e.jsx("li",{children:e.jsx(o,{className:"hover:bg-accent hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Example Button","aria-current":a==="/example"?"page":void 0,to:"/example",children:"Contoh"})}),e.jsx("li",{children:e.jsxs(o,{to:"https://github.com/Z4nR/GeoAPI-Doc",target:"_blank",rel:"noreferrer",className:"hover:bg-accent hover:text-white",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),e.jsx("p",{children:"Github"})]})})]})]})]})})}function K(){return e.jsx("footer",{className:"w-full py-10 text-center bg-accent text-white",children:"Created by Zulham 👋"})}const f=t=>{let a=[];return t&&t.find(s=>{const i=s.provFeature;a.push(i)}),a},p="https://zulham.ahlitani.com/geo/v1",I=async()=>m.get(`${p}/prov/page`).then(t=>t.data.page),D=async t=>m.get(`${p}/prov?page=${t}`).then(a=>a.data),S=async t=>m.get(`${p}/prov/isle/page?island=${t}`).then(a=>a.data.page),C=async(t,a)=>m.get(`${p}/prov/isle?island=${t}&page=${a}`).then(s=>s.data);function L(){const{data:t}=v({queryKey:["prov-data"],queryFn:async()=>{const s=await I();let i=[];for(let r=1;r<=s;r++){const n=await D(r);i.push(n)}return i.flat()},staleTime:3600,refetchOnWindowFocus:!1}),a=c.useMemo(()=>f(t),[t]);return e.jsxs("div",{className:"pt-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi"}),e.jsxs(x,{center:[-1.2480891,122],zoom:5,scrollWheelZoom:!0,children:[e.jsx(g,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a==null?void 0:a.map((s,i)=>e.jsx(y,{data:s},i))]}),e.jsx("div",{className:"divider"})]})}function T(){return e.jsxs("div",{className:"py-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi berdasarkan Id Provinsi"}),e.jsx(x,{center:[-1.2480891,122],zoom:5,scrollWheelZoom:!0,children:e.jsx(g,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),e.jsx("div",{className:"divider"})]})}function W(){const[t,a]=c.useState(""),{data:s,refetch:i}=v({queryKey:["prov-data",t],queryFn:async()=>{const l=await S(t);let d=[];for(let h=1;h<=l;h++){const k=await C(t,h);d.push(k)}return d.flat()},staleTime:36e5,refetchOnWindowFocus:!1}),r=c.useMemo(()=>f(s),[s]),n=[{btnTitle:"Prov. di Wilayah Sulawesi",island:"Sulawesi"},{btnTitle:"Prov. di Wilayah Papua",island:"Papua"},{btnTitle:"Prov. di Wilayah Kep. BalNusRa",island:"BalNusra"},{btnTitle:"Prov. di Wilayah Kep. Maluku",island:"Maluku"},{btnTitle:"Prov. di Wilayah Jawa",island:"Jawa"},{btnTitle:"Prov. di Wilayah Sumatera",island:"Sumatera"},{btnTitle:"Prov. di Wilayah Kalimantan",island:"Kalimantan"}];return e.jsxs("div",{className:"pt-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi berdasarkan Pulau dan Kepulauannya"}),e.jsxs(x,{center:[-1.2480891,122],zoom:5,scrollWheelZoom:!0,children:[e.jsx(g,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r==null?void 0:r.map((l,d)=>e.jsx(y,{data:l},d))]}),e.jsx("div",{className:"pt-4 px-4 flex flex-wrap justify-center gap-2",children:n.map((l,d)=>e.jsx("button",{onClick:()=>{a(l.island),i()},className:"btn btn-sm px-0.5 w-full xs:max-w-xs btn-secondary text-xs text-white",children:l.btnTitle},d))}),e.jsx("div",{className:"divider"})]})}function F(){return e.jsxs("div",{className:"px-6",children:[e.jsx("h1",{className:"text-4xl text-center text-black font-bold",children:"WhatGeo: Indonesia"}),e.jsx("h2",{className:"pt-4 text-3xl text-center text-black font-bold",children:"API Data GeoJSON Indonesia"}),e.jsx("p",{className:"text-justify py-6",children:"Kalian tidak perlu lagi memasukan file peta ke dalam projek kalian. Cukup panggil API ini, kalian sudah mendapatkan akses ke peta provinsi dan kota/kabupaten di Indonesia."}),e.jsx(L,{}),e.jsx(W,{}),e.jsx(T,{})]})}const R=`// Bisa menggunakan for loop ataupun while
async () => {
  for (let i = 1; i <= totalPage; i++) {
    await getProvByPage(i);
  }
}`,O=`// Simpan data kedalam sebuah array

// Variable untuk minympan data
let data = []

async () => {

  // Proses looping data berdasarkan jumlah halaman
  for (let i = 1; i <= totalPage; i++) {
    const prov = await getProvByPage(i);

    // Menyimpan data ke dalam variable yang telah disediakan
    data.push(prov)
  }
}`,z=`// Flatting data dalam array menjadi satu array

const map = data.flat()
// map = [data1, data2, data3, ..., data-n]`,A=`// Proses mengolah data untuk dimuat ke dalam map

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
}`;function G(){return c.useEffect(()=>{j.highlightAll()},[]),e.jsxs("div",{className:"pt-4",children:[e.jsx("h1",{className:"text-lg font-bold",children:"Memuat Data Peta"}),e.jsxs("p",{className:"py-2 text-justify",children:["Supaya dapat menampilkan semua data yang telah dijadikan satu dalam sebuah array. Selanjutnya kita hanya perlu mencari properti object dengan key"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"provFeature"})," untuk Data Provinsi dan"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"cityFeature"})," untuk Data Kota/Kabupaten menggunakan array method ",e.jsx("b",{children:"find()"}),". Lalu simpan data tersebut ke dalam variable dengan nilai ",e.jsx("b",{children:"[array]"}),"."]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript hjls",children:A})})}),e.jsx("div",{className:"divider"})]})}function E(){return c.useEffect(()=>{j.highlightAll()},[]),e.jsxs("div",{className:"pt-4",children:[e.jsx("h1",{className:"text-lg font-bold",children:"Menyatukan data map/page dalam 1 array"}),e.jsxs("p",{className:"py-2 text-justify",children:["Untuk dapat memuat seluruh data map berdasarkan page query. Kita perlu mengetahui jumlah page menggunakan router"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"/page"})," yang berfungsi untuk melaksanakan proses looping. Proses looping dilakukan dengan menjadikan jumlah halaman yang diperoleh menjadi batas maksimal nilai. Dalam proses looping, kita juga melakukan pengambilan data pada router dengan query yang membutuhkan nilai dari nomor page. Berikut contoh penulisan kode looping:"]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript hjls",children:R})})}),e.jsxs("p",{className:"py-2 text-justify",children:["Dari proses looping tersebut kemudian lakukan push data ke dalam variable dengan nilai ",e.jsx("b",{children:"[array]"})," ."]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript hjls",children:O})})}),e.jsxs("p",{className:"py-2 text-justify",children:["Maka tampilan data yang tersimpan dalam variable data akan menjadi seperti ini"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"[[data-1], [data-2], ..., [data-n]]"})," ","Kemudian lakukan proses penyatuan beberapa sub array dalam variable data menggunakan method ",e.jsx("b",{children:"flat()"})," ."]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript hjls",children:z})})}),e.jsx("div",{className:"divider"})]})}function U(){return e.jsxs("div",{className:"px-6",children:[e.jsx(E,{id:"load-all"}),e.jsx(G,{id:"load-map"})]})}const $=[{router:"{base_url}/prov/page",describe:"Untuk mengetahui jumlah halaman keseluruhan data provinsi",param:"-",query:"-"},{router:"{base_url}/prov",describe:"Memuat tiga data provinsi per halaman",param:"-",query:"page : number"},{router:"{base_url}/prov/isle/page",describe:"Untuk mengetahui jumlah halaman data provinsi sesuai pulau",param:"-",query:"-"},{router:"{base_url}/prov/isle",describe:"Memuat tiga data provinsi per halaman sesuai pulau",param:"-",query:"island : string, page : number"},{router:"{base_url}/prov/:id/map",describe:"Untuk mengetahui koordinat geojson berdasarkan id provinsi",param:"id : string",query:"-"},{router:"{base_url}/prov/:id/detail",describe:"Untuk mengetahui infomrasi singkat berdasarkan id provinsi",param:"id : string",query:"-"}],Z=[{router:"{base_url}/city/page",describe:"Untuk mengetahui jumlah halaman keseluruhan data kota",param:"-",query:"-"},{router:"{base_url}/city",describe:"Memuat lima data kota per halaman",param:"-",query:"page : number"},{router:"{base_url}/city/prov/page",describe:"Untuk mengetahui jumlah halaman data kota sesuai pulau",param:"-",query:"-"},{router:"{base_url}/city/prov",describe:"Memuat lima data kota per halaman sesuai pulau",param:"-",query:"prov : number, page : number"},{router:"{base_url}/city/isle/page",describe:"Untuk mengetahui jumlah halaman data kota sesuai pulau",param:"-",query:"-"},{router:"{base_url}/city/isle",describe:"Memuat lima data kota per halaman sesuai pulau",param:"-",query:"island : string, page : number"},{router:"{base_url}/city/:id/map",describe:"Untuk mengetahui koordinat geojson berdasarkan id kota",param:"id : string",query:"-"},{router:"{base_url}/city/:id/destiny",describe:"Untuk mengetahui daftar lokasi liburan berdasarkan id kota",param:"id : string",query:"-"}],H=[{prov_id:11,regency_id:"1101 - 1118",city_id:"1171 - 1175",prov_name:"Aceh",island:"Sumatera"}];function b({route:t}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-x-auto py-2",children:e.jsxs("table",{className:"table table-md",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Route"}),e.jsx("th",{children:"Kegunaan"}),e.jsx("th",{children:"Param : Type"}),e.jsx("th",{children:"Query : Type"})]})}),e.jsx("tbody",{children:t.map((a,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"badge badge-accent w-fit font-medium font-mono",children:a.router})}),e.jsx("td",{children:a.describe}),e.jsx("td",{children:a.param}),e.jsx("td",{children:a.query})]},s))})]})})})}function J({data:t}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"divider"}),e.jsx("h1",{className:"text-lg font-bold",children:"Kode Data Provinsi dan Kab/Kota"}),e.jsx("div",{className:"overflow-x-auto py-2",children:e.jsxs("table",{className:"table table-md text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prov Id"}),e.jsx("th",{children:"City Id"}),e.jsx("th",{children:"Provinsi"}),e.jsx("th",{children:"Pulau"})]})}),e.jsx("tbody",{children:t.map((a,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",children:a.prov_id}),e.jsxs("td",{children:[e.jsxs("div",{className:"pb-2",children:[e.jsx("span",{className:" font-medium",children:"Kode Kab :"})," ",e.jsx("br",{})," ",a.regency_id]}),e.jsxs("div",{children:[e.jsx("span",{className:" font-medium",children:"Kode Kota :"})," ",e.jsx("br",{})," ",a.city_id]})]}),e.jsx("td",{children:a.prov_name}),e.jsx("td",{children:a.island})]},s))})]})})]})}function Q(){return c.useEffect(()=>{j.highlightAll()},[]),e.jsxs("div",{className:"py-4 px-6",children:[e.jsx("div",{className:"mockup-code xs:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript hjls",children:"const base_url = `zulham.ahlitani.com/geo/v1`"})})}),e.jsx("div",{className:"divider"}),e.jsx("h1",{className:"text-lg font-bold",children:"Router Provinsi"}),e.jsx(b,{route:$}),e.jsx("div",{className:"divider"}),e.jsx("h1",{className:"text-lg font-bold",children:"Router Kota"}),e.jsx(b,{route:Z}),e.jsx(J,{data:H})]})}function V(){return e.jsx("p",{className:"text-md",children:"Contoh"})}const X=new _;function Y(){return e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"sr-only focus:not-sr-only text-white bg-blue-500 p-2 rounded-sm",href:"#main",children:"Skip Navigation"}),e.jsx(B,{}),e.jsx("main",{id:"main",className:"w-full px-4 md:px-0 my-4 max-w-7xl min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh]",children:e.jsx(q,{client:X,children:e.jsxs(M,{children:[e.jsx(u,{path:"/",element:e.jsx(F,{})}),e.jsx(u,{path:"/guide",element:e.jsx(U,{})}),e.jsx(u,{path:"/doc",element:e.jsx(Q,{})}),e.jsx(u,{path:"/example",element:e.jsx(V,{})})]})})}),e.jsx(K,{})]})}N.createRoot(document.getElementById("root")).render(e.jsx(w,{basename:"/WhatGeo",children:e.jsx(Y,{})}));
