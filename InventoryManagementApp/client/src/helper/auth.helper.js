const auth = {
  isAuthenticated() {
    if (typeof window == "undefined") return false;

    if (sessionStorage.getItem("jwt"))
      return JSON.parse(sessionStorage.getItem("jwt"));

    return false;
  },

  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  },

  clearJWT(cb) {
    if (typeof window !== "undefined") sessionStorage.removeItem("jwt");
    // cb();
    
    // signout().then((data) => {
    //   document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // });
  },

  updateUser(user, cb) {
    if (typeof window !== "undefined" && sessionStorage.getItem("jwt")) {
      let auth = JSON.parse(sessionStorage.getItem("jwt"));
      auth.user = user;
      sessionStorage.setItem("jwt", JSON.stringify(auth));
      // cb();
    }
  },

  isAdmin(){
    let auth = JSON.parse(sessionStorage.getItem("jwt"));

    return auth && auth.token && auth.user.role === "admin";
  }
};

export default auth;
