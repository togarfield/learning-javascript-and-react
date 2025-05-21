function createAPI(baseURL) {
    return (endpoint) => `${baseURL}/${endpoint}`;
}

const githubAPI = createAPI('https://github.com');
console.log(githubAPI('togarfield'));
console.log(githubAPI('new'));