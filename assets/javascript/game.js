$(document).ready(function () {

    var randomnum = 0;

    var crystalval1 = 0;

    var crystalval2 = 0;

    var crystalval3 = 0;

    var crystalval4 = 0;

    var wins = 0;

    var losses = 0;

    var total = 0;


    function getRandomInt(min, max) {

        var min = Math.ceil(min);
        var max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;

    };


    function createRandomNum() {

        return getRandomInt(19, 120);

    };


    function getCrystalVal() {

        return getRandomInt(1, 12);

    };


    function reset() {

        if (total == randomnum) {

            wins++;

            alert("YOU WON! GREAT JOB!");

            $("#wins").text("Wins: " + wins);

            $("#totalscore").text("0");

            total = 0;

            randomnum = createRandomNum();

            $("#randomnum").text("Random Number to Match is: " + randomnum);

            console.log("Randomnum: " + randomnum);

            crystalval1 = getCrystalVal();
            crystalval2 = getCrystalVal();
            crystalval3 = getCrystalVal();
            crystalval4 = getCrystalVal();

        } else if (total > randomnum) {

            losses++;

            alert("YOU LOST! I'M SORRY! :'(");

            $("#losses").text("Losses: " + losses);

            $("#totalscore").text("0");

            total = 0;

            randomnum = createRandomNum();

            $("#randomnum").text("Random Number to Match is: " + randomnum);

            console.log("Randomnum: " + randomnum);

            crystalval1 = getCrystalVal();
            crystalval2 = getCrystalVal();
            crystalval3 = getCrystalVal();
            crystalval4 = getCrystalVal();

        };

    };

    function getTotal() {

        console.log("This is the total: " + total);

    };


    randomnum = createRandomNum();

    $("#randomnum").text("Random Number to Match is: " + randomnum);

    console.log("Random Number is: " + randomnum);

    crystalval1 = getCrystalVal();
    crystalval2 = getCrystalVal();
    crystalval3 = getCrystalVal();
    crystalval4 = getCrystalVal();


    $("#crystal1").on("click", function () {

        total = total + crystalval1;

        $("#totalscore").text(total);

        console.log("crystalval1 = " + crystalval1);

        getTotal();

        reset();

    });


    $("#crystal2").on("click", function () {

        total = total + crystalval2;

        $("#totalscore").text(total);

        console.log("crystalval2 = " + crystalval2);

        getTotal();

        reset();

    });


    $("#crystal3").on("click", function () {

        total = total + crystalval3;

        $("#totalscore").text(total);

        console.log("crystalval3 = " + crystalval3);

        getTotal();

        reset();

    });


    $("#crystal4").on("click", function () {

        total = total + crystalval4;

        $("#totalscore").text(total);

        console.log("crystalval4 = " + crystalval4);

        getTotal();

        reset();

    });

});  //<-- End of Document Ready Function