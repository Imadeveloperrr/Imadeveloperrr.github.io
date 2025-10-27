# Sungho's Portfolio - Aerial Theme

HTML5 UP의 Aerial 템플릿 기반 미니멀 포트폴리오 사이트

## ✨ 특징

- 🎨 깔끔하고 미니멀한 디자인
- 📱 완벽한 반응형
- 🖼️ 배경 이미지/동영상 지원
- 🔗 소셜 링크 (GitHub, Blog, Email)

## 🚀 배포하기

```bash
cd C:\Users\sungho\Desktop\Imadeveloperrr2.github.io

# Git 초기화
git init
git add .
git commit -m "Initial portfolio site"

# GitHub 레포지토리 생성 후
git remote add origin https://github.com/Imadeveloperrr/Imadeveloperrr2.github.io.git
git branch -M main
git push -u origin main
```

**GitHub Settings → Pages → Source: main branch, / (root)**

5분 후: `https://Imadeveloperrr2.github.io` 접속!

## 🎨 배경 이미지 변경하기

### 방법 1: 이미지 사용

1. 이미지를 `assets/images/bg.jpg`에 저장
2. `assets/css/main.css` 파일 열기
3. 다음 부분 찾기:

```css
#bg:after {
    background: #348cb2 url("images/overlay.png") repeat;
}
```

4. 이렇게 수정:

```css
#bg {
    background: url("../images/bg.jpg") center center;
    background-size: cover;
}
```

### 방법 2: 배경색만 사용

`assets/css/main.css`에서:

```css
#bg:after {
    background: #1a1a2e;  /* 원하는 색상 코드 */
}
```

### 추천 배경 이미지

- Unsplash: https://unsplash.com/s/photos/code
- Pexels: https://www.pexels.com/search/technology/
- 어두운 톤의 코드/기술 관련 이미지 추천

## 📝 내용 수정하기

`index.html` 파일:

```html
<h1>Sungho</h1>
<p>Spring Boot Developer &nbsp;&bull;&nbsp; AI Enthusiast &nbsp;&bull;&nbsp; Backend Engineer</p>
```

원하는 내용으로 바꾸세요!

## 🔗 링크

- **GitHub**: https://github.com/Imadeveloperrr
- **Blog**: https://Imadeveloperrr.github.io (Jekyll 블로그)
- **Projects**: https://Imadeveloperrr.github.io/shopingmall

## 📂 구조

```
Imadeveloperrr2.github.io/
├── index.html           # 메인 페이지
├── assets/
│   ├── css/            # 스타일
│   ├── images/         # 배경 이미지
│   └── webfonts/       # 폰트
└── README.md
```

## 💡 사용 시나리오

1. **Imadeveloperrr2.github.io** → 메인 랜딩 페이지 (이 템플릿)
2. **Imadeveloperrr.github.io** → 블로그 (Jekyll)
3. **Imadeveloperrr.github.io/shopingmall** → 프로젝트 문서

## 📄 라이선스

Aerial Template by [HTML5 UP](https://html5up.net)
Free for personal and commercial use under the CCA 3.0 license

---

**배포 완료 후 접속:** https://Imadeveloperrr2.github.io
