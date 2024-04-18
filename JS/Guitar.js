class Guitar extends Stringed{
    constructor(name, numberOfStrings, material){
        super(name);
        this.numberOfStrings = numberOfStrings;
        this.material = material;
        this.playSound('sounds/guitar.mp3')
    }
}