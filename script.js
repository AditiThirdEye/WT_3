let url = "https://davids-restaurant.herokuapp.com/menu_items.json";
let items = null;

$('document').ready(function(){
    $.get(url,function(data,success) {
        items = data.menu_items;
        fill();
    });
});

function fill() {
    let i = 1;
    var ele = document.getElementById('items');
    for (const jsonObj of items) {
        var tag = document.createElement("a");
        tag.id = i;
        tag.innerText = jsonObj.name;
        tag.className = "dropdown-item";
        tag.setAttribute("onclick", "showResult("+(i++)+")");
        ele.appendChild(tag);
    }
}

function showResult(ind) {
    let he = document.querySelector('.blank');
    he.style.display = "none";
    let eh = document.querySelector('.content');
    eh.style.display = "block";

    if (items != null) {
        let data = items[ind];
        document.querySelector('#shortname').textContent = data.short_name;
        document.querySelector('#name').textContent = data.name;
        document.querySelector('#desc').textContent = data.description;
        document.querySelector('#sportion').textContent = data.small_portion_name;
        document.querySelector('#lportion').textContent = data.large_portion_name;
        document.querySelector('#psmall').textContent= data.price_small;
        document.querySelector('#plarge').textContent = data.price_large;
    } else {
        he.style.display = "block";
        eh.style.display = "none";
    }
}

