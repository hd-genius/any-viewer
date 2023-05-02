import { registerComponent } from '../utils'
import buttonIcon from './button-icon.svg'
import styles from './action-button.module.css'

// spin x into a + on close
export class ActionButton extends HTMLButtonElement {
    constructor() {
        super()

        this.classList.add(styles.actionButton)

        const icon = document.createElement("img")
        icon.src = buttonIcon;
        icon.classList.add(styles.icon)
        this.appendChild(icon)

        this.close()

        this.addEventListener("click", this.onclick)
    }

    get isOpen() {
        return this.classList.contains(styles.open)
    }

    onclick() {
        if (this.isOpen) {
            this.close()
        } else {
            this.open()
        }
    }

    open() {
        this.classList.add(styles.open)
        this.classList.remove(styles.close)
    }

    close() {
        this.classList.add(styles.close)
        this.classList.remove(styles.open)
    }
}

registerComponent(ActionButton, 'action-menu-button', {extends: "button"})
