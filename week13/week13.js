// ฟังก์ชันตั้งค่า cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // วันหมดอายุ
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// ฟังก์ชันอ่าน cookie ตามชื่อ
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(";");

    for (let c of cookieArr) {
        c = c.trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// ฟังก์ชันลบ cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// ดึง elements
const input = document.getElementById("usernameInput");
const display = document.getElementById("display");
const saveBtn = document.getElementById("saveBtn");
const showBtn = document.getElementById("showBtn");
const deleteBtn = document.getElementById("deleteBtn");

// กดปุ่มเพื่อบันทึก cookie
saveBtn.addEventListener("click", () => {
    const username = input.value;
    if (username) {
        setCookie("username", username, 7); // อายุ 7 วัน
        alert("Cookie saved!");
    }
});

// กดปุ่มเพื่อแสดง cookie
showBtn.addEventListener("click", () => {
    const user = getCookie("username");
    display.innerText = user ? "Hello " + user : "No cookie found";
});

// กดปุ่มเพื่อลบ cookie
deleteBtn.addEventListener("click", () => {
    deleteCookie("username");
    display.innerText = "Cookie deleted";
});
