# UX Development

# Final UX
## Introduction
This part mainly describes the final design of the pet store web page, specific function in each page. The main function description and code implementation of each feature.

## Home page

<p align="center">
<img src="../img/home.png"/>
</p>

The figure above is the home page of the pet store. The main function of the home page is to display the list of pets in the pet store. The navigation bar at the top allows the administrator to add pets, and users can classify and view pets in different states and types. The upper right corner of the navigation bar has a button to access the order page or login page.

### Pet list display

The function to require the pet list data from the pet store API:
```js
const getPetsUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status;

    fetch(getPetsUrl, {headers: {'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((pets) => {
            let petsHTML = '';

            pets.forEach((pet) => {
                if (pet.hasOwnProperty("category")) {
                    if (pet.category.hasOwnProperty("name")) {

                        let petTags = '';
                        let buttonHTML = '';

                        if (status === "pending")
                            buttonHTML += '<a class="btn btn-warning mt-auto disabled" href="#">PENDING</a>';
                        else if (status === "sold")
                            buttonHTML += '<a class="btn btn-danger mt-auto disabled" href="#">SOLD</a>';

                        if (Array.isArray(pet.tags)) {
                            pet.tags.forEach((tag) => {
                                if (
                                    typeof tag === 'object' &&
                                    tag !== null &&
                                    Object.prototype.hasOwnProperty.call(tag, 'name') &&
                                    typeof tag.name === 'string') {
                                    petTags += petListObjectTagTemplate.replace('PET_TAG_WILL_GO_HERE', tag.name)
                                }
                            });
                        }

                        let petHTML = petListObjectTemplate;
                        let categoryHTML = '<p hidden>' + pet.category.name + '</p>'
                        // We use the regular expression in this case to cover multiple occurrences in text.
                        petHTML = petHTML.replace(/PET_ID_WILL_GO_HERE/g, pet.id)
                        petHTML = petHTML.replace('PET_NAME_WILL_GO_HERE', pet.name)
                        petHTML = petHTML.replace('PET_TAGS_WILL_GO_HERE', petTags)
                        petHTML = petHTML.replace('BUY_BUTTON_STATUS', buttonHTML)
                        petHTML = petHTML.replace('PET_CATEGORY_WILL_GO_HERE', categoryHTML)
                        // Random images
                        let imageNum = Math.floor(Math.random()*10).toString();
                        petHTML = petHTML.replace('IMAGE_NUM', imageNum)

                        petsHTML += petHTML;
                    }
                }
            })
```

The pet list template to be replaced:

```html
const petListObjectTemplate = `
      <div class="col mb-5 pet-display" id="PET_ID_WILL_GO_HERE">PET_CATEGORY_WILL_GO_HERE
        <div class="card h-100">
          <!-- Product image-->
          <img class="card-img-top" src="img/pet_exampleIMAGE_NUM.jpeg" alt="..." />
          <button class="btn" style="position: absolute" onClick="handleDelete(PET_ID_WILL_GO_HERE)">
            <i class="bi-trash-fill me-1"></i>
          </button>
          <!-- Product details-->
          <div class="card-body p-4" onclick="openDetail(this)" style="cursor: pointer">
            <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">PET_NAME_WILL_GO_HERE</h5>
            <!-- Product price-->
            PET_TAGS_WILL_GO_HERE
            </div>
          </div>
          <!-- Product actions-->
            BUY_BUTTON_STATUS
        </div>
      </div>
    `;
```
When a response is obtained from the pet store API, the pet list template is replaced with specific pet data and displayed on the home page.
The user can select the category and status of the pet in the upper navigation bar. The user's selection will change the parameter in the function, and the corresponding pet list will be refreshed on the home page.

### Add pet form

<p align="center">
<img src="../img/add.png"/>
</p>

When the administrator enters specific pet information and clicks the add button. A request will send to the pet store API using the POST method with the pet information.

```js
const postPetUrl = 'https://petstore.swagger.io/v2/pet'
fetch(postPetUrl, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
        "id": new Date().getTime(),
        "name": name,
        "category": {
            "id": 0,
            "name": category
        },
        "tags": tagsArr,
        "status": status
    })
}).then((response) => response.json())
```

### Inventory status

<p align="center">
<img src="../img/inventory.png"/>
</p>

The queryStatusQuantity function gets the data from the pet store inventory API and display the data next to the corresponding state.

```js
function queryStatusQuantity() {
    $.ajax({
        url: "https://petstore.swagger.io/v2/store/inventory",
        type: "GET",
        success: function (data){
            console.log(data);
            document.getElementById("availableQuantity").innerText = data["available"];
            document.getElementById("pendingQuantity").innerText = data["pending"];
            document.getElementById("soldQuantity").innerText = data["sold"];
        },
        error: function (error) {
            console.log(error.responseJSON);
        }
    });
}
```

## Login page

<p align="center">
<img src="../img/login.png"/>
</p>

The figure above shows the login page of the pet store. Users can enter the account and password on this page for login, or go to the registration page for account registration.

### Login

This function is to send the input of username and password to the API to let user login.
```js
const username = $("#exampleInputUsername").val()
const password = $("#exampleInputPassword").val()
    $.ajax({
        url: "https://petstore.swagger.io/v2/user/login?username=" + username
            + '&' + "password=" + password,
        type: "GET",
        async: false,
        cache: false,
        success: function (data) {
            console.log(data);
            Storage.set("username", username, 21600);
            bs4pop.notice('Login success!', {type: 'success'});
            setTimeout('window.location.replace("index.html")',1000);
        },
        error: function (error) {
            console.log(error.responseJSON);
            alert("Login failed!")
        }
    });
```

### Admin password remind

Due to the shared petstore API, other resit groups may change the admin password. This is the function to give the hint of the admin password.

```js
function getAdminPassword() {
    let element = $("#pwdHint");
    if (element) element.remove();
    $.ajax({
        url: "https://petstore.swagger.io/v2/user/admin",
        type: "GET",
        async: false,
        cache: false,
        success: function (data){
            $("#passwordHint").after("<p id='pwdHint'>The <b>admin</b>'s password is " +
                "<b style='color: red'>" + data.password + "</b></p>")
        },
        error: function (error) {
            $("#passwordHint").after("<p><b id='pwdHint' style='color: red'>" +
                error.responseJSON.message + ".</b></p>")
        }
    });
}
```
## Register page

<p align="center">
<img src="../img/registration.png"/>
</p>

The figure above shows the register page of the pet store. User can enter the information and create the account in this page.

### Account registration

The function below is the function to call the pet store API and create the user account.

```js
const dataArray = [];
const dataJson = {
    "username": $("#exampleInputUsername").val(),
    "firstName": $("#exampleFirstName").val(),
    "lastName": $("#exampleLastName").val(),
    "email": $("#exampleInputEmail").val(),
    "password": $("#exampleInputPassword").val(),
    "phone": $("#exampleInputPhone").val()
};
dataArray.push(dataJson);

$.ajax({
    url: "https://petstore.swagger.io/v2/user/createWithArray",
    type: "POST",
    async: false,
    cache: false,
    dataType: "json",
    contentType: "application/json",
    traditional: true,
    data: JSON.stringify(dataArray),
    success: function (data) {
        console.log(data);
        Storage.set("username", dataJson.username, 21600);
        Storage.set("password", dataJson.password, 21600);
        alert("You have successfully registered!");
        window.location.replace("login.html");
    },
    error: function (error) {
        console.log(error.responseJSON);
        alert("Registration failed!")
    }
});
```

## Detail page

<p align="center">
<img src="../img/detail.png"/>
</p>

## Order page
<p align="center">
<img src="../img/order.png"/>
</p>

## Profile page
<p align="center">
<img src="../img/profile.png"/>
</p>



# Design Choices

# Evaluation 
