class StorageTank {
    constructor() {
      this.maxCapacity = 80; // default capacity in gallons
      this.capacity = 0;
      this.pumpCapacity = 2; // default capacity in gallons for each pump
      this.temperature = 0; // default room temperature
      this.heatTransferAmount = 0;
      this.pumpCount = 0;
    }
  
    fill(pumpCount) {
      this.pumpCount += pumpCount;
    }

    receiveHeat(heatTransferAmount) {
      this.heatTransferAmount += heatTransferAmount;
      this.temperature += this.heatToTemperature(heatTransferAmount);
    }

    temperature() {
      return this.temperature > 99 ? 99 : this.temperature;
    }

    heatToTemperature(heat) {
      let mass = 2; // in kilograms
      let specificHeatCapacity = 4186; // in J/kg°C for water
    
      heat = heat === undefined ? 1 : heat;
      return Math.floor(heat / (mass * specificHeatCapacity)) + 1;
    }
  }