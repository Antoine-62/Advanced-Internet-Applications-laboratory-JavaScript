# Advanced Internet Applications – laboratory - JavaScript

Description : The aim of the exercice was to write a simple JavaScript app allowing me to keep track of my collection of "fridge" (it's so elegant and beautiful).  
In this description, I will explain how we add Javascript to our Html documents, and then I will describe each of my Javascript functions.

## Add Javascript to Html

There is several ways to add Javascript code in a html document. Personally, I wrote the Javascript code in a separate file, and then I added a reference to my script with the following code (the reference should be in the body end) :

```
<script src="source.js"></script>
```

### Call a Javascript function

Ok, now we have our script in our html document, but how can we call a function when we cick on a button ? The answer is quite easy, we add "onclick="myFunction()"" in the button tag, this functionality will execute the Javascript when you will click on the button.

```
<button id="add" onclick="add()">Add new fridge</button>
```

## Add() function

The first functionality we need consist to create a new row, in which the user could enter the name and the brand of the new fridge, and save or remove the new row.  
Firstly, we need to select our table. We can do it by using "getElementById()" which will select an element by its id :
```
var collection = document.getElementById("collection");
```
Then, we can create our new row. To create an new html element, we use "createElement()" :
```
   var tr = document.createElement("tr");
```
Now that we defined our new row, we need to affect him an "unique" id, we will use this id as an input for the others function.   
To be sure this id is unique, we take the id of the last row of the table, and then we add one. If there is no row in the table (we create the first one), we directly affect one as id for the row :
```
   var id;
   var lastR =collection.rows.length;
   if(lastR==1)
    {
        id=1;
    }
    else
    {
        var lastId = collection.rows[lastR - 1].id; 
        id = parseInt(lastId)+1;
    }
```
To assign id to the row, we use the function "setAttribute("id", id)" :
```
    tr.setAttribute("id", id);	
```

We have our row with its id, now we need to create the components of our row : "td". As we did to create our row, we'll use "createElement()". For its first component, we need to create an input to let the user to enter the fridge brand. We'll use "createElement()" to create this input. Then we set the type of the input as "text", and give him an id because we will need of its value when we'll save the data. We will use setAttribute again to achieve this goal.  
Now that we have our input with his properties, we need to insert it in our td, we'll use the functionality "append" which achive this goal :

```
    var td = document.createElement("td");
    var Brand = document.createElement("input");
    Brand.setAttribute("type", "text");
    Brand.setAttribute("id","brand"+id);
    td.append(Brand);
```
We have our td component which is an input for the brand, now do the same operations to insert this component in our row :
```
   tr.append(td);
```
Our row contains one component which is an input for the brand. To create and insert the input for the name, we do the same operations as we did for the brand previously.  
Now, we want to insert a button "save" 
```
    var td3 = document.createElement("td");
    var Save = document.createElement("button");
    Save.setAttribute("id","button"+id);
```
```
    Save.innerHTML = "Save"; 
    Save.setAttribute("onclick", "save(" + id + ")");
```
```
    td3.append(Save);
    tr.append(td3);
```
```
   collection.append(tr);
```
### Add CSS properties with Javascript
```
 td3.style.padding="1%";
    td3.style.width="3%";
    if(id%2 == 1)
    {
        td3.style.backgroundColor="#F0F0F0";
    }
 ```
