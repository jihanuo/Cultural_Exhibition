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
