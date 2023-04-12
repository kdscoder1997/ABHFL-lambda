const axios =require('axios')
let data = JSON.stringify({
    "roleName": "admin"
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '10.21.240.199:3000/api/v1/createRole',
    headers: {
        'Content-Type': 'application/json'
    },
    data :data

};

axios.request(config).then((response)=>{
    console.log(JSON.stringify(response.data));
}).catch((error)=>{
    console.log(error);
});