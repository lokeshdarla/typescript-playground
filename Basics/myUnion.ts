let score: number | string = 33

score = 44

score = "55"

type User= {
  name: string;
  id: number
}

type Admin= {
  username: string;
  id: number
}

let lokesh:User | Admin= {name:"Lokesh", id: 334}


lokesh= {username:"Lokesh",id:334}

getDBId(3);
getDBId("3");

function getDBId(id:number| string){
  //making some API calls
  if(typeof id === "string")
  console.log(`DB is is: ${id}`);
  else
  console.log(`DB is is: ${id+3}`);
}


// array 

const data: number[] = [1,2,3,4,5,6]

const multiData: number[] | string[] = ["1","2"] // any one is possible but not both

const data2:(number| string)[]=[1,"2",3,"4"]

let pi:3.14=3.14 

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment= "aisle"
// seatAllotment= "crew" we cannot allot other than 3 we defined
