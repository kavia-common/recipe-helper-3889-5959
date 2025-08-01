import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || '/api'}/recipes/${id}`)
      .then(res => res.json())
      .then(setRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h4>Ingredients</h4>
      <ul>{recipe.ingredients?.map((i, idx) => <li key={idx}>{i.name} - {i.amount}</li>)}</ul>
      <h4>Steps</h4>
      <ol>{recipe.steps?.map((s, i) => <li key={i}>{s}</li>)}</ol>
      <div style={{marginTop:'1rem'}}>
        <Link to={`/recipes/${id}/edit`} className="btn">Edit Recipe</Link>
        <button className="btn" onClick={() => navigator.clipboard.writeText(window.location.href)} style={{marginLeft:8}}>Share</button>
        <button className="btn" style={{marginLeft:8}}>Add to Collection</button>
        <button className="btn" style={{marginLeft:8}} onClick={()=>navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
export default RecipeDetails;
