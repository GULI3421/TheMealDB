import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const goSearch = (e) =>{
        if (e.key === "Enter"){
            navigate(`/search/${e.target.value}`)
        }
    }

  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <a href="/" className="logo-link">
          <img 
            src="https://www.themealdb.com/images/logo.svg" 
            alt="TheMealDB Logo" 
            className="logo-img" 
          />
       
        </a>

        {/* Навигация и поиск */}
        <div className="header-nav">
          <a href="/" className="nav-btn home-btn">Home</a>
          <a href="/api" className="nav-btn api-btn">API</a>
          
          <div className="search-box">
            <input 
            onKeyDown={goSearch}
              type="text" 
              placeholder="Search" 
              className="search-input" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;