import { useState } from 'react';
import PostCard from '@/components/PostCard';
import styles from '@/styles/Home.module.css';

export default function Home({ posts }) {
  const [query, setQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.cardList}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}