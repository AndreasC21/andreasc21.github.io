let scrolling = 0;
let scrollFlag = 1;

function scrollEvent(event) {
  console.log(event);
  if (event.deltaY < 0) {
    console.log("deltay");
    if (scrolling !== 0) {
      console.log("scrolling");
      scrolling += 100;
      document.getElementById(
        "wrapper"
      ).style.transform = `translateY(${scrolling}vh)`;
    }
  } else if (event.deltaY > 0) {
    if (scrolling > -300) {
      scrolling -= 100;
      document.getElementById(
        "wrapper"
      ).style.transform = `translateY(${scrolling}vh)`;
    }
  }
}

window.addEventListener("wheel", function (event) {
  if (scrollFlag === 1) {
    setTimeout(() => {
      scrollEvent(event);
      scrollFlag = 1;
    }, 300);
    scrollFlag = 0;
  }
});
