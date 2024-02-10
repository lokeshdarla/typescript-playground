function addTwo(val) {
    return val + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, password, isPaid) {
    // Implementation for user signup
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // Implementation for user login
};
var myValue = addTwo(5);
getUpper("Lokesh");
signUpUser("Lokesh", "*****", false);
loginUser("L", "L@.com");
function getMyVal(myVal) {
    return myVal > 5;
}
var getHello = function (s) {
    return "String ".concat(s, " Hello world");
};
var heroes = ["Thor", "Hulk", "Thanos"];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log('errmsg', errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
