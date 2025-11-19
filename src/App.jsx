import "./index.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">React + Vite</p>
        <h1>Hello, world!</h1>
        <p className="lead">
          GitHub Pages에서 동작하는 새 블로그를 React로 시작했습니다. 이 컴포넌트를
          마음껏 수정해 보세요.
        </p>
        <div className="actions">
          <a className="button primary" href="https://vitejs.dev/guide/">
            Vite 가이드
          </a>
          <a className="button ghost" href="https://react.dev/learn">
            React 시작하기
          </a>
        </div>
      </header>

      <section className="panel">
        <h2>다음 단계</h2>
        <ul>
          <li>
            <code>npm run dev</code>로 개발 서버를 띄운 뒤 코드를 수정하며 바로
            확인하세요.
          </li>
          <li>
            스타일은 <code>src/index.css</code>, 화면은 <code>src/App.jsx</code>를
            수정합니다.
          </li>
          <li>
            변경 후 <code>git add . && git commit</code>으로 기록하고 푸시하면
            GitHub Actions가 Pages로 자동 배포합니다.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
