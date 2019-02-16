
class UserService {
    constructor() {
        this.url = 'http://127.0.0.1:8080/api';
    }

    login = (userName, password) => {
        return fetch(this.url+"/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                "username":userName,
                "password":password
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }

    loggedIn = () => {
        return fetch(this.url+"/profile", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString());
        });
    }

    logout = () => {
        return fetch(this.url+"/logout", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
        })
    }

    register = (userName, password, firstName, lastName) => {
        return fetch(this.url+"/register", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                "username":userName,
                "password":password,
                "firstName": firstName,
                "lastName": lastName,
                "role": "FACULTY"
            })
        }).then(function(response) {
            return response.json();
        }).catch(error=>{
            console.log(error.toString())
        });
    }
}
export default UserService;