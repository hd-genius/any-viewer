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
        this.dispatchEvent(new Event("open"))
    }

    close() {
        this.removeAttribute("open")
        this.dispatchEvent(new Event("close"))
    }
}

registerComponent(ActionMenu, 'action-menu')
