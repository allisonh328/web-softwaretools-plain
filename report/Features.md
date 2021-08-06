# Possible Features



# Feature 1 - Pet display Feature (by categorization and by availability status):

###### Description: 

Viewers or admin are able to change up what pet they see on the screen by selecting the type of pet or availability of pet status。 These options are presented by the two drop down menus on the top of the website.

Pet category had initially been decided to be(changed later, see in description) : Dogs, Cats, Aquatic, Rodents

Pet status has: Available, Pending, Sold
	- Available: allows to be added to cart
	- Pending: someone else is in paying process, or someone has paid but hasn't confirmed that he's received the pet, goes back to Available when order is being cancelled,
	- Sold: no longer available, cannot be added to Order list. 

###### Related feature: Place order

## Justification: Easy to navigate - efficiency

One of our aims is to offer an efficient online shopping/viewing experience, although we do not have a lot of different types of pets available in our store yet, by setting up a search system to narrow down their search result would provide a good foundation for future expansion. This is why by the final product we have decided to further specify pet categories to Dogs, Cats, Birds, Fishes, Reptiles, Insects and Others. 
Of course even with what the store provides right now, having this feature would still allow a more efficient searching or viewing experience for customers. 

Pet categorization based on availability status also helps to increase efficiency for pet search, this is also to prevent buying/order conflicts on the online store. Given that a online pet shop will not receive the crazy amount of browsing or ordering, and thus pet items are unlikely to come in multiple numbers, the "Pending status" will ideally prevent a customer from adding the pet to their cart when someone else is in the process of paying, or just waiting for the order to arrive. 

The Pending status is to act as a buffer state for both Available and Sold state, an item/pet will switch to Available state if the user decides to hit 'Delete order' in Orders page. This will then allow new users to place this pet/ item in their orders. And it will only turn to Sold once the customers confirms with the  'Confirm Receipt' button in the Order page once they receive the pet.  This aims to prevent the customer and store admin from having to deal with order conflicts. 


# Feature 2 - User creation authentication system:

###### Description:

- This consists of the user registration function where new users will be required to sign in with a Username, First and Last name, Email, and Contact number and new password
- If it is are turning user, they can just sign in with their name and password. 
- User will be able to log out if they wish.
- As a bonus, we are hoping to implement a 'Remember me' function to allow user for a quick log back in 

<div align=center>

# Authority Instruction

| Role         | Access to Homepage | Add Pet | Delete Pet | Update Pet | Upload Pet Image | Update User Profile | Place Orders | Cancel Orders | Ship Products | Confirm Receipt |
| ------------ | ------------------ | ------- | ---------- | ---------- | ---------------- | ------------------- | ------------ | ------------- | ------------- | --------------- |
| Sightseer    | ✔                  | ❌       | ❌          | ❌          | ❌                | ❌                   | ❌            | ❌             | ❌             | ❌               |
| Customer     | ✔                  | ❌       | ❌          | ❌          | ❌                | ✔                   | ✔            | ✔             | ❌             | ✔               |
| Owner(admin) | ✔                  | ✔       | ✔          | ✔          | ✔                | ✔                   | ❌            | ✔             | ✔             | ❌               |


</div>

###### Related features: Place order


## Justification:

This feature has been strongly requested by one of the owners of our shop and this feature is to keep a record to customers' address information so that in future purchases they will not be required to refill their home address and contact information. This owner understands that the store right now only specializes in pets, but he is looking to start buying in pet toys and other pet-related items for future sell. This feature may not prove much use right now, but as the business expand to a wider variety of goods, customers could always come back to the site and place order without having to fill in their information. Therefore by introducing this feature at the beginning will provide old customers more incentive to return to the pet store to purchase other pet-related goods

There had been doubts about abandoning this feature and allowing users add pets to cart without being a registered member, because compared to having to go though registration, it would be way more efficient to allow just anyone to place order on the website. However, owners of the shop are cautious about underlining security issues without the user authentication. Therefore, despite the step back from efficiency, forcing any customers to register as a member would help to mitigate risks of fraudulent account access/payments, security is especially important for local businesses. 





# Feature 3 - User place order online:


Description:

This facture goes hand in hand with the user authentication feature and the pet availability feature. A 'Buy' button on pet display pagewill be activated if the pet status is 'Available', and if the user is already signed in, then the 'Order' number will change, otherwise the user will be lead to the login page for login.

Order number will increase each time user clicks 'Buy', as long as they item is available.  

###### Related feature:  User Authentication

## Justification:

This is feature is the heart  of and the very definition for online shopping. This allows users to place orders at their convenience, in their comfort. This not only helps customers to save time, but also helps to eliminate most of the concerns related to covid and any new strands of covid in future  for both the survival of the store and the health of owners and their customers. This will make it easier for those who want to get a pet but remains cautious to choose and get a pet without having to put themselves under extreme stress and anxiety about going to public place. 



# Feature 4 - Add pet:

###### Description:

User(admin) can choose to add pet, they would have to enter Pet Name, Category, Tags and Availability Status.


###### Related feature: pet type categorization and pet availability status

## Justification:

This feature is an essential feature for shop owners, it is one of the core component of managing the online shop. The shop owners(admin) should be able to manage pet by adding/deleting pets available in the store. Or even manually change the status of the pet if needed to. This is feature contributes more to the managerial side of the website, and is there to give the owners the freedom to add new pets to their inventory. However, this feature requires that the website understands the identity of the user. And only the administrator should be allowed to alter pet information on the online store inventory.


# Feature 5 - Add pet photo:

###### Description: 
This is to allow user(admin) to add a photo of the pet.

###### Related feature: add pet feature


## Justification: 

This sub feature is a basic visual aspect of a online shop. Every added new pet should at be added with a photo of the pet. This is so that the viewer will be able to have a good idea of what they are looking at, and without the photos(the visual), it would defy the entire purpose of a visually pleasing and easily navigable online shop.


[Click here](https://github.com/Yj-nnie/web-softwaretools-plain/blob/dlh8899/ux.md#survey-1-the-proposal-of-the-website) for user input. 




# Dropped out features:
Here are a few very cool features that the team had initially thought of, but our team eventually have decided not to implement them.  Please read on for a brief description and a short summary for reasons behind the elimination process.


## Feature 6 - Flash cartoon:

###### Description: 
Our website is to welcome users with a flash cartoon once the webpage is loaded.

## Justification:
This is a visual feature that hopes to entertain customers give them something visually pleasing before they start shopping. This would also be a harmless feature that is aimed to promote the Fluff-galore shop by associating  it with a light-hearted and cutesy imagery. However our team agreed not to implement this eventually just because we want to keep a good balance between a functioning website and visually pleasing website, we do not want this to be too much of an extraction for the customers and forcing customers to watch 5 seconds of cartoon flashes might make some feel being force-fed some unnecessary advertisement.


## Feature 7 - Quiz  help to choose the perfect pet :

###### Description:
This is to be a small app to be integrated onto the home page of our pet store, it is a series of multiple questions that looks to work out individuals living habit and budget and personality, and eventually the quetionnaire app will work out the best type of pet according to answers  selected. We got this idea from [PDSA], the UK's leading veterinary charity website.

## Justification :

This was initially a must implement feature for the development team as it would add the fun aspect of pet choosing into a user's online shopping experience. However, later on we realized that it would not be fair to discern someone's pet choice based on a few questions. Real life case for each individual would be much more complicated than a few questions could encompass. Additionally, speaking from past experience, our past customers had always entered the pet shop with their mind made up, and this trend that we have gathered from the past renders this feature futile. It would make our online shop  fun, but it slightly strayed off from the main objectives defined for the design of this website, which is to provide a visually pleasing and efficient shopping experience. This feature might make customers who play it second guess their decision.



# Implementation and Testing: ------------------- Ruiqing

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

