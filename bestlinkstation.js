

/*
    Problem solving
    Create a function that solves the most suitable (with most power) link station for a device at given point [x,y]. Use JavaScript runnable in modern browser or 
    Node.js. This problem can be solved in 2­dimensional space. Link stations have reach and power.
  
    A link station’s power can be calculated:
    -----
    power = (reach - device's distance from link station)^2 
    if distance > reach, power = 0
    -----
    
    Function receives list of link stations and the point where the device is located.
    
    Function should output following line:
    “Best link station for point x,y is x,y with power z”
    Or:
    “No link station within reach for point x,y”
    

    Link stations are located at points (x, y) and have reach (r) ([x, y, r]): [[0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]]
    Print out function output from points (x, y): (0,0), (100, 100), (15,10) and (18, 18).
*/



function bestLink(stationsList, deviceLocation){

   
  var powerResults = []
  for (station in stationsList) {
    powerResults.push(stationPower(stationsList[station], deviceLocation)) // or I could just keep the highest value and its index in array to identify the station
  }
  var bestLink = Math.max(...powerResults);
  var selectedStation = stationsList[powerResults.indexOf(bestLink)];

  if (bestLink != 0) 
    // return "Best link station for point "+deviceLocation.print()+" is "+selectedStation.print()+" with power "+bestLink; // if you want to output the reach value too
    return "Best link station for point "+deviceLocation.print()+" is "+selectedStation.printShort()+" with power "+bestLink;
  else {
    return "No link station within reach for point "+deviceLocation.print();
  }
}

function stationDistance(station, device) {
  return Math.hypot(device.x-station.x, device.x-station.y);
}

function stationPower(station, device) {
  var distance = stationDistance(station, device);
  if (distance > station.reach)
    return 0;
  else 
    return Math.pow(station.reach - distance, 2);
}

function Station(x, y, reach) {
    this.x = x;
    this.y = y;
    this.reach = reach;
    this.print = function () {return "("+this.x + ", " + this.y + ", "+this.reach+")";}
    this.printShort = function () {return "("+this.x + ", " + this.y +")";}
}

function Location(x, y) {
    this.x = x;
    this.y = y;
    this.print = function () {return  "("+this.x + ", " + this.y + ")";}
}


  var station1 =  new Station (0, 0, 10);
  var station2 =  new Station(20, 20, 5);
  var station3 =  new Station (10, 0, 12);
  var stationsList = [station1, station2, station3];
  var device1 =  new Location(0, 0);
  var device2 =  new Location(100, 100);
  var device3 =  new Location(15, 10);
  var device4 =  new Location(18, 18);
  var devicesList = [device1, device2, device3, device4];


  for (device in devicesList) {
    console.log(bestLink(stationsList, devicesList[device]));
    console.log("============");
  }





