window.addEventListener("load", () => {
    function handleFileChange() {
        const fileList = this.files;
        const modelFile = fileList[0];
        console.log(`${modelFile.name} has been selected`);
    }
    const inputElement = document.getElementById("model-selector");
    inputElement.addEventListener("change", handleFileChange, false);
    console.log("ready");
})