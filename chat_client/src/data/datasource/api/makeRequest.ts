import Api from '.'

interface IMakeRequest {
  url: string;
  data: object
}

const makeRequest = async ({ url, data }: IMakeRequest) => {
  const instance = Api.getApiInstance(url)
  // const response = instance.request({

  // })
}
