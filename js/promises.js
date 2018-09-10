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



function acceptsGitHubUserName(){

    return fetch('https://api.github.com/users/jameskevinayoung/events/public', {
        headers: {'Authorization': '3abecaf9fc1d0eb9d43fef11f45487a802f187ea'}}).then(response => response.json())
        .then(users => users.map(user => user.type))

}


console.log(acceptsGitHubUserName())

