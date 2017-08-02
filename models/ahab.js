function createAhab(){
  return class {
    constructor(){
    }

    static move(direction){

      let leftPosition = parseInt($('#ahab').css('left').slice(0,-2))
      let bottomPosition = parseInt($('#ahab').css('bottom').slice(0,-2))

      switch (direction) {
        case 38: //up
          if(bottomPosition < 380){
            $('#ahab').css('bottom', `${bottomPosition + 20}px`)
          }
        break;

        case 40: //down
          if(bottomPosition >= 20){
            $('#ahab').css('bottom', `${bottomPosition - 20}px`)
          }
        break;

        case 37: //left
          if(leftPosition >= 20){
            $('#ahab').css('left', `${leftPosition - 20}px`)
          }
        break;

        case 39: //right
          if(leftPosition < 380){
            $('#ahab').css('left', `${leftPosition + 20}px`)
          }
        break;
      }
    }
  }
}

let Ahab = createAhab()
