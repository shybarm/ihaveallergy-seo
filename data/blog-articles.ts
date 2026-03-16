export type BlogCategory =
  | "food-allergy"
  | "testing"
  | "rights"
  | "babies"
  | "respiratory"
  | "general";

export type BlogArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  category: BlogCategory;
  categoryLabel: string;
  readingTime: number;
  publishedAt: string;
};

export const blogCategories: Record<
  BlogCategory,
  { label: string }
> = {
  "food-allergy": { label: "אלרגיה למזון" },
  testing: { label: "בדיקות אלרגיה" },
  rights: { label: "זכויות והיערכות" },
  babies: { label: "תינוקות וילדים" },
  respiratory: { label: "נשימה ונזלת אלרגית" },
  general: { label: "מידע כללי" },
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "ma-zeh-food-allergy",
    title: "איך מזהים אלרגיה למזון בילדים?",
    metaDescription:
      "מדריך בסיסי להורים: תסמינים, תגובות מהירות, ומתי כדאי לפנות לבירור אלרגיה למזון.",
    category: "food-allergy",
    categoryLabel: blogCategories["food-allergy"].label,
    readingTime: 6,
    publishedAt: "2026-01-12",
  },
  {
    slug: "allergy-tests-for-kids",
    title: "בדיקות אלרגיה לילדים – מתי צריך ומה בודקים?",
    metaDescription:
      "סקירה פשוטה של בדיקות עור, בדיקות דם ובירור קליני אצל רופא אלרגיה.",
    category: "testing",
    categoryLabel: blogCategories.testing.label,
    readingTime: 7,
    publishedAt: "2026-01-18",
  },
  {
    slug: "rights-at-school-allergic-child",
    title: "ילד אלרגי בגן או בבית הספר – מה חשוב להכין מראש?",
    metaDescription:
      "היערכות נכונה למסגרת חינוכית: מסמכים, תקשורת עם הצוות ותוכנית פעולה.",
    category: "rights",
    categoryLabel: blogCategories.rights.label,
    readingTime: 5,
    publishedAt: "2026-01-22",
  },
  {
    slug: "baby-first-allergens",
    title: "טעימות ראשונות וחשיפה לאלרגנים – מה חשוב לדעת?",
    metaDescription:
      "מתי מתחילים, איך חושפים נכון לאלרגנים נפוצים, ומתי צריך ייעוץ רפואי.",
    category: "babies",
    categoryLabel: blogCategories.babies.label,
    readingTime: 8,
    publishedAt: "2026-01-28",
  },
  {
    slug: "allergic-rhinitis-kids",
    title: "נזלת אלרגית בילדים – איך מבדילים מצינון?",
    metaDescription:
      "הבדלים בין נזלת אלרגית לבין צינון, תסמינים בולטים ואפשרויות טיפול.",
    category: "respiratory",
    categoryLabel: blogCategories.respiratory.label,
    readingTime: 6,
    publishedAt: "2026-02-02",
  },
  {
    slug: "when-to-see-allergist",
    title: "מתי כדאי לפנות לרופא אלרגיה?",
    metaDescription:
      "סימנים מרכזיים שמצדיקים בירור מסודר אצל מומחה לאלרגיה ואימונולוגיה.",
    category: "general",
    categoryLabel: blogCategories.general.label,
    readingTime: 4,
    publishedAt: "2026-02-10",
  },
];
