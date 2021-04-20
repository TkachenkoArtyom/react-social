import React from 'react';
import ReactDOM from 'react-dom';
import AppContainerWrapper from "./App";

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppContainerWrapper/>,  div);
    ReactDOM.unmountComponentAtNode(div);
});
