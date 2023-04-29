import { ApplicationError } from './application-error'

export class CompatibilityError extends ApplicationError {
    constructor(unsatisfiedRequirement) {
        super()
        this.unsatisfiedRequirement = unsatisfiedRequirement
    }

    handle() {
        alert(
            'Your device is not compatible with this app. Your device: ' +
                self.unsatisfiedRequirement
        )
    }
}
