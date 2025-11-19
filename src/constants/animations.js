// 페이지 전환 애니메이션
  export const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  export const pageTransition = {
    duration: 0.5,
    ease: 'easeInOut'
  };

  // 페이드인 애니메이션
  export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // 슬라이드 애니메이션
  export const slideInVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // 버튼 호버 애니메이션
  export const buttonHover = {
    scale: 1.05,
    y: -2
  };

  export const buttonTap = {
    scale: 0.95
  };