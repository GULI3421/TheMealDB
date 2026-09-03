import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import ProductList from '../components/product-list/ProductList';
import Loader from '../components/loader/Loader';

export default function Home() {
    const [meal, setMeal] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    async function getFood() {
        setLoading(true)
        try {
            const res = await apiClient.get("/search.php?s=")
            const data = await res.data.meals
            console.log(data);
            setMeal(data)
            setLoading(false)
            return
        } catch (error) {
            console.error(`error: ${error.message}`);
            setLoading(false)
            setError(error)
            return
        }
    }
useEffect(()=>{

    getFood()
},[])

if(loading){
    return <Loader/>
}

if(error){
    return <div>Error</div>
}

    return (
        <div  style={{marginTop:"150px"}}>
            <ProductList food={meal}/>
        </div>
    );
}
