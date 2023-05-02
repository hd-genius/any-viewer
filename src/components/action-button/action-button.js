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
    }
}

registerComponent(ActionButton, 'action-menu-button', {extends: "button"})
