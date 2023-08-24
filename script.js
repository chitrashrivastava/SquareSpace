// gsap.to(".box",{
//     x:700,
//     y:500,
//     backgroundColor:"red",
//     duration:3,
//     delay:.4,
//     rotate:360,
// })

var tl = gsap.timeline()
tl.from("#nav>img,#nav-part2>h3,#nav-part3>h4,#nav-part3>button ",{
    y:-100,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
tl.from(".page h1",{
    x:-100,
    opacity:0,
    stagger:0.3,
})
tl.from(".page #leftimage,.page #rightimage",{
scale:0,
opacity:0,
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:17,
    repeat:-1,
    duration:0.7,
    yoyo:true
})