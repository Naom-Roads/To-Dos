$("#list").append("<li>List Something</li>"); // You could also write this as a variable

   

let list = $("#list");
list.append("<li>Another Example</li>")

let li = $("<li></li>")
list.append(li); 


let input = $("<input type='text' name='ListItem' id='input'/>"); 
li.append(input); 


$("#input").val('Hello'); // This is to put input the value 
inputValue = $("#input").val(); // You store the value in a variable here
li.append(inputValue); // This appends the value to the li list 

li.on("click", function() {
    li.addClass("strike"); 
   }); 
   
// li.addClass("delete"); removes last item 




