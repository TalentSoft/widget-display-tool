import * as React from 'react';
import 'es6-shim';
import { Widget, AppService, WidgetMode, WidgetSize } from '@talentsoft/integration-widget-component';
import {getWidgetDefinition} from './widget-definition-helper'

export interface WidgetToTestProps {
    mode: WidgetMode;
    language: string;
    size: WidgetSize;
}

export class WidgetToTest extends React.Component<WidgetToTestProps, {}> {
    openPartnerLink = (partnerName: string) => {
        const partnerUrl:string = 'https://eddws.bodet-software.com';

        const win = window.open(partnerUrl, '_blank');
        if (win)
        {
            win.focus();
        } 
    
        return Promise.resolve(() => { 
        })
    }
    
    loadData = (partnerName: string) => {
        const bodetData = [
            {totalInDays: 1, TypeAbbreviation: 'RTT', StartDate: '2018/05/10', EndDate: '2018/05/10', State: 3},
            {totalInDays: 2, TypeAbbreviation: 'CP', StartDate: '2018/05/09', EndDate: '2018/05/10', State: 5},
            {totalInDays: 3, TypeAbbreviation: 'CP', StartDate: '2018/04/07', EndDate: '2018/04/06', State: 6},
            {totalInDays: 5, TypeAbbreviation: 'RTT', StartDate: '2018/02/10', EndDate: '2018/02/17', State: 3},
            {totalInDays: 10, TypeAbbreviation: 'CP', StartDate: '2017/12/23', EndDate: '2018/01/05', State: 5},
            {totalInDays: 0.5, TypeAbbreviation: 'CP', StartDate: '2018/07/07', EndDate: '2018/07/07', State: 6},
            {totalInDays: 1.5, TypeAbbreviation: 'RTT', StartDate: '2018/09/10', EndDate: '2018/09/11', State: 3},
            {totalInDays: 10, TypeAbbreviation: 'CP', StartDate: '2017/12/23', EndDate: '2018/01/05', State: 5},
            {totalInDays: 0.5, TypeAbbreviation: 'CP', StartDate: '2018/07/07', EndDate: '2018/07/07', State: 6},
        ];

        return Promise.resolve(bodetData);
    }

    // loadData = (partnerName: string) => {
    //     const pxsData = {
    //         Items: [
    //             {Title: 'tasks', Type: 'tasks', TotalElementCount: 10, NewElementCount: 5},
    //             {Title: 'vacancies', Type: 'vacancies', TotalElementCount: 18, NewElementCount: 3},
    //             {Title: 'candidates', Type: 'candidates', TotalElementCount: 35, NewElementCount: 8}
    //         ]
    //     };

    //     return Promise.resolve(pxsData);
    // }

    getContext = (appid: string) => {
        const {mode, language, size} = this.props;

        return Promise.resolve(
            {size: size, mode: mode, title: 'Demo', language: language}
        );
    }

    render() {
        const widgetDefinition = getWidgetDefinition(window);
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
            openPartnerApplicationInNewTab: this.openPartnerLink,
            loadData: this.loadData
        };
        
        return (
            <Widget appid={appid} appService={appService} bodyComponent={widget} name={appname}/>
        );
    }
}
