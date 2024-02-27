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

// 获取 URL 参数
const urlParams = new URLSearchParams(window.location.search);
const option = urlParams.get('option');
const source = urlParams.get('source');
console.log('option:', option);
console.log('source:', source);

// 根据 URL 参数生成相应的内容
const pageTitle = document.querySelector('h1');
const imgs = document.querySelectorAll(".img img");
const introContent = document.querySelector(".text p");

// 生成对应 option 和 source 的内容
generateContentByOptionAndSource(option, source);


function generateContentByOptionAndSource(option, source) {
  if (source === 'skill') {
    // 填充内容
    for (let i = 0; i < data.skills.length; i++) {
      if (option === data.skills[i]["name"]) {
        // 技艺标题
        pageTitle.innerHTML = data.skills[i]["name"];
        // 图片
        const imgSrcList = data.skills[i]["moreImgName"];
        imgs.forEach((img, index) => {
          img.src = "../static/img/directory_img/traditional_skill_img/" + imgSrcList[index];
        });
        console.log(imgs);
        // 介绍内容
        introContent.innerHTML = data.skills[i]["intro"];
      }
    }
  } else if (source === 'food') {
    // 填充内容
    for (let i = 0; i < data.foods.length; i++) {
      if (option === data.foods[i]["name"]) {
        // 技艺标题
        pageTitle.innerHTML = data.foods[i]["name"];
        // 图片
        const imgSrcList = data.foods[i]["moreImgName"];
        imgs.forEach((img, index) => {
          img.src = "../static/img/directory_img/traditional_skill_img/" + imgSrcList[index];
        });
        // 介绍内容
        introContent.innerHTML = data.foods[i]["intro"];
        console.log(data.foods[i]["intro"]);
      }
    }
  } else if (source === 'music') {
    // 填充内容
    for (let i = 0; i < data.musics.length; i++) {
      if (option === data.musics[i]["name"]) {
        // 技艺标题
        pageTitle.innerHTML = data.musics[i]["name"];
        // 图片
        const imgSrcList = data.musics[i]["moreImgName"];
        imgs.forEach((img, index) => {
          img.src = "../static/img/directory_img/traditional_skill_img/" + imgSrcList[index];
        });
        // 介绍内容
        introContent.innerHTML = data.musics[i]["intro"];
        console.log(data.musics[i]["intro"]);
      }
    }
  } else if (source === 'dance') {
    // 填充内容
    for (let i = 0; i < data.dances.length; i++) {
      if (option === data.dances[i]["name"]) {
        // 技艺标题
        pageTitle.innerHTML = data.dances[i]["name"];
        // 图片
        const imgSrcList = data.dances[i]["moreImgName"];
        imgs.forEach((img, index) => {
          img.src = "../static/img/directory_img/traditional_skill_img/" + imgSrcList[index];
        });
        // 介绍内容
        introContent.innerHTML = data.dances[i]["intro"];
        console.log(data.dances[i]["intro"]);
      }
    }
  } else if (source === 'tale') {
    // 填充内容
    for (let i = 0; i < data.tales.length; i++) {
      if (option === data.tales[i]["name"]) {
        // 技艺标题
        pageTitle.innerHTML = data.tales[i]["name"];
        // 图片
        const imgSrcList = data.tales[i]["moreImgName"];
        imgs.forEach((img, index) => {
          img.src = "../static/img/directory_img/traditional_skill_img/" + imgSrcList[index];
        });
        // 介绍内容
        introContent.innerHTML = data.tales[i]["intro"];
        console.log(data.tales[i]["intro"]);
      }
    }
  }
}