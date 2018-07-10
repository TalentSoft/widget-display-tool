import * as React from 'react';
import * as ReactDOM from 'react-DOM';
import {WidgetSimulator} from './widget-simulator'

import '../src/index.less';

const root = document.getElementById("tool__widget__simul");

ReactDOM.render(
    <WidgetSimulator />,
    root
)
