// JavaScript Document

// Iniialize global variables.
countQuiz1 = 0;
countQuiz2 = 0;
countQuiz3 = 0;
oldSrc = "SD_WLAN/img/Invisible.png";

$(document).ready(function(){
    $("#1D").click(function(){
        var radioValue = $("#1D:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#1A").hide();
            $("#1A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#1A").click(function(){
        var radioValue = $("#1A:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#1D").hide();
            $("#1D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#2D").click(function(){
        var radioValue = $("#2D:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#2A").hide();
            $("#2A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#2A").click(function(){
        var radioValue = $("#2A:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#2D").hide();
            $("#2D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#3D").click(function(){
        var radioValue = $("#3D:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#3A").hide();
            $("#3A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#3A").click(function(){
        var radioValue = $("#3A:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#3D").hide();
            $("#3D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#4D").click(function(){
        var radioValue = $("#4D:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#4A").hide();
            $("#4A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#4A").click(function(){
        var radioValue = $("#4A:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#4D").hide();
            $("#4D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#5D").click(function(){
        var radioValue = $("#5D:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#5A").hide();
            $("#5A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#5A").click(function(){
        var radioValue = $("#5A:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#5D").hide();
            $("#5D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#6D").click(function(){
        var radioValue = $("#6D:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#6A").hide();
            $("#6A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#6A").click(function(){
        var radioValue = $("#6A:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#6D").hide();
            $("#6D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#7D").click(function(){
        var radioValue = $("#7D:checked").val();
        if(radioValue){
            countQuiz1++;
            $("#7A").hide();
            $("#7A2").hide();
            console.log(countQuiz1);
        }
    });
    $("#7A").click(function(){
        var radioValue = $("#7A:checked").val();
        if(radioValue){
            countQuiz1 -= 1;
            $("#7D").hide();
            $("#7D2").hide();
            console.log(countQuiz1);
        }
    });
    $("#8D").click(function(){
        var radioValue = $("#8D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#8A").hide();
            $("#8A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#8A").click(function(){
        var radioValue = $("#8A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#8D").hide();
            $("#8D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#9D").click(function(){
        var radioValue = $("#9D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#9A").hide();
            $("#9A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#9A").click(function(){
        var radioValue = $("#9A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#9D").hide();
            $("#9D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#10D").click(function(){
        var radioValue = $("#10D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#10A").hide();
            $("#10A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#10A").click(function(){
        var radioValue = $("#10A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#10D").hide();
            $("#10D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#11D").click(function(){
        var radioValue = $("#11D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#11A").hide();
            $("#11A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#11A").click(function(){
        var radioValue = $("#11A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#11D").hide();
            $("#11D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#12D").click(function(){
        var radioValue = $("#12D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#12A").hide();
            $("#12A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#12A").click(function(){
        var radioValue = $("#12A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#12D").hide();
            $("#12D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#13D").click(function(){
        var radioValue = $("#13D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#13A").hide();
            $("#13A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#13A").click(function(){
        var radioValue = $("#13A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#13D").hide();
            $("#13D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#14D").click(function(){
        var radioValue = $("#14D:checked").val();
        if(radioValue){
            countQuiz2 -= 1;
            $("#14A").hide();
            $("#14A2").hide();
            console.log(countQuiz2);
        }
    });
    $("#14A").click(function(){
        var radioValue = $("#14A:checked").val();
        if(radioValue){
            countQuiz2++;
            $("#14D").hide();
            $("#14D2").hide();
            console.log(countQuiz2);
        }
    });
    $("#15D").click(function(){
        var radioValue = $("#15D:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#15A").hide();
            $("#15A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#15A").click(function(){
        var radioValue = $("#15A:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#15D").hide();
            $("#15D2").hide();
            console.log(countQuiz3);
        }
    });
    $("#16D").click(function(){
        var radioValue = $("#16D:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#16A").hide();
            $("#16A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#16A").click(function(){
        var radioValue = $("#16A:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#16D").hide();
            $("#16D2").hide();
            console.log(countQuiz3);
        }
    });
    $("#17D").click(function(){
        var radioValue = $("#17D:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#17A").hide();
            $("#17A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#17A").click(function(){
        var radioValue = $("#17A:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#17D").hide();
            $("#17D2").hide();
            console.log(countQuiz3);
        }
    });
    $("#18D").click(function(){
        var radioValue = $("#18D:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#18A").hide();
            $("#18A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#18A").click(function(){
        var radioValue = $("#18A:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#18D").hide();
            $("#18D2").hide();
            console.log(countQuiz3);
        }
    });
    $("#19D").click(function(){
        var radioValue = $("#19D:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#19A").hide();
            $("#19A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#19A").click(function(){
        var radioValue = $("#19A:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#19D").hide();
            $("#19D2").hide();
            console.log(countQuiz3);
        }
    });
    $("#20D").click(function(){
        var radioValue = $("#20D:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#20A").hide();
            $("#20A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#20A").click(function(){
        var radioValue = $("#20A:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#20D").hide();
            $("#20D2").hide();
            console.log(countQuiz3);
        }
    });
    $("#21D").click(function(){
        var radioValue = $("#21D:checked").val();
        if(radioValue){
            countQuiz3 -= 1;
            $("#21A").hide();
            $("#21A2").hide();
            console.log(countQuiz3);
        }
    });
    $("#21A").click(function(){
        var radioValue = $("#21A:checked").val();
        if(radioValue){
            countQuiz3++;
            $("#21D").hide();
            $("#21D2").hide();
            console.log(countQuiz1);
            console.log(countQuiz2);
            console.log(countQuiz3);
        }
    });

    $("#submission").click(function() {
        if (countQuiz1 > 0 && countQuiz2 > 0 && countQuiz3 < 0) {
            var newSrc = "SD_WLAN/img/PragmaticPatriot.png";
            $('#class').html("PRAGMATIC PATRIOT");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 < 0 && countQuiz2 > 0 && countQuiz3 < 0) {
            var newSrc = "SD_WLAN/img/CalculatedBeliever.png";
            $('#class').html("CALCULATED BELIEVER");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 > 0 && countQuiz2 < 0 && countQuiz3 < 0) {
            var newSrc = "SD_WLAN/img/ReflectiveCynic.png";
            $('#class').html("REFLECTIVE CYNIC");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 < 0 && countQuiz2 < 0 && countQuiz3 < 0) {
            var newSrc = "SD_WLAN/img/IndependentPragmatist.png";
            $('#class').html("INDEPENDENT PRAGMATIST");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 > 0 && countQuiz2 > 0 && countQuiz3 > 0) {
            var newSrc = "SD_WLAN/img/DevoutAmerican.png";
            $('#class').html("DEVOUT AMERICAN");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 < 0 && countQuiz2 > 0 && countQuiz3 > 0) {
            var newSrc = "SD_WLAN/img/BleedingHeart.png";
            $('#class').html("BLEEDING HEART");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 > 0 && countQuiz2 < 0 && countQuiz3 > 0) {
            var newSrc = "SD_WLAN/img/PassionateSkeptic.png";
            $('#class').html("PASSIONATE SKEPTIC");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        if (countQuiz1 < 0 && countQuiz2 < 0 && countQuiz3 > 0) {
            var newSrc = "SD_WLAN/img/TheOneThatGotAway.png";
            $('#class').html("THE ONE THAT GOT AWAY");
            $('#prescription').html("Receive your prescription at the obelisk.");
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
        else {
            var newSrc = "SD_WLAN/img/Invisible.png";
            $('#class-img[src="' + oldSrc + '"]').attr("src", newSrc);
        }
    });
});
