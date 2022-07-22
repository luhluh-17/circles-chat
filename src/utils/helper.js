export const capitalText = str => {
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}

export const getInitials = word => word.charAt(0).toUpperCase()

export const savedUsersToLocal = users => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const getUsersFromLocal = () => JSON.parse(localStorage.getItem('users'))
