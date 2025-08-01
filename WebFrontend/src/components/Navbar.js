import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../modules/auth/AuthContext';
import { useI18n } from '../modules/i18n/I18nContext';

function Navbar() {
  const { user, logout } = useAuth();
  const { t, lang, setLang } = useI18n();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="navbar" aria-label="Site navigation">
      <NavLink className="navbar-brand" to="/">{t('app.title')}</NavLink>
      <NavLink to="/recipes">{t('navbar.recipes')}</NavLink>
      <NavLink to="/pantry">{t('navbar.pantry')}</NavLink>
      <NavLink to="/collections">{t('navbar.collections')}</NavLink>
      {user ? (
        <>
          <NavLink to="/profile">{t('navbar.profile')}</NavLink>
          <NavLink to="/settings">{t('navbar.settings')}</NavLink>
          <button onClick={handleLogout}>{t('navbar.logout')}</button>
        </>
      ) : (
        <>
          <NavLink to="/login">{t('navbar.login')}</NavLink>
          <NavLink to="/register">{t('navbar.register')}</NavLink>
        </>
      )}
      <select
        aria-label="Language selector"
        value={lang}
        onChange={e => setLang(e.target.value)}
        style={{ marginLeft: 'auto' }}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <style>{`
        .navbar { display: flex; gap: 1rem; background: var(--bg-secondary); padding: 1rem; align-items: center;}
        .navbar-brand { font-weight: bold; font-size: 1.1rem;}
        .navbar a, .navbar button {
          color: var(--text-primary); text-decoration: none; padding: 0.5rem 1rem; background: none; border: none; cursor: pointer;
        }
        .navbar a.active, .navbar button:focus { border-bottom: 2px solid var(--text-secondary);}
        select { margin-left: auto; padding: .25rem; border-radius: 4px;}
      `}</style>
    </nav>
  );
}
export default Navbar;
