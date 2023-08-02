import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';
import App from './ui/pages/App';

// const div = document.createElement('div');
// div.id = 'root';
// document.body.appendChild(div);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

/** @TODO
 * - Add .scss(module federation) support for typescript
 * - Make sure current react application environment support css module federation
 * - Setup eslint
 * - Setup stylelint
 * */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
