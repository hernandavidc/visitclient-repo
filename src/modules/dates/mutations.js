export function setDates(state, dates) {
  state.dates = dates;
}

export function setDate(state, date) {
  state.selectedDate = date;
}

export function setTypesIntention(state, typesIntention) {
  state.typesIntention = typesIntention;
}

export function setTypeIntention(state, typeIntention) {
  state.selectedTypeIntention = typeIntention;
}

export function datesError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
}

export function statesDelError (state) {
  state.error = false
  state.errorMessage = ''
}