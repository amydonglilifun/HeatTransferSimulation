var flowSwitch = true;
var bumpCount = 0;

// Create a new instance of the SolarTank class
let solar = new SolarPanel();
let tank = new StorageTank();
let heatTransfer = new HeatTransferService(solar, tank, 0.1);

// update temperature container
if (temperatureChartOption && typeof temperatureChartOption === 'object') {
    temperatureChart.setOption(temperatureChartOption);
}
  
// swith flow betwwn heating and pumping
setInterval(function () {
    if (flowSwitch) {
        // start heating
        document.querySelector("#monitoring_heating").style.display = "block";
        document.querySelector("#flow_heating_coldtohot").style.display = "block";

        document.querySelector("#monitoring_pumping").style.display = "none";
        document.querySelector("#flow_pumping").style.display = "none";
        flowSwitch = false;
    }
    else {
        // pumping started
        document.querySelector("#monitoring_heating").style.display = "none";
        document.querySelector("#flow_heating_coldtohot").style.display = "none";

        document.querySelector("#monitoring_pumping").style.display = "block";
        document.querySelector("#flow_pumping").style.display = "block";
        flowSwitch = true;

        bumpCount += 1;

        console.log(solar.temperature);
        console.log(tank.temperature);

        // Fill the tank with a certain number of pumps
        tank.fill(bumpCount);

        // Receive some amount of heat
        // console.log("=>" + heatTransfer.transferHeat());
        tank.receiveHeat(heatTransfer.transferHeat());

        console.log(tank.temperature);

        // Get the temperature of the tank
        let temperature = tank.temperature;

        console.log(temperature);

        // update temperature
        temperatureChart.setOption({
            series: [
            {
                data: [
                {
                    value: temperature
                }
                ]
            },
            {
                data: [
                {
                    value: temperature
                }
                ]
            }
            ]
        });

        // Solar continue to absorb sunlight
        solar.absorbSunlight(1);
    }
}, 5000);