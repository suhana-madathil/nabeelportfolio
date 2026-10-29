# Muhammad Nabeel P.A. — Personal Brand Website

A modern, high-performance, responsive personal brand website for **Muhammad Nabeel P.A.**, Entrepreneur, Founder of NB Group of Companies, and Co-Founder of 3G Brandversity.

Built using **HTML5**, **CSS3**, and **Vanilla JavaScript** with a curated **White & Blue** color palette, typography from Google Fonts (*Plus Jakarta Sans*), accessible semantics, and direct WhatsApp consultation booking flows.

---

## 1. Project Overview & Structure

```
nabeel-portfolio/
│
├── index.html              # Home page
├── about.html              # Biography, vision, mission, ventures, events, awards
├── consultation.html       # 3 consultation services, booking guide, FAQ
├── contact.html            # Direct contact channels and social networks
│
├── css/
│   └── style.css           # Global stylesheet with design system and responsive rules
│
├── js/
│   └── script.js          # Mobile navigation toggle, scroll states, year update
│
├── assets/
│   ├── images/
│   │   └── nabeel-profile.webp  # Official supplied portrait of Muhammad Nabeel P.A.
│   └── icons/              # Scalable SVG icons and assets
│
├── favicon.ico             # Brand favicon icon
└── README.md               # Documentation and deployment guide
```

---

## 2. How to Open the Website Locally

Since the project uses static HTML, CSS, and Vanilla JavaScript, it does not require Node.js, npm, or any build process.

### Option A: Direct Browser Preview
Double-click `index.html` in your file explorer to open it directly in Chrome, Edge, Safari, or Firefox.

### Option B: Local HTTP Server (Recommended)
Running through a local web server ensures optimal font loading and smooth cross-page transitions:

**Using Python:**
```bash
# In the project directory:
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node / npx (optional):**
```bash
npx serve .
```

---

## 3. How to Replace or Update the Profile Photograph

1. Prepare your portrait image in **WEBP** format (or PNG/JPEG if necessary).
2. Save the new image to `assets/images/nabeel-profile.webp`, overwriting the existing file.
3. If the new image has different dimensions, update the `width` and `height` attributes on the `<img>` tags in `index.html` and `about.html`, or adjust the `aspect-ratio` in `css/style.css` under `.portrait-img` and `.photo-frame img`.

---

## 4. How to Edit Text and Consultation Prices

All page content is written in clean, semantic HTML and can be edited in any code editor (such as VS Code or Notepad).

### Consultation Services & Prices:
There are **3 exact services** configured across the website:

1. **Basic Business Consultation — ₹999**
   - Duration: 1 hour
   - Pre-filled WhatsApp message:
     `Hello Muhammad Nabeel, I would like to book the Basic Business Consultation for ₹999. Please share the available time slots and booking details.`

2. **Digital Marketing Blueprint Consultation — ₹4,999**
   - Pre-filled WhatsApp message:
     `Hello Muhammad Nabeel, I would like to book the Digital Marketing Blueprint Consultation for ₹4,999. Please share the consultation details and booking process.`

3. **Business System Setting — ₹4,999**
   - Scope: HR, Sales, Marketing, and Finance
   - Pre-filled WhatsApp message:
     `Hello Muhammad Nabeel, I would like to book the Business System Setting consultation for ₹4,999, covering HR, Sales, Marketing, and Finance. Please share the consultation details and booking process.`

*Note: If updating prices or message text, remember to URL-encode WhatsApp URL parameters (e.g., spaces as `%20`, commas as `%2C`, and ₹ as `%E2%82%B9`).*

---

## 5. Configured Contact Details & Social Links

- **WhatsApp Booking Number:** `+91 92079 56370` (international link: `https://wa.me/919207956370`)
- **Direct Email:** `mdofnbgroup@gmail.com` (`mailto:mdofnbgroup@gmail.com`)
- **Phone:** `+91 92079 56370` (`tel:+919207956370`)
- **Central Portal / Website:** `https://nbgroupofcompanies.com`
- **Official Social Networks:**
  - **LinkedIn:** [https://www.linkedin.com/in/nabeel-nb-group-951b20368/](https://www.linkedin.com/in/nabeel-nb-group-951b20368/)
  - **Instagram:** [https://www.instagram.com/nabeel_nbgroup](https://www.instagram.com/nabeel_nbgroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==)
  - **Facebook:** [https://www.facebook.com/profile.php?id=61559823163064](https://www.facebook.com/profile.php?id=61559823163064)
  - **X (Twitter):** [https://x.com/nabeel_nbgroup?s=11](https://x.com/nabeel_nbgroup?s=11)
  - **YouTube:** [https://youtube.com/@nabeel_nbgroup](https://youtube.com/@nabeel_nbgroup?si=znkGCcb0Inpw7gwO)

---

## 6. How to Deploy to Ordinary Web Hosting

You can deploy this static website to any hosting provider without servers or complicated pipelines:

### Traditional Web Hosting (cPanel / Shared Hosting)
1. Compress or upload the contents of the project folder directly into your host's `public_html` (or web root) directory.
2. Ensure `index.html` is at the root.

### GitHub Pages
1. Push the files to a GitHub repository.
2. In Repository Settings &rarr; **Pages**, choose the `main` branch and `/ (root)` folder.
3. Your site will be live instantly with free HTTPS.

### Netlify / Vercel
1. Drag and drop the folder into the Netlify or Vercel dashboard.
2. The deployment completes in seconds.

### Post-Deployment SEO Configuration
Once your custom domain is live (e.g., `https://muhammadnabeel.com`):
- Open `index.html`, `about.html`, `consultation.html`, and `contact.html`.
- Update the `<meta property="og:url">` tags to your domain URL.
- Update `<meta property="og:image">` to your absolute URL (e.g., `https://yourdomain.com/assets/images/nabeel-profile.webp`).

---

## 7. Color Palette Reference

- **Primary Blue:** `#155EEF` (buttons, key highlights, badges, icons)
- **Deep Blue:** `#123B7A` (headings, accents, footer, high-contrast elements)
- **Light Blue:** `#EAF2FF` (badge backings, subtle tints, icon backgrounds)
- **Pale Blue:** `#F5F8FF` (alternate section backgrounds)
- **White:** `#FFFFFF` (primary canvas, cards)
- **Primary Text:** `#172B4D`
- **Secondary Text:** `#667085`
- **Border:** `#DCE5F2`
