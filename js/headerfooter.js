var googleAnalyticsFirst =
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8KX7PK');`;
var gFirst = document.createElement("script");
gFirst.innerHTML = googleAnalyticsFirst;

var googleAnalyticsInner = "https://www.googletagmanager.com/ns.html?id=GTM-T8KX7PK";
var gInnerFrame = document.createElement("iframe");
gInnerFrame.src = googleAnalyticsInner;
gInnerFrame.height = "0";
gInnerFrame.width = "0";
gInnerFrame.style = "display:none;visibility:hidden";
var gInner = document.createElement("noscript");
gInner.appendChild(gInnerFrame);

var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(gFirst, s);
s.parentNode.insertBefore(gInner, s);

var headContent = document.getElementsByTagName("head")[0];
headContent.innerHTML += `
  <meta name="description" content="Jeffry Tandiono is a software engineer that create this site as a portfolio." />
  <meta name="keywords" content="jeffry tandiono, software engineer" />
  <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-128.png" sizes="128x128" />
  <meta name="application-name" content="&nbsp;"/>
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Lexend+Deca|Montserrat:thin,regular,bold,extra-bold" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,500;0,600;0,700;0,800;1,300;1,600;1,800&Roboto:wght@300;400;700&display=swap" rel="stylesheet">
`;

var nav = document.getElementById("nav");
nav.classList.add("animate__animated");
nav.classList.add("animate__slideInDown");
nav.classList.add("animate__delay-3s");
nav.innerHTML += `
  <div id="logo">
    <a class="name menu-buttons" href="/index.html" title="Jeffry Tandiono Logo"> Jeffry Tandiono</a>
    <div id="name-subtitle">Software Engineer currently at Gojek,<br/> based in Indonesia</div>
  </div>
  <nav class="navigation">
    <ul id="menu">
    <li>
      <li><a href="#" class="menu-buttons" id="food" title="History">History</a></li>
      <li><a href="#" class="menu-buttons" id="about" title="About">About</a></li>
      <li>
        <a href="https://www.linkedin.com/in/jetee" target="_blank" class="menu-buttons" id="linkedin" title="linkedin">
          <img src="images/linkedin.svg" alt="LinkedIn">
        </a>
      </li>
      <li>
        <a href="https://instagram.com/chensienyong" target="_blank" class="menu-buttons no-margin-right" id="instagram" title="instagram">
          <img src="images/insta.svg" alt="Instagram">
        </a>
      </li>
    </div>
  </nav>
  <a href="javascript:void(0);" class="icon" onclick="responsiveMenu()" title="hamburger menu for mobile">
    <img src="images/hamburger.svg" style="background-color:transparent"/>
  </a>
`;

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}

//eyes
function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }
  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }
  if (document.body) {
    return document.body.clientWidth;
  }
}

let lastKnownScrollPosition = 0;
let scrolled = false;
let ticking = false;
let cutoff = 50;

function headerScroll() {  
  if (scrolled) {
    document.querySelector("#nav").classList.add("scroll");
  } else {
    document.querySelector("#nav").classList.remove("scroll");
  }
}  

document.addEventListener('scroll', function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if(lastKnownScrollPosition < cutoff && window.scrollY >= cutoff) {
        scrolled = true;
        headerScroll();
      } else if(lastKnownScrollPosition >= cutoff && window.scrollY < cutoff) {
        scrolled = false;
        headerScroll();
      }

      lastKnownScrollPosition = window.scrollY;
      ticking = false;
    });

    ticking = true;
  }
});

// FOOTER
var footer = document.getElementById("footer");
footer.innerHTML += `
  <div class="content">
    <div>
      <p>Curious?</p>
      <a class="h1-large" href="mailto:jeffry.tandiono@gmail.com"></a>
    </div>
    <div>
      <p>Created this site for my digital playground to experiment with portfolio and creative coding. I use it both as a tool to learn, and to express.<br/></p>
    </div>
    <div class="links">
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jetee">LinkedIn</a>
      <a target="_blank" rel="noopener noreferrer" href="https://Chensienyong.github.io/src/data/resume.pdf">Resume</a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/chensienyong">Github</a>
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/chensienyong">Instagram</a>
    </div>
    <span class="small">
      What are you trying to find here.
    </span>
  </div>
  <div class="footer-eyeball" data-aos="fade-left"></div>
`;

// add finger
if(document.querySelector("#finger") !== null){
  document.querySelector("#finger").onclick = function(){
    document.onmousemove = function(e){
      if(getWidth() >= 1080){
        handleMouseMoveFace(e);
      }
      handleMouseMoveFinger(e);
    }
    document.querySelector("#finger").classList.remove("transition");
    document.querySelector("#finger").classList.add("clicked");
  };
}
