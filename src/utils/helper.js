export const capitalText = str => {
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}

export const getInitials = () =>
  localStorage.getItem('uid').charAt(0).toUpperCase()
