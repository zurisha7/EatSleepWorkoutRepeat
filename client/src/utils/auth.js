import decode from 'jwt-decode'

class AuthService {
    //get info from token
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        //find token
        const token = this.getToken();

        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (error) {
            return false;
        }
    }
    //find token in storage
    getToken() {
        return localStorage.getItem('id_token');
    }
    // send token to storage and reload page then save to Storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        //upon logout clear token from storage and reload
        localStorage.removeItem('id_token');
        window.location.assign('/login');
    }

};

export default new AuthService();