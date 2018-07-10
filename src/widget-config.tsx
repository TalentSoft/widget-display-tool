import * as React from 'react';
import {WidgetMode} from '@talentsoft/integration-widget-component';
import {LanguageCodes, LanguageNames} from './languages';

export interface WidgetConfigProps {
    language: string;
    mode: WidgetMode;
    settingsAreVisible: boolean;
    changeLanguage: (language: string) => void;
    changeMode: (mode: WidgetMode) => void;
}

export class WidgetConfig extends React.Component<WidgetConfigProps, {}> {
    constructor(props: WidgetConfigProps) {
        super(props);
    }

    handleLanguageChange = (event: any) => {
        this.props.changeLanguage(event.target.value);
    }

    handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const mode: WidgetMode = Number(event.target.value);

        this.props.changeMode(mode);
    }

    render() {
        const {language, mode, settingsAreVisible} = this.props;

        return (
            <div className="tool__widget__config" style={{display: settingsAreVisible ? 'flex' : 'none'}}>
                <div>
                    <span>Language:</span>
                    <select value={language} onChange={this.handleLanguageChange}>
                        <option value={LanguageCodes.En_gb}>{LanguageNames.En_gb}</option>
                        <option value={LanguageCodes.Fr_fr}>{LanguageNames.Fr_fr}</option>
                        <option value={LanguageCodes.It_it}>{LanguageNames.It_it}</option>
                        <option value={LanguageCodes.Es_es}>{LanguageNames.Es_es}</option>
                        <option value={LanguageCodes.De_de}>{LanguageNames.De_de}</option>
                    </select>
                </div>
                <div>
                    <span>Mode:</span>
                    <select value={mode} onChange={this.handleModeChange}>
                        <option value={WidgetMode.Normal}>Normal</option>
                        <option value={WidgetMode.Edition}>Edition</option>
                    </select>
                </div>
            </div>
        )
    }
}
