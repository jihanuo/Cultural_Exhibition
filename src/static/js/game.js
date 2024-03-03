// 场景
// document.querySelector 获取元素
const scenes = [
  {element: document.querySelector(".first")},
  {element: document.querySelector(".second")},
  {element: document.querySelector(".third")},
  {element: document.querySelector(".fourth")},
  {element: document.querySelector(".fifth")},
  {element: document.querySelector(".sixth")},
  {element: document.querySelector(".seventh")},
  {element: document.querySelector(".eighth")},
  {element: document.querySelector(".ninth")},
  {element: document.querySelector(".tenth")},
  {element: document.querySelector(".eleventh")},
  {element: document.querySelector(".twelfth")},
  {element: document.querySelector(".thirteenth")}
];
// 将除第一个外的所有场景隐藏
for (let i = 1; i < scenes.length; i++) {
  scenes[i].element.style.display = "none";
}

let currentSceneIndex = 0;

// console.log(scenes[0].element.style.display);

function switchScene(sceneIndex) {
  if (sceneIndex + 1 >= scenes.length) {
    return;
  }
  // 隐藏当前场景
  scenes[sceneIndex].element.style.display = "none";
  // 显示下一个场景
  scenes[sceneIndex+1].element.style.display = "block";
}


// 设置鼠标样式，和点击给定元素，切换场景事件
function addEventsToClickedElements(clickedElements) {
  // 鼠标样式
  clickedElements.forEach(element => {
    element.style.cursor = "pointer";
  });

  clickedElements.forEach(element => {
    // 点击建筑或者文字切换场景
    element.addEventListener("click", (event) => {
      switchScene(currentSceneIndex);
      currentSceneIndex++;
    });
  });
}

// 问答场景
function checkAnswer(clickedElements) {
  clickedElements.forEach(option => {
    option.addEventListener("click", () => {
      if (option.classList.contains("correct")) {
        const tick = document.createElement("span");
        tick.textContent = "√";
        tick.style.color = "green";
        tick.style.fontSize = "36px";
        tick.style.fontWeight = "700";
        option.appendChild(tick);
        // 1秒后切换场景
        setTimeout(function () {
          switchScene(currentSceneIndex);
          currentSceneIndex++;
        }, 1000);
      } else {
        const tick = document.createElement("span");
        tick.textContent = "×";
        tick.style.color = "red";
        tick.style.fontSize = "36px";
        tick.style.fontWeight = "700";
        option.appendChild(tick);
        // 1秒后清除叉叉
        setTimeout(function () {
          option.removeChild(tick);
        }, 600);
      }
    });
  });
}

// 小男孩动画
function littleBoy(sleepyBoy) {
  sleepyBoy.classList.add("rotate-and-move");
}


// 遍历每个场景，点击指定元素，切换页面。
for (let i = 0; i < scenes.length; i++) {
  if (scenes[i].element === document.querySelector(".first")) {
    // 自定义能够被点击的元素
    const clickedElements = document.querySelectorAll(".first .item p");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".second")) {
    // 第二个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".second #girl .cute-girl");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".third")) {
    // 第三个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".third #scholar-boy .handsome-boy");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".fourth")) {
    // 第四个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".fourth #girl .cute-girl");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".fifth")) {
    // 第五个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".fifth #q-and-a #a #option");
    checkAnswer(clickedElements);
  } else if (scenes[i].element === document.querySelector(".sixth")) {
    // 第六个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".sixth #girl .cute-girl");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".seventh")) {
    // 第七个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".seventh #q-and-a #a #option");
    checkAnswer(clickedElements);
  } else if (scenes[i].element === document.querySelector(".eighth")) {
    // 第八个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".eighth #xiangbao-image");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".ninth")) {
    // 第九个场景能够被点击的元素
    const cuteGirl = document.querySelector(".ninth #girl");
    cuteGirl.addEventListener("click", () => {
      // 删除说话框
      const girlWord = document.querySelector(".ninth #girl #girl-word");
      cuteGirl.removeChild(girlWord);

      cuteGirl.classList.add("walk-closer");
      setTimeout(function(){
        switchScene(currentSceneIndex);
        currentSceneIndex++;
      }, 1000);
    });
  } else if (scenes[i].element === document.querySelector(".tenth")) {
    // 第十个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".tenth #girl .cute-girl");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".eleventh")) {
    // 第十一个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".eleventh #q-and-a #a #option");
    checkAnswer(clickedElements);
  } else if (scenes[i].element === document.querySelector(".twelfth")) {
    // 第十二个场景能够被点击的元素
    const sleepyBoy = document.querySelector(".twelfth .talk");
    sleepyBoy.addEventListener("click", () => {
      // 删除说话框
      const boyWord = document.querySelector(".twelfth .talk .boy-word");
      sleepyBoy.removeChild(boyWord);

      littleBoy(sleepyBoy);
      setTimeout(function(){
        switchScene(currentSceneIndex);
        currentSceneIndex++;
      }, 4000);
    });
  } else if (scenes[i].element === document.querySelector(".thirteenth")) {
    // 第十三个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".thirteenth .talk .sleepy-boy");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".fourteenth")) {
    // 第十四个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".fourteenth .xiangbao-container .xiangbao");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".fifteenth")) {
    // 第十五个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".fifteenth .flowers");
    addEventsToClickedElements(clickedElements);
  } else if (scenes[i].element === document.querySelector(".sixteenth")) {
    // 第十六个场景能够被点击的元素
    const clickedElements = document.querySelectorAll(".sixteenth .bag-container .bag");
    clickedElements.forEach(bag => {
      bag.addEventListener("click", () => {
        alert("恭喜你！");
      });
    })
  }
}

