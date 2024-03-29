import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
