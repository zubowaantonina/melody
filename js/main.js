$(document).ready(function() {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var floorPath = $(".home-image path");
    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter ").text(currentFloor);
    });
    //отслеживаем клик по кнопке наверх.
    counterUp.on("click", function() {
        //проверяем значение этажа,оно не должно быть больше 18
        if (currentFloor < 18) {
            currentFloor++; //прибавляем один этаж.

            usecurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            }); // делаем, чтобы номер этажа был двухзначным
            $(".counter ").text(usecurrentFloor); //
            floorPath.removeClass("current-floor"); //
            $(`[data-floor=${usecurrentFloor}]`).toggleClass("current-floor") //
        }
    });
    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;

            usecurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            }); // делаем, чтобы номер этажа был двухзначным
            $(".counter ").text(usecurrentFloor);
            floorPath.removeClass("current-floor")
            $(`[data-floor=${usecurrentFloor}]`).toggleClass("current-floor")
        }
    });
});