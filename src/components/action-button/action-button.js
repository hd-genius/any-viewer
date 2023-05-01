import buttonIcon from './button-icon.svg'
import styles from './action-button.module.css'

// spin x into a + on close
export class ActionButton extends HTMLButtonElement {
    constructor() {
        this.innerText = buttonIcon
        this.classList.add(styles.actionButton)
    }
}
