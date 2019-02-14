
class UserService {
    constructor() {
        this.url = 'http://127.0.0.1:8080/api/login';
    }

    login = (userName, password) => {
        return fetch(this.url, {
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
            alert("incorrect username or password!")
        });
    }
}
export default UserService;