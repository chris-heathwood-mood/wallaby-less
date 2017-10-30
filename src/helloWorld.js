
import "./helloWorld.less";

export function helloWorld() {
    var div = document.createElement("div");

    div.classList.add('hello-world');
    div.innerHTML = "Hello world";

    document.body.appendChild(div);
}
