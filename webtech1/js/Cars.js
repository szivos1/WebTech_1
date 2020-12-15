$(document).ready(function() {
    var table = $("#CarsTable");
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data){
        $.each(data, function (key,value) {
            var row =$("<tr></tr>");
            var id = $("<td style='display:none'>" + value._id + "</td>");
            var name = $("<td>" + value.name + "</td>");
            var consumption = $("<td>" + value.consumption + "</td>");
            var color = $("<td>" + value.color + '</td>');
            var manufacturer = $("<td>" + value.manufacturer + "</td>");
            var avaiable = $("<td>" + value.avaiable + "</td>");
            var year = $("<td>" + value.year + "</td>");
            var horsepower = $("<td>" + value.horsepower + "</td>");
            $(row).append(id);
            $(row).append(name);
            $(row).append(consumption);
            $(row).append(color);
            $(row).append(manufacturer);
            $(row).append(avaiable);
            $(row).append(year);
            $(row).append(horsepower);
            $(row).append("<button onclick='Delete(this)' type='button'>Del</button>");
            $(table).append(row);
        })
    })
});

function Delete(button) {
    var DeleteID = $(button).parents("tr").children('td:first').html();
    $.ajax({
        type: "DELETE",
        url: "https://webtechcars.herokuapp.com/api/cars/"+DeleteID,
    });
    open("index.html","_self");
}