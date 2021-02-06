import axios, { AxiosRequestConfig } from 'axios'

interface ApiOptions {
  showLoader: boolean;
}

const BASE_URL = 'https://newsapi.org/v2';

const appClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000 // 30 seconds
});

let pendingRequests = 0;
const appRequest = (
  config: AxiosRequestConfig,
  options: ApiOptions = { showLoader: true }
) => {
  // if (options.showLoader) {
  //   pendingRequests++;
  //   if (pendingRequests > 0) {
  //     LoaderService.showLoader()
  //   }
  // }
  const onSuccess = (response: any) => {
    // pendingRequests--;
    // if (pendingRequests <= 0) {
    //   LoaderService.hideLoader()
    // }
    return response;
  };
  const onError = (error: any) => {
    // pendingRequests--;
    // if (pendingRequests <= 0) {
    //   LoaderService.hideLoader()
    // }
  };
  return appClient(config)
    .then(onSuccess)
    .catch(onError);
};

appClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

appClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export { appRequest, pendingRequests }
