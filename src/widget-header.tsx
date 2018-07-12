import * as React from 'react';
import { WidgetConfig } from './widget-config';

export interface WidgetHeaderProps {
    updateSettingsVisibility: () => void;
}

export class WidgetHeader extends React.Component<WidgetHeaderProps, {}> {
    constructor(props: WidgetHeaderProps) {
        super(props);
    }

    handleClick = () => {
        this.props.updateSettingsVisibility();
    }

    render() {
        return (
            <div className="tool__widget__header">
                <div>
                    <img src={require("../assets/images/logoTS-white.png")}></img>
                </div>
                <div className="tool__widget__settings uxp-icons mov-icons" onClick={this.handleClick}>o</div>
            </div>
        );        
    }
}    