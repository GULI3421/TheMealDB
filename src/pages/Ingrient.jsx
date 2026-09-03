import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import Loader from '../components/loader/Loader';
import { useParams } from 'react-router-dom';
import './Ingrient.css';
import ProductList from '../components/product-list/ProductList';
export default function Ingrient() {
    const { item } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const image = `https://www.themealdb.com/images/ingredients/${encodeURIComponent(item)}.png`

    async function getFood() {
        setLoading(true);
        try {
            const res = await apiClient.get(`filter.php?i=${item}`);
            const data = res.data.meals;
            setMeal(data);
            setLoading(false);
        } catch (error) {
            console.error(`error: ${error.message}`);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        getFood();
    }, [item]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="error-message">Error</div>;
    }

    if (!meal) {
        return null;
    }
    return (
<div className="ingredient-page">
            <div className="ingredient-image-container">
                <img src={image} alt={item} className="ingredient-main-image" />
            </div>
            <ProductList food={meal}/>
        </div>
    );
}
