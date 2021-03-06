import * as React from 'react';
import { Widget, WidgetMode, WidgetSize } from '@talentsoft-opensource/integration-widget-component';
import {HostApiOptions} from './host-api-options';

export interface WidgetDummyProps {
    mode: WidgetMode;
    language: string;
    size: WidgetSize;
    changeSize: (mode: WidgetSize) => void;
}

export class WidgetDummy extends React.Component<WidgetDummyProps, {}> {  
    getContext = (appid: string) => {
        const {mode, language, size} = this.props;

        return Promise.resolve(
            {size, mode, title: 'Mock Widget', language, enlargeable: true}
        );
    }

    expand = (appid: string) => {
        this.props.changeSize(WidgetSize.Enlarged);
        return Promise.resolve({});
    }

    reduce = (appid: string) => {
        this.props.changeSize(WidgetSize.Normal);
        return Promise.resolve({});
    }

    render() {
        const appname = 'mock';
        const widget = (window as any)['integration/mock'].Widget;
        const appid = "mock-widget-for-reduce-expand";

        const appService = {
            getContext: this.getContext,
            on: (eventName: string, callback: (args: any[]) => any ) => {},
            restoreSize: (appid: string) => Promise.resolve(),
            expand: this.expand,
            reduce: this.reduce,
            openUrlInNewTab: (url:string) => Promise.resolve({}),
            openUrlInCurrentTab: (url:string) => Promise.resolve({}),
            loadData: (partnerName: string) => Promise.resolve([]),
            getUrlForCurrentContext: (param: {partnerName: string, url: string}) => Promise.resolve(""),
            requestExternalResource: (options: HostApiOptions) => Promise.resolve(new Response())
        };
        
        const params = {};

        return (
            <Widget appid={appid} appService={appService} bodyComponent={widget} name={appname} params={params}/>
        );
    }
}
