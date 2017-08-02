// const store = []

function createMoby(){

  let isAbove = true

  // console.log(`Initial isAbove: ${isAbove}`)
  // console.log(`Initial stayAbove: ${this.stayAbove}`)
  // console.log(`Initial stayBelow: ${this.stayBelow}`)

  return class {
    constructor(){
    this.stayAbove = Math.round(Math.random() * 3) + 4
    this.stayBelow = 0
    // store.push(this)
    }

    static get move(){

      let direction = Math.round(Math.random() * 3) + 37;
      let leftPosition = parseInt($('#moby').css('left').slice(0,-2))
      let bottomPosition = parseInt($('#moby').css('bottom').slice(0,-2))
      // console.log(direction)
      switch (direction) {
        case 38: //up
          if(bottomPosition < 380){
            $('#moby').css('bottom', `${bottomPosition + 20}px`)
          }
          else{
            $('#moby').css('bottom', `${0}px`)
          }
        break;

        case 40: //down
          if(bottomPosition >= 20){
            $('#moby').css('bottom', `${bottomPosition - 20}px`)
          }
          else{
            $('#moby').css('bottom', `${380}px`)
          }
        break;

        case 37: //left
          if(leftPosition >= 20){
            $('#moby').css('left', `${leftPosition - 20}px`)
          }
          else{
            $('#moby').css('left', `${340}px`)
          }
        break;

        case 39: //right
          if(leftPosition < 340){
            $('#moby').css('left', `${leftPosition + 20}px`)
          }
          else{
            $('#moby').css('left', `${0}px`)
          }
        break;
      }
      Moby.diveOrBreech
    }

    static get diveOrBreech(){

      // console.log(`isAbove: ${isAbove}`)
      // console.log(`stayAbove: ${this.stayAbove}`)
      // console.log(`stayBelow: ${this.stayBelow}`)

      if(isAbove){

        if(this.stayAbove > 0){
          this.stayAbove -= 1
        }
        else{
          isAbove = false
          this.stayBelow = Math.round(Math.random() * 3) + 2;
          $('#moby').css('background-color', 'teal')
          $('#prompt')[0].innerHTML = 'Moby dove underwater'
        }
      }
      else{

        if(this.stayBelow > 0){
          this.stayBelow -= 1
        }
        else{
          isAbove = true
          this.stayAbove = Math.round(Math.random() * 2) + 4;
          $('#moby').css('background-color', 'white')
          $('#prompt')[0].innerHTML = 'Moby emerged from underwater'

          Moby.teleport
        }
      }
      // $('#moby').css('background-color', 'cadetblue')
    }

    static get isMobyAbove(){
      return isAbove
    }

    static get teleport(){

      let newLeftPosition = Math.round(Math.random() * 17) * 20;
      let newBottomPosition = Math.round(Math.random() * 19) * 20;

      $('#moby').css('left', `${newLeftPosition}px`)
      $('#moby').css('bottom', `${newBottomPosition}px`)

    }

    static get initialize(){
      
      this.stayAbove = Math.round(Math.random() * 3) + 4
      this.stayBelow = 0

      $('#ahab').attr('style', "bottom: 100px; left: 200px;")
      $('#moby').attr('style', "bottom: 200px; left: 200px;")
      isAbove = true
      $('#moby').css('background-color', 'white')
      $('#prompt')[0].innerHTML = 'Use Arrow Keys to Move'
    }
  }
}

let Moby = createMoby()
Moby.initialize
