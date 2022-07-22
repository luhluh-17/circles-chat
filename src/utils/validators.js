export const validateEmail = (email, apiError = '') => {
  if (apiError === '') {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const result = email.match(emailFormat) === null ? false : true
    const error = `is not valid`
    return { result, error }
  } else {
    return { result: false, error: apiError }
  }
}

export const validatePassword = password => {
  const result = password.length > 5
  const error = 'is too short (minimum is 6 characters)'
  return { result, error }
}

export const validateConfirm = (confirm, password) => {
  const result = confirm === password
  const error = "doesn't match Password"
  return { result, error }
}

export const validateChannel = (channel, apiError = '') => {
  if (apiError === '') {
    const result = channel.length > 2
    const error = 'is too short (minimum is 3 characters)'
    return { result, error }
  } else {
    return { result: false, error: apiError }
  }
}
