import Header from './Header';

function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
