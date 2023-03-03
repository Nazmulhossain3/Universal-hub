const loadUniverseData = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => showUniverseData(data.data.tools.slice(0,6)))


}

const showUniverseData = (tools) => {

        // console.log(tools)


    const universePhotoContainer = document.getElementById('universe-container')

    universePhotoContainer.innerHTML = '';

     tools.forEach(tool => {
        const {name,description,image,published_in,features,id} = tool
        console.log(tool)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title fw-bold">Features</h3>
          <p>1.${features[0] ? features[0] : 'Not Available'}</p>
          <p>2.${features[1] ? features[1] : 'Not Available'}</p>
          <p>3.${features[2] ? features[2] : 'Not Available'}</p>

            <div class="d-flex justify-content-between">
            
            <div> 
            <h2 class="fw-bold text-medium"> ${name} </h2>
            </h2> <i class="fa-regular fa-calendar-days"></i> ${published_in}</h2>
            </div>
           
            <i class="fa-solid fa-arrow-right"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="fetchModalDetails('${id}')"></i>
           
            </div>
           

            
            </div>

        </div>
      </div>
        
        
        `
        universePhotoContainer.appendChild(div)
        toggleSpinner(false)
    });

    }



// this is for modal details 

const fetchModalDetails = (id) => {
    const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showModalDetails(data.data))


}

const showModalDetails = (id) => {
    const modalContainer = document.getElementById('exampleModal')
    console.log(id)

    const {tool_name,description,image_link,features,feature_name} = id
    const modalBody = document.getElementById('body-modal')
    modalBody.innerHTML = `
    <div class="d-flex gap-4"> 
    
    <div>
    <h4 class="p-4"> ${description} </h4>
     
    <div class="d-flex justify-content-start"> 
   
    <h5 class="p-4 text-success"> ${id.pricing[0].plan ? id.pricing[0].plan : ""} </br> ${id.pricing[0].price ? id.pricing[0].price : "Free of Cost"}  </h5>
    
    
    <h5 class="p-4 text-warning"> ${id.pricing[1].plan} </br> ${id.pricing[1].price} </h5>
    
    <h5 class="p-4 text-danger"> ${id.pricing[2].plan} </h5>
    
    </div>
    
     <div>  
    
    </div>

   
</div>
   
   
 <div>  
    <img src="${image_link[0]}" class="card-img-top img-fluid p-4" alt=".">
    <p class="accuracy-position"> ${id.accuracy.score ? id.accuracy.score : ""} 
    </P>
    
 </div>

</div>


<div class="d-flex justify-content-between gap-5">  

<div class="d-flex gap-5 mr-4"> 

<div> 
<h3 class="text-center fw-bold"> Features</h3>
<h6 class="">1.${id.features[1].feature_name}</h6>
<h6>2.${id.features[2].feature_name}</h6>
<h6>3.${id.features[3].feature_name}</h6>
</div>

<div> 
<h3 class="text-center fw-bold"> Integration</h3>
<h6 class="mt-2">${id.integrations[0] ? id.integrations[0] : ""}</h6>
<h6 class="mt-2">${id.integrations[1] ? id.integrations[1] : ""}</h6>
<h6 class="mt-2">${id.integrations[2] ? id.integrations[2] : 'No Data Found'}</h6>



</div>



</div>




<div class="text-center">
<h5>${id.input_output_examples[1].input} ? </h5>
<h5>${id.input_output_examples[1].output ? id.input_output_examples[1].output.slice(0,120) : "No! Not Yet Take a Break!!!"} </h5>
</div>

</div>


`


}






// btn show all
const btnShowAll = () => {
    toggleSpinner(true)
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => showUniverseData(data.data.tools))

    
    }

    
const toggleSpinner = isLoading => {

    const loaderSection = document.getElementById('loader')

    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

loadUniverseData()