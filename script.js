
document.addEventListener("DOMContentLoaded", function () {

    this.check;

    let ap = 165; //awd service
    let mp = 69; //manual transmission
    let tp = 158; //reg transmission


    let OilChange = {description: "OIL CHANGE", price: ["all", [126]]}
    let TireRotaion = {description: "TIRE ROTATION", price: ["all", [65]]}
    let TireBalance = {description: "TIRE BALANCE", price: ["all", [65]]}
    let MinorFuelService = {description: "MINOR FUEL SERVICE", price: ["all", [36]]}
    let MajorFuelService = {description: "MAJOR FUEL SERVICE", price: ["all", [275]]}
    let Alignment = {description: "ALIGNMENT CHECK", price: ["all", [180]]}
    let InCabinFilter = {description: "IN-CABIN FILTER", price: ["all", [145]]}
    let BrakeFluidService = {description: "BRAKE FLUID SERVICE", price: ["all", [165]]}
    let BatteryService = {description: "BATTERY SERVICE", price: ["all", [42]]}
    let BrakeMaintenance = {description: "BRAKE MAINTENANCE", price: ["all", [145]]}
    let CoolantService = {description: "COOLANT SERVICE", price: ["all", [200]]}
    //0:Altima, 1:Qashqai, 2:Rogue20+, 3:Rogue19-, 4:Murano, 5:Maxima, 6:Micra, 7:Kicks, 8:Juke, 9:Versa, 10:Sentra, 11:Pathfinder21+
    //12:Pathifinder21-, 
    let EngineAirFilter = {description: "ENGINE AIR FILTER", price: ["options", [56,38,59,59,35,35,32,34,34,34,50,41,41]]}
    let AWDService = {description: 'AWD SERVICE', price: ['options', ['N/A', ap+21, ap+187, ap+21, ap+21, 'N/A', 'N/A', 'N/A', ap+20, 'N/A','N/A', ap+40, ap+40]]}
    
    let TransmissionService48K = {description: "TRANSMISSION SERVICE", price: ["options", ['N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A']]}
    let TransmissionService = {description: "TRANSMISSION SERVICE", price: ["options", [466,466,466,466,506,466,272,466,470,466,466,736,468]]}


    let EightKM = {tag: "8KM", services: [OilChange, TireRotaion, TireBalance]}
    let SixteenKM = {tag: "16KM", services: [OilChange, TireRotaion, TireBalance, MinorFuelService]}
    let TwentyFourKM = {tag: "24KM", services: [OilChange, TireRotaion, TireBalance, BrakeMaintenance, BatteryService, Alignment]}
    let ThirtyTwoKM = {tag: "32KM", services: [OilChange, TireRotaion, TireBalance, InCabinFilter, MinorFuelService]}
    let FourtyKM = {tag: "40KM", services:[OilChange, TireRotaion, TireBalance]}
    let FortyEightKM = {tag: "48KM", services: [OilChange, TireRotaion, TireBalance, BrakeFluidService, BatteryService, BrakeMaintenance, MinorFuelService, EngineAirFilter, AWDService, TransmissionService, Alignment], 
    services1: [OilChange, TireRotaion, TireBalance, BrakeFluidService, BatteryService, BrakeMaintenance, MinorFuelService, EngineAirFilter, AWDService, TransmissionService48K, Alignment]}

    let FiftySixKM = {tag: "56KM", services: [OilChange, TireRotaion, TireBalance]}
    let SixtyFourKM = {tag: "64KM", services: [OilChange, TireRotaion, TireBalance, InCabinFilter, MinorFuelService]}
    let SeventyTwoKM = {tag: "72KM", services: [OilChange, TireRotaion, TireBalance, BrakeMaintenance, BatteryService, Alignment]}
    let EightyKM = {tag: "80KM", services: [OilChange, TireRotaion, TireBalance, MinorFuelService]}
    let EightyEightKM = {tag: "88KM", services: [OilChange, TireRotaion, TireBalance]}
    let NinetySixKM = {tag: "96KM", services: [OilChange, TireRotaion, TireBalance, BrakeFluidService, BatteryService, BrakeMaintenance, MajorFuelService, EngineAirFilter, InCabinFilter, AWDService, TransmissionService, Alignment]}

    let OneO4KM = {tag: "104KM", services: [OilChange, TireRotaion, TireBalance]}
    let OneTwelveKM = {tag: "112KM", services: [OilChange, TireRotaion, TireBalance, MinorFuelService]}
    let OneTwentyKM = {tag: "120KM", services: [OilChange, TireRotaion, TireBalance, BrakeMaintenance, BatteryService, Alignment]}
    let OneTwentyEightKM = {tag: "128KM", services: [OilChange, TireRotaion, TireBalance, InCabinFilter, MinorFuelService]}
    let OneThirtySixKM = {tag: "136KM", services: [OilChange, TireRotaion, TireBalance]}
    let OneFortyFourKM = {tag: "144KM", services: [OilChange, TireRotaion, TireBalance, BrakeFluidService, BatteryService, BrakeMaintenance, MinorFuelService, EngineAirFilter, AWDService, TransmissionService, Alignment],
    services1:[OilChange, TireRotaion, TireBalance, BrakeFluidService, BatteryService, BrakeMaintenance, MinorFuelService, EngineAirFilter, AWDService, TransmissionService48K, Alignment]}

    let OneFiftyTwoKM = {tag: "152KM", services: [OilChange, TireRotaion, TireBalance]}
    let OneSixtyKM = {tag: "160KM", services: [OilChange, TireRotaion, TireBalance, InCabinFilter, MinorFuelService]}
    let OneSixtyEightKM = {tag: "168KM", services: [OilChange, TireRotaion, TireBalance, BrakeMaintenance, BatteryService, CoolantService, Alignment]}
    let OneSeventySixKM = {tag: "176KM", services: [OilChange, TireRotaion, TireBalance, MinorFuelService]}
    let OneEightyFourKM = {tag: "184KM", services: [OilChange, TireRotaion, TireBalance]}
    let OneNinetyTwoKM = {tag: "192KM", services: [OilChange, TireRotaion, TireBalance, BrakeFluidService, BatteryService, BrakeMaintenance, MajorFuelService, EngineAirFilter, InCabinFilter, AWDService, TransmissionService, Alignment]}

    let TwoHundredKM = {tag: "200KM", services: [OilChange, TireRotaion, TireBalance]}
    let TwoOEightKM = {tag: "208KM", services: [OilChange, TireRotaion, TireBalance, MinorFuelService]}
    let TwoSixteenKM = {tag: "216KM", services: [OilChange, TireRotaion, TireBalance, BrakeMaintenance, BatteryService, Alignment]}

    let main_list = [EightKM, SixteenKM, TwentyFourKM, ThirtyTwoKM, FourtyKM, FortyEightKM, FiftySixKM, SixtyFourKM, SeventyTwoKM, EightyKM, EightyEightKM, NinetySixKM,
    OneO4KM, OneTwelveKM, OneTwentyKM, OneTwentyEightKM, OneThirtySixKM, OneFortyFourKM, OneFiftyTwoKM, OneSixtyKM, OneSixtyEightKM, OneSeventySixKM,
    OneEightyFourKM, OneNinetyTwoKM, TwoHundredKM,TwoOEightKM, TwoSixteenKM]

    const mainTable = document.getElementById("mainTable").getElementsByTagName("tbody")[0];

    function isOdd(num) { return num % 2;}

    for (let i = 0; i < main_list.length; i++) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.classList.add("main_table_rows")
        cell.classList.add("main-cell");
        cell.setAttribute("id", "main_cell"+i)
        cell.textContent = main_list[i].tag;
        row.appendChild(cell);
        mainTable.appendChild(row);
    }

    // Event listener to toggle dropdown table
    mainTable.addEventListener("click", function (event) {
        if(event.target.parentNode.className === "service_info_cell") return;
        else{
            let flag = event.target.id.slice(9)
            const target = event.target.closest("td");
            if (!target) return;
            const dropdownTable = createDropdownTable(main_list[flag]);
            const parentRow = target.parentNode;
            if (parentRow.nextElementSibling === dropdownTable) {
                dropdownTable.remove(); 
            } else {
                closeAllDropdowns();
                parentRow.insertAdjacentElement("afterend", dropdownTable);
            }
        }
    });

    function closeAllDropdowns() {
        const dropdownTables = document.querySelectorAll(".dropdown-table");
        dropdownTables.forEach(table => table.remove());
    }

    function createDropdownTable(service_object) {
        let services; 
        if(this.check<14){
            if(isOdd(parseInt(service_object.tag.replace('KM', ''))/48)===1){
                services = service_object.services1;
            }
            else services = service_object.services;
        } else services = service_object.services;

        const dropdownTable = document.createElement("table");
        dropdownTable.className = "dropdown-table";
        let tableBody = document.createElement("tbody");
        let total = 0;

        for (let i = 0; i < services.length; i++) {

            let element = services[i]; 
            let tableRow = document.createElement('tr');
            tableRow.classList.add('service_info_cell');
            tableRow.setAttribute('id', 'service_info_cell_'+i)

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td2.setAttribute('id', 'td_check_'+i)
            td2.addEventListener('click', function(event){
                let a = document.getElementById('service_info_cell_'+i)
                let price = parseInt(event.target.innerText.slice(1));
                if(event.target.id!=='total'){
                    if(a.style.opacity!=='0.5') a.style.opacity = '0.5'
                    else a.style.opacity = '1'
                }
                if(a.style.opacity==='0.5') {
                    let total = parseInt(document.getElementById('total').innerText.slice(1));
                    document.getElementById('total').innerText = '$'+(total-price);
                }
                if(a.style.opacity==='1') {
                    let total = parseInt(document.getElementById('total').innerText.slice(1));
                    document.getElementById('total').innerText = '$'+(total+price);
                }
            })


            td1.innerText = element.description;

            if(element.price[0]!=="all"){
                if(element.price[1][this.check]!=="N/A") {
                    td2.innerText = "$"+element.price[1][this.check];
                    total += element.price[1][this.check];
                }
                else continue;
            }
            else {
                td2.innerText = "$"+element.price[1][0];
                total += element.price[1][0];
            }

            td1.style.fontWeight = "600";
            tableRow.appendChild(td1);
            tableRow.appendChild(td2);
            tableBody.appendChild(tableRow);
        }

        let tableRow = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerText = "Total";
        td2.innerText = "$"+total;
        td2.style.fontWeight = "600";
        td2.setAttribute('id', 'total')

        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableBody.appendChild(tableRow);

        dropdownTable.appendChild(tableBody);
        
        return dropdownTable;
    }
});

function showCarList(){
    document.getElementById("car-dropdown-list").classList.toggle("show");
}

function changeSelectedCar(v){
    let btn = document.getElementById("car_select_btn");
    btn.textContent = v.textContent;
    this.check = v.value;
}

window.onclick = function(event) {
    if (!event.target.matches('.car_select_dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-car-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }