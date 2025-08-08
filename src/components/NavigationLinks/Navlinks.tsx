import React, { useState, useEffect } from 'react';
import {
  Home,
  Laptop,
  Shirt,
  Heart,
  Watch,
  Gem,
  ShoppingBag,
  Baby,
  FileText,
  Zap,
  Calendar,
} from 'lucide-react';
import './navlinks.css';

const Navlinks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: './3.png',
    },
    {
      image: './2.png',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='secondary-nav'>
      <div className='navlinks'>
        <a href='' title='Home'>
          <Home size={18} /> Home
        </a>
        <a href='' title='Electronics'>
          <Laptop size={18} /> Electronics
        </a>
        <a href='' title='Clothing'>
          <Shirt size={18} /> Clothing
        </a>
        <a href='' title='Favorites'>
          <Heart size={18} /> Favorites
        </a>
        <a href='' title='Watches'>
          <Watch size={18} /> Watches
        </a>
        <a href='' title='Jewelry'>
          <Gem size={18} /> Jewelry
        </a>
        <a href='' title='Bags'>
          <ShoppingBag size={18} /> Bags
        </a>
        <a href='' title='Baby'>
          <Baby size={18} /> Baby
        </a>
        <a href='' title='Documents'>
          <FileText size={18} /> Documents
        </a>
        <a href='' title='Deals'>
          <Zap size={18} /> Deals
        </a>
        <a href='' title='Events'>
          <Calendar size={18} /> Events
        </a>
      </div>

      <div className='event'>
        <div className='event-badge'>HOT</div>

        <div className='event-header'>
          <Zap size={14} className='event-icon' />
          <span className='event-text'>Today's Deals</span>
        </div>

        <div className='event-date'>
          <Calendar size={12} className='date-icon' />
          <span>Aug 1 - Aug 31</span>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
