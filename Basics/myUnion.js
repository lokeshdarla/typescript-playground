var score = 33;
score = 44;
score = "55";
var lokesh = { name: "Lokesh", id: 334 };
lokesh = { username: "Lokesh", id: 334 };
getDBId(3);
getDBId("3");
function getDBId(id) {
    //making some API calls
    if (typeof id === "string")
        console.log("DB is is: ".concat(id));
    else
        console.log("DB is is: ".concat(id + 3));
}
// array 
var data = [1, 2, 3, 4, 5, 6];
var multiData = ["1", "2"]; // any one is possible but not both
var data2 = [1, "2", 3, "4"];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment= "crew" we cannot allot other than 3 we defined
