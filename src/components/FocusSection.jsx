import React, { useRef, useState } from 'react';
import './FocusSection.css';
import nutrition from '../assets/nutrition.png';
import physical from '../assets/physical activity.png';
import sleep from '../assets/restorative sleep.png';
import stress from '../assets/stress management.png';
import social from '../assets/social connection.png';
import substance from '../assets/substance abuse.png';

const cards = [
  { title: 'Nutrition', img: nutrition },
  { title: 'Physical Activity', img: physical },
  { title: 'Restorative Sleep', img: sleep },
  { title: 'Stress Management', img: stress },
  { title: 'Social Connection', img: social },
  { title: 'Substance Abuse', img: substance }
];

const FocusSection = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState('Nutrition');

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className="focus-section">
      <h2 className="how-it-works-heading">HOW IT WORKS</h2>

      <div className="section-header">
        <h3 className="subheading">
        <span className="gradient-text"><i>Lifestyle as medicine:</i></span>{' '}
  The six pillars
        </h3>
        <div className="nav-buttons">
          <button onClick={() => scroll('left')} className="circle-btn">&#8249;</button>
          <button onClick={() => scroll('right')} className="circle-btn">&#8250;</button>
        </div>
      </div>

      <div className="filters">
        {cards.map((card) => (
          <button
            key={card.title}
            onClick={() => setActive(card.title)}
            className={`pill-btn ${active === card.title ? 'active' : ''}`}
          >
            {card.title}
          </button>
        ))}
      </div>

      <div className="card-container" ref={scrollRef}>
        {cards.map((card) => (
          <div key={card.title} className={`focus-card ${active === card.title ? 'highlight' : ''}`}>
            <img src={card.img} alt={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusSection;
