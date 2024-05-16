class HeatTransferService {
  constructor(solarPanel, storageTank, transferCoefficient) {
    this.solarPanel = solarPanel;
    this.storageTank = storageTank;
    this.transferCoefficient = transferCoefficient; // proportion of heat transferred per unit time
  }

  transferHeat() {
    const temperatureDifference = this.solarPanel.temperature - this.storageTank.temperature;
    const heatTransferAmount = this.transferCoefficient * temperatureDifference;
    this.solarPanel.temperature -= heatTransferAmount;
    this.storageTank.receiveHeat(heatTransferAmount);
  }
}
