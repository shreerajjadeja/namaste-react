import React from 'react';
import ReactDOM from 'react-dom/client'

const reactHeading = React.createElement('h1', {id: 'heading'}, 'Namaste React loaded via React')

const reactRoot = ReactDOM.createRoot(document.getElementById('react'))

reactRoot.render(reactHeading)