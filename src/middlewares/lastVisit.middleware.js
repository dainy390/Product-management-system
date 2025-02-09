//first npm i cookie-parser
export const setLastVisit = (req, res, next)=> {
    // we want to check if cookie is set(receive), then add a local varial with last visit time data
    if(req.cookies.lastVisit){                                                             // we are checking if cookie is already set
    res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();           //updating data which cookie have
        
}  
// if cookie is not set or it update last visit
res.cookie('lastVisit',new Date().toISOString(),{         // new date this we are sending data to coolie and toISOString() this is the time format that will come hour mnt second
  maxAge:2*24*60*60*1000                                 // it mean how long you want to set cookie data i gave 2 day in times format and we can give as long as we want
});
next();
}

// we want to display last visit time on UI then change in index.js