# Advanced Internet Applications – laboratory - JavaScript

Description : The aim of the exercice was to write a simple JavaScript app allowing me to keep track of my collection of "fridge" (it's so elegant and beautiful).

## Add Javascript to Html

There is several ways to add Javascript code in a html document. Personally, I wrote the Javascript code in a separate file, and then I added a reference to my script with the following code (the reference should be in the body end) :

```
<script src="source.js"></script>
```

## Call a Javascript function

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

```
   var id;
   var lastR =collection.rows.length;
   if(lastR==1)
    {
        d=1;
    }
    else
    {
        var lastId = collection.rows[lastR - 1].id; 
        id = parseInt(lastId)+1;
    }
```

```
    var td = document.createElement("td");
    var Brand = document.createElement("input");
    Brand.setAttribute("type", "text");
    Brand.setAttribute("id","brand"+id);
    td.append(Brand);
```

```
   tr.append(td);
```
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
```
 td3.style.padding="1%";
    td3.style.width="3%";
    if(id%2 == 1)
    {
        td3.style.backgroundColor="#F0F0F0";
    }
 ```
