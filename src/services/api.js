export const getHeaders = () => {
  return {
    crossorigin: true,
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    expiry: localStorage.getItem('expiry'),
    uid: localStorage.getItem('uid'),
  }
}

export const apiGET = async (apiInstance, url, onSuccess, onError) => {
  await apiInstance
    .get(url)
    .then(response => onSuccess(response.data))
    .catch(error => onError(error.message))
}

export const apiPOST = async (apiInstance, url, data, onSuccess, onError) => {
  await apiInstance
    .post(url, data)
    .then(response => onSuccess(response))
    .catch(error => onError(error))
}
