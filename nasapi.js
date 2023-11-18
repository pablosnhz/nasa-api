let infoNasa = document.querySelector('#infoNasa')

const fetchNasa = async() => {
    try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=SkFai1lkbloezHcmhIbmdHpLJ5Kc9r0w6tL8UHt5')
    const data = await response.json()

    console.log(data)  

    const spaceInfo = document.createElement('div')
    spaceInfo.innerHTML = `
    <img src="${data.url}">
    <h4>${data.title}</h4>
    <p>${data.explanation}</p>
    `;
    infoNasa.append(spaceInfo)
    } catch(err){
        console.log(err);
    }
};

fetchNasa()

