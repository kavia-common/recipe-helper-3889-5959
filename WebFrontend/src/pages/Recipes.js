import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || '/api'}/recipes`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const filtered = !q ? recipes : recipes.filter(r =>
    r.title.toLowerCase().includes(q.toLowerCase()) || (r.description && r.description.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="container">
      <h2>Recipes</h2>
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search recipes"
        aria-label="Search recipes"
      />
      <ul style={{marginTop:'1rem'}}>
        {filtered.map(r =>
          <li key={r.id} style={{marginBottom:10}}>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            <span style={{marginLeft:6, color:'#666'}}>
              {r.description ? r.description.slice(0, 60) : ''}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Recipes;
