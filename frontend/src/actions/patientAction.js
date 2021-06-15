import axios from "../config/axios"

export const getPatient = () => async dispatch => {
  const patient = await axios.get("/patients/60c7f8392bb13d92d6158aa6")

  dispatch({
    type: "FETCH_PATIENT",
    payload: patient.data
  })
}

export const getPatients = () => async dispatch => {
  const patients = await axios.get("/patients")

  dispatch({
    type: "FETCH_ALL_PATIENTS",
    payload: patients.data
  })
}
