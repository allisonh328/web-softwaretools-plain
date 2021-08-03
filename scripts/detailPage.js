$(function () {
    // let petId = getUrlParam("id")
    let petName = getUrlParam("name");
    let petTags = getUrlParam("tags");
    let petCategory = getUrlParam("category");
    let petStatus = getUrlParam("status");
    document.getElementById("petName").innerText = petName;
    document.getElementById("petTags").innerText = petTags;
    document.getElementById("petCategory").innerText = petCategory;
    if (petStatus === "pending") {
        $("#petStatus").replaceWith('<button class="btn btn-warning disabled flex-shrink-0" type="button">' +
            '<i class="bi-cart-fill me-1"></i>Pending</button>');
    }
    else if (petStatus === "sold") {
        $("#petStatus").replaceWith('<button class="btn btn-danger disabled flex-shrink-0" type="button">' +
            '<i class="bi-cart-fill me-1"></i>Sold</button>');
    }
})

function imageUpload(option) {
    $('#imageUpload').modal(option);
}

function goBack() {
    history.go(-1);
}

function getPet(id) {
    $.ajax({
        url: "https://petstore.swagger.io/v2/pet/" + id,
        type: "GET",
        cache: false,
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error.responseJSON);
        }
    });
}

function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function checkQuantity(num) {
    let reg = /^((?!0)\d{1,9})$/;
    return num.match(reg) && num < 100;
}
