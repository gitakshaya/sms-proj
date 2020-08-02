import request from 'superagent';
const defaultAjaxTimeout = 600000;

// this is here so that we can append the .timeout call to all of our ajax requests with the default value.
const requestWrapper = method => url => data => {
  const gateWayUrl = process.env['API_PREFIX'];
  console.log('gatewayurl', gateWayUrl)
  url = gateWayUrl ? `${gateWayUrl}${url}` : url;
  let requestPromise = request[method](url);
  if (method === 'get') {
    requestPromise.query(data);
  } else if (method === 'fileOperationUpload') {
    requestPromise.attach(data.fileData);
  } else {
    requestPromise.send(data);
  }

  return requestPromise
    .timeout(defaultAjaxTimeout)
    .then(function (res) {
      if (res.body && res.body.error) {
        throw res.body.error;
      }
      return res;
    })
    .catch(function (err) {
      // TO DO: Handle for Timeout Case
      /*Handling only login authorization error for time being 
             till token is implemented.
      Removing XSRF-Token manually on unauthorized login
      */
      if (err.response.statusCode === 401 || err.response.statusCode === 403) {
        // if (err.response.body.status === 403) {
        // Cookie.remove(appConfig.authCookieName);
      }
      throw err.response.body;
    });
};

const requestWithCsrfTokenInQueryString = method => url => {
  return requestWrapper(method)(url);
};

const get = requestWrapper('get');
const post = requestWithCsrfTokenInQueryString('post');
const put = requestWrapper('put');
const del = requestWrapper('del');

export { get, put, post, del };
