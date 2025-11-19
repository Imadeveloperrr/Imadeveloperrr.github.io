import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/common/AnimatedPage';
import FadeIn from '../components/ui/FadeIn';
import { getPostBySlug, formatDate } from '../utils/posts';

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      const postData = await getPostBySlug(slug);
      setPost(postData);
      setLoading(false);
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <AnimatedPage>
        <div className="hero">
          <p>Loading...</p>
        </div>
      </AnimatedPage>
    );
  }

  if (!post) {
    return (
      <AnimatedPage>
        <div className="hero">
          <h1>Post not found</h1>
          <Link to="/blog" className="button primary" style={{ marginTop: '20px', display: 'inline-block' }}>
            Back to Blog
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  const Content = post.Content;

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
          background: '#0a0f1a',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <article>
        <FadeIn delay={0.2}>
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '24px',
            color: 'var(--accent)',
            fontSize: '14px'
          }}>
            ← Back to Blog
          </Link>
        </FadeIn>

        <FadeIn delay={0.3}>
          <header className="hero" style={{ paddingTop: '16px' }}>
            <h1 style={{ marginBottom: '16px' }}>{post.frontmatter.title}</h1>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px',
              color: 'var(--muted)',
              marginBottom: '16px'
            }}>
              <span>{post.frontmatter.author}</span>
              <span>•</span>
              <time>{formatDate(post.frontmatter.date)}</time>
            </div>

            {post.frontmatter.tags && (
              <div style={{ marginBottom: '16px' }}>
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      marginRight: '6px',
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
            )}
          </header>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="panel" style={{
            maxWidth: '100%',
            margin: '0',
            fontSize: '1em',
            lineHeight: '1.4',
            fontWeight: '400',
            fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }}>
            <Content />
          </section>
        </FadeIn>
      </article>
    </AnimatedPage>
  );
}

export default Post;
