import * as React from 'react';
import 'es6-shim';
import { Widget, AppService, WidgetMode, WidgetSize } from '@talentsoft/integration-widget-component';
import {getWidgetDefinition} from './widget-definition-helper';
import {WidgetDefinition} from './widget-definition';
import {loadData, openPartnerLink} from './widget-to-test-helper';

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
            openPartnerApplicationInNewTab: openPartnerLink,
            loadData: loadData
        };
        
        return (
            <Widget appid={appid} appService={appService} bodyComponent={widget} name={appname}/>
        );
    }
}
