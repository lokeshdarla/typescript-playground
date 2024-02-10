function addTwo(val : number): number {
  return val + 2;
}

function getUpper(val : string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, password: string, isPaid: boolean): void {
  // Implementation for user signup
}

let loginUser = (name: string, email: string, isPaid: boolean = false): void => {
  // Implementation for user login
}

let myValue: number = addTwo(5);
getUpper("Lokesh");

signUpUser("Lokesh", "*****", false);
loginUser("L", "L@.com");

function getMyVal(myVal: number): boolean {
  return myVal > 5;
}

const getHello = (s: string): string => {
  return `String ${s} Hello world`;
}

const heroes = ["Thor", "Hulk", "Thanos"];

heroes.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log('errmsg', errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
