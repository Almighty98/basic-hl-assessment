import Link from 'next/link';
import styles from '../styles/PostCard.module.css';

export default function PostCard({ title, id }) {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </div>
  );
}
