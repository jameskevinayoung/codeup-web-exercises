/**
 *  TODO
 *  Write a function named wait that accepts a number as a parameter,
 *  and returns a promise that resolves after the passed number of milliseconds.

 */

function wait(delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(Math.random() > 0.5) {
                resolve();
            }else {
                reject();
            }
        }, delay)


    })
}



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


/**
 * Create a function that accepts a github username,
 * and returns a promise that resolves with the date of the last commit that user made.
 * Reference the github api documentation to achieve this.
 */



let githubAccessToken = localStorage.getItem("githubAccessToken")

function acceptsGitHubUserName(username = "jameskevinayoung"){

    return fetch(`https://api.github.com/users/${username}/events/`, {
        headers: {'Authorization': `token ${githubAccessToken}`}})
        .then(response => response.json())
        .then(data => {
            for(event of data) {
                if(event.type === 'PushEvent'){
                    let l = event.payload.commits.length;
                    return event.payload.commits[l - 1].url;
                }
            }
        })
        .then(url =>{
            console.log(url);
            return (fetch(url, {headers:{"Authroization": `token ${githubAccessToken}`}})
                    .then(response = response.json())
                    .then(data => data.commit.committer.date)
            );
        })

}

acceptsGitHubUserName().then(data =>data).then(date => console.log(date));
