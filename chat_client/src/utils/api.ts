const getBaseUrl = () => {
  return `${process.env.REACT_APP_BASE_URL_API}:${process.env.REACT_APP_API_PORT}`
}

export { getBaseUrl }
