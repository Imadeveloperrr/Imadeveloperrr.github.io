import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/posts';

function PostCard({ post }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="panel" style={{ cursor: 'pointer', height: '100%' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '12px'
          }}>
            {post.tags && post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  fontSize: '12px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '999px',
                  color: 'var(--accent)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '600' }}>
            {post.title}
          </h3>

          <p style={{
            margin: '0 0 12px',
            color: 'var(--muted)',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            {post.description}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '13px',
            color: 'var(--muted)'
          }}>
            <span>{post.author}</span>
            <span>•</span>
            <time>{formatDate(post.date)}</time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default PostCard;
