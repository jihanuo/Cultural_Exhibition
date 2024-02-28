var dataAdded = $.ajax({url:"https://xhwlfy.cn/cultural_intro/json",async:false});
const data1 = JSON.stringify(dataAdded.responseText);
var data2 = JSON.parse(data1)
var data = JSON.parse(data2)
console.log(data)
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
