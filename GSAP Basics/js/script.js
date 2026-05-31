gsap.to("#box",{
    x:1000,
    y:300,
    duration:1,
    delay:1,
    rotate:360,
    backgroundColor:"yellow",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true,
})


gsap.from(".box2",{
    x:1000,
    y:300,
    delay:1,
    duration:1,
    borderRadius:"50%",
    repeat:1
})
gsap.from(".h1",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:1,
    repeat:-1
})



// GSAP TimeLine Start

// var timeLine = gsap.timeline()

// timeLine.to(".timeline",{
//     x:1000,
//     duration:1,
// })

// timeLine.to(".timeline2",{
//     x:1000,
//     duration:1,
// })

// timeLine.to(".timeline3",{
//     x:1000,
//     duration:1,
// })

// GSAP TimeLine End


// Navbar TimeLine Start
var Navbar_timeline = gsap.timeline();

Navbar_timeline.from(".icon",{
    y:-50,
    duration: 0.8,
    delay:0.5
})
Navbar_timeline.from(".link p",{
    y:-50,
    duration: 1,
    stagger:0.3,
})
Navbar_timeline.from(".check h1",{
    y:50,
    opacity:0,
})


// Navbar TimeLine End