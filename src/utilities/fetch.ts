// https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

const fetchUrl = "https://json.extendsclass.com/bin/30c6050f7cfa";

const saveData = (reqData: any, callBack?: (data: any) => void) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "api-key": "51c32701-8e6a-11ec-b95c-0242ac110002"
    },
    body: JSON.stringify(reqData)
  };
  fetch(fetchUrl, requestOptions)
    .then((response) => response.json())
    .then(callBack);
};

const getData = (callBack?: (data: any) => void) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": "51c32701-8e6a-11ec-b95c-0242ac110002"
    }
  };
  fetch(fetchUrl, requestOptions)
    .then((response) => response.json())
    .then(callBack);
};

export default { saveData, getData };
