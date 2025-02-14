
document.addEventListener("DOMContentLoaded", function () {

    this.check;

    let ap = 192; //awd service
    let mp = 69; //manual transmission
    let tp = 158; //reg transmission


    let OilChange = {description: "OIL & FILTER\nCHANGE", price: ["all", [136]]}
    let TireRotaion = {description: "TIRE SWAP\nFree Break Check", price: ["all", [59]]}
    let MajorFuelService = {description: "FUEL SYSTEM\nFLUSH", price: ["all", [274]]}   
    let Alignment = {description: "ALIGNMENT\nFree Check", price: ["all", [197]]}
    let BrakeFluidService = {description: "BRAKE FLUID\nEXCHANGE", price: ["all", [174]]}
    let BatteryService = {description: "BATTERY CARE\nPACKAGE", price: ["all", [39]]}
    let BrakeMaintenance = {description: "FULL BRAKE\nSERVICE", price: ["all", [154]]}
    let CoolantService = {description: "COOLANT\nFLUSH", price: ["all", [189]]}
    //0:Altima, 1:Qashqai, 2:Rogue20+, 3:Rogue19-, 4:Murano, 5:Maxima, 6:Micra, 7:Kicks, 8:Juke, 9:Versa, 10:Sentra, 11:Pathfinder21+
    //12:Pathifinder21-, 13:Armada16-, 14:Armada16+

    let AWDService = {description: 'AWD\nSERVICE', price: ['options', ['N/A', ap+21, ap+187, ap+21, ap+21, 'N/A', 'N/A', 'N/A', ap+20, 'N/A','N/A', ap+40, ap+40, 350, 480]]}
    
    let TransmissionService48K = {description: "TRANSMISSION\nSERVICE", price: ["options", ['N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A']]}
    let TransmissionService = {description: "TRANSMISSION\nSERVICE", price: ["options", [375,375,375,375,375,375,272,375,375,375,375,375,468,210,210]]}


    let EightKM = {tag: "8KM", services: [OilChange, TireRotaion]}
    let SixteenKM = {tag: "16KM", services: [OilChange, TireRotaion]}
    let TwentyFourKM = {tag: "24KM", services: [BrakeMaintenance, BatteryService, Alignment, OilChange, TireRotaion]}
    let ThirtyTwoKM = {tag: "32KM", services: [OilChange, TireRotaion]}
    let FourtyKM = {tag: "40KM", services:[OilChange, TireRotaion]}
    let FortyEightKM = {tag: "48KM", services: [BrakeMaintenance, BrakeFluidService, BatteryService, AWDService, OilChange, TireRotaion, TransmissionService, Alignment], 
    services1: [BrakeMaintenance, BrakeFluidService, BatteryService, AWDService, OilChange, TireRotaion, TransmissionService48K, Alignment]} 

    let FiftySixKM = {tag: "56KM", services: [OilChange, TireRotaion]}
    let SixtyFourKM = {tag: "64KM", services: [OilChange, TireRotaion]}
    let SeventyTwoKM = {tag: "72KM", services: [BrakeMaintenance, BatteryService, Alignment, OilChange, TireRotaion]}
    let EightyKM = {tag: "80KM", services: [OilChange, TireRotaion ]}
    let EightyEightKM = {tag: "88KM", services: [OilChange, TireRotaion]}
    let NinetySixKM = {tag: "96KM", services: [BrakeMaintenance, BrakeFluidService, AWDService, BatteryService, MajorFuelService, Alignment, OilChange, TireRotaion, TransmissionService]}

    let OneO4KM = {tag: "104KM", services: [OilChange, TireRotaion]}
    let OneTwelveKM = {tag: "112KM", services: [OilChange, TireRotaion]}
    let OneTwentyKM = {tag: "120KM", services: [BrakeMaintenance, BatteryService, Alignment, OilChange, TireRotaion]}
    let OneTwentyEightKM = {tag: "128KM", services: [OilChange, TireRotaion]}
    let OneThirtySixKM = {tag: "136KM", services: [OilChange, TireRotaion]}
    let OneFortyFourKM = {tag: "144KM", services: [BrakeMaintenance, BrakeFluidService, BatteryService, AWDService, OilChange, TireRotaion, TransmissionService, Alignment]}

    let OneFiftyTwoKM = {tag: "152KM", services: [OilChange, TireRotaion]}
    let OneSixtyKM = {tag: "160KM", services: [OilChange, TireRotaion]}
    let OneSixtyEightKM = {tag: "168KM", services: [BrakeMaintenance, BatteryService, CoolantService, Alignment, OilChange, TireRotaion]}
    let OneSeventySixKM = {tag: "176KM", services: [OilChange, TireRotaion]}
    let OneEightyFourKM = {tag: "184KM", services: [OilChange, TireRotaion]}
    let OneNinetyTwoKM = {tag: "192KM", services: [BrakeMaintenance, BrakeFluidService, AWDService, BatteryService, MajorFuelService, Alignment, OilChange, TireRotaion, TransmissionService]}

    let TwoHundredKM = {tag: "200KM", services: [OilChange, TireRotaion]}
    let TwoOEightKM = {tag: "208KM", services: [OilChange, TireRotaion]}
    let TwoSixteenKM = {tag: "216KM", services: [BrakeMaintenance, Alignment, BatteryService, OilChange, TireRotaion]}

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
//        console.log(this.check)
        if(this.check<11){
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
             // Here goes manes and prices of the Service. e.g Major Fuel Service - 275$.
             // IF one of the major   services, get price per 100/1000 kms and create another cell 
            

            tableRow.classList.add('service_info_cell');
            tableRow.setAttribute('id', 'service_info_cell_'+i)

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            let td3 = document.createElement("td");
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
            td2.style.fontWeight = "300";
            tableRow.appendChild(td1);
            tableRow.appendChild(td2);

            td1.innerText = element.description;
            switch (element.description) {
                case "FULL BRAKE\nSERVICE":
                    td3.innerText = "¢"+parseInt(154/24*10)+"/100km"
                    break;
                case "BRAKE FLUID\nEXCHANGE":
                    td3.innerText = "¢"+parseInt(174/48*10)+"/100km"
                  break;
                case "FUEL SYSTEM\nFLUSH":
                    td3.innerText = "¢"+parseInt(275/96*10)+"/100km"
                   break;
                case "AWD\nSERVICE":
                    td3.innerText = "¢"+parseInt(td2.innerText.replace("$",'')/48*10)+"/100km"
                    console.log(td2.innerText.slice(0))
                   break;
                case "TRANSMISSION\nSERVICE":
                    td3.innerText = "¢"+parseInt(td2.innerText.replace("$",'')/96*10)+"/100km"
                    break;
                case "ALIGNMENT\nFree Check":
                    td3.innerText = "¢"+parseInt(197/24*10)+"/100km"
              }

            if(td3.innerText.length!==0) {
                td3.style.color = "#426B1F";
                tableRow.appendChild(td3);
            }
            //if major fuel, awd, transmission, brake fluid, brake maintenance, alignment - create another tabl

            tableBody.appendChild(tableRow);
        }

        let tableRow = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerText = "Total";
        td2.innerText = "$"+total;

        td2.style.fontWeight = "300";

        //td2.style.fontWeight = "600";
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