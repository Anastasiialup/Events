import { useState } from 'react';

const useCookiePopup = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type: string) => {
    // @ts-ignore
    setCookies((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSavePreferences = () => {
    document.cookie = `analytics=${cookies.analytics}; path=/;`;
    document.cookie = `marketing=${cookies.marketing}; path=/;`;
    setShowSettings(false);
  };

  return {
    showSettings,
    setShowSettings,
    cookies,
    handleToggle,
    handleSavePreferences,
  }
}

export default useCookiePopup;
