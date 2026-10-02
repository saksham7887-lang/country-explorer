let search = document.getElementById("countrySelect");
let btn = document.querySelector(".explore-btn");
let mode = "dark";
let themeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () =>
{
    if(mode==="dark"){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        mode="light";
    }
    else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        mode="dark";
    }
});

for(code in country)
    {
        optionValue = document.createElement("option");
        optionValue.innerText=code;
        optionValue.value=country[code];
        
        if(code==="Japan")
            optionValue.selected="selected";

        search.append(optionValue);
    }
    // search.addEventListener("change", (evt) =>
    // {
    //    //heroSection(evt.target);
    //     let countryCode = search.value;
    //     let countryName = Object.keys(country).find(key => country[key] === countryCode);
    //     heroSection({value: countryCode});
    //     factsSection({value: countryCode});
    //     //weatherSection({value: countryCode});
    //     destinationSection({value: countryCode});
    //     footerSection({value: countryCode});
    //     cultureSection({value: countryCode});
    //     festivalSection({value: countryCode});
    //     religionSection({value: countryCode});
    //     cuisineSection({value: countryCode});
    //     InterestingFactsSection({value: countryCode});
    //     travelTipsSection({value: countryCode});
    // });

    btn.addEventListener("click", () =>
    {
       let countryCode = search.value;
        let countryName = Object.keys(country).find(key => country[key] === countryCode);
        heroSection({value: countryCode});
        factsSection({value: countryCode});
        //weatherSection({value: countryCode});
        destinationSection({value: countryCode});
        cultureSection({value: countryCode});
        festivalSection({value: countryCode});
        religionSection({value: countryCode});
        cuisineSection({value: countryCode});
        InterestingFactsSection({value: countryCode});
        travelTipsSection({value: countryCode});
        footerSection({value: countryCode});

    });

    const heroSection = (event) => {
       // hero.style.backgroundImage =  `url("https://flagsapi.com/${event.value}/shiny/64.png")`;
       // hero.style.backgroundSize = "100% 100%";
       let countryCode=event.value;
       let countryName = Object.keys(country).find(key => country[key] === countryCode);

        let destinationDescription = document.getElementById("destinationDescription");
        destinationDescription.innerText = `Must-visit places in ${countryName}`;
    
       let code = document.querySelector(".country-code");
       code.innerText = countryCode;
       let name = document.getElementById("countryName");
       name.innerText = countryName;

       let caption = document.getElementById("countryCaption");
        let countryCaption = countryCaptions[countryName];
        caption.innerText = countryCaption;

        let countryDescription = document.getElementById("countryDescription");
        let description = countryDescriptions[countryName];
        countryDescription.innerText = description;

        let hero = document.querySelector(".hero");
        hero.style.backgroundImage =  `url("https://picsum.photos/seed/${countryName.toLowerCase()}/1920/700")`;
        hero.style.backgroundSize = "100% 100%";

       let location = document.querySelector(".location");
       location.innerText = `📍 ${countryName}`;
    };

    const factsSection = async (event) => {
        let countryCode=event.value;
        let countryName = Object.keys(country).find(key => country[key] === countryCode);
        let facts = document.getElementById("countryFacts");
        facts.innerText = `Get a quick overview of ${countryName}`; 

        const response = await fetch(`https://countries.dev/alpha/${countryCode}`);
        const data = await response.json();
        //console.log(data);

        let capital = document.getElementById("capital");
        capital.innerText = data.capital;

        let currency = document.getElementById("currency");
        currency.innerText = data.currencies[0].name;

        let language = document.getElementById("language");
        language.innerText = data.languages[0].name;

        let population = document.getElementById("population");
        const populationNumber = data.population.toLocaleString();
        population.innerText = populationNumber;
        
        getCoordinates(data.capital, countryCode);
    }

    const getCoordinates = async (capital, countryCode) => {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${capital}&count=1`);
        const data = await response.json();
    
        let latitude = data.results[0].latitude;
        let longitude = data.results[0].longitude;
        getWeather(latitude, longitude, countryCode);
    }
    const getWeather = async (latitude, longitude, countryCode) => {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const data = await response.json(); 

        const daily = data.daily;

        document.getElementById("currentTemp").innerText = `${daily.temperature_2m_max[0]}°C`;
        document.getElementById("currentHumidity").innerText = ` Humidity ${data.current.relative_humidity_2m}%`;
        document.getElementById("currentWeather").innerText = getWeatherDescription(data.current.weather_code);

        document.getElementById("day1").innerText = daily.time[1];
        document.getElementById("temp1").innerText = `${daily.temperature_2m_max[1]}° / ${daily.temperature_2m_min[1]}°`;

        document.getElementById("day2").innerText = daily.time[2];
        document.getElementById("temp2").innerText = `${daily.temperature_2m_max[2]}° / ${daily.temperature_2m_min[2]}°`;

        document.getElementById("day3").innerText = daily.time[3];
        document.getElementById("temp3").innerText = `${daily.temperature_2m_max[3]}° / ${daily.temperature_2m_min[3]}°`;

        document.getElementById("day4").innerText = daily.time[4];
        document.getElementById("temp4").innerText = `${daily.temperature_2m_max[4]}° / ${daily.temperature_2m_min[4]}°`;

        document.getElementById("day5").innerText = daily.time[5];
        document.getElementById("temp5").innerText = `${daily.temperature_2m_max[5]}° / ${daily.temperature_2m_min[5]}°`;
        
    }

    function getWeatherDescription(weatherCode) {
        let weatherImage = document.querySelector(".weather-main");
        if(weatherCode === 0){ 
            weatherImage.style.backgroundImage =  `url("images/sunny.jpg")`;
            return "Sunny";
        }
        if(weatherCode === 1){
            weatherImage.style.backgroundImage =  `url("images/mainly-clear.jpg")`;
            return "Mainly Clear";
        }
        if(weatherCode === 2){
            weatherImage.style.backgroundImage =  `url("images/partly-cloudy.webp")`;
            return "Partly Cloudy";
        }
        if(weatherCode === 3){
            weatherImage.style.backgroundImage =  `url("images/cloudy.webp")`;
            return "Cloudy";
        }
        if(weatherCode >= 51 && weatherCode <= 67){
            weatherImage.style.backgroundImage =  `url("images/rainy.jpeg")`;
            return "Rainy";
        }
        if(weatherCode >= 71 && weatherCode <= 77){
            weatherImage.style.backgroundImage =  `url("images/snowy.jpg")`;
            return "Snowy";
        }
        if(weatherCode >= 80 && weatherCode <= 82){
            weatherImage.style.backgroundImage =  `url("images/rain-shower.webp")`;
            return "Rain Showers";
        }
        if(weatherCode >= 85 && weatherCode <= 86){
            weatherImage.style.backgroundImage =  `url("images/snow-shower.webp")`;
            return "Snow Showers";
        }
        if(weatherCode >= 95){
            weatherImage.style.backgroundImage =  `url("images/thunderstorm.webp")`;
            return "Thunderstorm";
        }
        weatherImage.style.backgroundImage =  `url("images/erratic.webp")`;
        return "Unpredictable Weather";
    }

     destinationSection = (event) => {
        let countryCode=event.value;
        let countryName = Object.keys(country).find(key => country[key] === countryCode);

        let destinationDescription = document.getElementById("destinationDescription");
        destinationDescription.innerText = `Must-visit places in ${countryName}`;

    // const response = await fetch(
    //     `https://map.orizn.app/api/v1/spots?country=${countryCode}&limit=4`
    // );

    // const data = await response.json();

    // console.log(data);
    // console.log(data.spots[0].name);
        // let place1img = document.getElementById("place1img");
        // place1img.src = data.spots[0].photos;
        let place1name = document.getElementById("place1name");
        place1name.innerText = touristPlaces[countryCode].destination[0];
        let place1description = document.getElementById("place1description");
        place1description.innerText = touristPlaces[countryCode].description[0];

        // let place2img = document.getElementById("place2img");
        // place2img.src = data.spots[1].photos;
        let place2name = document.getElementById("place2name");
        place2name.innerText = touristPlaces[countryCode].destination[1];
        let place2description = document.getElementById("place2description");
        place2description.innerText = touristPlaces[countryCode].description[1];
        
        // let place3img = document.getElementById("place3img");
        // place3img.src = data.spots[2].photos;
        let place3name = document.getElementById("place3name");
        place3name.innerText = touristPlaces[countryCode].destination[2];
        let place3description = document.getElementById("place3description");
        place3description.innerText = touristPlaces[countryCode].description[2];

        // let place4img = document.getElementById("place4img");
        // place4img.src = data.spots[3].photos;
        let place4name = document.getElementById("place4name");
        place4name.innerText = touristPlaces[countryCode].destination[3];
        let place4description = document.getElementById("place4description");
        place4description.innerText = touristPlaces[countryCode].description[3];

    }

    const cultureSection = async (event) =>{
       let countryCode=event.value;
       let countryName = Object.keys(country).find(key => country[key] === countryCode);

       let lifestyle = document.getElementById("lifestyle");
       lifestyle.innerText = `Discover the traditions and lifestyle of ${countryName}`

       const response = await fetch(`https://api.stungevents.com/events?country=${countryCode}&limit=4`);
       const data = await response.json();
       //console.log(data.events);

       let element = document.getElementById("eventList");
       element.innerText = `•${data.events[0].title}\n • ${data.events[1].title} `;
    }

    const festivalSection = (event) => {
       let countryCode=event.value;
       let countryName = Object.keys(country).find(key => country[key] === countryCode);
        
       let fest = document.getElementById("fest");
       fest.innerText = `•${festivals[countryCode][0]}\n • ${festivals[countryCode][1]}\n •${festivals[countryCode][2]}\n • ${festivals[countryCode][3]} `;
    }

    const religionSection = (event) => {
       let countryCode=event.value;
       let countryName = Object.keys(country).find(key => country[key] === countryCode);

       let religion = document.getElementById("religion");
       religion.innerText = `•${religions[countryCode][0]}\n • ${religions[countryCode][1]}\n •${religions[countryCode][2]}`;
    }

    const cuisineSection = (event) => {
       let countryCode=event.value;
       let countryName = Object.keys(country).find(key => country[key] === countryCode);

       let cuisine = document.getElementById("cuisine");
       cuisine.innerText = `•${cuisines[countryCode][0]}\n • ${cuisines[countryCode][1]}\n •${cuisines[countryCode][2]}\n • ${cuisines[countryCode][3]} `;
    }

    const InterestingFactsSection = async (event) => {
       let countryCode=event.value;
       let countryName = Object.keys(country).find(key => country[key] === countryCode);

       let interestingFacts = document.getElementById("interestingFacts");
       interestingFacts.innerText = `Interesting facts about ${countryName}`;

       const query = `
        SELECT ?item ?itemLabel ?description WHERE {

            ?country wdt:P297 "${countryCode}".

            ?item wdt:P17 ?country;
                  schema:description ?description.

            FILTER(LANG(?description) = "en")

            SERVICE wikibase:label {
                bd:serviceParam wikibase:language "en".
            }
        }

        LIMIT 4
    `;

    const url ="https://query.wikidata.org/sparql?format=json&query=" +encodeURIComponent(query);

    const response = await fetch(url);
    const data = await response.json();

    const facts = data.results.bindings;
   // console.log(facts);
    let fact1Name = document.getElementById("fact1Name");
    fact1Name.innerText = `🗻 ${facts[0].itemLabel.value}`;
    let fact1Description = document.getElementById("fact1Description");
    fact1Description.innerText = facts[0].description.value;

    let fact2Name = document.getElementById("fact2Name");
    fact2Name.innerText = `🌸 ${facts[1].itemLabel.value}`;
    let fact2Description = document.getElementById("fact2Description");
    fact2Description.innerText = facts[1].description.value;

    let fact3Name = document.getElementById("fact3Name");
    fact3Name.innerText = `🚄 ${facts[2].itemLabel.value}`;
    let fact3Description = document.getElementById("fact3Description");
    fact3Description.innerText = facts[2].description.value;

    let fact4Name = document.getElementById("fact4Name");
    fact4Name.innerText = `🍣 ${facts[3].itemLabel.value}`;
    let fact4Description = document.getElementById("fact4Description");
    fact4Description.innerText = facts[3].description.value;
    }

    const travelTipsSection = (event) => {
        let countryCode=event.value;
        let countryName = Object.keys(country).find(key => country[key] === countryCode);

        let travelTips = document.getElementById("travelTips");
        travelTips.innerText = `Make the most of your trip to ${countryName}`;

        let bestTime = document.getElementById("bestTime");
        bestTime.innerText = travelTipsData[countryCode].bestTime;

        let visa = document.getElementById("visa");
        visa.innerText = travelTipsData[countryCode].visa;

        let safety = document.getElementById("safety");
        safety.innerText = travelTipsData[countryCode].safety;

        let budget = document.getElementById("budget");
        budget.innerText = travelTipsData[countryCode].budget;

        let transport = document.getElementById("transport");
        transport.innerText = travelTipsData[countryCode].transport;
    }
    const footerSection = (event) => {
        let countryCode=event.value;
        let countryName = Object.keys(country).find(key => country[key] === countryCode);
        let footerDescription = document.getElementById("readyToExplore");
        footerDescription.innerText = `Ready to explore ${countryName}?`;
    }