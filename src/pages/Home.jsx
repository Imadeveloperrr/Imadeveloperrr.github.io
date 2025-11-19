import { Link } from 'react-router-dom';
import AnimatedPage from "../components/common/AnimatedPage";
import FadeIn from "../components/ui/FadeIn";
import SlideIn from "../components/ui/SlideIn";
import PostCard from "../components/blog/PostCard";
import { getAllPosts } from "../utils/posts";

function Home() {
  const recentPosts = getAllPosts().slice(0, 3); // Get 3 most recent posts

  return (
    <AnimatedPage>
            <header className="hero">
              <FadeIn delay={0}>
                <p className="eyebrow">Sungho Hub</p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1>Welcome to Sungho Hub</h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="lead">
                  Full-stack Developer & Backend Specialist
                </p>
                <div className="actions">
                  <Link to="/blog" className="button primary">
                    View Blog
                  </Link>
                  <a className="button ghost" href="https://github.com/Imadeveloperrr" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </FadeIn>
            </header>

            <FadeIn delay={0.3}>
              <section className="panel">
                <h2>About Me</h2>
                <ul>
                  <li>소프트웨어전공</li>
                  <li>정보처리기사 (2025)</li>
                  <li>SQLD (2025)</li>
                </ul>
              </section>
            </FadeIn>

            {/* Recent Posts Section */}
            {recentPosts.length > 0 && (
              <section style={{ marginTop: '48px' }}>
                <FadeIn delay={0.4}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px'
                  }}>
                    <h2 style={{ margin: 0 }}>Recent Posts</h2>
                    <Link to="/blog" style={{
                      color: 'var(--accent)',
                      fontSize: '14px',
                      textDecoration: 'none'
                    }}>
                      View all →
                    </Link>
                  </div>
                </FadeIn>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '24px'
                }}>
                  {recentPosts.map((post, index) => (
                    <SlideIn key={post.slug} delay={0.5 + index * 0.05}>
                      <PostCard post={post} />
                    </SlideIn>
                  ))}
                </div>
              </section>
            )}
    </AnimatedPage>
  );
}

export default Home;
