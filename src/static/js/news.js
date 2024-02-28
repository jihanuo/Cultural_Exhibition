// 播放视频的函数
function playVideo(videoTitle) {
  // 根据视频标题找到对应的视频路劲
  const videoPath = findVideoPath(videoTitle);
  // 如果找到
  if (videoPath) {
    console.log('播放视频', videoTitle);
    // 获取视频播放器
    const videoPlayer = document.getElementById("videoPlayer");
    // 设置视频源
    videoPlayer.src = videoPath;
    // 显示视频播放器
    videoPlayer.style.display = "block";
    // 播放视频
    videoPlayer.play();
  } else {
    console.log('没找到', videoTitle);
  }
}
// 根据视频标题找到视频路劲
function findVideoPath(videoTitle) {
  return "../static/test_video/" + videoTitle;
}

// 资讯数据。文章标题 / 文章内容 / 视频标题 / 视频
var dataAdded = $.ajax({url:"https://xhwlfy.cn/news/json",async:false});
const data1 = JSON.stringify(dataAdded.responseText);
console.log(data1)
var data2 = JSON.parse(data1)
var data = JSON.parse(data2)
console.log(data)
// 所有资讯数据
const articleData = data;

// 文章标题列表 - 习言
for (let i = 0; i < articleData.articles.length; i++) {
  // 创建 li 和 p
  const newTitle = document.createElement('li');
  const newTitleContent = document.createElement('p');
  // 设置属性
  newTitleContent.innerHTML = articleData.articles[i]["title"];
  // 添加到 li 中
  newTitle.appendChild(newTitleContent);
  
  // 获取 ul
  const titleList = document.querySelector(".titles");
  titleList.appendChild(newTitle);
}
// 自定义文章
for (let i = 0; i < articleData.customs.length; i++) {
  // 创建 li 和 p
  const newTitle = document.createElement('li');
  const newTitleContent = document.createElement('p');
  // 设置属性
  newTitleContent.innerHTML = articleData.customs[i]["title"];
  // 添加到 li 中
  newTitle.appendChild(newTitleContent);
  
  // 获取 ul
  const titleList = document.querySelector(".customize-titles");
  titleList.appendChild(newTitle);
}


// 视频标题列表
for (let i = 0; i < articleData.videos.length; i++) {
  // 创建 li 和 p
  const newTitle = document.createElement('li');
  const newTitleContent = document.createElement('p');
  // 设置属性
  newTitleContent.innerHTML = articleData.videos[i]["title"];
  // 添加到 li 中
  newTitle.appendChild(newTitleContent);
  
  // 获取 ul
  const titleList = document.querySelector(".video-list");
  titleList.appendChild(newTitle);
}
// 点击视频并播放
// 视频标题的交互
const allVideoTitle = document.querySelectorAll(".video-list p");
allVideoTitle.forEach(title => {
  title.style.cursor = 'pointer';

  // 鼠标悬浮事件
  title.addEventListener("mouseover", () => {
    title.style.textDecoration = 'underline';
  });
  title.addEventListener("mouseout", () => {
    title.style.textDecoration = 'none';
  });

  // 点击标题并播放视频
  title.addEventListener("click", (event) => {
    let clickedItem = event.target;
    for (let i = 0; i < articleData.videos.length; i++) {
      if (clickedItem.textContent === articleData.videos[i]["title"]) {
        // 得到列表的 p 元素，来显示文章内容
        playVideo(articleData.videos[i]["videoName"]);
      }
    }
  })
});


// 所有文章标题
const allAriticleTitle = document.querySelectorAll(".two-kinds-titles p");
// 显示文章的块
const showArticle = document.querySelector(".text");
const showArticleContent = document.querySelector(".text p");

// 文章标题的交互
allAriticleTitle.forEach(title => {
  // 交互
  title.style.cursor = 'pointer';
  
  title.addEventListener("mouseover", () => {
    title.style.textDecoration = 'underline';
  });
  title.addEventListener("mouseout", () => {
    title.style.textDecoration = 'none';
  });
  
  // 点击事件
  title.addEventListener("click", (event) => {

    // 检测被点击的元素
    let clickedItem = event.target;
    // 执行点击后的逻辑
    for (let i = 0; i < articleData.articles.length; i++) {
      if (clickedItem.textContent === articleData.articles[i]["title"]) {
        // 得到列表的 p 元素，来显示文章内容
        showArticleContent.textContent = articleData.articles[i]["content"];
      }
    }
    // 自定义的标题
    for (let i = 0; i < articleData.customs.length; i++) {
      if (clickedItem.textContent === articleData.customs[i]["title"]) {
        // 得到列表的 p 元素，来显示文章内容
        showArticleContent.textContent = articleData.customs[i]["content"];
      }
    }
  });
});

