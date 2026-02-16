
fetch("http://localhost:3000/postDetails")
.then(res=>res.json())
.then(res=>document.body.innerHTML=res.data.map(e=>`<div>${e.name}</div>`));