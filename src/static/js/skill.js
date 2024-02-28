// 标题
const title = document.querySelector("h1");

// 设置标题的样式
title.style.fontStyle = 'italic';
title.style.fontFamily = "'华文行楷', '宋体', cursive";
title.style.fontSize = '48px';
title.style.margin = '20px 0 60px 80px';

var dataAdded = $.ajax({url:"https://xhwlfy.cn/cultural_intro/json",async:false});
const data1 = JSON.stringify(dataAdded.responseText);
var data2 = JSON.parse(data1)
var data = JSON.parse(data2)
console.log(data)
// 模拟 JSON 数据
// 根据 JSON 数据创建列表
// for (let i = 0; i < data.skills.length; i++) {
//   // 创建 HTML 元素
//   // li
//   const newSkill = document.createElement('li');
//   newSkill.className = 'skill';
//   // img / a
//   const skillImg = document.createElement('img');
//   const skillLink = document.createElement('a');
  
//   // 设置 img 属性
//   skillImg.alt = data.skills[i]["name"];
//   skillImg.src = "../static/img/directory_img/traditional_skill_img/" + data.skills[i]["imgName"];
//   // 设置 a 属性
//   skillLink.href = "/cultural_intro";
//   skillLink.textContent = data.skills[i]["name"];
  
//   // 添加到 li 中
//   newSkill.appendChild(skillImg);
//   newSkill.appendChild(skillLink);
  
//   // 获取 ul
//   const allSkills = document.querySelector('.all-skill');
//   allSkills.appendChild(newSkill);
// }

console.log('hello');

// 目标页面 URL
const targetPageUrl = "cultural_intro";

// 选项数据
const options = [];
for (let i = 0; i < data.skills.length; i++) {
  let option = {
    name: data.skills[i]["name"],
    value: data.skills[i]["name"],
    imgName: data.skills[i]["imgName"],
    source: "skill"
  };
  options.push(option);
}


// 遍历选项数据，为每个选项创建并添加 li 元素
options.forEach(option => {
  // 创建 li 和 a 和 img 元素
  const newSkill = document.createElement('li');
  newSkill.className = 'skill';

  const skillLink = document.createElement('a');
  skillLink.href = `/${targetPageUrl}?option=${option.value}&source=${option.source}`;

  const skillImg = document.createElement('img');
  skillImg.src = "../static/img/directory_img/traditional_skill_img/" + option.imgName;
  // 设置链接文本
  skillLink.textContent = option.name;
  // 将 a 和 img 添加到 li 元素
  newSkill.appendChild(skillImg);
  newSkill.appendChild(skillLink);

  // 获取 ul 元素
  const allSkills = document.querySelector(".all-skill");
  // 将 li 元素添加到 ul 中
  allSkills.appendChild(newSkill);
});

// 链接
const links = document.querySelectorAll(".skill a");
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
