// Accordion.js

import React, { useState } from 'react';
import './accordian.css'; // Import the styles

const Accordion = ({ headlines }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
    
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        News <span className='toggle'>  {isActive? `-`:`+`}</span>
      </div>
      <div className={!isActive && "accordion-content"}>
        <ul>
          {headlines.map((headline, index) => (
            <li key={index}>  {headline}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
