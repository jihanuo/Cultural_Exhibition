// 模拟 JSON 数据
const dataAdded = 
`{
  "skills": [
    {
      "name": "香包",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg",
        "xb.jpg"
      ],
      "intro": "香包（徐州香包），江苏省徐州市传统美术，国家级非物质文化遗产之一。徐州香包的历史至少可以上溯到战国时期。汉乐府长诗《孔雀东南飞》中有“红罗覆斗帐，四角垂香囊”徐州是两汉文化的发祥地。徐州香包合实用性与观赏性为一，它造型纯朴，图案精美，色彩艳丽，绣法工整细致，内装的中草药能驱蚊防潮，净化空气，预防疾病。徐州香包形制丰富，有心形、圆形、菱形、元宝形、蝴蝶形、花瓶形、水滴形、长方形、人物娃娃等各种形状。外部图案多采用龙凤呈祥、鸳鸯戏水、松鹤延年、喜鹊闹梅等传统的喜庆吉祥题材，以寄托人们祈求祥瑞、辟邪纳福、丰衣足食的美好愿望。2008年6月7日，香包（徐州香包）经中华人民共和国国务院批准列入第二批国家级非物质文化遗产名录，项目编号Ⅶ-26"
    },
    {
      "name": "剪纸",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "徐州剪纸是一种江苏省的传统民俗工艺品。广泛分布于邳州、新沂、沛县等地，剪纸技艺在当地世代相传。其形式大致可分为装饰剪纸(窗花、顶棚花、盆花、枕花、帐花、灯花等)、绣花纹样(鞋花样)、特种剪纸等。徐州剪纸取材丰富，内容广泛，有历史故事、民间传说、戏剧人物等类型的作品，也有以现实生活为主题、反映新时代精神风貌的剪纸作品。艺人用独特的艺术语言，对疏密关系进行大胆处理和把握，作品中有时会出现大面积的空白，有时出其不意地在大面积色块中镂出一些灵性的物象，画面朴实，简洁明快，保持了原生艺术的纯正品格。2008年入选第一批国家级非物质文化遗产扩展项目名录。"
    },
    {
      "name": "柳琴戏",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "柳琴戏是一种起源于徐州的地方戏曲，由弦子和扬琴伴奏，属于小调类戏剧，也称“小曲”或“柳琴小调”。柳琴戏因其曲调优美，演唱时在下句腔尾音翻高七度或有帮和，腔调迷人，所以也叫“拉魂腔”。 它的主要声腔为高腔、二六板等。柳琴戏有自己的表演程式和动作，其表演程式是从生活中提炼出来和摘取姊妹艺术的“压花场”中的动作。例如整鬓、提鞋、紧腰；再如“摇耧式”、“撒种式”；另外还有 “怀中抱月”、“浪子踢球”、“燕子拔泥”等。步法有“引场步”、“”搓步等。舞台调度有“”双插花、“剪子股”等。表演粗犷朴实，节奏明快，乡土气息浓厚，步法多具民间歌舞的特点。柳琴戏始终扎根在农村，表达的是农民的所思所想，听柳琴戏是一代代农民和众多以衍化都市民众不可或缺的精神文化享受，徐州柳琴戏是江苏戏曲文化的重要组成部分，它充分体现了流行地域的民风民俗等人文特征，承载着当地从古至今多方面的历史文化信息，对当地的文史研究有着很好的辅正价值。"
    }
  ],
  "foods": [
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是美食"
    },
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是美食"
    }
  ],
  "musics": [
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是音乐"
    },
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是音乐"
    }
  ],
  "dances": [
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是dance"
    },
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是dance"
    }
  ],
  "tales": [
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是tale"
    },
    {
      "name": "123",
      "imgName": "xb.jpg",
      "moreImgName": [
        "xb.jpg", "xb.jpg"
      ],
      "intro": "我是tale"
    }
  ]
}`;
const data = JSON.parse(dataAdded);

console.log('hello');

// 目标页面 URL
const targetPageUrl = "cultural_intro";

// 选项数据
const options = [];
for (let i = 0; i < data.dances.length; i++) {
  let option = {
    name: data.dances[i]["name"],
    value: data.dances[i]["name"],
    imgName: data.dances[i]["imgName"],
    source: "dance"
  };
  options.push(option);
}


// 遍历选项数据，为每个选项创建并添加 li 元素
options.forEach(option => {
  // 创建 li 和 a 和 img 元素
  const newDance = document.createElement('li');
  newDance.className = 'dance';

  const danceLink = document.createElement('a');
  danceLink.href = `/${targetPageUrl}?option=${option.value}&source=${option.source}`;

  const danceImg = document.createElement('img');
  danceImg.src = "../static/img/directory_img/traditional_skill_img/" + option.imgName;
  // 设置链接文本
  danceLink.textContent = option.name;
  // 将 a 和 img 添加到 li 元素
  newDance.appendChild(danceImg);
  newDance.appendChild(danceLink);

  // 获取 ul 元素
  const allDances = document.querySelector(".all-dance");
  // 将 li 元素添加到 ul 中
  allDances.appendChild(newDance);
});

// 链接
const links = document.querySelectorAll(".dance a");
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