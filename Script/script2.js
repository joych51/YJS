// JavaScript source code
var search_but = document.getElementById("search_button");
var middle = document.getElementById("search_middle");

var page_number = 1;
var temp = ""

function create_table(search_input, page) {
    middle.innerText = "";
    if (page == 1) {
        var i = 1;
    } else if (page != 1){
        var i = (12 * (page-1)) + 1;
    }

    for (var x = 0; x < 4; x++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var y = 0; y < 3; y++) {
            var col = document.createElement('div');
            col.className = "col";
            if (search_input != "") {
                col.innerHTML = "<a href=" + '"' + "index.html" + '"' + ">" + search_input + " Chp. " + i + "</a>";
            }
            row.append(col);
            i++;
        }
        middle.append(row);
    }
}

create_table(temp, 1);
create_button(1);

search_but.addEventListener('click', function () {
    var input = document.getElementById("search_area").value;
    var add_top = document.getElementById("comment_area");
    var add_top2 = document.getElementById("feature_area");

    if (input != "") {
        add_top.innerText = "You have Searched for " + '"' + input + '".';
        add_top2.innerText = "These are featured channels for editions " + '"' + input + '".';
    }
    create_table(input,page_number);
    create_button(page_number);
})


function create_button(page_num) {
    var temp_div = document.getElementById("page_div");

    temp_div.innerText = "";

    if (page_num == 1) {
        for (var x = page_num; x < page_num + 3; x++) {
            temp_div.innerHTML += "<button type= " + '"button" onclick="update_page(' + x + ')" class="pg">' + x;
        }
        var pg = document.getElementsByClassName("pg")[0];
        pg.style.backgroundColor = "grey";
    } else if (page_num == 2) {
        for (var x = page_num - 1; x < page_num + 3; x++) {
            temp_div.innerHTML += "<button type= " + '"button" onclick="update_page(' + x + ')" class="pg">' + x;
        }
        var pg = document.getElementsByClassName("pg")[1];
        pg.style.backgroundColor = "grey";
    } else {
        for (var x = page_num - 2; x < page_num + 3; x++) {
            temp_div.innerHTML += "<button type= " + '"button" onclick="update_page(' + x + ')" class="pg">' + x;
        }
        var pg = document.getElementsByClassName("pg")[2];
        pg.style.backgroundColor = "grey";
    }
}

var next_but = document.getElementById("next_button");
next_but.addEventListener('click', function () {
    page_number += 3;
    var input = document.getElementById("search_area").value;
    create_table(input, page_number);
    create_button(page_number);
})

function update_page(pg) {
    page_number = pg;
    var input = document.getElementById("search_area").value;
    console.log(page_number, input);

    create_table(input, page_number);
    create_button(page_number);
}