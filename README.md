# 🎒 Angel System - Landing Page

דף נחיתה מקצועי למערכת הנשיאה המודולרית Angel.

## 📁 מבנה הפרויקט

```
backpack-landing-page/
├── index.html              # דף ראשי
├── css/
│   ├── style.css          # עיצוב ראשי
│   ├── responsive.css     # התאמה למובייל/טאבלט
│   └── animations.css     # אנימציות
├── js/
│   ├── main.js           # פונקציונליות ראשית
│   ├── animations.js     # אנימציות ואפקטים
│   └── scroll.js         # אפקטי גלילה
├── images/               # תמונות (להוספה)
├── videos/               # וידאו (להוספה)
└── fonts/                # פונטים (אופציונלי)
```

## 🚀 איך להשתמש

### אופציה 1: פתיחה ישירה

פשוט לחץ פעמיים על `index.html` והוא ייפתח בדפדפן.

### אופציה 2: שרת מקומי (מומלץ)

```bash
# אם יש לך Python 3:
cd ~/projects/backpack-landing-page
python3 -m http.server 8000

# ואז פתח בדפדפן:
# http://localhost:8000
```

או עם VS Code:
1. התקן את ההרחבה "Live Server"
2. לחץ ימני על `index.html`
3. בחר "Open with Live Server"

## ✨ תכונות

### עיצוב
- ✅ Responsive Design (מובייל, טאבלט, דסקטופ)
- ✅ אנימציות חלקות ומרשימות
- ✅ צבעים מודרניים ומקצועיים
- ✅ טיפוגרפיה קריאה בעברית

### סקשנים
- 🎯 Hero Section עם סטטיסטיקות
- 🔍 Problem Statement
- 💡 Solution - מערכת Angel
- 🎒 Product Details
- 📊 Market Overview
- 👥 Team Section
- 📧 Contact Form
- 🦶 Footer מלא

### פונקציונליות
- ✅ ניווט חלק (Smooth Scroll)
- ✅ תפריט המבורגר למובייל
- ✅ Scroll Animations
- ✅ Counter Animations
- ✅ Back to Top Button
- ✅ טופס יצירת קשר
- ✅ Scroll Progress Bar

## 🎨 התאמה אישית

### שינוי צבעים

ערוך את `css/style.css` בראש הקובץ:

```css
:root {
    --primary: #1A1A2E;      /* צבע ראשי */
    --highlight: #E94560;    /* צבע הדגשה */
    /* ... */
}
```

### הוספת תמונות

1. העתק תמונות לתיקיית `images/`
2. עדכן את ה-HTML:

```html
<div class="product-image">
    <img src="images/product-1.jpg" alt="מוצר">
</div>
```

### עדכון תוכן

כל התוכן נמצא ב-`index.html`. פשוט ערוך את הטקסט בין התגיות.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 דפדפנים נתמכים

- ✅ Chrome (מומלץ)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📧 טופס יצירת קשר

כרגע הטופס מציג הודעת הצלחה. לחיבור לשרת:

1. ערוך את `js/main.js`
2. מצא את הפונקציה `contactForm.addEventListener`
3. הוסף קריאת API למקום שלך:

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🚀 העלאה לאינטרנט

### GitHub Pages (חינמי)

```bash
# צור repository חדש ב-GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/backpack-landing.git
git push -u origin main

# הפעל GitHub Pages:
# Settings → Pages → Source: main branch
```

הדף יהיה זמין ב:
`https://USERNAME.github.io/backpack-landing`

### Netlify (חינמי)

1. גש ל: https://www.netlify.com
2. גרור את התיקייה לאתר
3. הדף יעלה אוטומטית!

## ✅ Todo List

- [ ] להוסיף תמונות מוצר אמיתיות
- [ ] להוסיף וידאו הדגמה
- [ ] לחבר טופס יצירת קשר לשרת
- [ ] להוסיף Google Analytics
- [ ] לבצע אופטימיזציה לSEO
- [ ] להוסיף Favicon
- [ ] לבדוק נגישות (WCAG)

## 📞 תמיכה

לשאלות או בעיות: info@trailsystem.com

---

**בנוי עם ❤️ עבור Angel System**
