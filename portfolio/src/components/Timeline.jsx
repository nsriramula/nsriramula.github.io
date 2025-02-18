import React from 'react';
import './Timeline.css'; // Use the same CSS file

const Timeline = ({ experiences }) => {
  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-time">{experience.time}</div>
          <div className="timeline-content">
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <ul>
              {experience.description.map((point, i) => (
                <li key={i}>{point}</li> 
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;