# Next.js Posts App

A small post viewer app built with **Next.js (Pages Router)** that demonstrates key frontend skills including server-side rendering, static site generation, search filtering, reusable components, CSS Modules styling, and basic testing.

---

## 🚀 Features

- ✅ **Static Generation (SSG)**: Home page fetches posts at build time
- ✅ **Server-side Rendering (SSR)**: Individual post details are fetched per request
- ✅ **Client-side Search**: Filter posts dynamically by title
- ✅ **Reusable Card Component**: Clean, modular UI design
- ✅ **CSS Modules**: Scoped component styles
- ✅ **Testing**: Includes unit tests for PostCard and search filter

---

## 🔧 Setup Instructions

1. **Clone the repo**

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Run tests**

   ```bash
   npm test
   ```

---

## 🧠 Approach

- Used `getStaticProps` on the home page for optimal performance.
- Implemented `getServerSideProps` on post detail page to show up-to-date data.
- PostCard component is built to be reusable and styled with CSS Modules.
- Search filter is fully client-side using `useState`.

---

## 🧪 Tech Stack

- Next.js (Pages Router)
- React
- CSS Modules
- Jest + React Testing Library
