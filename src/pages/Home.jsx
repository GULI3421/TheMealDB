import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import ProductList from '../components/product-list/ProductList';
import Loader from '../components/loader/Loader';
import Footer from '../components/footer/Footer';

export default function Home() {
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  
    async function getFood() {
        setLoading(true);
        try { 
            const res = await apiClient.get("/search.php?s=");
            const data = await res.data.meals;
            setMeal(data || []);
        } catch (error) {
            console.error(`error: ${error.message}`);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function getByLetter(letter) {
        setLoading(true);
        try {
            const res = await apiClient.get(`/search.php?f=${letter.toLowerCase()}`);
            const data = await res.data.meals;
            setMeal(data || []); 
        } catch (error) {
            console.error(`error: ${error.message}`);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function getByCountry(countryName) {
        setLoading(true);
        try {
            const res = await apiClient.get(`/filter.php?a=${countryName}`);
            const data = await res.data.meals;
            setMeal(data || []);
        } catch (error) {
            console.error(`error: ${error.message}`);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFood();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={{ marginTop: "150px" }}>
            <ProductList food={meal} />
            <Footer onSelectLetter={getByLetter} onSelectCountry={getByCountry} />
        </div>
    );
}