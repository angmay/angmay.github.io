var navOptions = [{"Name": "Tech", "Link" : "https://github.com/angmay", "Title": "Github Page"}, 
                    {"Name": "LinkedIn", "Link" : "https://ca.linkedin.com/in/angmay", "Title": "LinkedIn Page"},
                    // {"Name": "Hobbies", "Link" : "hobbies.html", "Title": "Collection of my projects"},
                    // {"Name": "Goals", "Link" : "goals.html", "Title": "The goal is to visit every country, this is my tally"},
                    {"Name": "Websites", "Link" : "website.html", "Title": "Past and Current Websites"}
                ];




navOptions.forEach( function(item) {

    var menu = d3.selectAll(".menu");
    //console.log(item);
    //console.log("--------------")

    var cell = menu.append("li")
                    .html(`<a href="${item["Link"]}" target="_blank" title="${item["Title"]}">${item["Name"]}</a>`);


})
