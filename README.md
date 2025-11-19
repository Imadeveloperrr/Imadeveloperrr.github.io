# Imadeveloperrr.github.io

완전히 초기화된 GitHub Pages 블로그 저장소입니다. 지금은 `Hello, world!` 한 페이지만 있고, 원하는 스타일과 페이지를 자유롭게 추가할 수 있습니다.

## 지금 상태
- 테마, 외부 에셋 없이 순수 HTML/CSS
- 메인 페이지: `index.html` 단일 파일
- `.nojekyll` 덕분에 원하는 구조로 정적 파일을 배치 가능

## 로컬에서 보기
브라우저로 `index.html`을 직접 열면 바로 확인할 수 있습니다.

## 수정/확장 팁
- `index.html`을 열어 텍스트, 색상, 레이아웃을 바로 수정하세요.
- 이미지나 스타일을 추가하려면 `assets/` 같은 폴더를 새로 만들어 사용하면 됩니다.
- 여러 페이지를 만들면 서로 링크를 걸어 간단한 사이트 구조를 만들 수 있습니다.

## GitHub Pages 배포
1. 변경 사항을 커밋하고 푸시합니다.
   ```bash
   git add .
   git commit -m "Start clean blog"
   git push
   ```
2. GitHub → Settings → Pages에서 `main` 브랜치와 `/ (root)`를 선택합니다.
3. 잠시 후 `https://Imadeveloperrr.github.io`에서 확인하세요.

## 폴더 구조
```
Imadeveloperrr.github.io/
├── index.html
├── .gitignore
└── .nojekyll
```
