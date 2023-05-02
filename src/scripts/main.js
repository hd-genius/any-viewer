import { ApplicationError } from './errors'

window.addEventListener('error', (error) => {
    if (error instanceof ApplicationError) {
        error.handle()
    } else {
        throw new ApplicationError()
    }
})
