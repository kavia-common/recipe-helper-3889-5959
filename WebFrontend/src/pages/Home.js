import React from 'react';
import { useI18n } from '../modules/i18n/I18nContext';
import { Link } from 'react-router-dom';

function Home() {
  const { t } = useI18n();
  return (
    <div className="homepage container">
      <h1>{t('app.title')}</h1>
      <p>Discover new recipes, manage your pantry, and enjoy cooking!</p>
      <Link className="btn" to="/recipes">Browse Recipes</Link>
      <Link className="btn" to="/pantry" style={{marginLeft: 8}}>My Pantry</Link>
      <style>{`
        .container { max-width: 700px; margin: auto; padding: 2rem;}
        .btn { margin-top: 1rem; display: inline-block; background: var(--button-bg); color: var(--button-text); padding: 12px 30px; border-radius: 5px; font-size: 1rem; font-weight: 600; text-decoration: none; }
        .btn:hover { background: #0056b3; }
      `}</style>
    </div>
  );
}
export default Home;
