import { helloWorld } from "../src";

describe("Hello world", () => {

    it("puts out a hello world in the dom with the right css", () => {
        helloWorld();

        const helloWorldDiv = document.querySelector(".hello-world");

        expect(helloWorldDiv.clientWidth).toBe(90);
        expect(helloWorldDiv.clientHeight).toBe(10);
        expect(getComputedStyle(helloWorldDiv)["background-color"]).toBe("rgb(0, 255, 0)");
        expect(getComputedStyle(helloWorldDiv)["display"]).toBe("block");
    });
});
