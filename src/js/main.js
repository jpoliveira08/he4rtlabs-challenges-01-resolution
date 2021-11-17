var calculateButton = document.querySelector("#calculate");
/**
 * Adicionando um "escutador" para o click no botao
 * Utilizando funcao anonima
 */
calculateButton.addEventListener("click", function(event){
    /**
     * Previnindo o recarregamento da pagina
     */
    event.preventDefault();
    
    /**
     * Adicionando o formulario em uma variavel,
     * Para que podermos acessar os seus campos.
     */
    var form = document.querySelector("#form-calculate");

    /**
     * Armazenando o conteudo dos campos do formulario
     */
    var totalPerProject = form.totalPerProject.value;
    var hoursPerDay = form.hoursPerDay.value;
    var daysInWeek = form.daysInWeek.value;
    var vacationDays = form.vacationDays.value;

    /**
     * Calculando o valor por hora.
     */
    var amountPerHour = (totalPerProject / (daysInWeek * 4 * hoursPerDay)) + ((vacationDays * daysInWeek * hoursPerDay));
    
    //Criando uma div
    var amountPerHourDiv = document.createElement("div");
    //Adicionando o resultado do calculo nesta div
    amountPerHourDiv.textContent = amountPerHour.toFixed(2);
    //Associando a div ao formulario
    form.appendChild(amountPerHourDiv);

});



