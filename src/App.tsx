import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layouts } from '@src/layouts/Layouts';

function App() {
    return (
        <BrowserRouter>
            <Layouts />
        </BrowserRouter>
    );
}

export default App;
