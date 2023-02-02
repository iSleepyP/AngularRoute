export class AuthService{
    loggedIn  = false;

    isAuthenticated(){
        const promiss = new Promise(
            (resolve,reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                },800);
            }
        );
        return promiss;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}