$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('#newToyUpload').modal();
    // $.get("/home-swap", function (data) {		
    //              // todos = data;		
    // });		

    // When user submits the form to make a new toy
    $("#newToy").on("click", function () {
        event.preventDefault();
        // Make a newToy object
        let newToy = {
            title: $("#title").val().trim(),
            product_condition: $("#product_condition").val().trim(),
            availability: $("#availability").val().trim(),
            price: $("#price").val().trim(),
            url: $("#url").val().trim(),
            description: $("#description").val().trim()
        };
        console.log(newToy);
        // Send an AJAX POST-request with jQuery
        $.post("/toys", newToy).done(function (data) {
            window.location.replace("/list");
        });
        // Empty each input box by replacing the value with an empty string
        $("#title").val("");
        $("#product_condition").val("");
        $("#availability").val("");
        $("#price").val("");
        $("#url").val("");
        $("#description").val("");
    });
});