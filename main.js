$(document).ready(function() {

    console.log;

    $.getJSON("data.json", function(data) {

        console.log(data);

        for (let i = 0; i < data.length; i++) {

            let name = data[i].name;
            let description = data[i].description;
            let latitude = data[i].location[0];
            let longitude = data[i].location[1];

            let mapLink = "https://www.google.com/maps?q=" + latitude + "," + longitude;

            let row = "<tr>";
            row = row + "<td>" + name + "</td>";
            row = row + "<td>" + description + "</td>";
            row = row + "<td><a href='" + mapLink + "'>Google Maps</a></td>";
            row = row + "</tr>";

            $("table tbody").append(row);

        }

    });

});