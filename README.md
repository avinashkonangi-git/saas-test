# 🚀 Headless WordPress + Next.js Project

A modern **Headless CMS application** built using **WordPress (ACF)** as the backend and **Next.js** as the frontend. This project delivers fast, scalable, and SEO-friendly web experiences using REST APIs.

---

## 📌 Tech Stack

* **Frontend:** Next.js, React.js, Tailwind CSS
* **Backend (CMS):** WordPress (Headless)
* **Custom Fields:** Advanced Custom Fields (ACF)
* **API:** WordPress REST API
* **Deployment:** Vercel
* **Version Control:** Git & GitHub

---

## ⚙️ Features

* Headless architecture (Decoupled frontend & backend)
* Dynamic content rendering using WordPress REST API
* Custom fields support via ACF
* Responsive UI with Tailwind CSS
* Environment-based API configuration
* SEO-friendly structure (SSR/SSG ready)
* Fast deployment with Vercel

---

## 📂 Project Structure

```
project-root/
│
├── frontend/ (Next.js app)
│   ├── components/
│   ├── pages/ or app/
│   ├── styles/
│   ├── lib/ (API functions)
│   └── .env.local
│
├── wordpress/ (optional reference)
│   ├── wp-content/
│   │   ├── themes/your-custom-theme
│   │   └── plugins/acf
│
└── README.md
```

---

## 🔧 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/avinashkonangi-git/saas-test
```

---

### 2️⃣ Setup Frontend (Next.js)

```bash
cd frontend
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env.local` file inside the `frontend` folder:

```env
WP_API_URL=https://your-wordpress-site.com/wp-json
```

> ⚠️ Make sure your WordPress REST API is publicly accessible.

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🔗 WordPress Setup

* Install WordPress
* Create a custom theme (if needed)
* Install and configure ACF plugin
* Create required custom fields
* Ensure REST API is enabled:

```
https://your-site.com/wp-json
```

---

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Import the repository into Vercel
3. Add environment variable in Vercel:

```
WP_API_URL=https://your-wordpress-site.com/wp-json
```

4. Click **Deploy**

---

## 📡 API Usage Example

```js
export async function getPosts() {
  const res = await fetch(`${process.env.WP_API_URL}/wp/v2/posts`);
  return res.json();
}
```

---

## 🧪 Future Improvements

* Add authentication (JWT / OAuth)
* Integrate WPGraphQL
* Improve caching & ISR (Incremental Static Regeneration)
* Add SEO enhancements (meta tags, sitemap)
* Add unit & integration tests

---

## 🤝 Contributing

Feel free to fork this repo and submit pull requests.

---

## 👨‍💻 Author

**Your Name**
GitHub: [https://github.com/your-username](https://github.com/your-username)

---

## 🌐 Live Demo

*Add your Vercel deployment link here*
