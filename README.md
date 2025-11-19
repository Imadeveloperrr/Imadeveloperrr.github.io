# Imadeveloperrr.github.io (React + Vite)

VSCode에서 바로 수정할 수 있는 React(Vite) 기본 세팅입니다. GitHub Pages로 자동 배포하도록 워크플로도 넣었습니다.

## 필요 도구
- Node.js 18 이상, npm
- VSCode (권장)

## 로컬 개발
```bash
npm install
npm run dev     # http://localhost:5173
```

## 빌드 & 로컬 미리보기
```bash
npm run build   # dist/ 생성
npm run preview # 빌드 결과 로컬 확인
```

## GitHub Pages 배포
1. 이 저장소를 GitHub에 푸시합니다.
2. GitHub → Settings → Pages에서 **Source**를 **GitHub Actions**로 선택합니다.
3. `main` 브랜치에 푸시될 때마다 `.github/workflows/deploy.yml`이 빌드 후 자동 배포합니다.

## 주요 파일
- `index.html` : Vite 진입 HTML
- `src/main.jsx` : React 엔트리
- `src/App.jsx`, `src/index.css` : 기본 화면과 스타일
- `vite.config.js` : Vite 설정
- `.github/workflows/deploy.yml` : GitHub Pages 자동 배포

## VSCode 팁
- `npm run dev` 실행 후 VSCode 터미널 주소 Ctrl+클릭으로 브라우저 열기
- 필요 시 ESLint/Prettier 확장 설치 후 자유롭게 설정 추가
