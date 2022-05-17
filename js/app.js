const panels = Array.from(document.getElementsByClassName("panel"));
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClass();
    panel.classList.add("active");
    panel.querySelector("h3").style="visibility: visible";
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
        //to radi
   panel.querySelector("h3").style="visibility: hidden";
  });
}

//1. callback (e)
//uklanja sve aktivne klase
//doda aktivnu klasu na kliknuti el
