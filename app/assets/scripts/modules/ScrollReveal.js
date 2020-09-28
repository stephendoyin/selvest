class ScrollRevealScript {
  constructor() {
    ScrollReveal().reveal(".steps__item", {
      scale: 1,
      duration: 1500,
      interval: 30,
      mobile: false,
      origin: "bottom",
      distance: "50px",
    });
    // this.startScrollReveal();
  }
}

export default ScrollRevealScript;
