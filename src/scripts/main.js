import { ApplicationError, CompatibilityError } from './errors'
import vertexShader from '../shaders/vertex/default.glsl'
import fragmentShader from '../shaders/fragment/default.glsl'

let webGL

window.addEventListener('load', () => {
    try {
        const modelSelector = document.getElementById('model-selector')
        modelSelector.addEventListener('change', handleFileChange, false)
        setupWebGL()
    } catch (error) {
        if (error instanceof ApplicationError) {
            error.handle()
        } else {
            throw error
        }
    }
})

function setupWebGL() {
    const modelViewPort = document.getElementById('model-view-port')
    webGL = modelViewPort.getContext('webgl')

    if (!webGL) {
        throw new CompatibilityError('must support WebGL')
    }

    webGL.clearColor(0.0, 0.0, 0.0, 1.0)
    webGL.clear(webGL.COLOR_BUFFER_BIT)

    const vertexShader = loadShader(webGL.VERTEX_SHADER, vertexShader)
    const fragmentShader = loadShader(webGL.FRAGMENT_SHADER, fragmentShader)

    // Create the shader program
    const shaderProgram = webGL.createProgram()
    webGL.attachShader(shaderProgram, vertexShader)
    webGL.attachShader(shaderProgram, fragmentShader)
    webGL.linkProgram(shaderProgram)

    // If creating the shader program failed, alert

    if (!webGL.getProgramParameter(shaderProgram, webGL.LINK_STATUS)) {
        alert(
            `Unable to initialize the shader program: ${webGL.getProgramInfoLog(
                shaderProgram
            )}`
        )
        return null
    }

    return shaderProgram
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(type, source) {
    const shader = webGL.createShader(type)

    // Send the source to the shader object

    webGL.shaderSource(shader, source)

    // Compile the shader program

    webGL.compileShader(shader)

    // See if it compiled successfully

    if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
        alert(
            `An error occurred compiling the shaders: ${webGL.getShaderInfoLog(
                shader
            )}`
        )
        webGL.deleteShader(shader)
        return null
    }

    return shader
}

function handleFileChange() {
    const fileList = this.files
    const modelFile = fileList[0]
    console.log(`${modelFile.name} has been selected`)
}
