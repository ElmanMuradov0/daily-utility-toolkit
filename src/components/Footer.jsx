import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage';

// Sisteminizi bozmamak için Footer'a özel ufak çeviri sözlüğü
const footerTexts = {
  tr: {
    aboutTitle: 'Hakkımızda',
    aboutDesc: 'Daily Utility Toolkit, gündelik dijital işleri hızlandırmak için tasarlanmış pratik bir araç setidir.',
    privacyTitle: 'Gizlilik Politikası',
    privacyDesc: 'Veri minimizasyonu yaklaşımını benimsiyoruz. Ayrıntılar için gizlilik sayfamızı inceleyin.',
    contactTitle: 'İletişim',
    contactText: 'Sorularınız veya destek için bize ulaşabilirsiniz.',
    termsTitle: 'Kullanım Şartları',
    copyright: 'Tüm hakları saklıdır.'
  },
  en: {
    aboutTitle: 'About Daily Utility Toolkit',
    aboutDesc: 'Daily Utility Toolkit is a practical set of tools designed to speed up everyday digital tasks.',
    privacyTitle: 'Privacy Policy',
    privacyDesc: 'We follow a data-minimization approach. Check our privacy page for details.',
    contactTitle: 'Contact',
    contactText: 'You can reach out to us for questions or support.',
    termsTitle: 'Terms of Use',
    copyright: 'All rights reserved.'
  }
};

export default function Footer() {
  const { lang } = useLanguage(); // Sizin kurduğunuz dil sisteminden aktif dili alıyoruz
  const f = footerTexts[lang] || footerTexts.tr;

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About ZippyKit */}
        <div className="break-words">
          <h3 className="text-lg font-semibold mb-4">{f.aboutTitle}</h3>
          <p className="text-gray-400 leading-relaxed">
            {f.aboutDesc}
          </p>
          <Link to="/about" className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline">
            {lang === 'tr' ? 'Sayfaya git' : 'Open page'}
          </Link>
        </div>

        {/* Privacy Policy */}
        <div className="break-words">
          <h3 className="text-lg font-semibold mb-4">{f.privacyTitle}</h3>
          <p className="text-gray-400 leading-relaxed">
            {f.privacyDesc}
          </p>
          <Link to="/privacy" className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline">
            {lang === 'tr' ? 'Sayfaya git' : 'Open page'}
          </Link>
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
          <div>
            <Link to="/contact" className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline">
              {lang === 'tr' ? 'İletişim sayfası' : 'Contact page'}
            </Link>
          </div>
        </div>

        <div className="break-words">
          <h3 className="text-lg font-semibold mb-4">{f.termsTitle}</h3>
          <p className="text-gray-400 leading-relaxed">
            {lang === 'tr'
              ? 'Site kullanım koşulları ve sorumluluk sınırlarını inceleyin.'
              : 'Review site usage terms and liability limits.'}
          </p>
          <Link to="/terms" className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline">
            {lang === 'tr' ? 'Sayfaya git' : 'Open page'}
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 pb-6 border-t border-gray-700 pt-6 px-4">
        &copy; {new Date().getFullYear()} Daily Utility Toolkit. {f.copyright}
      </div>
    </footer>
  );
}
