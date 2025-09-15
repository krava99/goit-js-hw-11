import{a as d,S as f,i}from"./assets/vendor-CYMld6vM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(r){const s="https://pixabay.com",a="52284043-e07dc2496c8ab93aaf5c906d1",o="/api/",e={key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"};return d.get(`${s}${o}`,{params:e}).then(t=>t.data.hits)}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(r){return r.map(({webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:n,downloads:p})=>`<li class="photo-item">
        <a class="photo-link" href="${a}">
          <img
            class="photo-thumb"
            src="${s}"
            alt="${o}"
          />
          <div class="photo-stats">
            <div class="stat-block">
              <span class="stat-label">Likes</span>
              <span class="stat-value">${e}</span>
            </div>
            <div class="stat-block">
              <span class="stat-label">Views</span>
              <span class="stat-value">${t}</span>
            </div>
            <div class="stat-block">
              <span class="stat-label">Comments</span>
              <span class="stat-value">${n}</span>
            </div>
            <div class="stat-block">
              <span class="stat-label">Downloads</span>
              <span class="stat-value">${p}</span>
            </div>
          </div>
        </a>
      </li>`).join("")}function y(r){l.innerHTML=g(r),h.refresh()}function v(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(r){r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(!s){i.warning({title:"Warning",message:"please enter a search query"});return}v(),b(),m(s).then(a=>{const o=a;if(o.length===0){i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o)}).catch(a=>{console.error("Error fetching images:",a),i.error({position:"topRight",message:"Something went wrong. Please try again later."})}).finally(()=>{L(),u.reset()})}
//# sourceMappingURL=index.js.map
