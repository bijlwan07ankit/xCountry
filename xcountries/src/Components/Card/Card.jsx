import { useEffect, useState } from "react"; 
import axios from 'axios';
import styles from "./Card.module.css";
import Api from "../../Api";

export default  function Card(){
    const [countries , setCountries]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]
);
const fetchData = async ()=>{
    try{
     const data =await axios.get(Api);
      setCountries(data.data)
      console.log(data.data)
    }
    catch(error){
        console.log("error fetching data: ", error);

    }
}
    return (
        <div className={styles.parent}>
        {countries.map((country) => (
          <div className={styles.card} key={country.cca3}>
            <img
              className={styles.flag}
              src={country.flags.png}
              alt={country.name.common}
            />
            <h5 className={styles.name}>{country.name.common}</h5>
          </div>
        ))}
      </div>
    );
}