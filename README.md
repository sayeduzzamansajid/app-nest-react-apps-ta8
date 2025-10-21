# AppNest 🚀 — React App Showcase Platform

A modern and interactive web app built with **React.js** to display, install, and manage applications — with live search, charts, and localStorage integration.

---
## 🌐 Live Demo

🔗 **Live Website:** [click here to see live demo](https://appnest-react-apps-a08.pages.dev/)  
---

## 🏠 Home Page

### 🎯 Banner
- Center-aligned heading and description.  
- Two buttons:  
  - **App Store** → redirects to the App Store.  
  - **Play Store** → redirects to the Play Store.

### 📈 States Section
- Three info cards (from Figma) showing dynamic statistics.

### ⭐ Top Apps Section
- Displays **8 apps** in a **4-column layout**.  
- Each card includes:
  - App image  
  - Title  
  - Download count  
  - Average rating  
- Clicking a card navigates to the **App Details Page**.  
- A **“Show All”** button navigates to the **All Apps Page**.

---

## 📱 All Apps Page

### 🏷️ Title Section
- Includes a title and subtitle (styled according to Figma design).

### 🔍 Search & States
- Left side → shows total number of apps.  
- Right side → live search bar with case-insensitive filtering.  
- Displays **“No App Found”** when no matches exist.

### 🧩 App Section
- Displays all apps from JSON data.  
- Each card includes:
  - Image  
  - Title  
  - Downloads  
  - Average Rating  
- Clicking opens the **App Details Page**.

---

## 📊 App Details Page

### 🧠 App Information
- Displays:
  - App image  
  - Title  
  - Downloads  
  - Reviews  
  - Rating  
- **Install Button** → on click:
  - Saves app to **localStorage**.  
  - Disables button & changes text to **Installed**.  
  - Shows a success toast notification.

### 📈 Review Chart
- Implemented using **Recharts**.  
- Displays ratings (1–5 stars) visually.  
- Fully responsive design.

### 📝 Description
- Displays detailed app information according to the Figma layout.

---

## ⚠️ Error Page & Others
- Custom 404 page for invalid routes.  
- **Loading animation** shown during:
  - Page navigation  
  - Search operations  
- “Not Found” message shown when app data is missing.  
- Routes work perfectly on reload after deployment.

---


### 💾 LocalStorage Features

#### App Installation
- On click → saves app to `localStorage`.  
- If already installed → button is disabled (shows “Installed”).

#### My Installation Page
- Displays all installed apps.  
- Each card includes an **Uninstall** button:
  - Removes app from both UI and `localStorage`.  
  - Shows a toast message confirming the action.

#### Sort by Downloads
- Dropdown options:
  - **High → Low** (descending)
  - **Low → High** (ascending)

#### Loading Animations
- Displayed during:
  - Page navigation  
  - Search operations  

---

## 🧰 Tech Stack

| Category | Tools Used |
|-----------|-------------|
| Frontend | React.js |
| Styling | Tailwind / CSS |
| Charts | Recharts |
| Notification System | React-Toastify |
| Routing | React Router DOM  |
| State Management | useState, useEffect |
| Icons | React Icons  |
| Data Source | Local JSON Data |
| Data Storage | LocalStorage |
| Package Manager |  npm  | 
| Deployment | Vercel / Netlify / Cloudflare |


---

## 🧠 Key Learnings
- Building reusable React components.  
- Managing state using `useState`.  
- Implementing `localStorage` for data persistence.  
- Creating dynamic charts using **Recharts**.  
- Handling routing and navigation smoothly with **React Router**.  
- Deploying React apps for production environments.

---

## ✨ Future Improvements
- Add search and filter by category or rating.  
- Add pagination for better performance.  
- Integrate a backend with **Node.js** and **MongoDB**.  
- Add user authentication & favorites list.  
- Improve UI/UX animations and accessibility.

---

## 🚀 Deployment
- Deployed on **Vercel / Netlify / Cloudflare**.  
✅ Works on reload without 404 errors.  

---

### 🧑‍💻 Author
**Sayeduzzaman**  
📧 sayeduzzamansajid9@gmail.com  




