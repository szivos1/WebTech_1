$(document).ready(function() {
    var table = $("#ManufacturersTable");
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data){
        $.each(data, function (key,value) {
            var row =$("<tr></tr>");
            var id = $("<td style='display:none'>" + value._id + "</td>");
            var name = $("<td>" + value.name + "</td>");
            var country = $("<td>" + value.country + "</td>");
            var founded = $("<td>" + value.founded + '</td>');
            $(row).append(id);
            $(row).append(name);
            $(row).append(country);
            $(row).append(founded);
            $(row).append("<button onclick='Delete(this)' type='button'>Del</button>");
            $(table).append(row);
        })
    })
});

function Delete(button) {
    var DeleteID = $(button).parents("tr").children('td:first').html();
    $.ajax({
        type: "DELETE",
        url: "https://webtechcars.herokuapp.com/api/manufacturers/"+DeleteID,
    });
    open("index.html","_self");
}