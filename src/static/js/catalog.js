// 名录卡片
const catalogCards = document.querySelectorAll(".traditional");
// 所有跳转链接
const links = document.querySelectorAll(".traditional a");

catalogCards[2].style.marginBottom = "auto";
// 第一个和最后一个卡片放到容器最下面
catalogCards[0].style.marginTop = "auto";
catalogCards[4].style.marginTop = "auto";
// 第二个和第四个居中
catalogCards[1].style.marginBottom = "auto";
catalogCards[1].style.marginTop = "auto"
catalogCards[3].style.marginBottom = "auto"
catalogCards[3].style.marginTop = "auto"

// 给卡片添加鼠标事件和样式
catalogCards.forEach(card => {
  // 悬浮和离开
  card.addEventListener("mouseover", () => {
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = 'scale(1.2)';
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = 'scale(1)';
  });
  card.style.cursor = 'pointer';
});
// 点击事件
catalogCards[0].addEventListener("click", () => {
  window.location.href = '/music';
});
catalogCards[1].addEventListener("click", () => {
  window.location.href = '/food';
});
catalogCards[2].addEventListener("click", () => {
  window.location.href = '/skill';
});
catalogCards[3].addEventListener("click", () => {
  window.location.href = '/dance';
});
catalogCards[4].addEventListener("click", () => {
  window.location.href = '/tale';
});

// 给跳转链接添加鼠标事件
// 链接字体颜色
links.forEach(link => {
  link.style.color = "purple";
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = 'underline';
  });
  link.addEventListener("mouseout", () => {
    link.style.textDecoration = 'none';
  });
});
