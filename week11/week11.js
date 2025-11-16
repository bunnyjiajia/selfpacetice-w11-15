// 1. เลือก elements จาก DOM
const title = document.getElementById("title");
const msg = document.getElementById("msg");
const changeTextBtn = document.getElementById("changeTextBtn");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const list = document.getElementById("list");

// 2. เปลี่ยนข้อความเมื่อกดปุ่ม
changeTextBtn.addEventListener("click", () => {
    msg.innerText = "The message has been changed!";
    msg.classList.add("highlight"); // เพิ่ม CSS class
});

// 3. เพิ่มรายการใหม่ใน <ul>
addItemBtn.addEventListener("click", () => {
    const li = document.createElement("li"); // สร้าง element <li>
    li.innerText = "New item " + (list.children.length + 1); // ข้อความ
    list.appendChild(li); // ใส่เข้าไปใน <ul>
});

// 4. ลบรายการสุดท้าย
removeItemBtn.addEventListener("click", () => {
    if (list.children.length > 0) {
        list.lastChild.remove(); // ลบตัวสุดท้าย
    } else {
        alert("No items to remove!");
    }
});

// 5. ตัวอย่าง event เมื่อ mouseover ที่ title
title.addEventListener("mouseover", () => {
    title.style.color = "red";
});

title.addEventListener("mouseout", () => {
    title.style.color = "black";
});
