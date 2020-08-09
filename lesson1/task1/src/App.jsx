import React from 'react';
import ThemedButton from './ThemedButton.jsx'
import { themes, ThemeContext } from './themes-context'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.dark,
    }
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div>
          <ThemedButton onClick={this.toggleTheme} >Dynamic Theme</ThemedButton>
          <ThemedButton onClick={this.toggleTheme} >Default Theme</ThemedButton>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App;