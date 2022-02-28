let weather =   {
    apiKey :"1b57908c0e1b005d7dbd4770754851c6",
     fetchWeather:function(city){
         fetch(
             "https://api.openweathermap.org/data/2.5/weather?q=" + 
             city +"&units=metric&appid=" + 
             this.apiKey
         )
         .then((response) => response.json())
         .then((data)=> this.dislpayWeather(data));
     },
     dislpayWeather: function (data){
         const { name } = data;
         const { icon,description } = data.weather[0];
         const { temp, humidity } = data.main;
         const { speed } = data.wind;
         console.log( name, icon, description, temp, humidity, speed);
         document.querySelector(".city").innerText = "Weather in " + name;
         document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon +".png";
         document.querySelector(".description").innerText =  description;
         document.querySelector(".temp").innerText = temp + "°C";
         document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
         document.querySelector(".speed").innerText = "Wind speed: " + speed + " km/h";
         document.querySelector(".weather").classList.remove("loading");
         document.body.style.backgroundImage ="url('https://source.unsplash.com/random/?"+ name +"')"

     },
     search: function(){
         this.fetchWeather(document.querySelector(".search-box").value)
     }
};
document.querySelector(".btn").addEventListener("click",function (){
 weather.search();
});  

document.querySelector(".search-box").addEventListener("keyup" ,function(event){
  if(event.key == "Enter"){
      weather.search();
  }
});
weather.fetchWeather("Thrissur");


