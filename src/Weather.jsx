import React, { useEffect, useState } from "react";
import  ReactDOM from "react-dom";
function J()
{
    let [v,setv] = useState("Lahore");
    let [name,setname] = useState();
    let [temp,settemp] = useState();
    let [coun,setcoun] = useState();
    let [haze,sethaze] = useState();
    let [pressure,setpressure] = useState();
    let [humidity,sethumidity] = useState();
    let [speed,setspeed] = useState();
    let [sunset,setsunset] = useState();
    let [sunsec,setsec] = useState();
    async function WEA()
    {
       
            
            try{

                let url = `https://api.openweathermap.org/data/2.5/weather?q=${v}&units=metric&appid=cf2c348512586c45e376b52d471c845d`;
                let f1 = await fetch(url);
                let f2 = await f1.json();
                setname(f2.name);
                settemp(f2.main.temp);
                setcoun(f2.sys.country);
                sethaze(f2.weather[0].main);
                console.log(f2.weather[0].main);
                setpressure(f2.main.pressure);
                sethumidity(f2.main.humidity);
                setspeed(f2.wind.speed);
                setsunset(f2.sys.sunset);
                let r = new Date(f2.sys.sunset * 1000);
                setsunset(r.getHours());
                setsec(r.getMinutes());
                console.log(name);
            }
            catch(ER)
            {
                console.log("error");
            }
    
        
       
    }

    useEffect(
        ()=>{
           WEA(); 
        },[]
    )
    return(
        <>
            <input type="text" className="j1" placeholder="Search" value={v} onChange={(e)=>{
                setv(e.target.value);
            }}></input>
            <button className="j2" onClick={()=>{
                console.log(v);
                WEA();
                setv("");
            }}>Search</button>
            <div className="b1" id="bb1">
                <div className="b2" id="bb2">
                <i class="fa-solid fa-smog fa-beat-fade fa-2xl hel"  style={{color: "#1f4751",width:"300px",height:"400px"}}></i>                </div>
                <div className="b3" id="bb3">
                    <div className="b4">
                        {temp}&deg;
                    </div>
                    <div className="b5">
                     {haze}
                    </div>
                    <div className="b6">
                    {name},{coun}
                    </div>
                </div>
                <div className="b7">
                    {new Date().getDate().toLocaleString()} / {new Date().getMonth().toLocaleString()} / {new Date().getFullYear().toLocaleString()}<br/>
                    {new Date().getHours().toLocaleString()} : {new Date().getMinutes().toLocaleString()} : {new Date().getSeconds().toLocaleString()}
                </div>
                <div className="b8">
                <div className="b9">
                <i class="fa-sharp fa-light fa-sunset fa-bounce fa-2xl" style={{color: "#1f4751"}}></i> Sunset {sunset}:{sunsec}
                </div>
                <div className="b10">
                <i class="fa-sharp fa-solid fa-droplet-degree fa-shake fa-2xl" style={{color: "#1f4751"}}></i>humidity {humidity}
                </div>
                
                </div>

                    <div className="b13">
                    <div className="b11">
                <i class="fa-regular fa-tire-pressure-warning fa-2xl" style={{color: "#1f4751"}}></i> Pressure {pressure}
                </div>
                <div className="b12">
                <i class="fa-sharp fa-regular fa-wind fa-2xl" style={{color: "#1f4751"}}></i> Wind {speed}
                </div>
                    </div>
            </div>
        </>
    )
}

export default J