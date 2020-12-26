var guessed= [];
  var collections = [];
  var clickcount = 0;
  var level =0;
  var btnguess=true;
  var start = false;
  var i=0;
var count = 0;

$("body").keypress(function(value){
  if((value.key === "a" || value.key === "A")  && start==false)
  {
      start=true;
        level++;
      sequence();


      $("#heading").text("Level " + level);


    }


  })

  $("#heading").click(function(){
if(start==false){
  start=true;
    level++;
  sequence();


  $("#heading").text("Level " + level);


}



  })


  //functions


$(".btn").click(function guess(x)
  {     playSound(x.target.classList[1]);
      $("."+x.target.classList[1]).addClass("pressed");
      setTimeout(function () {
        $("."+x.target.classList[1]).removeClass("pressed");
      }, 100);

      guessed.push(parseInt(x.target.classList[1]));
      clickcount++;
checker();


}
)
  //function to detect in which button the was clicked and add that button number in a guessed array


function sequence(){
//if collections is empty
  if (collections.length == 0){
    var a = Math.random() * 4 +1;
  a=Math.floor(a)
  collections.push(a);
  //function that will add .fade selected button(s) which will be placed in a loop until all collections
  blink(level-1);
  }
  //in case the collections is not empty but have something then it will first itererate through pervious collections and then
  //it will generate new number in which will be added in the last of the colletions
  else{

  a = Math.random() * 4 +1;
  a=Math.floor(a)
  collections.push(a);
  blink(level-1);

      }

    clickcount=0;
    }

    //
    // function myLoop(i) {         //  create a loop function
    //   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    //     console.log("i in my loop " +i);
    //
    //     blink(i)   //  your code here
    //     i++;
    //
    //                      //  increment the counter
    //     if (i < collections.length-1 ) {           //  if the counter < 10, call the loop function
    //       myLoop(i);             //  ..  again which will trigger another
    //     }                       //  ..  setTimeout()
    //   }, 3000)
    // }


//FUCNTION TO FADE IN FACEOUT
function blink(i){
  setTimeout(function () {
    $("."+collections[i]).fadeIn(100).fadeOut(100).fadeIn(100);

  }, 600);
}

function checker(){
  if (clickcount==level && (collections[clickcount-1]==guessed[clickcount-1])){
    //this is the case where we have to call sequence after returning some true or FALSE valuef
      level++;
      setTimeout(function () {
          $("#heading").text("Level " + level);
      }, 150);

        guessed =[]
  sequence();

  }
  else if(collections[clickcount-1]==guessed[clickcount-1]){

  }

  //if in any case the selcted is not equals as in collections if will set won as false and say start over
  else{

    $("body").addClass("game-over");
      $("#heading").text("Press A key to start again");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    startover();
  }
}



function startover(){
  level=0;
  guessed=[]
  start = false;
  collections=[]
  clickcount=0;


}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
