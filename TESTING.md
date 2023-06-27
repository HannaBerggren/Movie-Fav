# **Movie Fav**

# Frontend Testing

## Table of Contents

* [**Testing**](<#testing>)
    * [Code Validation](<#code-validation>)
    * [Automatic Testing](<#automatic-testing>)
    * [Manual Testing](<#manual-testing>)
    * [Responsiveness Testing](<#responsiveness-testing>)
    * [Lighthouse Testing](<#lighthouse-testing>)
    * [Known Bugs](<#known-bugs>)

## Code Validation 

The Movie Fav site has been passed through the [W3C html Validator](https://validator.w3.org/) and [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

### W3C HTML Validation Results

No errors were found when the deployed Movie Fav URL was passed through W3C HTML validation checker. Only some lines of info were noted regarding the trailing slash on void elements 

[W3C HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmoviefav-1a8485e84849.herokuapp.com%2F)

### W3C CSS Validation Results

No errors or warnings were found when the deployed Happening URL was passed through the W3C CSS Validation checker.

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmoviefav-1a8485e84849.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)


## Automatic Testing

The following Jest automatic tests have been written to check that the main frontend components render correctly: 

### NavBar.js
|  | | |
|:-------:|:--------|:--------|
| Renders sign in/sign up buttons for logged out user | &check; |
| Renders link to the feed page for a logged in user | &check; |
| Renders link to the profile for a logged in user | &check; |
| Renders Navbar Home link | &check; |



### NotFound.js
|  | | |
|:-------:|:--------|:--------|
| Go Back to homepage link renders | &check; |

### Avatar.js
|  | | |
|:-------:|:--------|:--------|
| Avatar renders | &check; |


## Manual Testing

As well as the automatic tests, I carried out the following additional manual tests to check all the user story scenarios:

| Status | **Authentication - User Logged Out**
|:-------:|:--------|
| &check; | Typing 'https://' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https:///login' url into the browser, the user views the homepage feed
| &check; | Typing 'https:///logout' url into the browser, the user views the homepage feed
| &check; | Typing 'https:///profiles' url into the browser, the user is redirected back to the homepage
| &check; | Typing 'https:///feed' url into the browser, the user is redirected back to the homepage
| &check; | Typing 'https:///profiles/{id}/edit' url into the browser, the user is redirected back to the homepage
| &check; | Typing 'https://' url into the browser, the user is redirected back to the homepage
| &check; | Desktop and tablet users can see an image next to the sign in form
| &check; | Mobile users can't see an image next to the sign in form
| &check; | Desktop and tablet users can see an image next to the sign up form
| &check; | Mobile users can't see an image next to the sign up form

| Status | **Navigation - User Logged Out**
|:-------:|:--------|
| &check; | Clicking the navbar brand logo loads the home page
| &check; | Clicking the Home button on the nav bar re-loads the home page
| &check; | Clicking the Sign In button on the nav bar loads the sign in page
| &check; | Clicking the Sign Up button on the nav bar loads the sign up page
| &check; | The user can not see the profile page link in the navigation bar profile section dropdown menu
| &check; | The user can not see the sign out link in the navigation bar profile section dropdown menu
| &check; | Users can not see the Feed menu option in the navigation bar
| &check; | Tablet and mobile users can see the navigation bar options in a burger menu dropdown
| &check; | Clicking a link from the navigation bar links automatically closes the burger menu
| &check; | User can not sign in with false credentials - warning message displayed
| &check; | User can not sign in without filling out all the input fields - warning message displayed
| &check; | User can not sign up without filling out all the input fields - warning message displayed
| &check; | User can not sign up if the two password fields don't match - warning message displayed
| &check; | User can not sign up if the username chosen already exists in the database - warning message displayed

| Status | **Homepage - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the Most followed profiles component
| &check; | Users can't view the follow/unfollow button under Most Followed profile
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view all posts on the homepage
| &check; | Users can search for favorite posts by typing in the name of a movie or series, different keyword of interest or the username of the profile owner


| Status | **Profile Page - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the posts the profile owner has posted
| &check; | Users can view the number of comments the profile owner has
| &check; | Users can view the number of followers the selected profile has
| &check; | Users can view the number of other profiles the selected profile is following
| &check; | Clicking on the navbar button Logo, users are redirected to the homepage
| &check; | Clicking on the like button, users are advised to login to be able to like a post
| &check; | Clicking on the sign in button, users are redirected to the sign in page
| &check; | Clicking on the sign up button, users are redirected to the sign up page

| Status | **Navigation - User Logged In**
|:-------:|:--------|
| &check; | Clicking the navbar brand logo loads the home page
| &check; | Clicking the Home button on the nav bar re-loads the home page
| &check; | User can't see the sign in button in the navigation bar profile section dropdown menu
| &check; | User can't see the sign up button in the navigation bar profile section dropdown menu
| &check; | The user can see the profile page link in the navigation bar profile section dropdown menu
| &check; | The user can see the sign out link in the navigation bar profile section dropdown menu
| &check; | Users can see the Feed menu option in the navigation bar
| &check; | Tablet and mobile users can see the navigation bar options in a burger menu dropdown
| &check; | Clicking a link from the navigation bar links automatically closes the burger menu
| &check; | User can view their avatar image next to the profile page link

| Status | **Homepage - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the follow button under each Popular Profile
| &check; | Clicking on a popular profile follow button, users can become a follower of the selected profile
| &check; | Users can view the posts the profile owner has posted
| &check; | Users can view the number of comments the profile owner has
| &check; | Users can view the number of followers the selected profile has
| &check; | Users can view the number of other profiles the selected profile is following
| &check; | If the logged in user is the posts owner, user can't click the liked button - tooltip warning is given
| &check; | Clicking on the follow button, following count goes up
| &check; | If the logged in user is the posts owner, user can not click the like button - tooltip warning is given
| &check; | Clicking on an owner avatar, users are redirected to the selected profile page
| &check; | Users can search for favorite posts by typing in the name of a movie or series, different keyword of interest or the username of the profile owner

| Status | **Feed - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the follow button under each Most followed profiles
| &check; | Clicking on a popular profile follow button, users can become a follower of the selected profile
| &check; | Users can view all postes by profiles they follow
| &check; | Users can view the posts the profile owner has posted
| &check; | Users can view the number of comments the profile owner has
| &check; | Users can view the number of followers the selected profile has
| &check; | Users can view the number of other profiles the selected profile is following
| &check; | Users can view the number of comments/likes for every profile 


| Status | **Profile Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the number of followers the selected profile has
| &check; | Users can view the number of other profiles the selected profile is following
| &check; | Clicking on a url in the contact details section will open the web page in a new browser tab.
| &check; | If the user is viewing their own profile page, they can see the three dots edit profile menu next to the profile stats
| &check; | Users can edit their own profile page via the three dots edit/delete menu
| &check; | On clicking edit profile, user is redirected to the edit profile page
| &check; | User can edit their own username via the three dots edit profile menu
| &check; | User can edit their own password via the three dots edit profile menu
| &check; | Users can view the number of comments/likes for every profile

| Status | **Edit Profile Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the profile form pre-populated with the current profile details
| &check; | Users can upload an avatar image into the form
| &check; | Users can change the uploaded image
| &check; | Users must submit a valid URL into the URL fields - warning message displayed
| &check; | Users must submit a valid email address format into the email address field - warning message displayed

## Responsiveness Testing

The responsive design tests were carried out manually throughout the build using Google Chrome Dev Tools. I based the main design around a desktop view, as this is primarily a browser based platform, although I have added responsive design for tablet and mobile devices as well. 

During the testing process I also used the [Responsive Design Checker](https://www.responsivedesignchecker.com/) website to simulate the website on several other devices. Here are my findings:

### Mobile Devices

||<p>iPhone 6/6s/7</p><p>375 x 667</p>|<p>Samsung Galaxy S5/6/7</p><p>360 x 640</p>|<p>Google Pixel/Nexus 5</p><p>411 x 731</p>|
| :- | :-: | :-: | :-: |
|Render|Pass |Pass|Pass|
|Images|Pass|Pass|Pass|
|Links|Pass|Pass|Pass|


### Tablet Devices

||<p>Amazon Kindle Fire</p><p>768 x 1024</p>|<p>Samsung Galaxy Tab 10</p><p>800 x 1280</p>|<p>Apple iPad Pro</p><p>1366 x 1024</p><p></p>|
| :- | :-: | :-: | :-: |
|Render|Pass|Pass|Pass |
|Images|Pass|Pass|Pass|
|Links|Pass|Pass|Pass|


### Desktop Devices

||<p>24“ Desktop</p><p>1920 x 1200</p>|<p>19” Desktop</p><p>1440 x 900</p>|<p>10” Notebook</p><p>1024 x 600</p>|
| :- | :-: | :-: | :-: |
|Render|Pass|Pass|Pass|
|Images|Pass|Pass|Pass|
|Links|Pass|Pass|Pass|

### Browser Compatibility 

Movie Fav was tested on the following browsers:

- Google Chrome
- Mozilla Firefox

Appearance and functionality appear to be consistent throughout all browsers.

## Lighthouse Testing

Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of *Performance*, *Accessibility*, *Best Practices* and *SEO*. The testing showed the following:

* Home Page - Performance: 52, Accessibility: 97, Best Practises: 83, SEO: 100

[Lighthouse Homepage Result](https://googlechrome.github.io/lighthouse/viewer/)
![LightHouse](src/assets/lighthouse.png)


## Known Bugs

Not that I'm aware of.

Please click [**_here_**](README.md) to return to the Movie Fav README file.