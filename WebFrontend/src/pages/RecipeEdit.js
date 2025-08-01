import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeEdit() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({ title: '', description: '', ingredients: [{name:'',amount:''}], steps: [''] });

  // Load existing recipe if editing
  React.useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_API_URL || '/api'}/recipes/${id}`)
        .then(res => res.json())
        .then(setRecipe);
    }
  }, [id]);

  const handleChange = (e) => setRecipe({...recipe, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL || '/api'}/recipes${id ? `/${id}` : ''}`, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe)
    }).then(() => window.location = '/recipes');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit' : 'Create'} Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={recipe.title}
          required
          name="title"
          onChange={handleChange}
          placeholder="Title"
          aria-label="Recipe Title"
        />
        <br />
        <textarea
          value={recipe.description}
          name="description"
          onChange={handleChange}
          placeholder="Description"
          aria-label="Recipe Description"
        />
        <br />
        {/* Ingredients and steps dynamic list */}
        <button className="btn" type="submit">{id ? 'Save' : 'Create'} Recipe</button>
      </form>
    </div>
  );
}
export default RecipeEdit;
