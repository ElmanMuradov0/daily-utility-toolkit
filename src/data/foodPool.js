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
    { tr: 'Nohut yemeği ve pirinç pilavı', en: 'Chickpea stew & rice pilaf', budgets: ['low'], moods: ['comfort'] },
    { tr: 'Fırında sebzeli tavuk', en: 'Oven-baked chicken with vegetables', budgets: ['mid'], moods: ['light', 'comfort'] },
    { tr: 'Etli taze fasulye', en: 'Green beans with beef', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Patates oturtma', en: 'Layered potato casserole', budgets: ['low', 'mid'], moods: ['comfort'] },
    { tr: 'Kıymalı makarna', en: 'Pasta with minced meat sauce', budgets: ['low', 'mid'], moods: ['quick', 'comfort'] },
    { tr: 'Fırın mücver ve yoğurt', en: 'Baked zucchini fritters & yogurt', budgets: ['low', 'mid'], moods: ['light'] },
    { tr: 'Zeytinyağlı barbunya', en: 'Olive oil braised borlotti beans', budgets: ['low', 'mid'], moods: ['light', 'comfort'] },
    { tr: 'Taze bezelye yemeği', en: 'Fresh pea stew', budgets: ['low', 'mid'], moods: ['light', 'comfort'] },
    { tr: 'Köfte ve patates püresi', en: 'Meatballs & mashed potatoes', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Sebzeli omlet ve salata', en: 'Veggie omelet & salad', budgets: ['low'], moods: ['quick', 'light'] },
    { tr: 'Fırın makarna', en: 'Baked pasta', budgets: ['low', 'mid'], moods: ['comfort'] },
    { tr: 'Yoğurtlu semizotu ve haşlanmış patates', en: 'Purslane yogurt salad & boiled potatoes', budgets: ['low'], moods: ['light'] },
  ],
  fast: [
    { tr: 'Lahmacun (ince çıtır)', en: 'Crispy lahmacun', budgets: ['low', 'mid'], moods: ['quick'] },
    { tr: 'Adana veya Urfa dürüm', en: 'Adana / Urfa wrap', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Tost ve çay', en: 'Toast & tea', budgets: ['low'], moods: ['quick', 'light'] },
    { tr: 'Hamburger menü', en: 'Burger meal', budgets: ['mid', 'high'], moods: ['quick', 'comfort'] },
    { tr: 'Pizza (ince hamur)', en: 'Thin-crust pizza', budgets: ['mid', 'high'], moods: ['quick', 'comfort'] },
    { tr: 'Sushi seti', en: 'Sushi set', budgets: ['high'], moods: ['light', 'quick'] },
    { tr: 'Köfte ekmek', en: 'Meatball sandwich', budgets: ['low', 'mid'], moods: ['quick'] },
    { tr: 'Tavuk dürüm', en: 'Chicken wrap', budgets: ['low', 'mid'], moods: ['quick'] },
    { tr: 'Et döner pilav üstü', en: 'Beef doner over rice', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Tantuni', en: 'Tantuni wrap', budgets: ['low', 'mid'], moods: ['quick'] },
    { tr: 'Çıtır tavuk menü', en: 'Crispy chicken combo', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Sosisli sandviç', en: 'Hot dog sandwich', budgets: ['low'], moods: ['quick'] },
    { tr: 'Pide (kaşarlı-sucuklu)', en: 'Turkish pide with cheese & sausage', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Tavuklu noodle box', en: 'Chicken noodle box', budgets: ['mid'], moods: ['quick'] },
    { tr: 'Balık ekmek', en: 'Fish sandwich', budgets: ['mid'], moods: ['quick', 'light'] },
    { tr: 'Kumpir', en: 'Stuffed baked potato', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Wrap menü (sebzeli)', en: 'Veggie wrap meal', budgets: ['low', 'mid'], moods: ['quick', 'light'] },
    { tr: 'Çiğ köfte dürüm', en: 'Cig kofte wrap', budgets: ['low'], moods: ['quick', 'light'] },
    { tr: 'Tavuklu quesadilla', en: 'Chicken quesadilla', budgets: ['mid', 'high'], moods: ['quick', 'comfort'] },
  ],
  dessert: [
    { tr: 'Sütlaç', en: 'Rice pudding', budgets: ['low', 'mid'], moods: ['sweet', 'comfort'] },
    { tr: 'Künefe', en: 'Kunefe', budgets: ['mid', 'high'], moods: ['sweet', 'comfort'] },
    { tr: 'Dondurma (fıstıklı)', en: 'Pistachio ice cream', budgets: ['mid'], moods: ['sweet', 'light'] },
    { tr: 'Revani', en: 'Revani semolina cake', budgets: ['low', 'mid'], moods: ['sweet'] },
    { tr: 'Profiterol', en: 'Profiteroles', budgets: ['mid', 'high'], moods: ['sweet'] },
    { tr: 'Meyve tabağı', en: 'Fresh fruit plate', budgets: ['low'], moods: ['sweet', 'light'] },
    { tr: 'Kazandibi', en: 'Caramelized milk pudding', budgets: ['low', 'mid'], moods: ['sweet', 'comfort'] },
    { tr: 'Trileçe', en: 'Tres leches cake', budgets: ['mid'], moods: ['sweet'] },
    { tr: 'Supangle', en: 'Chocolate pudding', budgets: ['low', 'mid'], moods: ['sweet'] },
    { tr: 'Waffle', en: 'Waffle', budgets: ['mid', 'high'], moods: ['sweet'] },
    { tr: 'San Sebastian cheesecake', en: 'Basque cheesecake', budgets: ['high'], moods: ['sweet'] },
    { tr: 'Magnolia', en: 'Magnolia dessert cup', budgets: ['mid'], moods: ['sweet'] },
    { tr: 'Brownie ve dondurma', en: 'Brownie with ice cream', budgets: ['mid', 'high'], moods: ['sweet', 'comfort'] },
    { tr: 'Elmalı tarçınlı crumble', en: 'Apple cinnamon crumble', budgets: ['mid'], moods: ['sweet', 'comfort'] },
    { tr: 'Aşure', en: 'Ashure pudding', budgets: ['low', 'mid'], moods: ['sweet', 'comfort'] },
    { tr: 'Çikolatalı sufle', en: 'Chocolate souffle', budgets: ['mid', 'high'], moods: ['sweet'] },
    { tr: 'Muzlu yulaf tatlısı', en: 'Banana oat dessert', budgets: ['low'], moods: ['sweet', 'light'] },
    { tr: 'Limonlu tart', en: 'Lemon tart', budgets: ['mid', 'high'], moods: ['sweet', 'light'] },
  ],
  salad: [
    { tr: 'Çoban salata', en: 'Shepherd salad', budgets: ['low'], moods: ['light', 'quick'] },
    { tr: 'Roka salatası (parmesanlı)', en: 'Arugula salad with parmesan', budgets: ['mid'], moods: ['light'] },
    { tr: 'Sezar salata', en: 'Caesar salad', budgets: ['mid'], moods: ['light', 'quick'] },
    { tr: 'Quinoa salata', en: 'Quinoa salad', budgets: ['mid'], moods: ['light', 'comfort'] },
    { tr: 'Ton balıklı salata', en: 'Tuna salad', budgets: ['mid'], moods: ['light', 'quick'] },
    { tr: 'Akdeniz salata', en: 'Mediterranean salad', budgets: ['low', 'mid'], moods: ['light'] },
    { tr: 'Avokadolu yeşil salata', en: 'Green salad with avocado', budgets: ['mid', 'high'], moods: ['light'] },
    { tr: 'Nohutlu salata', en: 'Chickpea salad', budgets: ['low'], moods: ['light', 'quick'] },
    { tr: 'Peynirli mevsim salata', en: 'Seasonal salad with cheese', budgets: ['low', 'mid'], moods: ['light'] },
    { tr: 'Kinoalı tavuklu salata', en: 'Chicken quinoa salad', budgets: ['mid', 'high'], moods: ['light'] },
    { tr: 'Yoğurtlu pancar salatası', en: 'Beetroot yogurt salad', budgets: ['low'], moods: ['light'] },
    { tr: 'Hellimli salata', en: 'Halloumi salad', budgets: ['mid', 'high'], moods: ['light', 'comfort'] },
  ],
  soup: [
    { tr: 'Tarhana çorbası', en: 'Tarhana soup', budgets: ['low'], moods: ['comfort', 'quick'] },
    { tr: 'Ezogelin çorbası', en: 'Ezogelin lentil soup', budgets: ['low'], moods: ['comfort', 'quick'] },
    { tr: 'İşkembe veya tutmaç', en: 'Tripe or tutmac soup', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Domates çorbası (grill peynirli)', en: 'Tomato soup with grilled cheese', budgets: ['low', 'mid'], moods: ['comfort', 'quick'] },
    { tr: 'Yayla çorbası', en: 'Yogurt rice soup', budgets: ['low'], moods: ['comfort'] },
    { tr: 'Tavuk suyu şehriye çorbası', en: 'Chicken noodle soup', budgets: ['low', 'mid'], moods: ['comfort', 'quick'] },
    { tr: 'Brokoli çorbası', en: 'Broccoli soup', budgets: ['low', 'mid'], moods: ['light', 'comfort'] },
    { tr: 'Kremalı mantar çorbası', en: 'Creamy mushroom soup', budgets: ['mid'], moods: ['comfort'] },
    { tr: 'Sebze çorbası', en: 'Vegetable soup', budgets: ['low'], moods: ['light', 'quick'] },
    { tr: 'Kelle paça', en: 'Head and trotter soup', budgets: ['high'], moods: ['comfort'] },
    { tr: 'Balkabağı çorbası', en: 'Pumpkin soup', budgets: ['mid'], moods: ['light', 'comfort'] },
    { tr: 'Minestrone', en: 'Minestrone soup', budgets: ['mid'], moods: ['light', 'comfort'] },
  ],
  world: [
    { tr: 'Pad Thai', en: 'Pad Thai', budgets: ['mid'], moods: ['quick'] },
    { tr: 'Burrito bowl', en: 'Burrito bowl', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Ramen (ev yapımı his)', en: 'Ramen-style bowl', budgets: ['mid', 'high'], moods: ['comfort', 'quick'] },
    { tr: 'Falafel wrap', en: 'Falafel wrap', budgets: ['low', 'mid'], moods: ['quick', 'light'] },
    { tr: 'Butter chicken ve pilav', en: 'Butter chicken with rice', budgets: ['mid', 'high'], moods: ['comfort'] },
    { tr: 'Massaman köri', en: 'Massaman curry', budgets: ['mid', 'high'], moods: ['comfort'] },
    { tr: 'Pho noodle çorbası', en: 'Pho noodle soup', budgets: ['mid', 'high'], moods: ['light', 'comfort'] },
    { tr: 'Chicken teriyaki bowl', en: 'Chicken teriyaki bowl', budgets: ['mid'], moods: ['quick', 'comfort'] },
    { tr: 'Shakshuka', en: 'Shakshuka', budgets: ['low', 'mid'], moods: ['comfort', 'quick'] },
    { tr: 'Fish and chips', en: 'Fish and chips', budgets: ['mid', 'high'], moods: ['comfort'] },
    { tr: 'Taco trio', en: 'Taco trio', budgets: ['mid'], moods: ['quick'] },
    { tr: 'Poke bowl', en: 'Poke bowl', budgets: ['high'], moods: ['light', 'quick'] },
    { tr: 'Lasagna', en: 'Lasagna', budgets: ['mid', 'high'], moods: ['comfort'] },
    { tr: 'Gnocchi pesto', en: 'Gnocchi with pesto', budgets: ['mid', 'high'], moods: ['comfort'] },
    { tr: 'Paella', en: 'Paella', budgets: ['high'], moods: ['comfort'] },
    { tr: 'Bibimbap', en: 'Bibimbap', budgets: ['mid', 'high'], moods: ['light', 'comfort'] },
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
