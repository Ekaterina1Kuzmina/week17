// creating a parents class - Transport

class Transport {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;

    }
  
    getInfo() {
      return `The type of transport is: ${this.type}, brand: ${this.brand}`;
    }
  
    getPrice() {
      return this.price;
    }
  }



  // creating a child class - Car

  class Car extends Transport {
    constructor(type, price, brand, doors) {
      super(type, price, brand);
      this.doors = doors;
    }
  
    getDoorsCount() {
      return this.doors;
    }
  }



    // creating a child class - Bike

  class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
      super(type, price, brand);
      this.maxSpeed = maxSpeed;
    }
  
    getMaxSpeed() {
      return this.maxSpeed;
    }
  }



//An array with incoming data

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];


//Sorting transports for Cars and Bikes from data

const allTransport = data.map(item => {
    if (item.type === 'car') {
      return new Car(item.type, item.brand, item.price, item.doors);
    } else {
      return new Bike(item.type, item.brand, item.price, item.maxSpeed,);
    }
  });


//Display information about each transport on the screen 

allTransport.forEach(transport => {
  console.log(transport.getInfo()); 
  console.log(`Price: ${transport.getPrice()}`); 

  if (transport instanceof Car) {
    console.log(`The amoumt of doors: ${transport.getDoorsCount()}`);
  } else if (transport instanceof Bike) {
    console.log(`Max. speed is: ${transport.getMaxSpeed()}`);
  }
});