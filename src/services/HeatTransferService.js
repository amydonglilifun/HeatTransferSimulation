class HeatTransferService {
  constructor(solarPanel, storageTank, transferCoefficient) {
    this.solarPanel = solarPanel;
    this.storageTank = storageTank;
    this.transferCoefficient = transferCoefficient; // proportion of heat transferred per unit time
  }

  transferHeat() {
    const temperatureDifference = this.solarPanel.temperature - this.storageTank.temperature;

    console.log("1:" + temperatureDifference);
    const heatTransferAmount = this.transferCoefficient * temperatureDifference;

    console.log("2:" + heatTransferAmount);
    this.solarPanel.temperature -= heatTransferAmount;

    console.log("3:" +  this.solarPanel.temperature)
    this.storageTank.receiveHeat(heatTransferAmount);
  }
}