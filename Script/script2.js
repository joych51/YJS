// JavaScript source code
var search_but = document.getElementById("search_button");
var middle = document.getElementById("search_middle");

var temp = ""
function create_table(search_input, page) {
    middle.innerText = "";
    if (page = 1) {
        var i = 1;
    } else {
        var i = 0;
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
            console.log("asdf");
            i++;
        }
        middle.append(row);
    }
}

create_table(temp, 1);

search_but.addEventListener('click', function () {
    var input = document.getElementById("search_area").value;
    var add_top = document.getElementById("comment_area");
    var add_top2 = document.getElementById("feature_area");

    if (input != "") {
        add_top.innerText = "You have Searched for " + '"' + input + '".';
        add_top2.innerText = "These are featured channels for editions " + '"' + input + '".';
    }
    create_table(input);
})


