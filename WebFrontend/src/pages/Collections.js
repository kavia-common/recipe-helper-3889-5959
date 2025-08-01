import React, { useEffect, useState } from 'react';

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || '/api'}/collections`)
      .then(res => res.json())
      .then(setCollections);
  }, []);

  return (
    <div className="container">
      <h2>My Collections</h2>
      <ul>
        {collections.map(c => (
          <li key={c.id}>{c.name} - {c.recipes?.length ?? 0} recipes</li>
        ))}
      </ul>
      {/* TODO: allow user to create/edit/delete collections */}
    </div>
  );
}
export default Collections;
