# Hair by Clare – Portfolio Website

A responsive, client-facing portfolio website for **Clare Cullen**, a California-based hairstylist specializing in sunkissed blonding and natural-looking extensions.  

This project demonstrates how a professional website can be built and deployed **completely for free**, using readily available free-tier technologies, while still supporting dynamic features like a photo gallery and contact form.  

👉 **Live Demo:** [Hair by Clare](https://cethatch.github.io/hair-by-clare-react/)  
👉 **Figma Design File:** [View Design](https://www.figma.com/design/ntk5cX8xqbCTrSbFaQke9j/HairByClare_v1?node-id=0-1&t=VqagWMJValS9KhuP-1)

---

## 📌 Project Overview
The site showcases Clare’s portfolio, services, and contact information in a clean, responsive design.  
- **Goal:** Create a professional hairstylist website without monthly hosting costs.  
- **Approach:** Use free-tier services (GitHub Pages, Netlify Functions, Cloudinary, Google Sheets) to cover hosting, storage, and secure form handling.  

---

## 🛠️ Tech Stack

- **Frontend:** JavaScript (Create React App), HTML, CSS (Flexbox + CSS Grid for responsive layouts)  
- **Design:** Figma (mockups translated to functional components)  
- **Serverless Functions:** Node.js (hosted on Netlify)  
- **Hosting:** GitHub Pages (frontend), Netlify (backend functions)  
- **Media Storage:** Cloudinary (easy photo management for non-technical users)  
- **Data Handling:** Google Sheets (private storage for contact form submissions)  

---

## ✨ Features

- **Homepage** introducing Clare’s brand and services  
- **Portfolio Gallery** showcasing styles with Cloudinary-hosted images  
- **Services Page** with pricing and details  
- **Contact Page** with secure form submissions to Google Sheets  
- **Booking Link** to external scheduling service  
- **Responsive Layout** tested on a wide variety of screen sizes and browsers  

---

## 🎨 Design & UX Choices
- Prioritized **mobile responsiveness** for users browsing on phones.  
- Tested across screen sizes and browsers to ensure cross-platform compatibility.  
- Minimal, image-focused design to highlight Clare’s work.  
 

---

## 🚀 Deployment
- **Frontend:** [GitHub Pages](https://pages.github.com/)  
- **Serverless Functions:** [Netlify Functions](https://docs.netlify.com/functions/overview/)  
- **Media:** [Cloudinary](https://cloudinary.com/) for portfolio image hosting  
- **Form Handling:** Submissions sent to a Netlify function → stored securely in Google Sheets  

---

## 💡 Challenges & Learnings
- **Cross-browser styling:** Gained confidence in handling CSS grid, flexbox, and ensuring layouts worked in Safari, Chrome, and Firefox.  
- **CORS issues:** Learned how to configure Netlify Functions with strict headers (specific origins and methods only), avoiding insecure `*` policies.  
- **Frontend-to-backend security:** Practiced keeping API secrets safe by moving sensitive logic to serverless functions.  

---

## 🔮 Next Steps
Planned improvements:  
- Add **fade-in animations** for main images to improve UX.  
- Build a **React-based resource attributions page** that pulls data from Google Sheets.  
- Implement an **email digest system** to send Clare periodic summaries of new client inquiries.  

---

## 👩‍💻 About the Developer
This project was built at the request of Clare and as an opportunity to strengthen my frontend development skills. It allowed me to practice React, responsive CSS, and integrating multiple free-tier cloud services into a seamless client-ready solution.  

**Contact Me**  
📧 Email: [cethatch@gmail.com](mailto:cethatch@gmail.com)  
💼 LinkedIn: [linkedin.com/in/cethatcher](https://www.linkedin.com/in/cethatcher/)  

---
