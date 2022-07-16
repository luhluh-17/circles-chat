export const validateEmail = (email, apiError) => {
  if (apiError === '') {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const result = email.match(emailFormat)
    const error = 'is not valid'
    return { result, error }
  } else {
    return { result: false, error: apiError }
  }
}

export const validatePassword = password => {
  const result = !(password.length < 6)
  const error = 'is too short (minimum is 6 characters)'
  return { result, error }
}

export const validateConfirm = (confirm, password) => {
  const result = confirm === password
  const error = "doesn't match Password"
  return { result, error }
}
