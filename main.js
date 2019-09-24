window.addEventListener("DOM",() =>{
    let out ='';
    let out2 = '';

    fetch(`https://rickandmortyapi.com/api/character/$`)
        .then(res => res.json())
        .then(data => {
            let personaje = data.results;
            muestraPer(personaje);
        })
        .catch(err => {
            out2.innerHTML = "Error"

        })

    function muestraPer(personaje){
        personaje.forEach(per => {
            
        });

    }

});