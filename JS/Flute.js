class Flute extends Instruments{
    constructor(name,  material){
        super(name);
        this.material = material;
        this.playSound('sounds/flute.mp3')
    }
}