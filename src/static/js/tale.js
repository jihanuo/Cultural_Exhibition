// 模拟 JSON 数据
var dataAdded = $.ajax({url:"https://xhwlfy.cn/cultural_intro/json",async:false});
const data1 = JSON.stringify(dataAdded.responseText);
var data2 = JSON.parse(data1)
var data = JSON.parse(data2)
console.log(data)

// 目标页面 URL
const targetPageUrl = "cultural_intro";

// 选项数据
const options = [];
for (let i = 0; i < data.tales.length; i++) {
  let option = {
    name: data.tales[i]["name"],
    value: data.tales[i]["name"],
    imgName: data.tales[i]["imgName"],
    source: "tale"
  };
  options.push(option);
}


// 遍历选项数据，为每个选项创建并添加 li 元素
options.forEach(option => {
  // 创建 li 和 a 和 img 元素
  const newTale = document.createElement('li');
  newTale.className = 'tale';

  const taleLink = document.createElement('a');
  taleLink.href = `/${targetPageUrl}?option=${option.value}&source=${option.source}`;

  const taleImg = document.createElement('img');
  taleImg.src = "../static/img/directory_img/traditional_skill_img/" + option.imgName;
  // 设置链接文本
  taleLink.textContent = option.name;
  // 将 a 和 img 添加到 li 元素
  newTale.appendChild(taleImg);
  newTale.appendChild(taleLink);

  // 获取 ul 元素
  const allDances = document.querySelector(".all-tale");
  // 将 li 元素添加到 ul 中
  allDances.appendChild(newTale);
});

// 链接
const links = document.querySelectorAll(".tale a");
links.forEach(link => {
  // 字体颜色
  link.style.color = "purple";
  // 鼠标事件
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = 'underline';
  });
  link.addEventListener("mouseout", () => {
    link.style.textDecoration = 'none';
  });
});
