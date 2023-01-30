import React from 'react';
import {SuperButton, SuperInputText, SuperCheckbox} from "../ui-index";

export const TestPage = () => {
    return (
        <div>
            <h1>Test page</h1>
            <div style={{display: "flex", alignItems: 'center'}}>
                {<SuperCheckbox checked={true} style={{width: '30px', height: '30px'}}/>}
                {<SuperInputText style={{width: '200px', height: '40px', marginRight: '10px'}}/>}
                {<SuperButton style={{width: '30px', height: '30px', fontSize: '22px'}}>-</SuperButton>}
            </div>
        </div>
    );
};

