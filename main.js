var x = document.querySelector('#personaje');
function mostrar(){
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
        // console.log(data.results[0].episode[0]);
        personaje.innerHTML= `
        <img src="${data.results[0].image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${data.results[0].name}</h4>
            <h5 class="card-title">${data.results[0].gender}</h5>
            <p class="card-text">${data.results[0].status}</p>
            <a href="#" class="btn btn-primary" onclick="mostrar()">clic</a>
        </div>
        `
    })
}