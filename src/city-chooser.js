import React,{useEffect,useState} from "react";
import {getCityList} from './city-data';


export const CityChooser=()=>{
    const [search,setSearch]=useState('');
    const [cityList,setCityList]=useState([]);

    const handleChange=(event)=>{
        setSearch(event.target.value);
    }
    useEffect(()=>{
        getCityList().then(list=>setCityList(list));
    },[]);

    const filteredList=search?
        cityList.filter(city=>city.name.toUpperCase().startsWith(search.toUpperCase())):
        cityList.slice(0,40);
    return(
        <form>
            <input
            type="search"
            placeholder="Поиск города"
            value={search}
            onChange={handleChange}
            className="form-control"
            list="datalistOptions"
            />
        <datalist id="datalistOptions">
            {
                filteredList.map((city,index)=>(
                    <option
                    key={index}
                        value={`${city.name} (${city.region_id} регион)`}
                        /* {city.name} ({city.region_id} регион) */
                        />
                ))
            }
        </datalist>
        </form>
    );
}