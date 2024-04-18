class Harp extends Instruments{
    constructor(name, height,material){
        super(name);
        this.height = height;
        this.material = material;
        this.playSound('sounds/harp.mp3')
    }
}