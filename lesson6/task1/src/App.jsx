import React from 'react';
import Counter from './counter/Counter';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider>
            <Counter />
        </Provider>
    )
}

export default App;