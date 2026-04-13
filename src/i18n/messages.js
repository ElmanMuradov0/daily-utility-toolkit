/** @typedef {'tr' | 'en'} Lang */

/** @type {Record<Lang, Record<string, unknown>>} */
export const messages = {
  tr: {
    home: {
      badge: 'İsviçre tarzı araç seti',
      title: 'Günlük Yardımcı Seti',
      subtitle:
        'İhtiyaç Duyduğun Her Şey, Tek Yerde — Hesap Yok, Sunucu Yok.',
      footer:
        'Tüm işlemler tarayıcında kalır; hesap veya sunucu gerektirmez.',
      launchTool: 'Aracı aç',
      toolsAria: 'Araçlar',
    },
    shell: { home: 'Ana sayfa' },
    lang: { tr: 'Türkçe', en: 'English', label: 'Dil' },
    common: {
      loading: 'Araç yükleniyor…',
      lineCountLabel: 'Alan sayısı',
      fieldN: 'Alan {n}',
    },
    modal: { close: 'Kapat' }, // modal objesi doğrudan dil objesi altında
    tools: {
      smartRaffler: {
        title: 'Akıllı çekiliş',
        desc: 'Özel isim listenden kazanan seç',
      },
      decisionWheel: {
        title: 'Karar çarkı',
        desc: 'Karar veremiyor musun? Çarkı çevir!',
      },
      foodWhat: {
        title: 'Ne yesek?',
        desc: 'Kategori, bütçe ve moda göre yemek önerisi',
      },
      dice: {
        title: 'Zar at',
        desc: 'İstediğin sayıda zar at, sonucu tek ekranda gör',
      },
      countdown: {
        title: 'Geri sayım',
        desc: 'Önemli anlara kalan süreyi izle',
      },
      unitConverter: {
        title: 'Birim dönüştürücü',
        desc: 'Mutfak veya seyahat için hızlı dönüşüm',
      },
      pomodoro: {
        title: 'Pomodoro zamanlayıcı',
        desc: 'Odak ve mola sürelerini kendin belirle',
      },
      bmi: {
        title: 'VKE hesaplayıcı',
        desc: 'Boy ve kilo ile vücut kitle endeksi ve gösterge',
      },
      colorPicker: {
        title: 'Renk seçici',
        desc: 'Hex ve RGB değerlerini anında kopyala',
      },
      textCounter: {
        title: 'Kelime ve karakter sayacı',
        desc: 'Metin uzunluğunu sosyal medya öncesi kontrol et',
      },
    },
    raffler: {
      title: 'Akıllı çekiliş',
      desc: 'Soldan kaç isim alanı istediğini seç; her kutuya bir isim yaz.',
      slotSection: 'İsimler',
      listLabel: 'İsim listesi',
      listPh: 'İsim yazın…',
      draw: 'Kazananı seç',
      loaded: '{n} isim',
      winner: 'Kazanan',
    },
    wheel: {
      title: 'Karar çarkı',
      desc: 'Alan sayısını seç, her kutuya bir seçenek yaz. Çark üstündeki renklerle eşleşir.',
      slotSection: 'Çark dilimleri',
      legendTitle: 'Çarktaki seçenekler',
      choices: 'Seçenekler',
      fieldPh: 'Seçenek yazın…',
      spin: 'Çevir',
      result: '{choice}',
      hint: 'Öneri almak için çarkı çevir.',
      needTwo: 'Çarkı kullanmak için en az iki seçenek yaz.',
      encore: 'tekrar',
      wheelAria: 'Karar çarkı',
      modalTitle: 'Çarkın seçimi',
    },
    countdown: {
      title: 'Geri sayım',
      desc: 'Hedef tarih ve saati seç; kalan süre bu sekmede güncellenir.',
      target: 'Hedef tarih ve saat',
      days: 'Gün',
      hours: 'Saat',
      minutes: 'Dakika',
      seconds: 'Saniye',
      done: 'Zaman geldi.',
      running: 'Kalan süre',
    },
    units: {
      title: 'Birim dönüştürücü',
      desc: 'Uzunluk ve sıcaklık birimleri arasında geç; yazdıkça karşılıklar güncellenir.',
      length: 'Uzunluk',
      temp: 'Sıcaklık',
      from: 'Kaynak',
      equivalents: 'Karşılıklar',
      lengthUnits: {
        m: 'Metre',
        km: 'Kilometre',
        mi: 'Mil',
        ft: 'Fit',
      },
      tempUnits: {
        c: 'Santigrat',
        f: 'Fahrenheit',
        k: 'Kelvin',
      },
    },
    pomodoro: {
      title: 'Pomodoro zamanlayıcı',
      desc: 'Odak ve mola sürelerini dakika ve saniye olarak ayarla; tur bitince bildirim alırsın.',
      work: 'Odak',
      break: 'Kısa mola',
      start: 'Başlat',
      pause: 'Duraklat',
      reset: 'Sıfırla',
      workBlock: 'Odak süresi (dk : sn)',
      breakBlock: 'Mola süresi (dk : sn)',
      minutes: 'Dakika',
      apply: 'Süreleri uygula',
      modalAfterWorkTitle: 'Odak turu bitti',
      modalAfterWorkBody: 'Kısa bir mola ver; hazır olunca devam edebilirsin.',
      modalAfterBreakTitle: 'Mola bitti',
      modalAfterBreakBody: 'Yeni bir odak turuna başlayabilirsin.',
    },
    food: {
      title: 'Ne yesek?',
      desc: 'Kategori, bütçe ve mod seç; sana rastgele bir öneri üretelim.',
      categories: 'Kategoriler',
      budgetTitle: 'Bütçe hissi',
      moodTitle: 'Mod',
      cta: 'Bana öner',
      modalTitle: 'Bugünkü öneri',
      modalHint: 'Beğenmediysen tekrar dene — her seferinde farklı bir seçenek çıkabilir.',
      cat: {
        home: 'Ev yemeği',
        fast: 'Fast food',
        dessert: 'Tatlı',
        salad: 'Salata',
        soup: 'Çorba',
        world: 'Dünya mutfağı',
      },
      budget: {
        low: 'Ekonomik',
        mid: 'Orta',
        high: 'Daha özenli / özel',
      },
      mood: {
        any: 'Fark etmez',
        quick: 'Hızlı',
        comfort: 'Doyurucu',
        light: 'Hafif',
        sweet: 'Tatlı molası',
      },
    },
    dice: {
      title: 'Zar at',
      desc: 'Zar sayısını seç, at; kutular kısa süre hareket eder, sonuç pencerede açılır.',
      countLabel: 'Zar sayısı',
      countOption: '{n} zar',
      roll: 'Zarı at',
      previewHint: 'Atış öncesi önizleme',
      rolling: 'Atılıyor…',
      modalTitle: 'Atış sonucu',
      sum: 'Toplam: {sum}',
    },
    bmi: {
      title: 'Vücut kitle endeksi (VKE)',
      desc: 'Boy (cm) ve kilo (kg) gir; VKE ve basit bir gösterge çıkar.',
      height: 'Boy (cm)',
      heightPh: 'Örn. 175',
      weight: 'Kilo (kg)',
      weightPh: 'Örn. 72',
      empty: 'Hesaplamak için boy ve kilo gir.',
      disclaimer:
        'Bu araç bilgilendirme amaçlıdır; tıbbi teşhis yerine geçmez.',
      zone: {
        thin: 'Zayıf aralığı',
        normal: 'Normal aralık',
        over: 'Kilolu aralığı',
        obese: 'Obezite riski yüksek aralık',
      },
    },
    color: {
      title: 'RGB / Hex renk seçici',
      desc: 'Renk seç, kodları anında panoya kopyala.',
      native: 'Renk seç',
      hex: 'Hex',
      rgb: 'RGB',
      copyHex: 'Hex kopyala',
      copyRgb: 'RGB kopyala',
      copiedHex: 'Hex kopyalandı.',
      copiedRgb: 'RGB kopyalandı.',
      tip: 'Tarayıcının renk seçicisiyle hızlı seçim yapabilir veya hex değerini elle düzenleyebilirsin.',
    },
    textcounter: {
      title: 'Kelime ve karakter sayacı',
      desc: 'Kaç metin alanı istediğini seç; kutular birleştirilerek kelime ve karakter sayılır.',
      slotSection: 'Metin alanları',
      label: 'Metin',
      placeholder: 'Bu alana metin yazın…',
      words: 'Kelime',
      chars: 'Karakter (boşluklu)',
      charsNoSpace: 'Karakter (boşluksuz)',
      sentences: 'Cümle',
    },
  },
  en: {
    home: {
      badge: 'Swiss-style toolkit',
      title: 'Daily Utility Toolkit',
      subtitle: 'Your Essentials, Zero Hassle — No Accounts, No Servers.',
      footer: 'All Processing Stays In Your Browser — No Accounts, No Servers.',
      launchTool: 'Launch tool',
      toolsAria: 'Tools',
    },
    shell: { home: 'Home' },
    lang: { tr: 'Türkçe', en: 'English', label: 'Language' },
    common: {
      loading: 'Loading tool…',
      lineCountLabel: 'Number of fields',
      fieldN: 'Field {n}',
    },
    modal: { close: 'Close' }, // modal objesi doğrudan dil objesi altında
    tools: {
      smartRaffler: {
        title: 'Smart Raffler',
        desc: 'Pick winners from a custom name list',
      },
      decisionWheel: {
        title: 'Decision Wheel',
        desc: "Can't decide? Spin the wheel!",
      },
      foodWhat: {
        title: 'What should we eat?',
        desc: 'Pick categories, budget, and mood — get a meal idea',
      },
      dice: {
        title: 'Dice roller',
        desc: 'Roll up to six dice and see the total in one glance',
      },
      countdown: {
        title: 'Countdown',
        desc: 'Watch time count down to important moments',
      },
      unitConverter: {
        title: 'Unit Converter',
        desc: 'Quick conversion for kitchen or travel',
      },
      pomodoro: {
        title: 'Pomodoro Timer',
        desc: 'Set work and break lengths in minutes and seconds',
      },
      bmi: {
        title: 'BMI calculator',
        desc: 'Height and weight to BMI with a simple gauge',
      },
      colorPicker: {
        title: 'RGB / Hex color picker',
        desc: 'Pick a color and copy codes instantly',
      },
      textCounter: {
        title: 'Word and character counter',
        desc: 'Paste text to count words, characters, and sentences',
      },
    },
    raffler: {
      title: 'Smart Raffler',
      desc: 'Pick how many name fields you need, then type one name per box.',
      slotSection: 'Names',
      listLabel: 'Name list',
      listPh: 'Type a name…',
      draw: 'Draw winner',
      loaded: '{n} name(s)',
      winner: 'Winner',
    },
    wheel: {
      title: 'Decision Wheel',
      desc: 'Choose how many options, fill each box — colors match the wheel slices.',
      slotSection: 'Wheel slices',
      legendTitle: 'On the wheel',
      choices: 'Choices',
      fieldPh: 'Type an option…',
      spin: 'Spin',
      result: '{choice}',
      hint: 'Spin the wheel to get a suggestion.',
      needTwo: 'Enter at least two choices to use the wheel.',
      encore: 'again',
      wheelAria: 'Decision wheel',
      modalTitle: 'The wheel chose',
    },
    countdown: {
      title: 'Countdown',
      desc: 'Pick a future moment — the remaining time updates every second in this tab.',
      target: 'Target date & time',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      done: 'That moment has arrived.',
      running: 'Time remaining',
    },
    units: {
      title: 'Unit Converter',
      desc: 'Switch between common length and temperature units. Values update as you type.',
      length: 'Length',
      temp: 'Temperature',
      from: 'From',
      equivalents: 'Equivalents',
      lengthUnits: {
        m: 'Meters',
        km: 'Kilometers',
        mi: 'Miles',
        ft: 'Feet',
      },
      tempUnits: {
        c: 'Celsius',
        f: 'Fahrenheit',
        k: 'Kelvin',
      },
    },
    pomodoro: {
      title: 'Pomodoro Timer',
      desc: 'Configure work and break in minutes and seconds; we nudge you when a phase ends.',
      work: 'Deep work',
      break: 'Short break',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      workBlock: 'Work (min : sec)',
      breakBlock: 'Break (min : sec)',
      minutes: 'Minutes',
      apply: 'Apply durations',
      modalAfterWorkTitle: 'Work block finished',
      modalAfterWorkBody: 'Take a short break — stretch, water, then continue when ready.',
      modalAfterBreakTitle: 'Break finished',
      modalAfterBreakBody: 'Ready for another focused work round.',
    },
    food: {
      title: 'What should we eat?',
      desc: 'Choose categories, budget, and mood — we suggest a meal at random.',
      categories: 'Categories',
      budgetTitle: 'Budget feel',
      moodTitle: 'Mood',
      cta: 'Suggest for me',
      modalTitle: 'Today’s pick',
      modalHint: 'Not feeling it? Roll again — you may get a different idea.',
      cat: {
        home: 'Home cooking',
        fast: 'Fast food',
        dessert: 'Dessert',
        salad: 'Salad',
        soup: 'Soup',
        world: 'World cuisine',
      },
      budget: {
        low: 'Budget-friendly',
        mid: 'Mid-range',
        high: 'Treat yourself',
      },
      mood: {
        any: 'No preference',
        quick: 'Quick',
        comfort: 'Hearty',
        light: 'Light',
        sweet: 'Sweet tooth',
      },
    },
    dice: {
      title: 'Dice roller',
      desc: 'Pick dice count, roll — boxes wobble briefly, then the result opens in a dialog.',
      countLabel: 'Number of dice',
      countOption: '{n} dice',
      roll: 'Roll',
      previewHint: 'Preview before roll',
      rolling: 'Rolling…',
      modalTitle: 'Roll result',
      sum: 'Total: {sum}',
    },
    bmi: {
      title: 'BMI calculator',
      desc: 'Enter height (cm) and weight (kg) for BMI and a simple gauge.',
      height: 'Height (cm)',
      heightPh: 'e.g. 175',
      weight: 'Weight (kg)',
      weightPh: 'e.g. 72',
      empty: 'Enter height and weight to calculate.',
      disclaimer:
        'For information only — not a substitute for medical advice.',
      zone: {
        thin: 'Underweight range',
        normal: 'Normal range',
        over: 'Overweight range',
        obese: 'Obesity risk range',
      },
    },
    color: {
      title: 'RGB / Hex color picker',
      desc: 'Pick a color and copy hex or RGB to the clipboard.',
      native: 'Pick color',
      hex: 'Hex',
      rgb: 'RGB',
      copyHex: 'Copy hex',
      copyRgb: 'Copy RGB',
      copiedHex: 'Hex copied.',
      copiedRgb: 'RGB copied.',
      tip: 'Use the native picker for speed, or fine-tune the hex value manually.',
    },
    textcounter: {
      title: 'Word and character counter',
      desc: 'Choose how many text boxes you want; counts combine all filled fields.',
      slotSection: 'Text fields',
      label: 'Text',
      placeholder: 'Type in this field…',
      words: 'Words',
      chars: 'Characters (with spaces)',
      charsNoSpace: 'Characters (no spaces)',
      sentences: 'Sentences',
    },
  },
}

/**
 * @param {Lang} lang
 * @param {string[]} path
 * @param {Record<string, string | number>} [vars]
 */
export function translate(lang, path, vars) {
  /** @type {unknown} */
  let cur = messages[lang]
  for (const key of path) {
    if (cur && typeof cur === 'object' && key in cur) {
      cur = /** @type {Record<string, unknown>} */ (cur)[key]
    } else {
      cur = undefined
      break
    }
  }
  if (typeof cur !== 'string') {
    const fallback = messages.en
    let c = fallback
    for (const key of path) {
      if (c && typeof c === 'object' && key in c) {
        c = /** @type {Record<string, unknown>} */ (c)[key]
      } else {
        return path.join('.')
      }
    }
    cur = typeof c === 'string' ? c : path.join('.')
  }
  if (!vars) return cur
  return Object.keys(vars).reduce(
    (s, k) => s.replaceAll(`{${k}}`, String(vars[k])),
    cur,
  )
}
