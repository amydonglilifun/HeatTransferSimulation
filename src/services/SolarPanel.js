class SolarPanel {
    constructor() {
      this.temperature = 10; // in degrees Celsius
    }
  
    absorbSunlight(timeOfDay) {
      var sunlightIntensity = this.calculateSunlightIntensity(timeOfDay);
      this.temperature += this.calculateSolarTemperature(sunlightIntensity, timeOfDay); // increase temperature based on sunlight intensity
    }

    temperature() {
      return this.temperature > 99 ? 99 : this.temperature;
    }

    // calculate sunlight intensity based on time of day
    calculateSunlightIntensity(timeOfDay) {
      const maxIntensity = 1000; // in watts per square meter
      const hoursAfterNoon = Math.abs(timeOfDay - 12);
      const intensityDecreaseRate = maxIntensity / 12;
      let sunlightIntensity = maxIntensity - (intensityDecreaseRate * hoursAfterNoon);
      return sunlightIntensity;
    }

    // To calculate the solar temperature based on sunlight intensity and time,
    // we will use the Stefan-Boltzmann Law. 
    // This law states that the total energy radiated per unit surface area of a black body is 
    // directly proportional to the fourth power of the black body's temperature.
    calculateSolarTemperature(sunlightIntensity, timeOfDay) {
      const stefanBoltzmannConstant = 5.67 * Math.pow(10, -8);
      let energy = sunlightIntensity * timeOfDay;
      console.log("energy: " + energy);
      let temperature = Math.pow((energy / stefanBoltzmannConstant), 0.25);
      console.log("temperature: " + temperature);
      return temperature;
    }
  }
