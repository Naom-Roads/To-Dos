# 1.9 Notes 

CDN - Content Delivery Network 
$ = shorthand for jquery 
e.g instead of let element = document.querySelectorAll('.my-class')
    do this $('.my-class) because the DOM is built into jQuery 

## jQuery

There is no distinction between document.querySelector and 
document.querySelectorAll bc jQuery is applied to everything in a collection
        
***Example*** 

    let inputs = $('input');
    inputs.addClass('my-class'); 

***Same As***

    let inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
  input.classList.add('.my-class');
}); 

With Vanilla JS you have to consider working with single items or all items, when using jQuery you always target all items so you do not need a forEach to iterate over the array. 

## Traversing the DOM 

***Example*** 

let input = $("input"); 
input.parent(); // Get parent element
input.children(); // Get children of Parent 
input.closest('.container'); // Traverse heiarchy of parents until the selector matches
input.siblings(); // get all siblings 

You can chain commands. In the example below the class notification is selected and then 
a class called 'bright-red' is added and then removed after 300 miliseconds 

    $(".notification").addClass("bright-red").delay
    (300).removeClass("bright-red") 

You can also split across multiple lines like this 

    $(".notification")
    .addclass("bright-red")
    .delay(300)
    .removeClass("bright-red")

***Example***

Creating a new element 

    let newElement = $('<div class="new-class">Content</div>')
    $("body").append(newElement); // This creates a new element in the body 

Same as code below but code below will run faster because the code above needs to be converted to the code below.This only becomes noticeble in large applications or slower connections.

    let newElement = document.createElement('div');
    newElement.classList.add('new-class');
    newElement.innerText = 'Content is here!';
    document.querySelector('body').appendChild(newElement);

## For Each 

You can still use For each to get specific attributes 

    $('input').each(function(i) {
        let inputValue = $(this).val(); // gets val using keyword val();
        let inputName = $(this).attr('name'); // gets attribute using keyword attr
        if(inputValue().length < 1 ) {
         console.log('Please fill out the' + inputName + ' field')
       }
    }); 


## Getting Attributes 

This JS will grab the link from the HTML code below 

    var imagesource = $('.my-image').attr('src'); 
    console.log(imageSource);

HTML 
    <img class='my-image' src='https://picsum.photos/200/300'>

You can also use **get** to retrieve DOM elements 

    inputs.get(0) // This will get the first element from a collection 

## Show or Hide Elements w/ jQuery 

***Example*** 

    let inputs = $('input'); 
    inputs.show(); // Shows the element(s)
    inputs.hide(); // Hides the element(s) 

    inputs.fadeOut(); // Fades element(s) and hides them 
    inputs.fadeIn(); // Fades elements in and shows them 

    inputs.fadeToggle(); // Fade the elements in or out depending on when they are visible 

    inputs.slideDown(); // Slide the element(s) out of view and then hide them 
    inputs.slideUp(); // Slide the Element(s) into view and show them 
    inputs.slideToggle(); // Slide the Element(s) in or out

***Don't forget that you can pass the duration in the animations in milliseconds like so fadeIn(3000)***

## Remove or append 

    input.remove(); // Delete the element
    $('body').append(input); // Like .appendChild
    $('body').empty(); // Remove all children of the element 

## Event Handling 

***Example*** 

    $('input').on('click', function(event) {
        // Do something 
    }); 

    $('input').off('click'); // Removes all 'click' listeners

## AJAX

