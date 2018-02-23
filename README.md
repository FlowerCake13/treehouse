# treehouse

Create a place of your own on the web!

## Objective

Use **HTML Forms**, **JS Functions** and **CSS** styles to customize your personal 'treehouse' on the web.

## Prerequisites

To complete this project, students should have the following:
* Intermediate understanding of HTML structures.
* Basic understanding of Flexbox.
* Intermediate understanding of JavaScript and DOM (Variables, Functions, getElementById, Events)

## Concepts

HTML | Description
-----| -----------
form | An element that defines a form to collect user input. Contains form elements.
input | An element that obtains information from the user. Can have different types.
input type="text" | Defines a one-line text input field.
input type="radio" | Defines a radio button.
input type="submit" | Defines a submit button.

JS | Description
---| -----------
onsubmit | An event that occurs when a form is submitted.  

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
3. Link all of your files correctly.

---

### Part II HTML

To complete Part II, fulfill the following requirements in your **HTML** file with the following parent and child relationships.

* Create a ```div``` with an ```id``` of "container".
  * ```div``` with an ```id``` of "form-mask".
    * ```form``` with an ```id``` of "form".
      * ```h1``` with the text "LOGIN".
      * ```div``` with a ```class``` of "field-container".
        * ```h2``` with the text "USERNAME".
        * ```input``` with ```type``` as "text" and ```id``` of "username".
      * ```div``` with a ```class``` of "field-container".
        * ```h2``` with the text "PASSWORD".
        * ```input``` with ```type``` as "text" and ```id``` of "password".
      * ```input``` with ```type``` as "submit" and ```value``` as "SUBMIT".

### Part III CSS

To complete Part III, fulfill the following requirements in your **CSS** file:

1. Target the ```body``` element.
  * Set the ```margin``` to 0px.
2. Target the ```id``` of "container".
  * Set the width to the full view width.
  * Set the height to the full view height.
3. Target the ```id``` of "form".
  * Set the ```width``` to 30% of its parent container.
  * Set the ```height``` to 30% of its parent container.
  * Activate flexbox.
  * Set the direction of elements to column using flexbox.
  * Center the items horizontally using flexbox.
  * Place space around the items vertically using flexbox.
  * Use a box-shadow! ```  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);```

4. Target the ```id``` of "form-mask".
  * Set the ```width``` to 100%.
  * Set the ```height``` to 100%.
  * Activate flexbox.
  * Center items horizontally using flexbox.
  * Center items vertically using flexbox.

5. Target the ```h1``` element.
  * Set the ```font-size``` to "18px".

6. Target the ```h2``` element.
  * Set the ```font-size``` to "16px".

7. Target the ```input``` element.
  * Set the ```border-radius``` to "3px".
  * Set the ```margin-left``` to 10px.

8. Target the ```class``` of "field-container".
  * Activate flexbox.
  * Set the direction of items to row using flexbox.
  * Set the ```height``` to 30px.

### Part IV JS

To complete Part IV, fulfill the following requirements in your **JS** file:

1. Create a ```window.onload``` function as follows to place the rest of your code in.

``` javascript
window.onload = function() {
  // The rest of your code in here!
}
```

2. Create a ```variable``` "username" to store the username input by id.

3. Create a ```variable``` "password" to store the password input by id.

4. Create a ```variable``` "form" to store the form by id.

5. Create a ```variable``` "mask" to store the form-mask by id.

6. Create an onsubmit function on your form as follows:

``` javascript
form.onsubmit = function() {
  // Rest of your code in here!
  return false;
}
```
*Why return false? If we do not return false, the form (by default) will refresh and we will not have data to work with! It will think that we have handled the data already through something called a server. However, in this example, we want to control what happens to the form in JavaScript so we need to stop the default submit functions from happening.*

7. Think of a username and password for yourself, then do the following:
  * Check if the username and password are "correct". Only you should have access to your treehouse!
  * If they are both correct, change the display of the form and mask to none.

### Part V Build your Treehouse!

To complete Part V, build your treehouse!
* Now that you've set up a way so that only you can access what's after the the login, create your own space on the Internet! Some ideas:
  * Create a life dashboard with sections for things to do for school, home, or other activities.
  * Create a calendar section with important dates highlighted. Make it interactive where you can add important dates.
  * Create an area where you can add notes.
  * Create an area where you can add and brainstorm ideas with the press of a key on the keyboard!
  * Store your favorite secrete recipes in a section.
  * Store a list of your favorite things in a section so you can look back at it later if you ever forget.  
  * Create a dictionary of concepts and coding terms so you can refer back to it anytime.
