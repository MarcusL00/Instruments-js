class Flute extends Instruments{
    constructor(name,holes, material){
        super(name);
        this.holes = holes;
        this.material = material;
        this.playSound('sounds/flute.mp3')
    }
}