gsap.from(".div1 .box",{
    scale:0,
    rotate: 360,
    duration:1,
    opacity: 0
})

gsap.from(".div2 .box",{
    scale:0,
    rotate: 360,
    duration:1,
    opacity: 0,
    scrollTrigger:{
        trigger:".div2 .box",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:2,
    }
})

gsap.to(".text h1",{
    transform: "translateX(-65%)",
    scrollTrigger:{
        trigger:".text",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:2
    }
})