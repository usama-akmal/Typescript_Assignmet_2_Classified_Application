var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Advertisment
 */
var Advertisment = (function () {
    function Advertisment(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl) {
        this.modal = modal;
        this.phoneNumber = phoneNumber;
        this.postDate = postDate;
        this.postTime = postTime;
        this.price = price;
        this.title = title;
        this.description = discription;
        this.author = author;
        this.imageUrl = imageUrl;
    }
    return Advertisment;
}());
/**
 * Vechical
 */
var Vehical = (function (_super) {
    __extends(Vehical, _super);
    function Vehical(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, engineSize, noOfWheels, color) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl);
        this.noOfWheels = noOfWheels;
        this.engineSize = engineSize;
        this.color = color;
    }
    return Vehical;
}(Advertisment));
/**
 * Car
 */
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, engineSize, noOfWheels, color, noOfDoors, typeOfCars) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, engineSize, noOfWheels, color);
        this.noOfDoors = noOfDoors;
        this.typeOfCar = typeOfCars;
    }
    Car.prototype.ShowAdd = function (id) {
        var dataToAdd = "<li>" +
            "<div class=\"collapsible-header\"><i class=\"material-icons\">shopping_cart</i>" + this.title + "</div>" +
            "<div class=\"collapsible-body white\">" +
            "<div class=\"row\">" +
            "<div class=\"col s3 m3 l3\">" +
            "<img src=\"" + this.imageUrl + "\" class=\"responsive-img pixi\">" +
            "</div>" +
            "<div class=\"col s9 m9 l9\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4 class=\"bold\">" + this.title + "</h4>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4>Price : <span class=\"bold\">" + this.price + "</span></h4>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Time : <span class=\"bold\">" + this.postTime + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Date : <span class=\"bold\">" + this.postDate + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Modal : <span class=\"bold\">" + this.modal + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Cell No : <span class=\"bold\">" + this.phoneNumber + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Engine Size : <span class=\"bold\">" + this.engineSize + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>No of Wheels : <span class=\"bold\">" + this.noOfWheels + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Color : <span class=\"bold\">" + this.color + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>No of Doors : <span class=\"bold\">" + this.noOfDoors + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Car Type : <span class=\"bold\">" + this.typeOfCar + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m12 l12\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\"><h5>Author =></h5></div>" +
            "<div class=\"col s12 m6 l6\"><h5>" + this.author + "</h5></div>" +
            "</div>" +
            "<p class=\"desp\">" + this.description + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</li>";
        document.getElementById(id).innerHTML += dataToAdd;
        document.getElementById("homeTab").innerHTML += dataToAdd;
        console.log("Hugya");
    };
    return Car;
}(Vehical));
/**
 * Bike
 */
var Bike = (function (_super) {
    __extends(Bike, _super);
    function Bike(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, engineSize, noOfWheels, color, typeOfBike) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, engineSize, noOfWheels, color);
        this.typeOfBike = typeOfBike;
    }
    Bike.prototype.ShowAdd = function (id) {
        var dataToAdd = "<li>" +
            "<div class=\"collapsible-header\"><i class=\"material-icons\">shopping_cart</i>" + this.title + "</div>" +
            "<div class=\"collapsible-body white\">" +
            "<div class=\"row\">" +
            "<div class=\"col s3 m3 l3\">" +
            "<img src=\"" + this.imageUrl + "\" class=\"responsive-img pixi\">" +
            "</div>" +
            "<div class=\"col s9 m9 l9\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4 class=\"bold\">" + this.title + "</h4>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4>Price : <span class=\"bold\">" + this.price + "</span></h4>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Time : <span class=\"bold\">" + this.postTime + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Date : <span class=\"bold\">" + this.postDate + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Modal : <span class=\"bold\">" + this.modal + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Cell No : <span class=\"bold\">" + this.phoneNumber + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Engine Size : <span class=\"bold\">" + this.engineSize + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>No of Wheels : <span class=\"bold\">" + this.noOfWheels + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Color : <span class=\"bold\">" + this.color + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Bike Type : <span class=\"bold\">" + this.typeOfBike + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m12 l12\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\"><h5>Author =></h5></div>" +
            "<div class=\"col s12 m6 l6\"><h5>" + this.author + "</h5></div>" +
            "</div>" +
            "<p class=\"desp\">" + this.description + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</li>";
        document.getElementById(id).innerHTML += dataToAdd;
        document.getElementById("homeTab").innerHTML += dataToAdd;
        console.log("Hugya");
    };
    return Bike;
}(Vehical));
/**
 * Electronics
 */
var Electronics = (function (_super) {
    __extends(Electronics, _super);
    function Electronics(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl);
        this.typeOfItem = typeOfItem;
    }
    Electronics.prototype.ShowAdd = function (id) {
    };
    return Electronics;
}(Advertisment));
/**
 * Computers
 */
var Computers = (function (_super) {
    __extends(Computers, _super);
    function Computers(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem, rams, processor, powerSource) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem);
        this.rams = rams;
        this.processor = processor;
        this.powerSource = powerSource;
    }
    Computers.prototype.ShowAdd = function (id) {
    };
    return Computers;
}(Electronics));
/**
 * Mobile
 */
var Mobile = (function (_super) {
    __extends(Mobile, _super);
    function Mobile(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem, rams, processor, powerSource, screenSize, builtInStorage) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem, rams, processor, powerSource);
        this.screenSize = screenSize;
        this.builtInStorage = builtInStorage;
    }
    Mobile.prototype.ShowAdd = function (id) {
        var dataToAdd = "<li>" +
            "<div class=\"collapsible-header\"><i class=\"material-icons\">shopping_cart</i>" + this.title + "</div>" +
            "<div class=\"collapsible-body white\">" +
            "<div class=\"row\">" +
            "<div class=\"col s3 m3 l3\">" +
            "<img src=\"" + this.imageUrl + "\" class=\"responsive-img pixi\">" +
            "</div>" +
            "<div class=\"col s9 m9 l9\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4 class=\"bold\">" + this.title + "</h4>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4>Price : <span class=\"bold\">" + this.price + "</span></h4>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Time : <span class=\"bold\">" + this.postTime + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Date : <span class=\"bold\">" + this.postDate + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Modal : <span class=\"bold\">" + this.modal + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Cell No : <span class=\"bold\">" + this.phoneNumber + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Type of Mobile : <span class=\"bold\">" + this.typeOfItem + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Ram : <span class=\"bold\">" + this.rams + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Processor : <span class=\"bold\">" + this.processor + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Power Source : <span class=\"bold\">" + this.powerSource + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Screen Size : <span class=\"bold\">" + this.screenSize + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Internal Storage : <span class=\"bold\">" + this.builtInStorage + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m12 l12\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\"><h5>Author =></h5></div>" +
            "<div class=\"col s12 m6 l6\"><h5>" + this.author + "</h5></div>" +
            "</div>" +
            "<p class=\"desp\">" + this.description + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</li>";
        document.getElementById(id).innerHTML += dataToAdd;
        document.getElementById("homeTab").innerHTML += dataToAdd;
        console.log("Hugya");
    };
    return Mobile;
}(Computers));
/**
 * Laptop
 */
var Laptop = (function (_super) {
    __extends(Laptop, _super);
    function Laptop(modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem, rams, processor, powerSource, graphicCard) {
        _super.call(this, modal, postDate, postTime, title, price, phoneNumber, discription, author, imageUrl, typeOfItem, rams, processor, powerSource);
        this.graphicCard = graphicCard;
    }
    Laptop.prototype.ShowAdd = function (id) {
        var dataToAdd = "<li>" +
            "<div class=\"collapsible-header\"><i class=\"material-icons\">shopping_cart</i>" + this.title + "</div>" +
            "<div class=\"collapsible-body white\">" +
            "<div class=\"row\">" +
            "<div class=\"col s3 m3 l3\">" +
            "<img src=\"" + this.imageUrl + "\" class=\"responsive-img pixi\">" +
            "</div>" +
            "<div class=\"col s9 m9 l9\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4 class=\"bold\">" + this.title + "</h4>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h4>Price : <span class=\"bold\">" + this.price + "</span></h4>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Time : <span class=\"bold\">" + this.postTime + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Post Date : <span class=\"bold\">" + this.postDate + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Modal : <span class=\"bold\">" + this.modal + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Cell No : <span class=\"bold\">" + this.phoneNumber + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Type of Mobile : <span class=\"bold\">" + this.typeOfItem + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Ram : <span class=\"bold\">" + this.rams + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Processor : <span class=\"bold\">" + this.processor + "</span></h6>" +
            "</div>" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Power Source : <span class=\"bold\">" + this.powerSource + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\">" +
            "<h6>Graphic Card : <span class=\"bold\">" + this.graphicCard + "</span></h6>" +
            "</div>" +
            "</div>" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m12 l12\">" +
            "<div class=\"row\">" +
            "<div class=\"col s12 m6 l6\"><h5>Author =></h5></div>" +
            "<div class=\"col s12 m6 l6\"><h5>" + this.author + "</h5></div>" +
            "</div>" +
            "<p class=\"desp\">" + this.description + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</li>";
        document.getElementById(id).innerHTML += dataToAdd;
        document.getElementById("homeTab").innerHTML += dataToAdd;
        console.log("Hugya");
    };
    return Laptop;
}(Computers));
var ADS = [];
ADS.push(new Car(2016, "14/05/2016", "12:46", "Ford Truck", 1500000, 920522222, "The Ford F-Series is a series of light-duty trucks and medium-duty trucks (Class 2-7) that have been marketed and manufactured by Ford Motor Company since 1948. While most variants of the F-Series trucks are full-size pickup trucks, the F-Series also includes chassis cab trucks and commercial vehicles.The most popular version of the F-Series is the Ford F-150, produced in thirteen different generations. It has been the best-selling vehicle in the United States since 1981 and the best-selling pickup since 1977.[1][2] It is also the best selling vehicle in Canada.[3]", "Zahid Khan", "img/ford.jpg", "4500cc", 4, "Blue", 4, "Truck"));
ADS.push(new Bike(2016, "14/05/2006", "12:46", "Dirt Bike", 97000, 920522222, "There are various types of off-road motorcycles, also known as dirt bikes, specially designed for off-road events. The term off-road refers to a driving surface that is not conventionally paved. This is a rough surface, often created naturally, such as sand, gravel, a river, mud or snow. This type of terrain can sometimes only be travelled on with vehicles designed for off-road driving (such as SUVs, ATVs, snowmobiles or mountain bikes) or vehicles that have off-road equipment.", "Arsalan Ahmed", "img/trail.jpg", "300cc", 2, "Red", "Dirt"));
ADS.push(new Mobile(2016, "12/04/2016", "01:55", "Moto Z", 65000, 92871315, "Moto Z is an Android smartphone developed by Motorola Mobility, a division of Lenovo. Unveiled on June 9, 2016 as its flagship model for the year, the Moto Z is distinguished by a system which allows case accessories to be magnetically attached to the device to provide additional functionality.In the United States, Moto Z will be a time-limited exclusive to Verizon Wireless under the name Moto Z Droid Edition, as part of the Droid line of smartphones that are exclusively manufactured[1] by Motorola.[2] It will be released direct-to-consumer as an unlocked device later in 2016.", "Usama Akmal", "img/motoz.jpg", "Cellphone", "3GB", "2.7 Ghz Octa Core", "Battery", "5.2 inch", "16Gb || 32Gb || 64Gb"));
ADS.push(new Laptop(2016, "12/04/2016", "01:55", "Dell Inspiron 5547", 67000, 92871315, "On June 26, 2008, this laptop was followed with the release of the Inspiron 1535, otherwise known as the Dell Studio laptop. On January 6, 2009, the Inspiron 1525 was superseded by the Inspiron 1545, which gives mostly higher-end configuration options at a lower starting price, but lacks features such as the HDMI port, LED indicator lights and two headphone jacks. The laptop was discontinued on February 26, 2009, leaving the Inspiron 1545 as Dell's 15-inch budget laptop.", "Usama Akmal", "img/inspiron.jpg", "Normal", "8GB", "1.6 Ghz i5", "Battery", "2GB AMD R7 265"));
ADS.push(new Car(2016, "14/05/2016", "12:46", "Toyata Tundra", 580000, 920522222, "The Toyota Tundra is a pickup truck manufactured in the U.S.A. by the Japanese manufacturer Toyota since May 1999. The Tundra was the first North American full-size pickup to be built by a Japanese manufacturer. The Tundra was nominated for the North American Truck of the Year award and was Motor Trend magazine's Truck of the Year in 2000 and 2008. Initially built in a new Toyota plant in Princeton, Indiana, production was consolidated in 2008 to Toyota's San Antonio, Texas, factory and is the only full-size pickup truck manufactured in Texas.", "Zubair Ali", "img/tundra.jpg", "3900cc", 4, "Blue", 4, "Truck"));
ADS.push(new Bike(2016, "14/05/2017", "12:46", "Harley Davidson", 110000, 920522222, "As one of two major American motorcycle manufacturers to survive the Great Depression (along with Indian),[5] the company has survived numerous ownership arrangements, subsidiary arrangements (e.g., Aermacchi 1974-1978 and Buell 1987-2009), periods of poor economic health and product quality, as well as intense global competition[6] — to become the world's fifth largest motorcycle manufacturer and an iconic brand widely known for its loyal following — with owner clubs and events worldwide as well as a company sponsored brand-focused museum.", "Muneeb Ahmed", "img/harly.jpg", "600cc", 2, "Black", "Monster"));
ADS.push(new Mobile(2016, "12/04/2016", "01:55", "Iphone 6", 97000, 92871315, "The iPhone 6 and iPhone 6 Plus are smartphones designed and marketed by Apple Inc. The devices are part of the iPhone series and were announced on September 9, 2014, and released on September 19, 2014.[16] The iPhone 6 and iPhone 6 Plus jointly serve as successors to the iPhone 5c and iPhone 5s.", "Naeem Khan", "img/ihpne6.jpg", "Cellphone", "2GB", "1.0 Ghz Quad Core", "Battery", "4.7 inch", "16Gb || 32Gb || 64Gb || 128Gb"));
ADS.push(new Laptop(2016, "12/04/2016", "01:55", "Lenovo S20", 47000, 92871315, "The ThinkStation P310 is an \"entry-level\" workstation and replacement for the P300 ThinkStation. It comes standard with an Intel Xeon E3-1200v5 processor and an Nvidia GPU. It can accommodate up to 64 gigabytes of RAM, and supports Lenovo's FLEX drive system.[1]", "Farhan Ali", "img/lenovos20.jpg", "Normal", "4GB", "2.6 Ghz i3", "Battery", "2GB Nividia"));
ADS.push(new Car(2016, "14/08/2016", "12:46", "Rangerover", 700000, 920522222, "The Range Rover Sport is a Land Rover mid-size luxury sport utility vehicle (SUV) produced in the United Kingdom by Jaguar Land Rover, a subsidiary of Tata Motors.[1] The first generation (codename L320) went into production in 2005, and was replaced by the second generation Sport (codename L494) in 2013.", "Farhaan Ahmed", "img/rangerover.jpg", "3000cc", 4, "Black", 4, "Jeep"));
ADS.push(new Bike(2016, "14/05/2017", "12:46", "Super Bike", 110000, 920522222, "A sport bike, aka \"sportbike\" and \"sportsbike\", is a motorcycle optimized for speed, acceleration, braking, and cornering on paved roads, typically at the expense of comfort and fuel economy by comparison with other motorcycles.[1] Soichiro Honda wrote in the owner's manual of the 1959 Honda CB92 Benly Super Sport that,\"Primarily, essentials of the motorcycle consists in the speed and the thrill,\" while Cycle World's Kevin Cameron says more prosaically that, \"A sportbike is a motorcycle whose enjoyment consists mainly from its ability to perform on all types of paved highway – its cornering ability, its handling, its thrilling acceleration and braking power, even (dare I say it?) its speed", "Shafeeq Hussain", "img/hayabusa.jpg", "850cc", 2, "Silver", "Sport"));
ADS.push(new Mobile(2016, "12/04/2016", "01:55", "Samasung Note 5", 88000, 92871315, "The Samsung Galaxy Note 5 (branded and marketed as Samsung Galaxy Note5) is an Android phablet smartphone developed and produced by Samsung Electronics. Unveiled on 13 August 2015,[7] it is a successor to the Galaxy Note 4 as part of the Samsung Galaxy Note series.", "Hafeez ullah", "img/note5.jpg", "Cellphone", "3GB", "2.0 Ghz Quad Core", "Battery", "5.5 inch", "16Gb || 32Gb || 64Gb"));
ADS.push(new Laptop(2016, "12/04/2016", "01:55", "HP G540", 87000, 92871315, "The HP TouchPad is a tablet computer that was developed and designed by Hewlett-Packard.[7] The HP TouchPad was launched on July 1, 2011, in the United States; July 15 in Canada, United Kingdom, France, Germany; and August 15 in Australia.", "Arsalan Per Zada", "img/hpg540.jpg", "Normal", "16GB", "1.8 Ghz i7", "Battery", "4GB AMD Overclocked"));
ADS.forEach(function (element) {
    if (element instanceof Laptop) {
        element.ShowAdd("laptopTab");
    }
    else if (element instanceof Mobile) {
        element.ShowAdd("mobileTab");
    }
    else if (element instanceof Car) {
        element.ShowAdd("carTab");
    }
    else if (element instanceof Bike) {
        element.ShowAdd("bikeTab");
    }
});
