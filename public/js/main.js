const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const tempv = document.getElementById("tempv");
const temp_status = document.getElementById("temp_status");

const getInfo  = async(event) =>{
    event.preventDefault();
    
    let cityVal = cityName.value; 
    if(cityVal === ""){
        city_name.innerText = `Plz write the city name`;

    }else{
        try{
            let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fee642c99ad77a72490ad1fdafb1ff51`;

            const response =  await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            tempv.innerHTML = arrData[0].main.temp;
          

            const tempstatus = arrData[0].weather[0].main;

            if(tempstatus == "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun ' style = 'color:#eccc68;'></i>";
            }else if(tempstatus == "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud ' style = 'color:#f1f2f6;'></i>";
            }else if(tempstatus == "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-rain ' style = 'color:#a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class = 'fas fa-cloud ' style = 'color:#f1f2f6;'></i>";
            }




            // console.log( arrData[0].main.temp);
        }catch{
            city_name.innerText = `Plz Enter  the city name properly`;
        }
       
        }
       

   

   
 

}

submitBtn.addEventListener('click', getInfo);