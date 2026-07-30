# LegalVala 🏛️

**LegalVala** is a business consultancy and compliance services website built to help businesses with legal, tax, and regulatory compliance needs.

🔗 **Live Website:** [https://www.legalvala.com](https://www.legalvala.com)

---

## 📌 About

LegalVala provides an online platform where users can learn about and access business consultancy, legal compliance, and registration-related services in a simple, modern interface.

---

## 🛠️ Tech Stack

This project is built using the following technologies:

- **[React.js](https://react.dev/)** — Frontend library for building the user interface (built with Create React App)
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — Core scripting language
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for styling
- **[Node.js](https://nodejs.org/)** — JavaScript runtime for backend/build tooling
- **[Supabase](https://supabase.com/)** — Backend-as-a-Service used for database and backend functionality

---

## ✨ Features

- Responsive, mobile-friendly design
- Modern UI built with Tailwind CSS
- Business consultancy & compliance service listings
- Backend data handling via Supabase
- Fast single-page application (SPA) experience with React

---

## 📂 Project Structure

```
legalvala/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/            # Page-level components
│   ├── assets/           # Images, icons, etc.
│   ├── App.js             # Root component
│   └── index.js           # Entry point
├── package.json
└── tailwind.config.js
```

> Note: Adjust this structure section to match your actual folder layout if it differs.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/legalvala.git
   cd legalvala
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your Supabase credentials:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm start
   ```

   The app will run at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🚀 Deployment

This project is deployed on a custom web hosting service (e.g., Hostinger). To deploy:

1. Run `npm run build` to generate the production build.
2. Upload the contents of the `build/` folder to your hosting provider's public/root directory.
3. Configure your domain to point to the hosting server.

---

## 🗄️ Database (Supabase)

This project uses **Supabase** as its backend and database solution, providing:
- PostgreSQL database
- Authentication (if used)
- Real-time data APIs

Make sure to configure your Supabase project and update the environment variables accordingly.

---

## 📸 Screenshots

> Add screenshots of your website here for better presentation:
```markdown
![Homepage](./screenshots/homepage.png)
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/your-username/legalvala/issues).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Contact

For any queries regarding this project, feel free to reach out:

- **Website:** [www.legalvala.com](https://www.legalvala.com)

---

⭐ If you found this project helpful, don't forget to give it a star on GitHub!
