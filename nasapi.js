const fetchNasa = async() => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=SkFai1lkbloezHcmhIbmdHpLJ5Kc9r0w6tL8UHt5')
    const data = await response.json()

  console.log(data)  
}

fetchNasa()

