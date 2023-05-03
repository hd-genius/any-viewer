import { registerComponent } from '../../utils'
import buttonIcon from './button-icon.svg'
import styles from './action-menu-button.module.css'

// spin x into a + on close
export class ActionButton extends HTMLButtonElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.classList.add(styles.actionButton)

        const icon = document.createElement('img')
        icon.src = buttonIcon
        icon.classList.add(styles.icon)
        this.appendChild(icon)

        this.addEventListener('click', this.onclick)
    }

    get owningMenu() {
        return this.closest('action-menu')
    }

    onclick() {
        if (this.owningMenu.isOpen) {
            this.owningMenu.close()
        } else {
            this.owningMenu.open()
        }
    }
}

registerComponent(ActionButton, 'action-menu-button', { extends: 'button' })
