const loadUniverseData = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => showUniverseData(data.data.tools))


}

const showUniverseData = (tools) => {
        // console.log(tools)
    const universePhotoContainer = document.getElementById('universe-container')
    tools.forEach(tool => {
        const {name,description,image,published_in,features} = tool
        console.log(tool)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title fw-bold">Features</h3>
          <p>1.${features[0]}</p>
          <p>2.${features[1]}</p>
          <p>3.${features[2]}</p>

            <div class="d-flex justify-content-between">
            
            <div> 
            <h2 class="fw-bold text-medium"> ${name} </h2>
            </h2> <i class="fa-regular fa-calendar-days"></i> ${published_in}</h2>
            </div>
           
            <i class="fa-solid fa-arrow-right"></i>
           
            </div>
           

            
            </div>

        </div>
      </div>
        
        
        `
        universePhotoContainer.appendChild(div)
    });

}

loadUniverseData()