function add() {
  
   var collection = document.getElementById("collection");//we select our table
   var tr = document.createElement("tr");//we create anew row
   var id;//we will define an id to the row
   var lastR =collection.rows.length;
   if(lastR==1)
    {
        id=1;//if there was not row before, we assign 1 to id
    }
    else
    {
        var lastId = collection.rows[lastR - 1].id; 
        id = parseInt(lastId)+1;//else we assign the id value of the last row, and we add 1
    }
    tr.setAttribute("id", id);//we set the id to the row

    var td = document.createElement("td");//we create a td element
    //we define the css properties for this element
    td.style.padding="1%";
    td.style.width="12%";
    if(id%2 == 1)//to get one row background in grey every 2 rows
    {
        td.style.backgroundColor="#F0F0F0";
    }
    var Brand = document.createElement("input");//we create an input
    Brand.setAttribute("type", "text");// we define this input as text input
    Brand.setAttribute("id","brand"+id);//we set an id to this html input
    td.append(Brand);//we insert the text input in the td element
    tr.append(td);//we insert the td element in the row

    var td2 = document.createElement("td");//we create a td element
	//we define the css properties for this element
    td2.style.padding="1%";
    td2.style.width="12%";
    if(id%2 == 1)//to get one row background in grey every 2 rows
    {
        td2.style.backgroundColor="#F0F0F0";
    }
    var Name = document.createElement("input");//we create an input
    Name.setAttribute("id","name"+id);//we set an id to this html input
    Name.setAttribute("type", "text");// we define this input as text input
    td2.append(Name);//we insert the text input in the td element
    tr.append(td2);//we insert the td element in the row

    var td3 = document.createElement("td");//we create a td element
	//we define the css properties for this element
    td3.style.padding="1%";
    td3.style.width="3%";
    if(id%2 == 1)
    {
        td3.style.backgroundColor="#F0F0F0";
    }
    var Save = document.createElement("button");//we create a html button
    Save.setAttribute("id","button"+id);//we assign an id to this button
    Save.innerHTML = "Save"; //we define the text on the button
    Save.setAttribute("onclick", "save(" + id + ")");//we define the function of the button
    td3.append(Save);//we insert the button in the td element
    tr.append(td3);// we insert the td element in the row

    var td4 = document.createElement("td");//we create a td element
	//we define the css properties for this element
    td4.style.padding="1%";
    td4.style.width="3%";
    if(id%2 == 1)
    {
        td4.style.backgroundColor="#F0F0F0";
    }
    var Remove = document.createElement("button");//we create a html button
    Remove.innerHTML = "Remove"; //we define the text on the button
    Remove.setAttribute("onclick", "remove(" + id + ")");//we define the function of the button
    td4.append(Remove);//we insert the button in the td element
    tr.append(td4);// we insert the td element in the row
          
    collection.append(tr);// we insert the row to our table
}

    function save(id)
    {
	  //We select the element by their id
      var tr = document.getElementById(id);
      var brand= document.getElementById("brand"+id).value;//we retrieve the value of the brand
      var name = document.getElementById("name"+id).value;//we retrieve the value of the name
      var button = document.getElementById("button"+id);
      tr.cells[0].innerHTML = brand;//we assign text to define brand
      tr.cells[1].innerHTML = name;//we assign text to define name
      button.setAttribute("onclick", "edit(" + id + ")");//we replace the button function 
      button.innerHTML = "Edit"; //we replace the button name
      
    }

    function remove(id)
    {
      var tr = document.getElementById(id);//we select the row we want to remove
      tr.parentNode.removeChild(tr);//we remove the row
    }

    function edit(id)
    {
	  //We select the element by their id
      var tr = document.getElementById(id);
      var br =  tr.cells[0].innerHTML;//we retrieve the brand
      var nam = tr.cells[1].innerHTML;//we retrieve the name

      tr.cells[0].innerHTML="";//we remove the html text
      tr.cells[1].innerHTML="";//we remove the html text
      var Brand = document.createElement("input");//we create an html input
      Brand.setAttribute("type", "text");// we define this input as text input
      Brand.setAttribute("id","brand"+id);//we set an id to this html input
      Brand.setAttribute("value",br);//we insert the brand previously retrieved into the html input
      tr.cells[0].append(Brand);//we insert the hmtl input in the td element
      
      var Name = document.createElement("input");//we create an html input
      Name.setAttribute("id","name"+id);//we set an id to this html input
      Name.setAttribute("type", "text");// we define this input as text input
      Name.setAttribute("value",nam);//we insert the name previously retrieved into the html input
      tr.cells[1].append(Name);//we insert the hmtl input in the td element

      var button = document.getElementById("button"+id);//we select the button
      button.setAttribute("onclick", "save(" + id + ")");//we replace the function button
      button.innerHTML = "Save"; //we replace the text button
    }