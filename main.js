gsap.registerPlugin(ScrollTrigger);

// Function for animating the "Bharat" text
function animateBharat() {
  gsap.fromTo(
    "#flag-theme",
    {
      y: "53vh", // Initial vertical center (50% of the viewport height)
      x: "48vw", // Initial horizontal center (50% of the viewport width)
      fontSize: "10vw", // Large size when centered
    },
    {
      y: "0vh", // Moves it to its position in the nav
      x: "100px",
      fontSize: "30px", // Scales down to fit in the navbar
      scrollTrigger: {
        trigger: "#hero", // Start animation when the hero section comes into view
        start: "top top", // When the top of #hero hits the top of the viewport
        end: "center top", // Ends when the middle of #hero hits the top
        scrub: 2, // Smooth animation based on scroll
//        markers: true, // Debug markers (remove for production)
      },
      ease: "power2.out", // Smooth easing
    }
  );
}

// Call the animation function
animateBharat();



function gsapfun() {
  // Animate links with staggered effects
  const links = [
    "#sports-link",
    "#economy-link",
    "#litracy-link",
    "#politics-link",
    "#education-link",
    "#tourist-link",
  ];
  

  links.forEach((link, index) => {
    gsap.from(link, {
      scrollTrigger: {
        trigger: link,
  //      markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      },
      x: index % 2 === 0 ? "-100%" : "100%", // Alternating direction
      opacity: 0,
      rotation: 10, // Adds a slight tilt
      duration: 1,
      ease: "power2.out", // Smooth easing
    });
  });

  // Horizontal scrolling effect
  gsap.from("#horizontal-scroll", {
    scrollTrigger: {
      trigger: "#horizontal-scroll",
 //     markers: true,
      start: "top 100%",
      end: "bottom 0%",
      scrub: 5,
    },
    x: "-30%", // Make it less abrupt
    ease: "power1.out",
    duration: 2,
  });

}

gsapfun();


function textAnim() {
  gsap.from("#headingText", {
   // opacity: 0,
    scale: 100,
   // rotation: 90, // Adds a slight tilt
   // y: 200, 
    ease: "power1.out",
    duration: 2,
    delay: 0.5,
  });
}
textAnim();

function historyInd() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 2,
      //  markers: true,
      },
    })
    .to("#hole", {
      scale: 2,
      z: 180,
      ease: 'power1.inOut,'
    })
  
}
historyInd();

function animateWrapperSections() {
  const sections = document.querySelectorAll("#wrapper #sectionMain");

  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // When the section is 80% in the viewport
        end: "top 20%", // Ends animation when 20% of the viewport is reached
        scrub: true,
     //   markers: true, // Uncomment for debugging
      },
      y: 100, // Start by moving the section down
      opacity: 0, // Start with invisible sections
      scale: 0.9, // Slightly scale down the section
      duration: 1.5, // Animation duration
      ease: "power2.out", // Smooth easing
    });
  });
}

// Call the function to animate the wrapper sections
animateWrapperSections();

function animateHistWords() {
  const elements = ["#histabout1", "#histabout2", "#histabout3","#histabout4", "#histabout5", "#histabout6"];

  elements.forEach((element) => {
    const el = document.querySelector(element);

    if (el) {
      // Split the text content into words and wrap each word in a span
      const words = el.textContent.split(" ").map((word) => {
        return `<span style="display: inline-block; opacity: 0;">${word}</span>`;
      });

      // Replace the original text with the wrapped words
      el.innerHTML = words.join(" ");

      // Animate each word separately
      gsap.fromTo(
        el.querySelectorAll("span"),
        { y: 50, opacity: 0,}, // Start with words lower and invisible
        {
          y: 0, // Bring words to their original position
          opacity: 1, // Fade in
          stagger: 0.1, // Add a delay between each word
          duration: 0.5, // Duration for each word animation
          scrollTrigger: {
            trigger: el,
            start: "top -50%", // Start animation when the element is 80% in the viewport
            end: "top -100%", // End animation when the element reaches halfway
            scrub: 2, // Smooth scrolling effect
         //   markers: true, // Uncomment for debugging
          },
        }
      );
    }
  });
}

// Call the animation function
animateHistWords();