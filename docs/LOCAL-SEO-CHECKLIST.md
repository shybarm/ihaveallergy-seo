# Local SEO Checklist — ד״ר אנה ברמלי / ihaveallergy.com

## Overview
This checklist covers all local SEO actions for ranking `seo.ihaveallergy.com`
and `ihaveallergy.com` in local searches across central Israel.

---

## 1. On-Site Technical SEO ✅ (Completed)

- [x] Canonical URLs: all pages use `seo.ihaveallergy.com`
- [x] JSON-LD structured data on all pages:
  - MedicalWebPage, FAQPage, BreadcrumbList on landing pages
  - Physician, MedicalBusiness on dr-anna-brameli and about pages
  - MedicalClinic + areaServed on all /areas/* pages
- [x] hreflang: `he` + `x-default` in layout.tsx
- [x] Sitemap: all 48 static pages + 14 blog articles
- [x] robots.txt: sitemaps declared
- [x] OpenGraph + Twitter cards on all pages
- [x] `inLanguage: "he-IL"` on all Hebrew pages

---

## 2. Local Pages ✅ (Completed)

- [x] `/areas/hod-hasharon` — primary clinic location with Google Maps
- [x] `/areas/herzliya` — 10 min drive
- [x] `/areas/ramat-hasharon` — 12 min drive
- [x] `/areas/kfar-saba` — 15 min drive
- [x] `/areas/raanana` — 15 min drive
- [x] `/areas/netanya` — 20 min drive
- [x] `/areas/tel-aviv` — 25 min drive
- [x] `/areas/petah-tikva` — 20 min drive
- [x] `/areas` — index page with map + all cities

Each area page includes:
- [x] MedicalClinic schema with `areaServed` city
- [x] BreadcrumbList (home → areas → city)
- [x] Driving directions from that city
- [x] Google Maps iframe
- [x] NAP (Name, Address, Phone) matching GBP exactly

---

## 3. Google Business Profile (GBP) 🔲 (Action Required)

See full instructions in GOOGLE-BUSINESS-PROFILE.md

- [ ] Claim and verify GBP listing
- [ ] Complete all profile fields
- [ ] Add 10+ photos
- [ ] Add all services
- [ ] Start weekly posting cadence
- [ ] Request first reviews from patients

---

## 4. NAP Citations 🔲 (Action Required)

Priority order (do in this sequence):

| Platform | URL | Status |
|----------|-----|--------|
| Google Business Profile | business.google.com | 🔲 |
| דפי זהב | d.co.il | 🔲 |
| Waze | biz.waze.com | 🔲 |
| Apple Maps Connect | mapsconnect.apple.com | 🔲 |
| Findoc | findoc.co.il | 🔲 |
| BizPortal | bizportal.co.il | 🔲 |
| רופא.net | rofe.net | 🔲 |
| Doctify | doctify.com/il | 🔲 |

**Critical:** NAP must be identical everywhere:
```
ד״ר אנה ברמלי — קליניקת אלרגיה ואימונולוגיה
טווס 3, הוד השרון 4501303
054-580-8008
```

---

## 5. Google Search Console 🔲 (Action Required)

- [ ] Verify `seo.ihaveallergy.com` in GSC
- [ ] Submit sitemap: `https://seo.ihaveallergy.com/sitemap.xml`
- [ ] Monitor Core Web Vitals (target: all green)
- [ ] Check index coverage (target: all 48+ pages indexed)
- [ ] Monitor local queries: "אלרגולוג הוד השרון", "רופא אלרגיה שרון"

---

## 6. Content SEO ✅ / 🔲 (Partially Complete)

### Completed Landing Pages
- [x] `/alergiya-beyeladim` — אלרגיה בילדים
- [x] `/alergia-lemazon` — אלרגיות מזון
- [x] `/atopic-dermatitis` — אטופיק דרמטיטיס
- [x] `/alergia-lechalav` — אלרגיה לחלב
- [x] `/alergia-lebotnim` — אלרגיה לבוטנים
- [x] `/alergia-lesumsum` — אלרגיה לשומשום
- [x] `/anaphylaxis` — אנפילקסיס ואפיפן
- [x] `/immunotherapy` — אימונותרפיה

### Future Pages to Create
- [ ] `/rhinitis` — ריניטיס אלרגי (קדחת השחת)
- [ ] `/bee-sting-allergy` — אלרגיה לעקיצת דבורה
- [ ] `/alergia-labeytza` — אלרגיה לביצה
- [ ] `/alergia-lachita` — אלרגיה לחיטה / צליאק
- [ ] `/eosinophilic-esophagitis` — EoE
- [ ] `/contact-dermatitis` — דרמטיטיס מגע

### Blog Content Gaps
- [ ] "אלרגולוג מומלץ בהוד השרון" — local intent post
- [ ] "קליניקת אלרגיה פרטית לעומת קופת חולים" — commercial intent
- [ ] "כמה עולה ייעוץ אלרגולוג פרטי בישראל" — high intent

---

## 7. Schema Markup Health Check

Run these tools monthly:
- **Google Rich Results Test:** `search.google.com/test/rich-results`
- **Schema.org Validator:** `validator.schema.org`
- **Bing Webmaster Tools:** Structured data reports

Critical schemas to verify:
- [ ] Physician schema on `/dr-anna-brameli`
- [ ] FAQPage renders in Google rich results
- [ ] MedicalClinic (GBP equivalent) on `/areas/hod-hasharon`
- [ ] BreadcrumbList shows in search results

---

## 8. Page Speed & Core Web Vitals

Check monthly at `pagespeed.web.dev`:
- **LCP** target: < 2.5s
- **CLS** target: < 0.1
- **INP** target: < 200ms

Current issues to watch:
- Google Maps iframes on area pages — load lazily ✅ (already set)
- Images: ensure all have `width` and `height` attributes
- Fonts: preload critical Hebrew fonts

---

## 9. Internal Linking Audit

Each new page should link to:
- [ ] Relevant specialty pages (e.g., milk allergy → immunotherapy)
- [ ] `/dr-anna-brameli` (physician authority)
- [ ] Blog articles on the same topic
- [ ] `/areas/hod-hasharon` (clinic location)
- [ ] CTA to `ihaveallergy.com/book`

---

## 10. Monthly SEO Tasks

| Task | Frequency | Owner |
|------|-----------|-------|
| Publish 1–2 blog articles | Monthly | Content team |
| Google Post (3–4/month) | Weekly | Marketing |
| Respond to all reviews | Within 48h | Dr. Brameli / staff |
| Check GSC for new queries | Monthly | SEO |
| Add 1 new citation | Monthly | Marketing |
| Update FAQs on landing pages | Quarterly | Dr. Brameli |
| Schema validation check | Monthly | Developer |
| Page speed check | Monthly | Developer |

---

## Quick Wins (Do First)

1. **Claim GBP** — biggest single impact on local rankings
2. **Submit sitemap** to Google Search Console
3. **Add to דפי זהב and Waze** — free, high citation value
4. **Request 5 reviews** from current patients
5. **Add area pages to internal links** — already done ✅
