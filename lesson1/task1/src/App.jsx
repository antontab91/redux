import React from 'react';
import ThemedButton from './ThemedButton.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ThemedButton>Dynamic Theme</ThemedButton>
        <ThemedButton>Default Theme</ThemedButton>
      </div>
    )
  }
}

export default App;