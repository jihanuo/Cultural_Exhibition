var dataAdded = $.ajax({url:"https://xhwlfy.cn/cultural_intro/json",async:false});
const data1 = JSON.stringify(dataAdded.responseText);
var data2 = JSON.parse(data1)
var data = JSON.parse(data2)
console.log(data)

// 目标页面 URL
const targetPageUrl = "cultural_intro";

// 选项数据
const options = [];
for (let i = 0; i < data.musics.length; i++) {
  let option = {
    name: data.musics[i]["name"],
    value: data.musics[i]["name"],
    imgName: data.musics[i]["imgName"],
    source: "music"
  };
  options.push(option);
}


// 遍历选项数据，为每个选项创建并添加 li 元素
options.forEach(option => {
  // 创建 li 和 a 和 img 元素
  const newMusic = document.createElement('li');
  newMusic.className = 'music';

  const musicLink = document.createElement('a');
  musicLink.href = `/${targetPageUrl}?option=${option.value}&source=${option.source}`;

  const musicImg = document.createElement('img');
  musicImg.src = "../static/img/directory_img/traditional_skill_img/" + option.imgName;
  // 设置链接文本
  musicLink.textContent = option.name;
  // 将 a 和 img 添加到 li 元素
  newMusic.appendChild(musicImg);
  newMusic.appendChild(musicLink);

  // 获取 ul 元素
  const allMusics = document.querySelector(".all-music");
  // 将 li 元素添加到 ul 中
  allMusics.appendChild(newMusic);
});

// 链接
const links = document.querySelectorAll(".music a");
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
