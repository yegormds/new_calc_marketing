const calculate = () => {
    document.getElementById("results_heading").textContent = "Вот результаты:";
// GETTING VALUES
    let budget = parseInt(document.getElementById("budget").value);
    let leads = parseInt(document.getElementById("leads").value);
    let clicks = parseInt(document.getElementById("clicks").value);
    let sales = parseInt(document.getElementById("sales").value);
// CALCULATES VARIABLES
    let cpc = budget/clicks; 
    let cpl = budget/leads;
    let cps = budget/sales;
    let salesConv = sales*100/leads;
    
    
    getResults();


    function getCpc() {
        let cpcResult = document.getElementById("cpc_result");
        cpcResult.textContent = "Клик: " + cpc.toFixed(2) + " $";
        var setIndicator = document.createElement("img");
        if (cpc > 0.04) {
            setIndicator.src = "red_circle.svg";
            cpcResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
            document.getElementById("lowCpc_heading").textContent =  "Что делать с ценой клика?";
            document.getElementById("lowCpc_description").textContent =  "Запустить новые тесты \n Проверить СРМ";

        } else {
            setIndicator.src = "green_circle.svg";
            cpcResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
        }
    }
    function getCpl() {
        let cplResult = document.getElementById("cpl_result");
        cplResult.textContent = "Обращение: " + cpl.toFixed(1) + " $";
        var setIndicator = document.createElement("img");
        if (cpl > 2) {
            setIndicator.src = "red_circle.svg";
            cplResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
            document.getElementById("lowCpl_heading").textContent =  "Что делать с ценой обращения?";
            document.getElementById("lowCpl_description").textContent =  "Проверить постинг сторис \n Проверить наличие всех типов контента \n Проверить ассортимент \n Проверить цены";
        } else {
            setIndicator.src = "green_circle.svg";
            cplResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
        }
    }
    function getCps() {
        let cpsResult = document.getElementById("cps_result");
        cpsResult.textContent = "Заказ: " + cps.toFixed(1) + " $";
        var setIndicator = document.createElement("img");
        if (cps > 6) {
            setIndicator.src = "red_circle.svg";
            cpsResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
            document.getElementById("lowCps_heading").textContent =  "Что делать с ценой заказа?";
            document.getElementById("lowCps_description").textContent =  "Посмотреть на коверсию в продажу";
        } else {
            setIndicator.src = "green_circle.svg";
            cpsResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
        }
    }
    function getSalesConv() {
        let salesConvResult = document.getElementById("salesConv_result");
        salesConvResult.textContent = "Конв. продажу: " + salesConv.toFixed(1) + " %";
        var setIndicator = document.createElement("img");
        if (salesConv < 25) {
            setIndicator.src = "red_circle.svg";
            salesConvResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
            document.getElementById("lowSalesConv_heading").textContent =  "Что делать с конверсией в продажу?";
            document.getElementById("lowSalesConv_description").textContent =  "Проанализировать возражения \n Проверить скорость ответа";
        } else {
            setIndicator.src = "green_circle.svg";
            salesConvResult.appendChild(setIndicator);
            setIndicator.setAttribute("class","res_circle");
        }
    }
    function getResults() {
        getCpc();
        getCpl();
        getCps();
        getSalesConv();
    }
}

const deleteAll = () => {
    window.location.reload();
}