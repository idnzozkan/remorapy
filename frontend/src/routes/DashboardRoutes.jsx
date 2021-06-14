import { Route, useRouteMatch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/styles"
import theme from '../theme'
import Home from "../pages/dashboard/Home"
import Appointments from "../pages/dashboard/Appointments"
import FindTherapist from "../pages/dashboard/FindTherapist"
import Messages from "../pages/dashboard/Messages"
import Reports from "../pages/dashboard/Reports"
import Settings from "../pages/dashboard/Settings"

import DashboardLayout from '../layouts/Dashboard/DashboardLayout'

function Dashboard() {
  let { path } = useRouteMatch()

  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <Route exact path={path} component={Home} />
        <Route path={`${path}/appointments`} component={Appointments} />
        <Route path={`${path}/find-therapist`} component={FindTherapist} />
        <Route path={`${path}/messages`} component={Messages} />
        <Route path={`${path}/reports`} component={Reports} />
        <Route path={`${path}/settings`} component={Settings} />
      </DashboardLayout>
    </ThemeProvider>
  )
}

export default Dashboard
