

//存token
function setToken(token,client){
   // console.log('========TODO:目前登录返回的 profile 和 getProfile 借口返回的数据格式不一致=====');
    let clientToken = 'DATA '+btoa(client.uid+':'+client.user_name+':'+token);
    localStorage.setItem('Token',clientToken);

    let profile = {
        token:clientToken,
        uid:client.uid,
        user_name:client.user_name,
        ...client.profiles
    }

    return profile;
}

//取token
function getToken(){
    return localStorage.getItem('Token')||'';
}

//退出登录,清除用户信息
function delToken(){
    localStorage.removeItem('Token');
}

export {
    setToken,
    getToken,
    delToken
}