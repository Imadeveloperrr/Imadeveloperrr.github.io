import { motion } from 'framer-motion';
import AnimatedPage from '../components/common/AnimatedPage';
import FadeIn from '../components/ui/FadeIn';
import SlideIn from '../components/ui/SlideIn';
import PostCard from '../components/blog/PostCard';
import { getAllPosts } from '../utils/posts';

function Blog() {
  const posts = getAllPosts();

  return (
    <AnimatedPage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(11, 17, 32, 0.7)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <header className="hero">
        <FadeIn delay={0.2}>
          <h1>Blog</h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="lead">
            Development articles and tutorials.
          </p>
        </FadeIn>
      </header>

      <section style={{ marginTop: '40px' }}>
        {posts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {posts.map((post, index) => (
              <SlideIn key={post.slug} delay={0.5 + index * 0.1}>
                <PostCard post={post} />
              </SlideIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.5}>
            <div className="panel">
              <p style={{ color: 'var(--muted)', margin: 0 }}>
                No posts yet. Coming soon!
              </p>
            </div>
          </FadeIn>
        )}
      </section>
    </AnimatedPage>
  );
}

export default Blog;
