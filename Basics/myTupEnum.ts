//const user: (string| number)[]=[1,"lokesh"]
let tuser : [string, number]

// order of elements should be same as order of datatypes
tuser=["lokesh",1]

let rgb: [number, number,number]

// rgb=[255,244,233,222]
// Type '[number, number, number, number]' is not assignable to type '[number, number, number]'.
//  Source has 4 element(s) but target allows only 3.ts(2322)

type TestUser = [number,string] 


const newUser: TestUser= [112,"example@gmail.com"]

newUser[1]="Lokesh "

//WARNING !!
// Don't rely on tuples more


enum SeatChoice{
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH
}

const hcSeat = SeatChoice.AISLE
