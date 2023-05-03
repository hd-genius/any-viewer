import { registerComponent } from '../../utils'
import styles from './action-menu.module.css'

export class ActionMenu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.classList.add(styles.actionMenu)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "open") {
            if (newValue) {
                this.open()
            } else {
                this.close()
            }
        }
    }

    get isOpen() {
        return this.getAttribute("open")
    }

    open() {
        this.setAttribute("open", true)
    }

    close() {
        this.removeAttribute("open")
    }
}

registerComponent(ActionMenu, 'action-menu')
