# Abstract

With the advent of the internet, increasing number of people are shopping online, in order to keep up with the changing consuming habit and to potentially reach out to a greater number of potential customers, it is important that we create an online pet shop.

The nearest pet shop in Bristol is situated at least 2 miles away from the City center, and our pet shop is also situated on the outskirts of Bristol city center, with only 1 mile less than another pet shop situated on the South-west. It is easy for those who live near our shop, they can walk in and browse, for those who live far and who are new to getting a pet, they might decide to drive in and only to find that we do not have their ideal pet in store. For this reason, a pet store might help to make their pet-choosing experience more efficient. 

<div align=center>
<img src= https://i.imgur.com/aznU9X5.png=centerme width = "450px" height = "450px">

</div>	
	
Another reason for us to look slowly transforming our shop to an online one is also due to the uncertainty of the current pandemic. Even though the number of people tested positive for the virus is starting to decrease, but some might still refrain from visiting enclosed and public places unless necessary, this might be because they live with people that are more susceptible to the virus. Regardless of the reason behind their apprehension, making our online shop available would provide these potential customers a safer way to browse and shop in their own comfort, and making it a good opportunity for us, the owner to tag along with the trend of fast and efficient internet shopping.
	
We would like to make an online pet shop that is easy to navigate, and visually pleasing to soon-to-be pet owners. The primary aim is to allow customers place their order, or at least to quickly get a good idea of the pets that we offer in our store, this is because the website is designed to automatically change the status of the item/pet online once someone has placed an order. We want to provide our customers not only the convenience to shop at home, but also to help them decide whether or not they want to make a trip down to our shop for an item that is actually available in store.

# Objectives

As the owners of the pet shop, we care about the survival and sustainability of our shop. This is why we see putting our shop online as a necessary transformation to take in order to be on par with the shopping habit in recent years. Therefore the primary goal with our online shop is to provide our customers with a safe and efficient way of choosing a pet, with or without a car or pandemic (or much time).
	
In order to make sure we can kickstart our online shop and eventually make it sustainable, we need to provide our customers a pleasant shopping experience. The 'best' online pet shops listed on www.makeusof.com, all share a common characteristic, which is that they all provide a clean looking home pages with minimalistic design and layout with a set of well considered labels to guide their customers through their website. 
	
With reference to these successful cases, our objectives for this website is to make sure that it provides a pleasant and efficient experience to browse or shop in our online store, we have broken down this "pleasant and efficient experience" down to smaller chunks to help our team to achieve it. 


![Map](https://i.imgur.com/av4Z8rf.png=centerme)


# System Design
## system architecture diagram

<p align="center">
<img src="../img/system_architecture_diagram.png"/>
</p>

The diagram above is the system architecture diagram, which shows the overall architecture design of the pet store system.
The front-end HTML makes a request to the Pet Store API by calling the JavaScript functions. Then the pet store API will get the required data from the database and return the result through the response. After that, the front end will update the content and displays it to the user interface. 

## Class diagram

<p align="center">
<img src="../img/class_diagram.png"/>
</p>

As the class diagram showed above, this pet store system has three main data models: User account model, Order model, and the Pet model.
There are two sub models under the user model which are the normal user who can view the pets and place the order, and the admin user, who can add, edit pet and confirm shipping the pet order.
## sequence diagram

<p align="center">
<img src="../img/sequence_diagram.png"/>
</p>

The sequence diagram above shows detailed steps for users to interact with the pet shop website.
The user will first enter the home page and then go the login page to log in. If user does not have an account, the user needs to enter the registration page to create an account. When the login succeeds, the user will be navigated to the home page again.
After login, the user can select their favorite pet in the home page and click to enter the pet details page, in the details page, the user can place an order for the pet, and the order will be displayed as waiting for delivery in the order page.

When the administrator logs in to the website, he can confirm the delivery of the order on the order page, and the order status will change to "product is shipping". Administrators can also add new pets for sale to the home page


# Features


Here is a list of all features that our team members have thought of. You will only find a short description of the feature here, for a more detailed explanation, please click on the feature that you wish to view.

- [User creation authentication system](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#user-creation-authentication-system):
- [Pet search display](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#pet-search-display-by-categorization-and-by-availability-status):
- [Pet management](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#pet-management):
- [Online Orders](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#online-orders):
- [Flash cartoon](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#homepage-flash-cartoon):
- [Personality and pet match-macking quiz](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#personality-and-perfect-pet-match-quiz):