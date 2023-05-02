export function registerComponent(classToRegister, elementName, options) {
    window.customElements.define(elementName, classToRegister, options)
}
