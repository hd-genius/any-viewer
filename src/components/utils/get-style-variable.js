export const getStyleVariable = (variableName) =>
    getComputedStyle(document).getPropertyValue(variableName)
