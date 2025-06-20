import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getTokenExpired(token); 
  }
    
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else return false;
    } catch {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token' , 'idToken');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token' , idToken);

    window.location.assign('/');
  }

  logout() {
    // Clears user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // then will reload the page and reset the state of the application
    window.location.assign('/');
  }
}
