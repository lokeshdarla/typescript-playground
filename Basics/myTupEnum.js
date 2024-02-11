//const user: (string| number)[]=[1,"lokesh"]
var tuser;
// order of elements should be same as order of datatypes
tuser = ["lokesh", 1];
var rgb;
var newUser = [112, "example@gmail.com"];
newUser[1] = "Lokesh ";
//WARNING !!
// Don't rely on tuples more
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
