import { registerComponent } from "../utils";
import styles from "./render-viewport.module.css"

export class RenderViewport extends HTMLCanvasElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        
        this.classList.add(styles.modelViewPort)
    }
}

registerComponent(RenderViewport, "render-viewport", { extends: "canvas" })