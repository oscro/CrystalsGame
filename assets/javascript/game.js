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



    }





    function createRandomNum() {



        return getRandomInt(19, 120);





    }





    function getCrystalVal() {



        return getRandomInt(1, 12);



    }





    randomnum = createRandomNum();



    crystalval1 = getCrystalVal();

    crystalval2 = getCrystalVal();

    crystalval3 = getCrystalVal();

    crystalval4 = getCrystalVal();





    $("#crystal1").on("click", function () {



        $("#totalscore").text(crystalval1 + "Hello");



        console.log(crystalval1);



    });





    $("#crystal2").on("click", function () {



        $("#totalscore").text(crystalval2 + "Hello");



        console.log(crystalval2);



    });





    $("#crystal3").on("click", function () {



        $("#totalscore").text(crystalval3 + "Hello");



        console.log(crystalval3);



    });





    $("#crystal4").on("click", function () {



        $("#totalscore").text(crystalval4 + "Hello");



        console.log(crystalval4);



    });





});