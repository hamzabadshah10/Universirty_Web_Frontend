# Universirty_Web_Frontend
Responsive University Website built with modern HTML, CSS, and JavaScript for a clean and interactive user experience.

# 🎓 PAF-IAST | University Landing Page

A modern, fully responsive front-end landing page designed for the **Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST)**. 

This project showcases a clean UI/UX, smooth scroll animations, a custom image slider, and a fully functional contact form that sends real emails without needing a backend server.

---

## ✨ Key Features

* **Fully Responsive Design:** Adapts flawlessly to mobile phones, tablets, and large desktop screens using CSS Flexbox, CSS Grid, and fluid typography.
* **Custom Hero Slider:** An automated image carousel with manual navigation arrows and interactive indicator dots.
* **Sticky Navigation:** A sleek navbar that sticks to the top of the screen and automatically highlights the active section as you scroll.
* **Smooth Scrolling:** Seamless anchor link navigation across the webpage.
* **Scroll Reveal Animations:** Elements gracefully fade and slide into view as the user scrolls down the page.
* **Working Contact Form:** Integrated with **EmailJS** to send user inquiries directly to an email inbox, complete with Regex email format validation and custom success/error popups.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic structuring of the webpage.
* **CSS3:** Custom styling, CSS Variables, Flexbox, Grid layouts, and keyframe animations.
* **JavaScript (Vanilla):** DOM manipulation, slider logic, scroll events, and form handling.
* **EmailJS:** Third-party API for client-side email delivery.
* **FontAwesome:** For scalable vector icons.
* **Google Fonts:** Utilizing 'Montserrat' and 'Poppins' for clean, modern typography.

---

## 📂 Project Structure

This folder contains all the source images used on the website. Please maintain the existing folder structure and open the project in VS Code to run it properly.

```text
UNIVERSITY_WEB_FRONTEND/
│
├── src/
│   ├── logo.png
│   ├── banner1.png
│   ├── banner2.jpg
│   └── (all other project images)
│
├── index.html       # Main HTML file containing the layout
├── style.css        # Main CSS file for styling and responsiveness
└── script.js        # JavaScript for slider, animations, and EmailJS

🚀 Getting Started
To get a local copy up and running, follow these simple steps:

1. Clone the repository
Bash
git clone [https://github.com/your-username/paf-iast-landing-page.git](https://github.com/your-username/paf-iast-landing-page.git)
2. Open the project
Open the folder in your code editor (like VS Code). Use the Live Server extension to launch index.html in your web browser for the best development experience.

3. Configure the Contact Form (EmailJS)
If you clone this repo and want the contact form to send emails to your own inbox, you must connect your own EmailJS account:

Create a free account at EmailJS.com.

Add an Email Service and create an Email Template.

Open script.js and locate the EmailJS configuration section at the bottom.

Replace the existing keys with your own Public Key, Service ID, and Template ID.

👨‍💻 Author
Hamza Badshah

Software Engineering undergraduate at PAF-IAST.

Passionate about front-end web development, Java, and Python. Currently exploring AI/ML and building practical solutions.

LinkedIn: https://www.linkedin.com/in/hamza-badshah-8aa304286/

GitHub: https://github.com/hamzabadshah10
