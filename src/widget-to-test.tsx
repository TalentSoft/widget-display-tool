import * as React from 'react';
import 'es6-shim';
import { Widget, AppService, WidgetMode, WidgetSize } from '@talentsoft-opensource/integration-widget-component';
import {getWidgetDefinition} from './widget-definition-helper';
import {WidgetDefinition} from './widget-definition';
import {openPartnerLink, getConfiguration, requestExternalResource} from './widget-to-test-helper';

export interface WidgetToTestProps {
    mode: WidgetMode;
    language: string;
    size: WidgetSize;
}

export interface WidgetToTestState {
    widgetDefinition: WidgetDefinition | null
}

export class WidgetToTest extends React.Component<WidgetToTestProps, WidgetToTestState> {
    constructor(props: WidgetToTestProps) {
        super(props);

        this.state = {
            widgetDefinition: getWidgetDefinition(window)
        }
    }

    getContext = (appid: string) => {
        const {mode, language, size} = this.props;
        const {widgetDefinition} = this.state;

        const title = widgetDefinition ? widgetDefinition.name : 'no name';

        return Promise.resolve(
            {size, mode, title, language}
        );
    }

    render() {
        const {widgetDefinition} = this.state;

        if (!widgetDefinition) {
            return null;
        }
        
        const appname = widgetDefinition.name;
        const widget = widgetDefinition.component;
        const appid = "test-demo";

        const appService = {
            getContext: this.getContext,
            on: (eventName: string, callback: (args: any[]) => any ) => {},
            restoreSize: (appid: string) => Promise.resolve({}),
            expand: (appid: string) => Promise.resolve({}),
            reduce: (appid: string) => Promise.resolve({}),
            openUrlInNewTab: openPartnerLink,
            openUrlInCurrentTab: (url:string) => Promise.resolve({}),
            loadData: (partnerName: string) => Promise.resolve([]),
            getUrlForCurrentContext: (param: {partnerName: string, url: string}) => Promise.resolve(""),
            requestExternalResource: requestExternalResource
        };
        
        const configuration: { [name: string]: string } = getConfiguration();

        return (
            <Widget appid={appid} appService={appService} bodyComponent={widget} name={appname} params={configuration}/>
        );
    }
}
