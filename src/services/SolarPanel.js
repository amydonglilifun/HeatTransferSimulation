class SolarPanel {
    constructor() {
      this.temperature = 10; // in degrees Celsius
    }
  
    absorbSunlight(sunlightIntensity) { // sunlightIntensity is between 0 and 1
      this.temperature += sunlightIntensity; // increase temperature based on sunlight intensity
    }

    temperature() {
      return this.temperature > 99 ? 99 : this.temperature;
    }
  }