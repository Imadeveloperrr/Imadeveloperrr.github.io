import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      style={{
        padding: '20px 0',
        marginBottom: '24px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link to="/" style={{
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--text)',
          textDecoration: 'none',
        }}>
          Sungho Hub
        </Link>

        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/" style={{
            color: 'var(--muted)',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
          >
            Home
          </Link>
          <Link to="/blog" style={{
            color: 'var(--muted)',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
