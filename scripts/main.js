function randomizePosition(element) {
    const spaceWidth = window.innerWidth - element.offsetWidth;
    const spaceHeight = window.innerHeight - element.offsetHeight;
    
    element.style.position = "absolute";
    element.style.top = Math.floor(Math.random() * spaceHeight) + 'px';
    element.style.left = Math.floor(Math.random() * spaceWidth) + 'px';
}

function randomizeAngle(element) {
    const posOrNeg = Math.random() < 0.5 ? -1 : 1;
    const num = Math.floor(Math.random() * 46);
    const angle = num * posOrNeg;
    element.style.transform = `rotate(${angle}deg)`
}

const container = document.getElementById("container");
const files = [
    "heathers.jpg",
    "are-you-now.jpg",
    "mamma-mia.jpg",
    "maybe-happy-ending.jpg",
    "merrily-we-roll-along.jpg",
    
];
files.forEach((file) => {
    let image = document.createElement("img");
    image.src = "../images/" + file;
    image.style.height = "300px";
    image.style.width = "198px";
    image.classList.add("program");
    container.appendChild(image);
    randomizePosition(image);
    randomizeAngle(image);
})

gsap.registerPlugin(Draggable);
Draggable.create('img', {
    inertia: true
});
