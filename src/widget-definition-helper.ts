const pattern: string = "integration/";
const property: string = "Widget";

export function getWidgetDefinition (window: any) {
    const regexp = new RegExp(pattern, "i");
    const widgetNames = Object.keys(window)
        .filter(name => name.match(regexp) && window[name].hasOwnProperty(property));

    if (widgetNames.length) {
        const name: string = widgetNames[0];
        return {
            name: name.substring(name.lastIndexOf('/') + 1),
            component: window[name].Widget
        };
    }

    return null;
}    

