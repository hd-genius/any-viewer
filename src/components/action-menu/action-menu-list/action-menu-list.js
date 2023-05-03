import { registerComponent } from '../../utils'
import styles from "./action-menu-list.module.css"

export class ActionMenuList extends HTMLUListElement {
    connectedCallback() {
        this.classList.add(styles.actionMenuList)
    }
}

registerComponent(ActionMenuList, 'action-menu-list', { extends: 'ul' })
