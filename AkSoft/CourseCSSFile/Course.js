// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link, .mobile-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        // Close menu
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});


// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Close menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Add smooth hover animations for desktop links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Button click animations
document.querySelectorAll('.btn, .mobile-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        console.log('Button clicked:', this.textContent);
    });
});

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
  var x = document.getElementById("list-switch");
  if (i % 2 == 0) {
    document.getElementById("list-switch").style =
      "display: grid; height: 50vh; margin-left: 5%;";
    document.getElementById("search-switch").style =
      "display: block; margin-left: 5%;";
  } else {
    document.getElementById("list-switch").style = "display: none;";
    document.getElementById("search-switch").style = "display: none;";
  }
  i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}



function google() {
  window.location.assign(
    "https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession",
    "_blank"
  );
}


