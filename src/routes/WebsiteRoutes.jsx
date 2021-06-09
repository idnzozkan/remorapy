import { Route } from "react-router-dom"
import Homepage from "../pages/website/Homepage"

function Website() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
    </>
  )
}

export default Website
