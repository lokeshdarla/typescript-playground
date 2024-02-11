var lokesh = { dbId: 22,
    email: "l@l.com",
    userID: 123,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 15;
    },
    githubToken: "this is token" };
var lokeshnagasai = { dbId: 22,
    email: "l@l.com",
    role: "admin",
    userID: 123,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 15;
    },
    githubToken: "this is token" };
lokesh.email = "lokes@gmail.com";
// lokesh.dbId=33
// Cannot assign to 'dbId' because it is a read-only property.
