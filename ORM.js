var calculateReps = function() {
    var maxReps = 10;   //set maximum reps allowed 
    var repsNo = $("#reps").val();
    var weight = $("#weight").val(); // values user inputs
    var oneRepMax = null; 
    var calc = Math.round;
    
    // else if statement to calculate a users max rep, no more than ten reps allowed
    if (repsNo > maxReps) {
        alert("You can't enter more than 10 reps!");
        return false;
    } else if (repsNo < maxReps) {
        oneRepMax = calc(weight / (1.0278 - 0.0278 * repsNo)); 
    } else if (repsNo == maxReps) {
        oneRepMax = calc(weight / 0.75);
    }
    
    //Calculating the percentages of what user can lift based on one rep max
    $("#test-circle55").find('text')[0].innerHTML = calc(oneRepMax * 0.55);
    $("#test-circle60").find('text')[0].innerHTML = calc(oneRepMax * 0.60);
    $("#test-circle65").find('text')[0].innerHTML = calc(oneRepMax * 0.65);
    $("#test-circle70").find('text')[0].innerHTML = calc(oneRepMax * 0.70);
    $("#test-circle75").find('text')[0].innerHTML = calc(oneRepMax * 0.75);
    $("#test-circle80").find('text')[0].innerHTML = calc(oneRepMax * 0.80);
    $("#test-circle85").find('text')[0].innerHTML = calc(oneRepMax * 0.85);
    $("#test-circle90").find('text')[0].innerHTML = calc(oneRepMax * 0.90);
    
    //putting value in modal form input and to the one rep max span on the page
    $("#maxrep").text(oneRepMax);
    $("#ORM_Val").val(oneRepMax);
    return false;
}

//function to change between KG and LB with checkbox

$(document).ready(function() { 
    $("input[name='weight']").TouchSpin({
        min: 1,
        max: 1000,
        step: 1,
        decimals: 1
    });
    $("input[name='reps']").TouchSpin({
        min: 1,
        max: 10,
        step: 1,
        decimals: 0
    });
    $("input[name='weightunit']").on( "change", function() {
        
        var unit = $("input[name='weightunit']:checked").val();
        console.log("The unit has been changed");
        
        if (unit == "kg") {
            $("#weight").val(($("#weight").val() / 2.20462).toFixed(1));
            $(".svgunit").text("KG");
            $(".svgunit2").text(" KG");
        } else if (unit == "lbs") {
            $("#weight").val(($("#weight").val() * 2.20462).toFixed(1));
            $(".svgunit").text("LB");
            $(".svgunit2").text(" LB");
        }
        calculateReps();
    });

    //populate add modal with one rep max value
    
    $('#save').change(function () {
        $("#ORM_Val").val(onerepmax);
    })
});