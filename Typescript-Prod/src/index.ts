// class User {
//   public email: string;
//   private name: string;
//   // #name:string Private variables also declared like this
//   readonly city: string ="CITY" // Default Values and readonly only to read not to write
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }


class User {
  readonly city: string ="CITY" // Default Values and readonly only to read not to write

  private _courseCount:number =1
  
  constructor(
      public email: string,
      private name: string) {
  }

  get getGoogleEmail() : string
  {
    return `Google${this.email}`
  }

  get CourseCount () :number{
    return this._courseCount
  }

  //Setters cannot be a void functions

  set couserCount (courseNum:number){
    if(courseNum<=1) 
    throw new Error("Course count should be more than 1")
    this._courseCount=courseNum
  }


}

const Lokesh = new User("Lokesh@.com", "Lokesh");

//Lokesh.name 
//Property 'name' is private and only accessible within class 'User'
