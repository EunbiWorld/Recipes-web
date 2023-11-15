const getData = async (owner, repo, path, isServerApi = false, host = '', port = '') => {
    let apiUrl;
    let result = null;

    if (isServerApi) {
        // 서버의 API 엔드포인트를 호출하는 경우
        apiUrl = `http://${owner}:${repo}/${path}`;
    } else {
        // GitHub 레포지토리에서 데이터를 가져오는 경우
        apiUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`;
    }    

    await fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        result = data;
    })
    .catch(error => {
        console.error('에러 발생:', error);
    });

    return result;
}


export default getData;