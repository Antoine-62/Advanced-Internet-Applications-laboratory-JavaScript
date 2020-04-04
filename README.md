# Advanced Internet Applications – laboratory - JavaScript

Description : The aim of the exercice was to write a simple JavaScript app allowing me to keep track of my collection of "fridges" (it's so elegant and beautiful).  
In this description, I will explain how we add Javascript to our Html documents, and then I will describe each of my Javascript functions.

## Add Javascript to Html

There is several ways to add Javascript code in a html document. Personally, I wrote the Javascript code in a separate file, and then I added a reference to my script with the following code (the reference should be placed in the body end) :

```
<script src="source.js"></script>
```

### Call a Javascript function

Ok, now we have our script in our html document, but how can we call a function when we cick on a button ? The answer is quite easy, we add "onclick="myFunction()"" in the button tag. This functionality will execute the Javascript when you will click on the button.

```
<button id="add" onclick="add()">Add new fridge</button>
```

## Add() function

The first functionality we need consist to create a new row, which should contains 2 text inputs, one for the brand of the fridge, another one for the name, and 2 buttons to save or remove the new row.  
Firstly, we need to select our table. We can do it by using "getElementById()" which will select an element by its id :
```
var collection = document.getElementById("collection");
```
Then, we can create our new row. To create an new html element, we use "createElement()" :
```
   var tr = document.createElement("tr");
```
Now that we defined our new row, we need to affect him an "unique" id. We will use this id later as an input for the others functions.   
To be sure this id is unique, we take the id of the last row of the table, and then we add one to this id. If there is no row in the table (we create the first one), we directly assign one as id for the row :
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

We have our row with its id, now we need to create the components of our row : "td". As we did to create our row, we'll use "createElement()". For its first component, we need to create an input to let the user to enter the fridge brand. We'll also use "createElement()" to create this input. Then we set the type of the input as "text", and give it an id because we will need of its value when we'll save the data. We will use setAttribute again to achieve this 2 tasks.  
Now that we have our input html with his properties, we need to insert it in our td, we'll use the functionality "append" which achieve this goal :

```
    var td = document.createElement("td");
    var Brand = document.createElement("input");
    Brand.setAttribute("type", "text");
    Brand.setAttribute("id","brand"+id);
    td.append(Brand);
```
We have our td component which is an input for the brand, now we do the same operations to insert this component in our row :
```
   tr.append(td);
```
Our row contains one component which is an input for the brand. To create and insert the input for the name, we do the same operations as we did for the brand previously.  
Now, we want to insert a button "save" in the row. Such as previously, we create our td element and our button, then we set an id to our button :
```
    var td3 = document.createElement("td");
    var Save = document.createElement("button");
    Save.setAttribute("id","button"+id);
```
To write a text in a html element, here our button, we use the functionality "innerHTML".  
We will include the function "onclick" to run javascript when we'll click on the button. We set the id of the row as input to the button function. 
```
    Save.innerHTML = "Save"; 
    Save.setAttribute("onclick", "save(" + id + ")");
```
Now that we have our button with its attributes, we can insert it to our td, and then to our row :
```
    td3.append(Save);
    tr.append(td3);
```
We do the same maniputions to insert the remove button in our row.  
Finally, we can insert our new row in the table.
```
   collection.append(tr);
```
### Add CSS properties with Javascript
We can manipulate css properties with Javascript. Actually, It's quite simple, you only need to select your html element, and then you edit the style of your element with the javascript property "style" : 
```
 td3.style.padding="1%";
    td3.style.width="3%";
    if(id%2 == 1)
    {
        td3.style.backgroundColor="#F0F0F0";
    }
 ```
## Save() function
The second functionality we want is to save the inputs the user enter for the brand and the name of the fridge, then replace the save button by the edit button.  
Firstly, we select all the elements we need to update (by using the id we define as input of the function) :
```
var tr = document.getElementById(id);
var brand= document.getElementById("brand"+id).value;
var name = document.getElementById("name"+id).value;
var button = document.getElementById("button"+id);
```
Now we replace our input by simple html text. Since we can't select our td elements with their id, because we didn't define id for td (we define id for the input elements, not the td which contain the input), we will select the td elements by using "tr.cells[index]", which is a javascript method which select the elements of the row by using the index :
```
tr.cells[0].innerHTML = brand;
tr.cells[1].innerHTML = name;
```
Then we redefine the function of the button, and then its name :
```
button.setAttribute("onclick", "edit(" + id + ")");
button.innerHTML = "Edit"; 
```
## Remove() function
The third functionality we want is to remove a row of the table.  
First, we select the row we want to delete, and then we use the method "removeChild()", which will delete the selected html element :
```
 var tr = document.getElementById(id);
 tr.parentNode.removeChild(tr);
 ```
## Edit() function
The last fonctionality we want is to edit our row.  
First, we select the elements we want to udapte :
```
var tr = document.getElementById(id);
var br =  tr.cells[0].innerHTML;
var nam = tr.cells[1].innerHTML;
```
And then we udate the elements (I won't describe another time operations we already did in the previous functions) :
```
tr.cells[0].innerHTML="";
tr.cells[1].innerHTML="";
var Brand = document.createElement("input");
Brand.setAttribute("type", "text");
Brand.setAttribute("id","brand"+id);
Brand.setAttribute("value",br);
tr.cells[0].append(Brand);
var Name = document.createElement("input");
Name.setAttribute("id","name"+id);
Name.setAttribute("type", "text");
Name.setAttribute("value",nam);
tr.cells[1].append(Name);
var button = document.getElementById("button"+id);
button.setAttribute("onclick", "save(" + id + ")");
button.innerHTML = "Save"; 
```
## Conclusion
In this exercice, I improved my skills in Javascript, that I already used sometimes before. I didn't met any problem unlike the additional assigments... I thank my teacher, sir Piernik, for this exercice and new skills acquired.


