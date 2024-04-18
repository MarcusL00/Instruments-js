class Harp extends Instruments{
    constructor(name,  material){
        super(name);
        this.material = material;
        this.playSound('sounds/harp.mp3')
    }
}