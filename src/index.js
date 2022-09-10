import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        Meu app
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)