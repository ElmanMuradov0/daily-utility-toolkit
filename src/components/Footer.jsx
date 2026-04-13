import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

// Sisteminizi bozmamak için Footer'a özel ufak çeviri sözlüğü
const footerTexts = {
  tr: {
    aboutTitle: 'Hakkımızda',
    aboutDesc: 'ZippyKit, projelerinizi hızla hayata geçirmeniz için tasarlanmış modern bir araçtır.',
    privacyTitle: 'Gizlilik Politikası',
    privacyDesc: 'Verilerinizin güvenliği bizim için önemlidir. Daha fazla bilgi için gizlilik politikamızı okuyun.',
    contactTitle: 'İletişim',
    contactText: 'Sorularınız veya destek için bize ulaşabilirsiniz.',
    copyright: 'Tüm hakları saklıdır.'
  },
  en: {
    aboutTitle: 'About ZippyKit',
    aboutDesc: 'ZippyKit is a modern tool designed to bring your web projects to life quickly.',
    privacyTitle: 'Privacy Policy',
    privacyDesc: 'Your data security is important to us. Read our privacy policy for more information.',
    contactTitle: 'Contact',
    contactText: 'You can reach out to us for questions or support.',
    copyright: 'All rights reserved.'
  }
};

export default function Footer() {
  const { lang } = useLanguage(); // Sizin kurduğunuz dil sisteminden aktif dili alıyoruz
  const f = footerTexts[lang] || footerTexts.tr;

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About ZippyKit */}
        <div className="break-words">
          <h3 className="text-lg font-semibold mb-4">{f.aboutTitle}</h3>
          <p className="text-gray-400 leading-relaxed">
            {f.aboutDesc}
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="break-words">
          <h3 className="text-lg font-semibold mb-4">{f.privacyTitle}</h3>
          <p className="text-gray-400 leading-relaxed">
            {f.privacyDesc}
          </p>
        </div>

        {/* Contact */}
        <div className="break-words">
          <h3 className="text-lg font-semibold mb-4">{f.contactTitle}</h3>
          <p className="text-gray-400 mb-2 leading-relaxed">
            {f.contactText}
          </p>
          <a href="mailto:info@zippykit.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200">
            info@zippykit.com
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 pb-6 border-t border-gray-700 pt-6 px-4">
        &copy; {new Date().getFullYear()} ZippyKit. {f.copyright}
      </div>
    </footer>
  );
}
