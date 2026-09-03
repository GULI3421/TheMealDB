import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import Loader from '../components/loader/Loader';
import { useParams } from 'react-router-dom';
import ProductList from '../components/product-list/ProductList';

export default function Search() {
    const { text } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getFood() {
        setLoading(true);
        try {
            const res = await apiClient.get(`/search.php?s=${text}`);
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
    }, [text]);

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
        <div>
            <ProductList food={meal}/>
        </div>
    );
}
