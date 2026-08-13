const form = document.getElementById("itemForm");


if(form){

form.addEventListener("submit", function(event){


event.preventDefault();



const item = {

name: document.getElementById("itemName").value,

category: document.getElementById("category").value,

description: document.getElementById("description").value,

location: document.getElementById("location").value,

office: document.getElementById("office").value,

status: document.getElementById("status").value

};



let items = JSON.parse(localStorage.getItem("items")) || [];


items.push(item);


localStorage.setItem(
"items",
JSON.stringify(items)
);



alert("Item successfully added!");



form.reset();


});


}
const container =
document.getElementById("items-container");


if(container){


let items =
JSON.parse(localStorage.getItem("items")) || [];



items.forEach(item => {


container.innerHTML += `

<div class="item-card">

<h3>${item.name}</h3>

<p>
<strong>Category:</strong>
${item.category}
</p>


<p>
<strong>Description:</strong>
${item.description}
</p>


<p>
<strong>Found Location:</strong>
${item.location}
</p>


<p>
<strong>Office:</strong>
${item.office}
</p>


<p>
<strong>Status:</strong>
${item.status}
</p>


</div>

`;


});


}