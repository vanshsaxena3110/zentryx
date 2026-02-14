


function cursoreffect(){
    var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function(e){
   gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY
   })
});
   document.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
        scale:1,
        opacity:1
    })
   })
   document.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
   })
}
cursoreffect();

function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive();
function page2animation() {

  gsap.from("#page2 .elem h1", {
    x: 320,
    stagger: 0.4,
    duration: 4,
    delay:3,
    scrollTrigger: {   
      trigger: "#page2",
      scroller: "#main",   // IMPORTANT
      start: "top 70%",
      end: "top 60%",
      scrub: 4
    }
  })

}

page2animation();

function page3animation() {

  gsap.from("#page3top  h4,h2 ", {
    x : -320,
    stagger: 0.4,
    duration: 4,
    delay:3,
    scrollTrigger: {   
      trigger: "#page3",
      scroller: "#main",   // IMPORTANT
      start: "top 70%",
      end: "top 60%",
      scrub: 2
    }
  })

}
page3animation();

function page5animation() {

  gsap.from("#pg5top span", {
    x: 320,
    stagger: 0.4,
    duration: 3,
    delay:2,
    scrollTrigger: {   
      trigger: "#page5",
      scroller: "#main",   // IMPORTANT
      start: "top 70%",
      end: "top 60%",
      scrub: 4
    }
  })

}

page5animation();

function swiper(){

  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    });
  }
  swiper();

   var t =gsap.timeline()
   t.from("#loader h3",{
    x:100,
    opacity:0,
    duration:2,
    stagger:0.2
   })
   t.to("#loader h3",{
    opacity:0,
    x:-20,
    duration:1,
    stagger:0.1
   })
   t.to("#loader",{
    opacity:0,
   })
   t.from("#page1 h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    delay:-0.5,

    
  })
  t.to("#loader",{
    display:"none"
  })
  