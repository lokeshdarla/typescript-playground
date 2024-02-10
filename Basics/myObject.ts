type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser: User = {
  _id: "1245",
  name: "Lokesh",
  email: "lokesh@l.com",
  isActive: false
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}


myUser.email = "lokesh@gmail.com"








export {}
