abstract class TakePhoto{
  constructor(
    public cameraMode:string,
    public filterMode:string
  ){}

  abstract getSepia() :void;
  getReelTime():number{
    
    return 8;
  }

}


class Instagram extends TakePhoto{
  constructor(
    public cameraMode:string,
    public filterMode:string,
    public burst:number
  ){
    super(cameraMode,filterMode)
  }

  getSepia(): void {
      console.log("This is a function")
  }
}

const lokesh=new Instagram("test","Test",4)
lokesh.getReelTime()
