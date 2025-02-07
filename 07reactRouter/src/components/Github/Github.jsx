import React from "react";
import { useState , useEffect } from "react";


export default function Github() {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/rishabhyadav1122")
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github: {data.followers}</div>
    )
}