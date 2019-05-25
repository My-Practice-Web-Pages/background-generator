// Query Selectors

let DOMselectors = {
    color1: document.getElementById("color1"),
    color2: document.getElementById("color2"),
    body: document.querySelector("body"),
    h3: document.querySelector("h3")
};

// Event Listener call back function for input value

let inputEventListener = () =>{
    DOMselectors.body.style.background = `linear-gradient(to right, ${DOMselectors.color1.value}, ${color2.value})`;
    DOMselectors.h3.textContent = DOMselectors.body.style.background;
};

// Event Listeners
DOMselectors.color1.addEventListener("input", inputEventListener);
DOMselectors.color2.addEventListener("input", inputEventListener);