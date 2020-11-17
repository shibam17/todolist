With front-end we can have limitless boud to our creativity. Then why not build a personal ** _To-Do List_ **? This To-Do List will have your day to day things you want to do, not only that it will show which you have done or yet to do! Ofcourse, in the end you will also get to delete few which you have done or do not want it on the To-Do List any more.
<p align='center'>
<img src="https://media.giphy.com/media/UoLt6Tm8wlSnWGfSFs/giphy.gif" alt="yes-ready-to-code" >
</p>

## Overview 
In this workshop we will learn about HTML, CSS and JavaScript in a very fun and creative way which will give us an end product of personal **To-Do List**.
This whole workshop is customizable on coders' wish! You can add different colors, animations, icons and more! So be ready to build this awesome project on your own and the best part is, it will only take you 20 mins to complete.:grin:


*To have a peak in the project:*
* Final code can be found on [Repl.it](https://repl.it/@shibamdhar/todolist) as well as [GitHub](https://github.com/shibam17/todolist).
* The demo of my music app will be [here](https://todolist.shibamdhar.repl.co/).

So let's get started now with this!:nerd_face:

**Prerequisite**
Little bit of knowledge on events and event handling on JavaScript along with animation through CSS can make your work easier but the best part is, even if you are new to this, you can still make it a go without any problem because this workshop will begin with level 0 for better understanding of this domain.:sparkles:
One more this is **create an account in Repl.it**.

<p align='center'>
<img width="300" alt="excited" src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif">
</p>

## Setting up IDE
For this workshop we will be using repl.it as code editor. It is a free, online code editor which is very easy to use with instant online hosting service.

To start your coding right away navigate to [repl.it/languages/html](https://repl.it/languages/html) and you will have your whole setup. 

You would see that there are already three files named 
1.  index.html
2.  script.js
3.  style.css 

for  HTML, JavaScript and CSS respectively. So we will work on them to build our To-Do List.
![](hedhjkedhed.com)=================================

^ Right now your page will look like this.

The setup is done now we are good to go with our coding.:sunglasses:

## The HTML file
HTML gives the structure to our web-page. Here in the first line, we have `<!DOCTYPE html>` which is used for specifying the version of HTML the document is using. Next, we have the `<title>` tag which specifies the title of our web-page that will be shown on the tab bar. Then we have `<body>` tag which contains the main visible part of our web page. Make sure that all the code you write is included between the opening and closing tags. ( `<body></body>` )
Inside the body of the file we will declare few tags, which will be useful for different purposes, such as
- `header` to provide a name.
- `input` to provide a place from where we will get the elements to put it on our list.
- `div` with type `select` this will have options to sort the completed, incomplete and all the lists.
- Another `div` which will have `ul` tag which will get the values from JavaScript.

```
***NOTE*** 
Link fontawesome in the `head` of the HTML file to get access to icons.
<link

rel="stylesheet"

href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"

/>
```
In case if you get stuck take reference from the below text
```html
<body>
    <div class="message">
      <span class="fas fa-exclamation-circle"></span>
      <span class="msg"> It is a blank text</span>
    </div>
    <header>
      <h1>Shibam's ToDo List</h1>
    </header>
    <form>
      <input type="text" class="todo-input" />
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    <div class="todo-container">
      <ul class="todo-list"></ul>
    </div>

    <script src="./app.js"></script>
  </body>
  ```
  ^ In the above code I have used an icon for a down arrow to activate display the drop-down option of sorting the list.
We have completed HTML part successfully.😍😍

## The CSS file 
After you have completed HTML part, you'll notice that when you click the "Run" button at the top, you just see a white screen with some texts and that is it. Now, we make it look better and attractive with our favorite colors and effects,
 **We have to think for future here**
 So this is the tricky part, here what I meant is that, we have think ahead when we will have the ***lists*** and then how we want to display them.

We get to add icons of _trash_ and _tick sign_ to delete it and mark it complete respectively. So, we have to put CSS for that too!

In case you will lost, do not worry I have your back, take help from my code.

```css
.todo {
  margin: 0.5rem;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
  align-items: center;
  transition: all 0.5s ease;
}
.trash-btn,
.complete-btn {
  background-color: rgb(243, 171, 62);
  color: white;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
}
.complete-btn {
  background-color: rgb(81, 192, 81);
}
.todo-item {
  padding: 0 0.5rem;
}
.fa-trash,
.fa-check {
  pointer-events: none; /*to make the whole button as one*/
}
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
```
^ In the above code, I have added several properties for opacity, text-decoration and more. There is also CSS for the icons which will be inserted later in via JavaScript. 

**Adding some cool effect**
Here I chose to add some animation to my To-Do List. For instance I want that it should show some effect of disappearing when clicked in delete button aside the list.

To add animation effect to any class there are two things:
- Add animation name to the class you want to put effects by adding `animation: slide 0.3s ease forwards;` .
- Defining the animation with `keyframe`.

**For Example**:
```css

@keyframes slide {
  0% {
    transform: translateY(-100%);
  }
  40% {
    transform: translateY(15%);
  }
  90% {
    transform: translateY(-25%);
  }
}
```
^ In the above code `translate` means that it will move towards a direction, `Y` says the which direction it will move, here it is Y-Axis and then the `%value in ()` tells that how much to move. 
The effect can be viewed when we will link it with proper functioning JavaScript.
 Up till now your project should be looking like this :smile:.
 ![]()================================================= =========================================
 ## The JavaScript file
 First of all well done! :sunglasses: for coming this far. 

![Well-done](https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif)

Now things will start to get more exciting, We will work on the main functioning of our **To-Do List**.

We will be diving this into three parts:
1. The selectors
2. The event listeners.
3. The functions.
3.1 Adding To-Do list
3.2 Deleting from To-Do List
3.3 Filtering List

### 1. The selectors

