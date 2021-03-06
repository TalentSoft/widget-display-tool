/*
This file contains the callbacks that you can modify to test the display of your widget

The method requestExternalResource allows you to mock the data retrieved by your API : by default, requestExternalResource returns an empty object

The method openPartnerLink allows you to open your application in a new tabulation - this is only relevant if you have a link in your
widget for redirecting to your application : by default, openPartnerLink does nothing

The method getConfiguration returns mocked configuration parameters for your widget in the format key-value.
*/
import {HostApiOptions} from './host-api-options'

export function requestExternalResource(options: HostApiOptions) {
    const data = [
        {
            id: 'ToDo',
            y: 12,
            z: 2458
        },
        {
            id: 'InProgress',
            y: 5,
            z: 3874
        },
        {
            id: 'ToValidate',
            y: 7,
            z: 2375
        },
        {
            id: 'Validated',
            y: 18,
            z: 129
        },
    ];

    return new Promise<Response>((resolve, reject) => {
        const response = new Response(JSON.stringify(data));
        resolve(response);
    });
}

// By default, this is a no operation
export function openPartnerLink(url: string) {
    return Promise.resolve(() => { });
}

export function getConfiguration() : { [name: string]: string } {
    return { };
}
