import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Expenses from './Expenses';
import Invoices from './Invoices';
import Invoice from './Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} exact/>
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} >
                    <Route index element={
                        <main style={{ paddind: "1rem" }}>
                            <p>Select an issue</p>
                        </main>
                    } />
                    <Route path=':invoiceID' element={<Invoice />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Ooops! There's nothing here...😒</p>
                        </main>
                    }
                />
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
