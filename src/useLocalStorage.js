import { useState,useEffect } from "react";

export default function useLocalStorage(key,defaultValue){
    const[value,setValue]=useState(()=>{
        const storedValue=localStorage.getItem(key); // if our local storage have some value then fetch from it. else return default value.
        if(storedValue) return JSON.parse(storedValue) // if present return value
        return defaultValue; // else return defaultvalue
    });

    useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));  // after our page loads we are inserting current mode to localstorage
    },[key,value]);

    return [value,setValue];

}