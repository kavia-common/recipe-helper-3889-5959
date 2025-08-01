import React, { useState, useEffect } from 'react';

function Pantry() {
  const [pantry, setPantry] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || '/api'}/pantry`)
      .then(res => res.json())
      .then(setPantry);
  }, []);

  return (
    <div className="container">
      <h2>My Pantry</h2>
      <ul>
        {pantry.map((i, idx) => (
          <li key={idx}>{i.name} {i.amount ? `- ${i.amount}` : ''}</li>
        ))}
      </ul>
    </div>
  );
}
export default Pantry;
