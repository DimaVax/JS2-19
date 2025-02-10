let e;const t=document.querySelector(".movies-list"),s=e=>{console.log(e),e.forEach(e=>{let s=`<li class="movie-item" id="${e.id}">
            <h2 class="movie-title">Title: ${e.title}</h2>
            <div class="movie-info">
                <p class="movie-genre">Genre: ${e.genre}</p>
                <p class="movie-year">Year of movie: ${e.year}</p>
                <p class="movie-year">Director: ${e.director}</p>
            </div>
            <div class="server-btns">
                <button class="server-btn delete-btn" type="button">delete</button>
                <button class="server-btn edit-btn" type="button">edit</button>
            </div>
        </li>`;t.insertAdjacentHTML("beforeend",s)})},n=async e=>{try{return await fetch(`https://67a762d3203008941f6774aa.mockapi.io/movies/movies/${e}`,{method:"DELETE"}).then(e=>e.json())}catch(e){console.log(e.message)}},o=e=>{e.classList.contains("delete-btn")&&n(e.parentElement.parentElement.id).then(e=>console.log(e)).catch(e=>{console.log(e.message)})};(async()=>{try{return await fetch("https://67a762d3203008941f6774aa.mockapi.io/movies/movies").then(e=>e.json())}catch(e){console.log(e.message)}})().then(e=>{s(e),document.addEventListener("click",e=>{o(e.target),console.log("test")})});const a=document.querySelector(".backdrop"),i=document.querySelector(".add-button"),c=document.querySelector(".close");i.addEventListener("click",e=>{e.preventDefault(),a.classList.remove("is-hidden")}),c.addEventListener("click",()=>{a.classList.add("is-hidden")});const r=async(e,t,s,n)=>{try{let o={method:"POST",body:JSON.stringify({title:e,genre:t,year:s,director:n}),headers:{"Content-Type":"application/json; charset=UTF-8"}};return await fetch("https://67a762d3203008941f6774aa.mockapi.io/movies/movies",o).then(e=>e.json()).then(e=>e)}catch{}},l=document.querySelector(".edit-modal__form");l.addEventListener("submit",e=>{e.preventDefault(),r(l.elements.edit-title.value,l.elements.edit-genre.value,l.elements.edit-year.value,l.elements.edit-director.value)});const d=async(e,t,s,n,o)=>{try{return await fetch(`https://67a762d3203008941f6774aa.mockapi.io/movies/movies/${o}`,{method:"PUT",body:JSON.stringify({title:e,genre:t,year:s,director:n}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())}catch(e){console.log(e.message)}},m=document.querySelector(".edit-backdrop");document.addEventListener("click",t=>{t.target.classList.contains("edit-btn")&&(e=t.target.parentElement.parentElement.id,m.classList.remove("is-hidden"))}),document.addEventListener("click",e=>{e.target.classList.contains("edit-close")&&m.classList.add("is-hidden")});const v=document.querySelector(".edit-modal__form");v.addEventListener("submit",t=>{d(v.elements.title.value,v.elements.genre.value,v.elements.year.value,v.elements.director.value,e)});
//# sourceMappingURL=index.816f9d5d.js.map
