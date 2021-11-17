var calculateButton = document.querySelector("#calcular");

calculateButton.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-calculate");

    var totalPerProject = form.totalPerProject.value;
    var hoursPerDay = form.hoursPerDay.value;
    var daysInWeek = form.daysInWeek.value;
    var vacationDays = form.vacationDays.value;

    var amountPerHour = (totalPerProject / (daysInWeek * 4 * hoursPerDay)) + ((vacationDays * daysInWeek * hoursPerDay));
    console.log(amountPerHour);
    var result = document.createElement("div");
    result.textContent = amountPerHour;

});



