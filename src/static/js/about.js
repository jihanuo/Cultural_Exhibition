// 所有联系方式及学校 phone / mail / QQ / school
const contacts = document.querySelectorAll(".about-us p");
// 所有联系方式左边的图片
const icons = document.querySelectorAll(".about-us img");

// 所有成员图片
const memberImgs = document.querySelectorAll(".members .member img");
// 负责人图片
const director = document.querySelector(".team-head-img");

// 添加鼠标悬浮在文本上时，出现下划线
contacts.forEach(contact => {
    // 鼠标悬停
    contact.addEventListener("mouseover", () => {
        contact.style.textDecoration = 'underline';
    });
    // 鼠标离开
    contact.addEventListener("mouseout", () => {
        contact.style.textDecoration = 'none';
    });
});

// 添加动画效果，向左移动
icons.forEach(icon => {
    // 鼠标悬停，向左移动
    icon.addEventListener("mouseover", () => {
        icon.style.transition = 'transform 0.6s ease';
        icon.style.transform = 'translateX(-20px)';
    });
    // 鼠标离开，复原
    icon.addEventListener("mouseout", () => {
        icon.style.transform = 'translateX(0)';
    });
})

// 给所有成员图片添加动画效果
memberImgs.forEach(memberImg => {
    // 鼠标悬停，图片变大
    memberImg.addEventListener("mouseover", () => {
        memberImg.style.transition = 'transform 0.3s ease';
        memberImg.style.transform = 'scale(1.2)';
    });

    // 鼠标离开，图片复原
    memberImg.addEventListener("mouseout", () => {
        memberImg.style.transform = 'scale(1)';
    });
})

// 负责人图片动画效果
director.addEventListener("mouseover", () => {
    director.style.transition = 'transform 0.3s ease';
    director.style.transform = 'scale(1.1)';
})
director.addEventListener("mouseout", () => {
    director.style.transform = 'scale(1)';
})
