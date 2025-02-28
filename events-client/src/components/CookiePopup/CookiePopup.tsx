import CookieConsent from 'react-cookie-consent';
import useCookiePopup from './CookiePopup.hook';

const CookiePopup = () => {
  const {
    showSettings,
    setShowSettings,
    cookies,
    handleToggle,
    handleSavePreferences,
  } = useCookiePopup();

  return (
    <>
      {!showSettings && (
        <CookieConsent
          location="bottom"
          buttonText="Прийняти всі"
          enableDeclineButton
          declineButtonText="Відхилити"
          onAccept={() => {
            document.cookie = "analytics=true; path=/;";
            document.cookie = "marketing=true; path=/;";
          }}
          onDecline={() => {
            document.cookie = "analytics=false; path=/;";
            document.cookie = "marketing=false; path=/;";
          }}
        >
          Ми використовуємо файли cookie для покращення вашого досвіду.
          <button onClick={() => setShowSettings(true)} className="ml-2 underline">
            Налаштування
          </button>
        </CookieConsent>
      )}

      {showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
          <h2 className="text-lg font-bold">Налаштування cookie</h2>
          <p>Виберіть, які cookie хочете увімкнути.</p>

          <div className="flex flex-col mt-5 gap-3">
            <label>
              <input type="checkbox" checked disabled /> Необхідні (завжди увімкнені)
            </label>
            <label>
              <input
                type="checkbox"
                checked={cookies.analytics}
                onChange={() => handleToggle("analytics")}
              /> Аналітичні (Google Analytics)
            </label>
            <label>
              <input
                type="checkbox"
                checked={cookies.marketing}
                onChange={() => handleToggle("marketing")}
              /> Маркетингові (Facebook Pixel)
            </label>

            <button onClick={handleSavePreferences} className="mt-2 bg-blue-500 text-white px-4 py-2 max-w-xs">
              Зберегти налаштування
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CookiePopup;


