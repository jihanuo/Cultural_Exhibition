var dataAdded = $.ajax({url:"https://xhwlfy.cn/cultural_intro/json",async:false});
const data1 = JSON.stringify(dataAdded.responseText);
var data2 = JSON.parse(data1)
var data = JSON.parse(data2)
console.log(data)

// 目标页面 URL
const targetPageUrl = "cultural_intro";

// 选项数据
const options = [];
for (let i = 0; i < data.foods.length; i++) {
  let option = {
    name: data.foods[i]["name"],
    value: data.foods[i]["name"],
    imgName: data.foods[i]["imgName"],
    source: "food"
  };
  options.push(option);
}


// 遍历选项数据，为每个选项创建并添加 li 元素
options.forEach(option => {
  // 创建 li 和 a 和 img 元素
  const newFood = document.createElement('li');
  newFood.className = 'food';

  const foodLink = document.createElement('a');
  foodLink.href = `/${targetPageUrl}?option=${option.value}&source=${option.source}`;

  const foodImg = document.createElement('img');
  foodImg.src = "../static/img/directory_img/traditional_skill_img/" + option.imgName;
  // 设置链接文本
  foodLink.textContent = option.name;
  // 将 a 和 img 添加到 li 元素
  newFood.appendChild(foodImg);
  newFood.appendChild(foodLink);

  // 获取 ul 元素
  const allFoods = document.querySelector(".all-food");
  // 将 li 元素添加到 ul 中
  allFoods.appendChild(newFood);
});

// 链接
const links = document.querySelectorAll(".food a");
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
