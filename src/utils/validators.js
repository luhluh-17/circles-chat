export const validateEmail = email => {
  if (email === '') return false
  return email.includes('@')
}

export const validatePassword = password => {
  if (password === '') return false
  return !(password.length < 6)
}

export const validateConfirm = (confirm, password) => {
  if (confirm === '') return false
  return confirm === password
}
