// making this file when user has loged in then he can access add delete etc functionality
export const auth = (req, res, next) => {
    if(req.session.userEmail) {
        next();
    } else {
        res.redirect('/login'); // we can use render also
    }
}
// which root we want to secure where we have to add auth middleware which is mention at line 2 (add auto in index.js)