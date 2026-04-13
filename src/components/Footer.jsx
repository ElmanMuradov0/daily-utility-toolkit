import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

export default function Footer() {
  const { t } = useLanguage(); // Dil desteği için

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About ZippyKit */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.aboutZippyKitTitle')}</h3>
          <p className="text-gray-400">
            {t('footer.aboutZippyKitDesc')}
          </p>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.privacyPolicyTitle')}</h3>
          <p className="text-gray-400">
            {t('footer.privacyPolicyDesc')}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>
          <p className="text-gray-400 mb-2">
            {t('footer.contactText')}
          </p>
          <a href="mailto:info@zippykit.com" className="text-blue-400 hover:underline">
            info@zippykit.com
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} ZippyKit. {t('footer.copyright')}
      </div>
    </footer>
  );
}
