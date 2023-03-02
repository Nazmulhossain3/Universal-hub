const loadUniverseData = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => showUniverseData(data.data.tools))


}

const showUniverseData = (tools) => {
        console.log(tools)

    tools.forEach(tool => {
        console.log(tool)
        
    });

}

loadUniverseData()