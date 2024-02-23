// 链接
const links = document.querySelectorAll(".skill a");
// 标题
const title = document.querySelector("h1");

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

// 设置标题的样式
title.style.fontStyle = 'italic';
title.style.fontFamily = "'华文行楷', '宋体', cursive";
title.style.fontSize = '48px';
title.style.margin = '20px 0 60px 80px';




// 模拟 JSON 数据
const dataAdded = 
`{
  "skills": [
    {
      "name": "香包",
      "img": "xiangbao.png",
      "more_img": [
        "xiangbao1.png",
        "xiangbao2.png"
      ],
      "intro": "香包（徐州香包），江苏省徐州市传统美术，国家级非物质文化遗产之一。徐州香包的历史至少可以上溯到战国时期。汉乐府长诗《孔雀东南飞》中有“红罗覆斗帐，四角垂香囊”徐州是两汉文化的发祥地。徐州香包合实用性与观赏性为一，它造型纯朴，图案精美，色彩艳丽，绣法工整细致，内装的中草药能驱蚊防潮，净化空气，预防疾病。徐州香包形制丰富，有心形、圆形、菱形、元宝形、蝴蝶形、花瓶形、水滴形、长方形、人物娃娃等各种形状。外部图案多采用龙凤呈祥、鸳鸯戏水、松鹤延年、喜鹊闹梅等传统的喜庆吉祥题材，以寄托人们祈求祥瑞、辟邪纳福、丰衣足食的美好愿望。2008年6月7日，香包（徐州香包）经中华人民共和国国务院批准列入第二批国家级非物质文化遗产名录，项目编号Ⅶ-26"
    },
    {
      "name": "1",
      "img_path": "xiangbao1.png",
      "more_img_path": ["1"],
      "intro": "1"
    },
    {
      "name": "2",
      "img_path": "xiangbao1.png",
      "more_img_path": ["2"],
      "intro": "2"
    },
    {
      "name": "2",
      "img_path": "xiangbao1.png",
      "more_img_path": ["2"],
      "intro": "2"
    },
    {
      "name": "2",
      "img_path": "xiangbao1.png",
      "more_img_path": ["2"],
      "intro": "2"
    },
    {
      "name": "2",
      "img_path": "xiangbao1.png",
      "more_img_path": ["2"],
      "intro": "2"
    }
  ]
}`;

const data = JSON.parse(dataAdded);
console.log('hello');

for (let i = 0; i < data.skills.length; i++) {
  // 创建 HTML 元素
  // li
  const newSkill = document.createElement('li');
  newSkill.className = 'skill';
  // img / a
  const skillImg = document.createElement('img');
  const skillLink = document.createElement('a');
  
  // 设置 img 属性
  skillImg.alt = data.skills[i]["name"];
  skillImg.src = "../static/img/directory_img/traditional_skill_img/xb.jpg";
  // 设置 a 属性
  skillLink.href = "/cultural_intro";
  skillLink.textContent = data.skills[i]["name"];
  
  // 添加到 li 中
  newSkill.appendChild(skillImg);
  newSkill.appendChild(skillLink);
  
  // 获取 ul
  const allSkills = document.querySelector('.all-skill');
  allSkills.appendChild(newSkill);
}

