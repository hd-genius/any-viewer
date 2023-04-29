import { ApplicationError, CompatibilityError } from "./errors";

window.addEventListener("load", () => {
    try {
        const modelSelector = document.getElementById("model-selector");
        modelSelector.addEventListener("change", handleFileChange, false);
        setupWebGL();
    } catch (error) {
        if (error instanceof ApplicationError) {
            error.handle();
        } else {
            throw error;
        }
    } finally {
        //
    }
});

function setupWebGL() {
    const modelViewPort = document.getElementById("model-view-port");
    const webGL = modelViewPort.getContext("webgl");

    if (!webGL) {
        throw new CompatibilityError("must support WebGL");
    }

    webGL.clearColor(0.0, 0.0, 0.0, 1.0);
    webGL.clear(webGL.COLOR_BUFFER_BIT);
}

function handleFileChange() {
    const fileList = this.files;
    const modelFile = fileList[0];
    console.log(`${modelFile.name} has been selected`);
}
