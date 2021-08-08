# ALL Possible Features

This is section presents a list of all features that we have considered to implement:

- User creation authentication system
- Pet search display
- Pet management
- Online Orders
- Flash cartoon
- Personality and pet match-macking quiz


# User creation authentication system:
## Description:

This feature helps to differentiate 3 types of user each with corresponding authority given to perform different tasks on the website. [Click here](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#authority-instruction) for details.

- This feature consists of the user registration page, and user login page and the user log out button. 

- Registration page consists of Username, first and last name, Contact number, email and password. Registered users would be allowed to change their profile information. 

- To perform any action on the pet store, a registered user, they will need to sign in with their name and password. 

- If it is a new user, they will be required to sign up first in order to place online orders. 

- Unregistered user and un-signed in user will still be able to view the website and will still be able to navigate through the website and browse what we have in store. 

- User will be able to log out if they wish.

- As an extra small feature, we are hoping to implement a 'Remember me' function to allow user for a quick log back in. 

#### Authority Instruction
<div align=center>


| Role         | Access to Homepage | Add Pet | Delete Pet | Update Pet | Upload Pet Image | Update User Profile | Place Orders | Cancel Orders | Ship Products | Confirm Receipt |
| ------------ | ------------------ | ------- | ---------- | ---------- | ---------------- | ------------------- | ------------ | ------------- | ------------- | --------------- |
| Sightseer    | ✔                  | ❌       | ❌          | ❌          | ❌                | ❌                   | ❌            | ❌             | ❌             | ❌               |
| Customer     | ✔                  | ❌       | ❌          | ❌          | ❌                | ✔                   | ✔            | ✔             | ❌             | ✔               |
| Owner(admin) | ✔                  | ✔       | ✔          | ✔          | ✔                | ✔                   | ❌            | ✔             | ✔             | ❌               |



</div>


## Justification:
This feature has been strongly requested by one of the owners of our shop and this feature is to keep a record to customers' address information so that in future purchases they will not be required to refill their home address and contact information. 

This owner understands that the store right now only specializes in pets, but he is looking to start buying in pet toys and other pet-related items for future sell. Apart from initial user surveys that prove to have a strong favour towards having accounts, considering the business outlook in the long run - which is potentially expanding to a wider variety of goods, having an account with basic user information filled in could provide existing users an incentive to return to the store for their future pet-related purchases. Therefore by introducing this feature at the very beginning of our online pet store contributes to the eventual sustainability and survival of the store. 

Additionally, even though there had been doubts about abandoning this feature and allowing users add pets to cart without being a registered member, as having this extra step could counteract the efficient shopping experience.  However, owners of the shop are cautious about underlining security issues without the user authentication. Therefore, despite the step back from providing an efficient shopping experience, forcing customers to register as a member would help to mitigate risks of fraudulent account access/payments. Security is especially important for local businesses. 



#  Pet search display (by categorization and by availability status):
## Description: 
All users are able to change up what pet they see on the screen by selecting either pet category or availability of pet status. It is there to increase search and viewing efficiency. 

The categories and pet status are placed in two separate drop-down menu bars on top of our webpage.

Pet categories include: Dogs, Cats, Birds, Fishes, Reptiles, Insects, Others

Pet status includes: Available, Pending, Sold

- Available: allows to be added to cart

- Pending: when the pet item has been paid for, but the store admin hasn't confirmed send yet. [Click here](https://github.com/Yj-nnie/web-softwaretools-plain/blob/Jun/report/Features.md#pet-management) to see Pet management feature in detail

- Sold: no longer available, cannot be added to Order list. 

## Justification: 
One of our aims is to offer an efficient online shopping/viewing experience, although we do not have a lot of different types of pets available in our store yet, by setting up a search system to narrow down their search result would provide a good foundation for future expansion. This is why by the final product we have decided to further specify pet categories as much as we can. 

Pet categorization based on availability status also helps to increase efficiency for pet search, this is also to prevent buying/order conflicts on the online store. Given that a online pet shop will not receive the crazy amount of browsing or ordering, and thus pet items are unlikely to come in great numbers, the "Pending status" will ideally prevent a customer from adding the pet to their cart when someone else has already paid for it but the item hasn't been sent out by the store managers.  

The Pending status is to act as a buffer state for both Available and Sold state. It is under pending status when the item has already been paid for by a registered user, but it hasn't been dispatched by the admin yet. An item/pet will switch to Available state if the customer or the admin decides to hit 'Delete order' in Orders page. This will then allow new users to place this pet/ item in their orders. And it will only turn to Sold once the customers confirms with the 'Confirm Receipt' button in the Order page once they receive the pet.  This aims to prevent the customer and store admin from having to deal with order conflicts. 




# Pet management:
## Description:
This feature is for inventory management and is only accessible by the store admin. 

User can choose to add a new pet to the online inventory, they would have to enter Pet Name, Category, Tags and Availability Status.

User can also update information of existing pet items. User can also add image to pet or delete pet item.



## Justification:
This feature is an essential feature for shop owners, it is one of the core component of managing the online shop. The shop owners(admin) should be able to manage pet by adding/deleting pets available in the store. Or even manually change the status of the pet if needed to. This is feature contributes more to the managerial side of the website, and is there to give the owners the freedom alter pet information in their inventory. However, this feature is closely linked to the User authentication feature as the website needs to understand the identity of the user, therefore making the user authentication feature indispensable.

Adding a pet photo is an essential feature to have for a pleasant and efficient shopping experience. The viewer should be able to have a good idea of what they are looking at, and without the photos(the visual), it would defy the entire purpose of a visually pleasing and easily navigable online shop.

It is also important to be given the right to update pet information including updating image as providing the most up-to-date information is essential in trust building between customers and the online store.

[Click here](https://github.com/Yj-nnie/web-softwaretools-plain/blob/dlh8899/ux.md#survey-1-the-proposal-of-the-website) for user input. 



# Online Orders:

## Description:


This feature encompasses two sub features: Place orders(Customer) online and Order management(Admin)

Placing order rests in the heart of online shopping, registered users will be able to place orders by first clicking on the pet item and if the pet is under 'Available' status, then the 'Buy' button will be lighted up and the user will be able to put the item in the basket. 

Once order has been place, there will be two operations available on customer's side under every order: 'Waiting for sending'(not clickable) and 'Cancel order'(clickable).

Once order has been placed, there will be two operations available under every item for admin to manoeuvre 'Confirm sending'(clickable) and 'Cancel Order'(clickable).

To follow up on the order, order management is required, the admin can either click on 'Cancel order' to cancel order upon request,  or 'Confirm sending' once the pet has been sent out, in which case , the 'Waiting for sending' status on customer's order list will be changed to 'Confirm receipt'(clickable).  



## Justification:

This is feature is the heart of and the very definition for online shopping. This allows users to place orders at their convenience, in their comfort. This not only helps customers to save time, but also helps to eliminate most of the concerns related to covid and any new strands of covid in future  For both the survival of the store and the health of owners and their customers. This will make it easier for those who want to get a pet but remains cautious to choose and get a pet without having to put themselves under extreme stress and anxiety about going to public place. 

This feature is adding a few extra steps between customer and admin to help manage and track orders. With the ' Confirm receipt' option provided for customers, customers will be given control over the order and it will help to ensure that the Order will only end once they have physically received the item. This steps can also help to track down orders by protecting both the store and the customers in case the item gets lost. At least by clicking on 'Confirm send' will ensure that the store owner has sent out the item therefore making it easier to track down where the order might have gone wrong. 




# Dropped out features:
Here are a few very cool features that the team had initially thought of, but our team eventually have decided not to implement them.  Please read on for a brief description and a short summary for reasons behind the elimination process.


## Homepage Flash cartoon:

### Description: 
Our website is to welcome users with a flash cartoon once the webpage is loaded.

### Justification:
This is a visual feature that hopes to entertain customers by giving them something visually pleasing before they start shopping. 
At first glace, this would be a harmless feature that is aimed to promote the Fluff-galore shop by associating it with a light-hearted and cutesy imagery. However our team agreed not to implement this eventually just because we want to keep a good balance between a functioning website and a visually pleasing website, we do not want this to be too much of an distraction for the customers and to some, this five seconds of cartoon flashe might feel like a form of force-feed advert. 



## Personality and perfect pet match quiz:

### Description:
This is to be a small app to be integrated onto the home page of our pet store, it is a series of multiple questions that looks to work out individuals living habit and budget and personality, and eventually the quetionnaire app will work out the best type of pet according to answers  selected. We were inspired by the little quiz posted on [PDSA], the UK's leading veterinary charity website.

### Justification :

This was initially a must implement feature for the development team as it would add the fun aspect of pet choosing into a user's online shopping experience. However, later on we realized that it would not be fair to discern someone's best pet choice based on a few questions. Real life case for each individual would be much more complicated than a few questions could encompass. Additionally, speaking from past experience, our past customers had always entered the pet shop with their mind made up, and this trend that we have gathered from the past renders this feature futile. It would make our online shop  fun, but it slightly strayed off from the main objectives defined for the design of this website, which is to provide a visually pleasing and efficient shopping experience. This feature might make customers who play it second guess their decision.



## Implementation and Testing: 
=======
# Testing:

The test work of the online pet store is mainly designed to find the defects in the function and performance of the lonline pet store, and to modify the system in time after the test, to ensure the smooth on-line of the system, and ensure that users have a good use experience in the process of use, and feel the convenience of the system.

To test the functionality of the system, we chose manual, scenario-based testing. We perform this test through a series of test cases, in which we document the specific scenarios in which each user interacts with our application.

Home page:

| Test case        | Test procedure          | Expected results                   | Actual results |
| ----------- | ---------------------------- | ---------------------------------- | -------------- |
|  Visitor can access the login page|  Visitor clicks the "User" button, then clicks the login button | Redirection to the login page   | As expected|
| User can access the detail page  | User clicks the displayed pet name        | Redirection to the pet detail page   |As expected    |
| User can access the order page  | User clicks the Orders button        | Redirection to the order page   |As expected    |
| User can access the profile page  | User clicks the User button, then clicks the profile button        | Redirection to the profile page   |As expected    |
| User can view the pets in different status  | User clicks the drop-down box and choose "available","pending" or "sold"        | Home page refreshed and pets with the selected status appeared      | As expected  |
| User can view the pets in different category      | User clicks the drop-down box and choose one category of the pets     |  Home page refreshed and pets with the selected category appeared     | As expected   |
|  Admin can add pet  |  Admin clicks the Add pet button, fill in the pet detail and clicks add                            | An "add pet" form will pop up     | As expected     |
|  Admin can delete pet  |  Admin clicks the delete icon on the top left corner of pet photo   | Pet deleted     | As expected     |
|  User can not add pet  |  User clicks the Add pet button, fill in the pet detail and clicks add                            | Message "No permission! Please login as admin." pops up    | As expected     |

Register page:

| Test case        | Test procedure          | Expected results                   | Actual results |
| ----------- | ---------------------------- | ---------------------------------- | -------------- |
|  Empty input check |  User does not input the username and password then clicks register account  | Warning "Username/password can not be empty." appear   | As expected|
|  Invalid repeat password check | User inputs a different password in the password(repeat) form then clicks register account   | Warning "Two password inputs do not match." appear   | As expected|
|  User can create an account |  User inputs all the required information (username and password) then clicks register account  |  User successfully registered   | As expected|

Login page:

| Test case        | Test procedure          | Expected results                   | Actual results |
| ----------- | ---------------------------- | ---------------------------------- | -------------- |
|  Empty input check |  User does not input the username and password then clicks login button  | Warning "Username/password can not be empty." appear   | As expected|
|  User can access home page without login | User clicks "No login. I just want to take a look!" button  | Redirection to the home page   | As expected|
|  Invalid input check |  User inputs wrong username and password then clicks login button  |  Warning "User is not found./Password is not correct!" appear   | As expected|

Order page:

| Test case        | Test procedure          | Expected results                   | Actual results |
| ----------- | ---------------------------- | ---------------------------------- | -------------- |
|  User can cancel the order |  User clicks Cancel order button, then clicks confirm  | Order canceled  | As expected|
|  User can see the detail of the order | After placing the order of the pet, user go to order page and check the order detail   | The order detail is correct and displayed    | As expected|
|  User can goes back to home page |  User clicks "back" or "Fluff-galore"  |  Redirection to home page   | As expected|
|  Admin can ship the order |  Admin clicks "confirm shipping"  |  Order status become to "product is shipping"   | As expected|

Detail page:

| Test case        | Test procedure          | Expected results                   | Actual results |
| ----------- | ---------------------------- | ---------------------------------- | -------------- |
|  User can buy the pet |  User choose the number of pets and clicks "buy now"  | Order Id appear and order placed   | As expected|
|  Admin can edit the pet |  Admin clicks edit pet and input new information of this pet  | pet information updated  | As expected|

Profile page:

| Test case        | Test procedure          | Expected results                   | Actual results |
| ----------- | ---------------------------- | ---------------------------------- | -------------- |
|  User can change the profile information |  User inputs new personal information and clicks "confirm the changes" |  message "You have successfully updated!" appear  | As expected|

The table above shows the function test of new features of the online pet store. With these set of test, it proves the correct implementation of the new feature.

The advantage of this approach over more technically complex alternatives such as automated testing is its upfront efficiency. Because our application is currently a minimum viable product, the path through the application is relatively simple and the user's interaction with the site is not complex. As a result, we were able to develop and use these test cases quickly.

However, there are some drawbacks to this approach. The manual nature of our testing methods reduces the overall efficiency and agility of our development process. This also exposes us to a degree of risk of human error during testing. As mentioned earlier, while our application has not yet reached sufficient scale, which will seriously hinder our progress, we will seek to implement complementary automated testing methods in future development efforts as our application grows in size and scope.



[PDSA]:<https://www.pdsa.org.uk/taking-care-of-your-pet/choosing-a-pet?_$ja=tsid:67827|cid:1785422340|agid:71441170509|tid:kwd-13580843929|crid:355603342260|nw:g|rnd:9471319939620912770|dvc:c|adp:|mt:e|loc:1006567&gclid=CjwKCAjwr56IBhAvEiwA1fuqGvVJWeNamNuwu2UHw88VuoxIla6-eKB28vqfLrgvZHMkEVNVrKJ-UxoC0Q4QAvD_BwE>

