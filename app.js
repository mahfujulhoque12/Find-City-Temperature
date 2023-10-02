// Do not show api key on your js file. for learning perpas I just use it. 

const API_KEY=`5c74ecf57e33dfd8af4a28e8495c1f4a`;

const loadTemp=(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}

const displayTemperature=(data)=>{
    // const temperature=document.getElementById("temperature");
    //      temperature.innerText=data.main.temp
    setInnerText('temperature',data.main.temp)
    setInnerText('condition',data.weather[0].main)
}

const setInnerText=(id,text)=>{
    const temperature=document.getElementById(id);
    temperature.innerText=text
}


document.getElementById("btn-search").addEventListener('click',function(){
    const searchInput=document.getElementById("search-input");
    const city=searchInput.value;
    //set city
    document.getElementById('city').innerText=city
    loadTemp(city)
})


loadTemp('Dhaka')