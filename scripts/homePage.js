$(function() {
    const userButton= document.getElementById("userDropdown");
    const cookie = localStorage.getItem("username");
    if (!cookie) {
        userButton.innerHTML = '<i class="bi-person-fill me-1"></i>User';
    }
    else {
        userButton.innerText = cookie;
    }
})
