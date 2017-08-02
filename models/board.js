function createBoard(){

  return class {
    constructor(){
    }

    static get caughtMoby(){

      let mobyLeftPosition = parseInt($('#moby').css('left').slice(0,-2))
      let mobyBottomPosition = parseInt($('#moby').css('bottom').slice(0,-2))

      let ahabLeftPosition = parseInt($('#ahab').css('left').slice(0,-2))
      let ahabBottomPosition = parseInt($('#ahab').css('bottom').slice(0,-2))

      if((mobyBottomPosition === ahabBottomPosition) && (ahabLeftPosition >= mobyLeftPosition) && (ahabLeftPosition <= (mobyLeftPosition + 40)) && Moby.isMobyAbove){

        $('#prompt')[0].innerHTML = "You Caught Moby. Press 'spacebar' to play again."
        // console.log("You Caught Moby!")

        return true

        // Moby.initialize

      }
      return false
    }

  }
}

let Board = createBoard()
