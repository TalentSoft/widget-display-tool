import * as React from 'react';

import {WidgetConfig} from './widget-config';
import {WidgetDisplay} from './widget-display';
import {WidgetHeader} from './widget-header';
import {LanguageCodes} from './languages'

import {WidgetMode, WidgetSize} from '@talentsoft-opensource/integration-widget-component';

export interface WidgetSimulatorState {
    language: string;
    mode: WidgetMode;
    sizeWidgetDummy: WidgetSize;
    sizeWidgetToTest: WidgetSize;
    settingsAreVisible: boolean;
}

export class WidgetSimulator extends React.Component<{}, WidgetSimulatorState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            language: LanguageCodes.En_gb,
            mode: WidgetMode.Normal,
            sizeWidgetDummy: WidgetSize.Normal,
            settingsAreVisible: false,
            sizeWidgetToTest: WidgetSize.Normal
        }
    }

    changeLanguage = (language: string) => {
        this.setState({language});
    }

    changeMode = (mode: WidgetMode) => {
        this.setState({mode});
    }

    changeSize = (size: WidgetSize) => {
        const sizeWidgetToTest = (size === WidgetSize.Enlarged) ? WidgetSize.Minimized : WidgetSize.Normal;

        this.setState({
            sizeWidgetDummy: size,
            sizeWidgetToTest: sizeWidgetToTest
        });
    }

    updateSettingsVisibility = () => {
        this.setState(prevState => ({
            settingsAreVisible: !prevState.settingsAreVisible
        }))
    }

    render() {
        const {language, mode, sizeWidgetDummy, sizeWidgetToTest, settingsAreVisible} = this.state;
        const key = `${language}-${mode}-${sizeWidgetDummy}-${settingsAreVisible}`;

        return (
            <React.Fragment>
                <WidgetHeader updateSettingsVisibility={this.updateSettingsVisibility} />
                <WidgetConfig 
                    language={this.state.language}
                    mode={this.state.mode}
                    settingsAreVisible={this.state.settingsAreVisible}
                    changeLanguage={this.changeLanguage}
                    changeMode={this.changeMode} />
                <WidgetDisplay
                    key={key}
                    language={language} 
                    mode={mode}
                    sizeWidgetDummy={sizeWidgetDummy}
                    sizeWidgetToTest={sizeWidgetToTest}
                    changeSize={this.changeSize} />
            </React.Fragment>
        )
    }
}