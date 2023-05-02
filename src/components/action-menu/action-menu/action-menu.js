import { registerComponent } from '../../utils'
import styles from './action-menu.module.css'

export class ActionMenu extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.classList.add(styles.actionMenu)
    }
}

registerComponent(ActionMenu, 'action-menu')
