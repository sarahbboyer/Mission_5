// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//jquery to make sure the user enters a positive number
$(document).ready(function() {
    $('#btnSubmit').click(function() {
        var userInput = $('#txtFrom').val(); // Get the value from the input box

        // Check if the input is a number and if it's positive
        //jquery to calculate the pricing if it is positive and a number
        if ($.isNumeric(userInput) && userInput > 0) {
            $('#error-message').hide();
            
            //once this input is valid, send it back to the output box
            var output = userInput * 120;
            $('#outputValue').text(output);
            
            //error handling, should only be a positive number, let user reinput if invalid
        } else {
            $('#error-message').show();
            $('#txtFrom').val('');
            $('#txtFrom').focus(); 

        }
    });
});
