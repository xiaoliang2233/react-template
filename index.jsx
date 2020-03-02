import ReactDOM from 'react-dom'
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}
export default App;

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
);
