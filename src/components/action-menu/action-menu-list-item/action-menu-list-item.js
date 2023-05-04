import { registerComponent } from "../../utils"
import styles from "./action-menu-list-item.module.css"

export class ActionMenuListItem extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback() {
        const content = this.innerHTML
        console.log(content)
        const button = document.createElement("button")
        this.appendChild(button)
        
        this.classList.add(styles.actionMenuItem)
    }
}

registerComponent(ActionMenuListItem, "action-menu-list-item")
