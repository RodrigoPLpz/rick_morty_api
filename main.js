var x = document.querySelector('#personaje');
function mostrar(){
    var y = document.getElementById("opc").value;
    if(y>=0 && y<=19){
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => {
            // console.log(data.results[0].episode[0]);
            // console.log(y);
            personaje.innerHTML= `
            <img src="${data.results[y].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${data.results[y].name}</h4>
                <h5 class="card-title">${data.results[y].gender}</h5>
                <p class="card-text">${data.results[y].status}</p>
                <a href="#" class="btn btn-primary" onclick="location.reload()">clic</a>
            </div>
            `
        })
    } else{
        personaje.innerHTML= `
        <p class="card-text">Error</p>
        <a href="#" class="btn btn-primary" onclick="location.reload()">clic</a>
        `
    }
}