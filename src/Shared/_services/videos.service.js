
const URL = '/api/training-videos.json';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const REQ = new Request( URL,
  {
    method: "GET",
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
);

export const videosService = {
  
  isLoaded: false,

  getVideos: async (callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      videosService.requestNext( res, callback, 'getVideos' ); 
    } catch(e){
      console.log( 'getVideos' + ' Videos SERVICE ERROR', e)
    }
  },

  requestNext: (res, callback, methodCalled) => {
    if(res.errors){
      callback({ status: false, errors: res.error });
    } else {
      callback({ status: true, data: res });
    }
  } 
}

