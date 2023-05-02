const { registerComponent } = require("../utils");
import styles from "./action-menu.module.css"

class ActionMenu extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback() {
        console.log('here')
    
        this.classList.add(styles.actionMenu)
    }
}

registerComponent(ActionMenu, "action-menu")
