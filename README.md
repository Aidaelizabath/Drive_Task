# 🎬 Netflix Web App Prototype

A Netflix-inspired web application built using React and Tailwind CSS that simulates hover-based movie previews and full-screen playback experience.

---

## 🚀 Live Demo

🔗 Deployment Link: drivetask-q5j1kl2va-aida-elizabath-vargheses-projects.vercel.app 
🔗 GitHub Repository:https://github.com/Aidaelizabath/Drive_Task.git

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Context API (State Management)



## ✨ Features

- 🎥 Hover over a movie to auto-play preview
- 🔁 Only one preview plays at a time
- 🖱 Click a movie to open full-screen playback
- ⬅ Transparent back button appears on mouse movement
- 📱 Fully responsive (Desktop + Mobile)
- 🔐 Authentication (Optional if you added login)
- 🌐 Dynamic trailer fetching using TMDB API

---

## 🧠 How It Works

- Movie data and trailer keys are fetched from the TMDB API.
- The YouTube embed URL is dynamically generated using the trailer key.
- Global state ensures only one preview plays at a time.
- React Router manages page transitions between Home and Player views.

---

## ⚙ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Aidaelizabath/Drive_Task.git
cd Drive_Task
```

### 2️⃣ Install Dependencies

```bash
npm install
```



### 4️⃣ Run the Development Server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── context/
 ├── assets/
 ├── App.jsx
 ├── main.jsx
```

---

## 🎥 Video Explanation

A short 1–2 minute video demonstrating:
- Tech stack explanation
- Folder structure
- Hover preview
- Full playback
- Back navigation
- Video source explanation

---

## 📌 Notes

- Videos are streamed using YouTube embed URLs.
- This project is built for demonstration purposes.
- For full-stack extension, backend endpoints like GET /movies and POST /play/:movieId can be implemented using Express or FastAPI.

---

## 👨‍💻 Author

Aida Elizabath Varghese
 
Email: aidaelizabathvarghese2003@gmail.com