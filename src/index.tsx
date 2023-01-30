import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { App } from './01-main/01-ui/ui-index';
import { store } from './01-main/02-bll/bll-index';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

