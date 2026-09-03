import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import Loader from '../components/loader/Loader';
import { useParams, Link } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getFood() {
        setLoading(true);
        try {
            const res = await apiClient.get(`/lookup.php?i=${id}`);
            const data = res.data.meals[0];
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
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="error-message">Error</div>;
    }

    if (!meal) {
        return null;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push({
                name: ingredient,
                measure: measure ? measure.trim() : '',
                image: `https://www.themealdb.com/images/ingredients/${encodeURIComponent(ingredient)}.png`
            });
        }
    }

    return (
        <div className="detail-container">
            <h1 className="meal-main-title">{meal.strMeal}</h1>
            
            <div className="meal-content-grid">
                <div className="meal-left-column">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-main-image" />
                    <div className="meal-info-row">
                        <span>Category: <b>{meal.strCategory}</b></span>
                        <span>Area: <b>{meal.strArea}</b></span>
                    </div>
                    <div className="meal-tags">
                        Tags: {meal.strTags ? meal.strTags.split(',').join(', ') : 'No Tags'}
                    </div>
                </div>

                <div className="meal-right-column">
                    <h2>Ingredients</h2>
                    <div className="ingredients-grid">
                        {ingredients.map((item, index) => (
                            <Link to={`/ingridient/${item.name}`} key={index} className="ingredient-card">
                                <img src={item.image} alt={item.name} className="ingredient-image" />
                                <span className="ingredient-text">
                                    {item.measure} {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="meal-instructions-section">
                <h2>Instructions</h2>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
}