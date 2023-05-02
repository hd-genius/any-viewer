import { ApplicationError, CompatibilityError } from './errors'
import vertexShader from '../shaders/vertex/default.glsl'
import fragmentShader from '../shaders/fragment/default.glsl'

window.addEventListener('error', (error) => {
    if (error instanceof ApplicationError) {
        error.handle()
    } else {
        throw new ApplicationError()
    }
})
