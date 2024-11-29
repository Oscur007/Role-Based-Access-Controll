const roleCheck = (roles) => {
    return (req , res , next) => {
        try
        {
            if(!roles.includes(req.user.role))  // checking if the user's role is present in the roles array or not
            {
                res.status(403).send("You can't access this page");  // user is not allowed to access the page
                return;
            }
            next();
        }
        catch(err)
        {
            console.log(err);
            res.status(500).send("Internal Server error");  // error message
        }
    }
}

export default roleCheck;