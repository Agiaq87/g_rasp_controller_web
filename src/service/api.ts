 async function checkQr(): Promise<Response>  {
    return fetch('http://192.168.1.104:8000/start');
}


export default checkQr;