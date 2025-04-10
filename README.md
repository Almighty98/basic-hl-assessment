# Next.js Assessment App

This is a small Next.js application built as part of a frontend assessment. It demonstrates data fetching with both SSG and SSR, reusable components, client-side filtering, styling with CSS Modules, and unit testing using Jest and React Testing Library.

---

## Features

- **Home Page** (`/`)
  - Static generation (`getStaticProps`)
  - Displays a list of posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
  - Client-side search to filter posts dynamically
  - Styled with CSS Modules

- **Post Detail Page** (`/posts/[id]`)
  - Server-side rendering (`getServerSideProps`)
  - Displays full post details based on post ID

- **Reusable `PostCard` Component**
  - Clean UI card for individual post previews

- **Unit Testing**
  - Jest & React Testing Library configured
  - Includes test for `PostCard` component

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-assessment.git
cd nextjs-assessment
