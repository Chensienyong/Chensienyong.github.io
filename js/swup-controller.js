const swup = new Swup({
  plugins: [
    new SwupScrollPlugin({
      doScrollingRightAway: false,
      animateScroll: false,
      scrollFriction: 0.3,
      scrollAcceleration: 0.04,
    }),
  ]
});

function init(){
  // start
  AOS.init({
    duration: 800
  });

  //eyebrow animations!
  var links = document.getElementsByTagName("a");

  document.querySelector('#nav').classList.remove("responsive");

  for(var i = 0; i < links.length; i++){
    links[i].onmouseover = raiseEyebrows;
    links[i].onmouseout = lowerEyebrows;
  }
  if (document.querySelector('#start-magnets') !== null) {
    document.querySelector("#start-magnets").addEventListener("click", function(){
      document.querySelector("#home-index").classList.add("disable-select");
      document.querySelector("#start-magnets").style.animation = "none";
      document.querySelector("#magnet-show-text").style.opacity = 1;
      startMagnets();
      document.getElementsByTagName("canvas")[0].style.display = "block";
      document.getElementsByTagName("canvas")[0].style.opacity = 1;
    });
  }else{
    //turn off and remove magnets
    if(document.getElementsByTagName("canvas")[0] !== null && document.getElementsByTagName("canvas")[0] !== undefined){
      document.getElementsByTagName("canvas")[0].style.opacity = 0;
      document.getElementsByTagName("canvas")[0].style.display = "none";
      endMagnets();
    }
  }

  if(document.querySelector("#more") !== null){
    document.querySelector("#read-more").addEventListener("click", function(){
      document.querySelector("#more").style.display = "block";
    });
  }
  if(document.querySelector(".tilt") !== null){
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 5,
      scale:1.05
    });
  }
}

init();

initialAnimation();

function initialAnimation(){
  // add first face
  window.setTimeout(function(){
      let size = 250;
      document.querySelector("#swup-background").appendChild(addFace({
        x:window.innerWidth/2 - size/2 - 5,
        y:window.innerHeight/2 - window.innerHeight/16,
        size:size,
        eyebrow:true,
        mouth:true,
        stare:false,
        class:"white"
      }));
    }
    ,100);

  var eyeballTimer;

  window.setTimeout(function(){
    eyeballTimer = window.setInterval(() => {movePupilsIntro("left")},8);
  },450);

  window.setTimeout(function(){
    clearInterval(eyeballTimer);
    eyeballTimer = window.setInterval(() => {movePupilsIntro("right")},18);
  },700);

  window.setTimeout(function(){
    clearInterval(eyeballTimer);
    eyeballTimer = window.setInterval(() => {movePupilsIntro("down")},20);
  },1200);

  window.setTimeout(raiseEyebrows,1650);

  window.setTimeout(function(){
    clearInterval(eyeballTimer);
  },1900);

  window.setTimeout(() => {
    document.querySelector("#swup-background").classList.remove("initial");
    document.querySelector("#swup-background").classList.add("second");
    lowerEyebrows();
    window.setTimeout(() => {
      document.querySelector("#swup-background").classList.add("third");
      document.querySelector("#swup-background").classList.remove("second");
      window.setTimeout(() => {
        document.querySelector("#swup-background").classList.remove("third");
      },100);
    },750);

    // add nav face to desktop
    if(getWidth() >= 1080){
      document.querySelector("#nav").insertBefore(addFace({
          x:window.innerWidth/2 - 50,
          y:26,
          size:54,
          eyebrow:true,
          mouth:true,
          stare:false
        }),
        document.querySelector("#nav").children[1]);

      document.onmousemove = handleMouseMoveFace;
    }
  },2200);
}

// this event runs for every page view after initial load
swup.on('contentReplaced', init);
