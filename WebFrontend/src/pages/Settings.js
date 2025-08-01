import React from 'react';
import { useI18n } from '../modules/i18n/I18nContext';
// In a full implementation, more settings options are provided

function Settings() {
  const { lang, setLang } = useI18n();

  return (
    <div className="container">
      <h2>Settings</h2>
      <label>
        Language:
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </label>
      {/* Dark theme toggle is handled globally, but could be moved here */}
    </div>
  );
}
export default Settings;
