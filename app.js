$( document ).ready(function(){
  $(document).keydown(function(event){

    if(!Board.caughtMoby){

      const allowableMoves = [37,38,39,40]

      if(allowableMoves.includes(event.which)){
        Moby.move
      }

      Ahab.move(event.which)
    }

    else if(event.which === 32) {
      Moby.initialize
    }
    // console.log(`Moby's Position: ${$('#moby').attr('style')}`)
    // console.log(`Ahab's Position: ${$('#ahab').attr('style')}`)
  })
})
