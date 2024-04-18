class Instruments {
    constructor(name){
        this.name = name
    }
    playSound(sound){
        new Audio(sound).play()
    }
}