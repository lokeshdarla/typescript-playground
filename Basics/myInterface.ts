interface User {
  readonly dbId:number,
  email: string,
  userID:number,
  googleId?: string,
  startTrail(): string
  getCoupon(couponname:string,value:number): number
}

interface User { // reopening of interface
  githubToken?: string
}

// interface supports inheritance
interface Admin extends User{
    role: "admin" | "ta" | "lead"
}

const lokesh: User= {dbId:22,
    email:"l@l.com",
    userID:123,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name:"lokesh",off: 10) =>{
      return 15
    },
    githubToken:"this is token"
  }


  const lokeshnagasai: Admin= {dbId:22,
    email:"l@l.com",
    role:"admin",
    userID:123,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name:"lokesh",off: 10) =>{
      return 15
    },
    githubToken:"this is token"
  }

lokesh.email= "lokes@gmail.com"
// lokesh.dbId=33
// Cannot assign to 'dbId' because it is a read-only property.


