const cityInput=document.querySelector("#city")
const btn=document.querySelector(".btn")
const temp= document.querySelector("#temp-div")

btn.addEventListener("click",async function(){
  const city= cityInput.value;
  if (!city) {
    console.error("Please enter a valid city name.");
    return;
  }
  const wdata= await getWeather(city);
  console.log(wdata)
  temp.innerHTML= wdata.main.temp + "°C";
})


async function getWeather(city) {
  const apiKey = "f1c8f1b070274b3d67657ed20d283cc1";
  console.log("city is" + city)
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}