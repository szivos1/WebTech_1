function Add() {
    var full = {};
    var elements = document.querySelectorAll("input");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;
        if(name) {
            full[name] = value;
            }
    }
    var json = JSON.stringify(full);
    $.ajax({
        async:false,
        type: "POST",
        url: "https://webtechcars.herokuapp.com/api/cars",
        data: json,
        dataType: "json",
        contentType: "application/json",
    });
    $(".Content").load("cars.html");
}