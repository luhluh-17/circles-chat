export const validateEmail = email => {
  const result = email.includes('@')
  const error = 'is not valid'
  return { result, error }
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
