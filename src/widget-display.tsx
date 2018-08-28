import * as React from 'react';
import { WidgetMode, WidgetSize } from '@talentsoft/integration-widget-component';

import {WidgetToTest} from './widget-to-test'
import {WidgetDummy} from './widget-mock'

export interface WidgetDisplayProps {
    mode: WidgetMode;
    language: string;
    sizeWidgetToTest: WidgetSize;
    sizeWidgetDummy: WidgetSize;
    changeSize: (mode: WidgetSize) => void;
}

export class WidgetDisplay extends React.Component<WidgetDisplayProps, {}> {

    render() {
        const {mode, language, changeSize, sizeWidgetToTest, sizeWidgetDummy} = this.props;

        let className = "tool__widget__display";
        if (sizeWidgetDummy === WidgetSize.Enlarged) {
            className = className.concat(" enlarged");
        }

        return (
            <div className={className}>
                <div className="tool__widget__in__test">
                    <WidgetToTest mode={mode} language={language} size={sizeWidgetToTest}/>
                </div>
                <div className="tool__widget__mock">
                    <WidgetDummy mode={mode} language={language} changeSize={changeSize} size={sizeWidgetDummy}/>
                </div>
            </div>
        );
    }
}
