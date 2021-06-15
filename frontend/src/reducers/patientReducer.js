const patientReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PATIENT":
      return { ...action.payload }
    case "FETCH_ALL_PATIENTS":
      return { ...action.payload }
    default:
      return { ...state }
  }
}

export default patientReducer
