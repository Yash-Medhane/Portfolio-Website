
import skill from './skillApi'; // Adjust the import path according to your file structure
import '../styles/skills.css'; // Optional: Create a CSS file for styling
import React, { useState } from 'react';

const Skills = () => {
    const [showMore, setShowMore] = useState({});
  
    const handleToggle = (id) => {
      setShowMore((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  
    return (
      <div className="skills-container">
        {skill.map((item) => (
          <div key={item.id} className="skill-card">
            <img src={item.image} alt={item.name} className="skill-image" />
            <div className="skill-details">
              <h3 className="skill-name">{item.name}</h3>
              <p className="skill-level">{item.level}</p>
              <p className="skill-desc">
                {showMore[item.id] ? item.desc : `${item.desc.substring(0, 100)}...`}
                {item.desc.length > 100 && (
                  <span className="read-more" onClick={() => handleToggle(item.id)}>
                    {showMore[item.id] ? ' Show Less' : ' Read More'}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;