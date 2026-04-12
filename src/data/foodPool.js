/**
 * Food suggestions: budgets low | mid | high; moods quick | comfort | light | sweet
 * @typedef {{ tr: string, en: string, budgets: ('low'|'mid'|'high')[], moods: ('quick'|'comfort'|'light'|'sweet')[] }} FoodItem
 */

/** @type {Record<string, FoodItem[]>} */
export const FOOD_BY_CATEGORY = {
  home: [
    { tr: 'Mercimek çorbası ve bulgur pilavı', en: 'Lentil soup & bulgur pilaf', budgets: ['low'], moods: ['comfort', 'quick'] },
    { tr: 'Karnıyarık ve cacık', en: 'Stuffed eggplant & cucumber yogurt', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Tavuk haşlama ve sebze', en: 'Poached chicken & vegetables', budgets: ['mid'], moods: ['light', 'comfort'] },
    { tr: 'Mantı ve yoğurt', en: 'Turkish manti with yogurt', budgets: ['mid', 'high'], moods: ['comfort'] },
    { tr: 'Zeytinyağlı yaprak sarma', en: 'Stuffed grape leaves (olive oil)', budgets: ['low', 'mid'], moods: ['light', 'comfort'] },
    { tr: 'İmam bayıldı', en: 'Imam bayildi (stuffed eggplant)', budgets: ['low', 'mid'], moods: ['light', 'comfort'] },
    { tr: 'Kuru fasulye pilav', en: 'White beans & rice', budgets: ['low'], moods: ['comfort', 'quick'] },
  ],
  fast: [
    { tr: 'Lahmacun (ince çıtır)', en: 'Crispy lahmacun', budgets: ['low', 'mid'], moods: ['quick'] },
    { tr: 'Adana veya Urfa dürüm', en: 'Adana / Urfa wrap', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Tost ve çay', en: 'Toast & tea', budgets: ['low'], moods: ['quick', 'light'] },
    { tr: 'Hamburger menü', en: 'Burger meal', budgets: ['mid', 'high'], moods: ['quick', 'comfort'] },
    { tr: 'Pizza (ince hamur)', en: 'Thin-crust pizza', budgets: ['mid', 'high'], moods: ['quick', 'comfort'] },
    { tr: 'Sushi seti', en: 'Sushi set', budgets: ['high'], moods: ['light', 'quick'] },
    { tr: 'Köfte ekmek', en: 'Meatball sandwich', budgets: ['low', 'mid'], moods: ['quick'] },
  ],
  dessert: [
    { tr: 'Sütlaç', en: 'Rice pudding', budgets: ['low', 'mid'], moods: ['sweet', 'comfort'] },
    { tr: 'Künefe', en: 'Kunefe', budgets: ['mid', 'high'], moods: ['sweet', 'comfort'] },
    { tr: 'Dondurma (fıstıklı)', en: 'Pistachio ice cream', budgets: ['mid'], moods: ['sweet', 'light'] },
    { tr: 'Revani', en: 'Revani semolina cake', budgets: ['low', 'mid'], moods: ['sweet'] },
    { tr: 'Profiterol', en: 'Profiteroles', budgets: ['mid', 'high'], moods: ['sweet'] },
    { tr: 'Meyve tabağı', en: 'Fresh fruit plate', budgets: ['low'], moods: ['sweet', 'light'] },
  ],
  salad: [
    { tr: 'Çoban salata', en: 'Shepherd salad', budgets: ['low'], moods: ['light', 'quick'] },
    { tr: 'Roka salatası (parmesanlı)', en: 'Arugula salad with parmesan', budgets: ['mid'], moods: ['light'] },
    { tr: 'Sezar salata', en: 'Caesar salad', budgets: ['mid'], moods: ['light', 'quick'] },
    { tr: 'Quinoa salata', en: 'Quinoa salad', budgets: ['mid'], moods: ['light', 'comfort'] },
  ],
  soup: [
    { tr: 'Tarhana çorbası', en: 'Tarhana soup', budgets: ['low'], moods: ['comfort', 'quick'] },
    { tr: 'Ezogelin çorbası', en: 'Ezogelin lentil soup', budgets: ['low'], moods: ['comfort', 'quick'] },
    { tr: 'İşkembe veya tutmaç', en: 'Tripe or tutmac soup', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Domates çorbası (grill peynirli)', en: 'Tomato soup with grilled cheese', budgets: ['low', 'mid'], moods: ['comfort', 'quick'] },
  ],
  world: [
    { tr: 'Pad Thai', en: 'Pad Thai', budgets: ['mid'], moods: ['quick'] },
    { tr: 'Burrito bowl', en: 'Burrito bowl', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Ramen (ev yapımı his)', en: 'Ramen-style bowl', budgets: ['mid', 'high'], moods: ['comfort', 'quick'] },
    { tr: 'Falafel wrap', en: 'Falafel wrap', budgets: ['low', 'mid'], moods: ['quick', 'light'] },
  ],
}

export const CATEGORY_IDS = ['home', 'fast', 'dessert', 'salad', 'soup', 'world']

/**
 * @param {string[]} categoryIds
 * @param {'low'|'mid'|'high'} budget
 * @param {'any'|'quick'|'comfort'|'light'|'sweet'} mood
 * @param {'tr'|'en'} lang
 * @returns {string | null}
 */
export function pickRandomMeal(categoryIds, budget, mood, lang) {
  const cats = categoryIds.length ? categoryIds : CATEGORY_IDS
  /** @type {FoodItem[]} */
  let pool = []
  for (const c of cats) {
    const list = FOOD_BY_CATEGORY[c]
    if (list) pool = pool.concat(list)
  }
  if (!pool.length) return null

  let cand = pool.filter((item) => item.budgets.includes(budget))
  if (!cand.length) cand = pool

  if (mood !== 'any') {
    const byMood = cand.filter((item) => item.moods.includes(mood))
    if (byMood.length) cand = byMood
  }

  const pick = cand[Math.floor(Math.random() * cand.length)]
  return lang === 'tr' ? pick.tr : pick.en
}
