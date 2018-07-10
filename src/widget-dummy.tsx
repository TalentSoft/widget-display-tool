import * as React from 'react';
import { Widget, WidgetMode, WidgetSize } from '@talentsoft/integration-widget-component';

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
            {size: size, mode: mode, title: 'Dummy Widget', language: language, enlargeable: true}
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
        const appname = 'dummy';
        const widget = (window as any)['integration/dummy'].Widget;
        const appid = "dummy-for-demo";

        const appService = {
            getContext: this.getContext,
            on: (eventName: string, callback: (args: any[]) => any ) => {},
            restoreSize: (appid: string) => Promise.resolve({}),
            expand: this.expand,
            reduce: this.reduce,
            openPartnerApplicationInNewTab: (partnerName:string) => Promise.resolve({}),
            loadData: (partnerName: string) => Promise.resolve({})
        };
        
        return (
            <Widget appid={appid} appService={appService} bodyComponent={widget} name={appname}/>
        );
    }
}
