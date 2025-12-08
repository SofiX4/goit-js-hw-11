import{a as m,S as p,i}from"./assets/vendor-LvtvrCkc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="53608703-aa0418faf5290c51b47c4c69e",h="https://pixabay.com/api/";async function g(s){try{return(await m.get(h,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw new Error("Error")}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new p(".gallery a");function w(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${r}</p>
        <p>Views: ${n}</p>
        <p>Comments: ${d}</p>
        <p>Downloads: ${f}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",t),L.refresh()}function b(){c.innerHTML=""}function q(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const t=v.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query!"});return}b(),q();try{const o=await g(t);if(!o.hits||o.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(o.hits)}catch(o){i.error({title:"Error",message:o.message})}finally{S()}});
//# sourceMappingURL=index.js.map
