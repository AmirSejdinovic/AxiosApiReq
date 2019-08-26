const axios = require('axios');


let username =  'AmirSejdinovic';


axios.get('http://api.github.com/users/' + username).then((res)=>{
    console.log(res.data);

    data.innerHTML = res.data;
}).catch((err)=>{
  console.log(err);
});
