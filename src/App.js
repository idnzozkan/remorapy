import { Route, Switch } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Website from "./routes/WebsiteRoutes"
import Dashboard from "./routes/DashboardRoutes"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Website} />
        <Route path="/app" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
