import { CompatibilityError } from '../../scripts/errors'
import { registerComponent } from '../utils'
import styles from './render-viewport.module.css'
import vertexShaderSource from '../shaders/vertex/default.glsl'
import fragmentShaderSource from '../shaders/fragment/default.glsl'

export class RenderViewport extends HTMLCanvasElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.classList.add(styles.modelViewPort)

        this.setupWebGL()
    }

    get webGL() {
        return this.getContext('webgl')
    }

    setupWebGL() {
        if (!this.webGL) {
            throw new CompatibilityError('must support WebGL')
        }

        this.webGL.clearColor(0.0, 0.0, 0.0, 1.0)
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT)

        const vertexShader = loadShader(this.webGL.VERTEX_SHADER, vertexShaderSource)
        const fragmentShader = loadShader(
            this.webGL.FRAGMENT_SHADER,
            fragmentShaderSource
        )

        // Create the shader program
        const shaderProgram = this.webGL.createProgram()
        this.webGL.attachShader(shaderProgram, vertexShader)
        this.webGL.attachShader(shaderProgram, fragmentShader)
        this.webGL.linkProgram(shaderProgram)

        // If creating the shader program failed, alert

        if (
            !this.webGL.getProgramParameter(
                shaderProgram,
                this.webGL.LINK_STATUS
            )
        ) {
            alert(
                `Unable to initialize the shader program: ${this.webGL.getProgramInfoLog(
                    shaderProgram
                )}`
            )
            return null
        }

        return shaderProgram
    }

    loadShader(type, source) {
        const shader = this.webGL.createShader(type)

        // Send the source to the shader object

        this.webGL.shaderSource(shader, source)

        // Compile the shader program

        this.webGL.compileShader(shader)

        // See if it compiled successfully

        if (!this.webGL.getShaderParameter(shader, this.webGL.COMPILE_STATUS)) {
            alert(
                `An error occurred compiling the shaders: ${this.webGL.getShaderInfoLog(
                    shader
                )}`
            )
            this.webGL.deleteShader(shader)
            return null
        }

        return shader
    }
}

registerComponent(RenderViewport, 'render-viewport', { extends: 'canvas' })
