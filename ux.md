
# Implemention - Front End/UX:

In this part, I would like to write based on my design timeline and show how to go through interations by user feedback. Although it is not in the order of the template, it contains all thing the template requires.

## Design Timeline

<div align=center>
<img src=UX/timeline.png width="1000px" height="200px">

_Figure 1: The design timeline_
</div>

This is [the list of the design tasks](https://github.com/Yj-nnie/web-softwaretools-plain/blob/dlh8899/UX/task.md).

## Prototyping 

For the project, our initial idea involved creating a login page, which is convienient for user to manage their own accounts. After the first discussion, we should achieve:

* Creating the initial prototype in order to give a direction for development
* Making the features of site
* Figure out what the customer needs

<div align=center>
<img src=UX/prototype1.jpg width="380px" height="250px">
<img src=UX/prototype2.jpg width="380px" height="250px">
<img src=UX/prototype3.jpg width="380px" height="250px">

_Figure 2: The initial wireframe_
</div>


The creation of this wireframe also allowed us to clarify what feature we should achieve further, namely:

* The login page for user (manage their own account)
* The categories of pets (make the site more clear)
* The function of shooping cart (make user see what they choose at the moment)


## Development

Based on the above deign choices, we decide to make the first survey for users. The final design scheme is decided according to the user feedback, including the layout of the site, site features and site improvements.

### Survey 1: The proposal of the website

#### Research objectives

During the prototyping stages, we conduct the first survey to confirm the proposal of our site. Our research objectives were as follow:

* The effectiveness of the features of website
* Focus of site UI design
* Evaluating what users focus on

Firstly, we give participants a summary of our project brief and asked to go over. Then, we have sent out 20 questionnaires and finally received 16 respnses. To make sure the survey is universal, we surveyed people of different ages. We also took into account gender and the experience of keeping a pet.

<div align=center>
<img src=UX/survey/1.png width="330px" height="250px">
<img src=UX/survey/2.png width="330px" height="250px">
<img src=UX/survey/3.png width="330px" height="250px">
</div>

The survey form is [here](https://github.com/Yj-nnie/web-softwaretools-plain/blob/dlh8899/survey/survey1.pdf). And the feedback form click [here](https://github.com/Yj-nnie/web-softwaretools-plain/blob/dlh8899/survey/feedback1.xlsx).

#### Findings

Throughout the survey, we can test our website whether the features is suitable for users. And we can gather some suggestions for our website from users to improve it during the stage of development.

<br>

**_These questions below prove that user indeed need the features we proposed before._**

<div align=center>
<img src=UX/survey/fb1.jpeg width="600px" height="200px">
</div>

**Question 4**: Most people prefer to have their own account, therefore, a login page contributes to improve user experience. 


<div align=center>
<img src=UX/survey/fb2.jpeg width="600px" height="200px">
</div>

**Question 5**: The answer suggests that many users already make a decision on which pet to buy before they log on to the online store. Hence the categories of pets is necessary for users, which allow them to look through the kind of pet they need.

<br>

**_These questions below give us a reference for the style and content design of the website._**

<div align=center>
<img src=UX/survey/fb4.jpeg width="600px" height="200px">
</div>

**Question 2**: For users, the layout of the site is the most attractive. We then asked about the style of the site, which helped us achieve the final design choice.


<div align=center>
<img src=UX/survey/fb5.jpeg width="600px" height="200px">
</div>

**Question 3**: Through the user feedback, the cartoon style is the most popular choice. A part of users choose the minimalism style. This may give us inspiration of combination of these two styles.


<div align=center>
<img src=UX/survey/fb6.jpeg width="600px" height="200px">
</div>

**Question 6**: All users hope that they can view more details about their pet choices. We should add each pet's information, such as age, photo, and character.

### The prototype implemention

After the first survey, we focus on developing it along with above user feedback, which further aided us in implemting a user centric methodology. We do the paper prototype in more detail to show all features of the site, including logging in, placing the order and classifying by pets species, and the front end develop the layout of the whole website. We decide to represent this paper prototype to users and gather their feedback to develop the website.

#### Objectives

* Determine the style of the site among possible design choices
* Make the layout of the site clear
* The paper prototype should be coherent

#### The system flow of the prototype

<div align=center>
<img src=UX/ux3.PNG width="1000px" height="800px">

_Figure 3: The paper prototype representing our idea_
</div>

### Survey 2: The feedback of the paper prototype

We use zoom to gather user experience feedback. Participants were sent the paper prototype before the group zoom call. During the zoom call, the researcher walked everyone through the prototype. After the zoom call, participants were sent two questions and asked to respond. In the end, we received seven responses.

<div align=center>
<img src=UX/survey/zoom.png width="630px" height="400px">

_Figure 4: The zoom call to gather feedback_
</div>

**Research Question 1**: Do you have any suggestions on the layout of the site?

We filter the responses and extract the following responses which are mentioned many times.

>>**User 1** _"A little confusion for the tag of add pet, maybe I don't need this function"_<br>
>>**User 2** _"Homepage can be more colorful"_<br>
>>......<br>
>>**User 5**  _"I don't think the categories of pets should be on the tag"_<br>
>>**User 7**  _"I wonder why I need add the pet, it's for selling my own pet?"_<br>

**Research Question 2**: Do you need other features in our website?

>>**User 2** _"The after-sales service"_<br>
>>**User 4** _"Don't see further details about the pet"_<br>
>>......<br>
>>**User 7** _"I'd like to see more photos of pets, even gifs"_<br>

#### Findings

According to the user responses, we should accomplish the following tasks which belongs to the front end:

* Optimize the home page
* Modify the tag, clarifying the categories of pets
* Distinguish between user and adminstrator accounts
* Insert more pet photos and gifs

### Design choices

This is [the design choices list](https://github.com/Yj-nnie/web-softwaretools-plain/blob/dlh8899/UX/design.md). The critical  chosen design choices are described in detail below.

#### Choose the template of the site layout

We use bootstrap to accomplish our front end design. There are a lot of good templates to choose. This [link](https://github.com/Yj-nnie/web-softwaretools-plain/tree/dlh8899/UX/templates) is all possible templates we decide to apply into our website. Finally, we choose the following two templates, and each group member give his/her opinion as a user.

<div align=center>
<img src=UX/templates/1.jpeg width="440px" height="300px">
<img src=UX/templates/2.jpeg width="440px" height="300px">

_Figure 5: The final two chosen templates_
</div>

The following discussion is group members in user's perspective to choose the final front end template.

>>**Jun** _"I haven't kept a pet before, for me, I hope I could see more funny pets photos firstly instead the sign up or log in page. The first one is my choice"_<br>
>>**Ying** _"I'd like to see the home page is the first, because I often shopping online as a guest."_<br>
>>**Luming**  _"I think the sign up page gives aid to remain users, we will have a record in our site, which will benefit the sustainable development of the site"_<br>
>>**Ruiqing**  _"I'd like to choose the first one"_<br>
>>**Linhong** _"I don't think it's a good order to let users sign up first. As a user, I don't feel like I necessarily need to create an account first"_<br>

Through the discussion, we can find that most members prefer to see the home page first as a user. This micro-survey help us make a decision on the final layout of the site - the left template. 

#### Modify the layout of the site

The tag on the website is the first place we need to improve. In the previous paper prototype, the categories of pets are individual tags at the top of the site. Then we hide the cotegories of pets in the tag of all pets to contain more various species.

<div align=center>
<img src=UX/templates/tags/tag1.jpeg width="700px" height="40px">
<img src=UX/templates//tags/tag2.jpeg width="700px" height="200px">

_Figure 6: The change for tags_
</div>

For the tag of available, we just calrify three different states before, available, pending, sold. And then we add the number of pets in each state, which is convienent for customers to keep track of our sales.

<div align=center>
<img src=UX/templates/tags/tag3.jpeg width="700px" height="100px">
<img src=UX/templates//tags/tag4.jpeg width="700px" height="100px">

_Figure 7: The tag of available_
</div>

We have turned a static home page into a dynamic one, which is good for getting users' attention. On the side, a scrolling of pet photos is more consistent with our onlie pet shop store.

<div align=center>
<img src=UX/templates/welcome.gif width="400px" height="250px">

_Figure 8: The welcome page_
</div>

#### Find the background image

At the first, we use a cartoon image as the background of the site because many users choose the cartoon style in the first survey. However, considering the topic of the site, we are supposed to add more pets pictures. And in the survey, all users hope that see more animal elements. Therefore, we modify the previous background, which makes the site funny and functional. Meanwhile, we add the cartoon background image into the login page.

This is [the library of the background image]().

<div align=center>
<img src=UX/templates/final1.jpeg width="500px" height="300px">
<img src=UX/templates/final2.jpeg width="500px" height="300px">
<img src=UX/templates/login.jpeg width="500px" height="250px">

_Figure 9: The background image_
</div>

### Final front end design

survey 3





