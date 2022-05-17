const panels=Array.from(document.getElementsByClassName("panel"));


panels.forEach(panel => {
    panel.addEventListener('click',(e)=>{
    //    removeActiveClass();
    //  
    console.log(e.target);
    })
});

//1. callback (e)
//uklanja sve aktivne klase
//doda aktivnu klasu na kliknuti el
