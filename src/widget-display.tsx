import * as React from 'react';
import { WidgetMode, WidgetSize } from '@talentsoft/integration-widget-component';

import {WidgetToTest} from './widget-to-test'
import {WidgetDummy} from './widget-dummy'


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

        return (
            <div className="tool__widget__display">
                <div className="tool_widget_in_test">
                    <WidgetToTest mode={mode} language={language} size={sizeWidgetToTest}/>
                </div>
                <div className="tool_widget_dummy">
                    <WidgetDummy mode={mode} language={language} changeSize={changeSize} size={sizeWidgetDummy}/>
                </div>
            </div>
        );
    }
}
