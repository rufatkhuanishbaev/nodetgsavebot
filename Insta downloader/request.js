const axios = require('axios');

 async function downloaderMethod(insta_url){
    try {
      const options = {
        method: 'GET',
        url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
        params: {
          url: 'insta_url'
        },
        headers: {
          'x-rapidapi-key': 'fe4bcf390emsha3b74ed55d7b254p1764bdjsn8738451b07dc',
          'x-rapidapi-host': 'instagram-media-downloader.p.rapidapi.com'
        }
      };
      
    const response=await axios.request(options)
    const result= {
        videoUrl:response.data.video,
        caption:response.data.caption
    }

    return result

} catch (error) {
    console.log(error+"")
}

 }

 module.exports={
  downloaderMethod
}
