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
      <header className="hero">
        <FadeIn delay={0}>
          <h1>Sungho's Tech Posts</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="lead">
            기억보단 기록을
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
              <SlideIn key={post.slug} delay={0.2 + index * 0.05}>
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
