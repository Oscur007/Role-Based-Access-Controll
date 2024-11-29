const users = (req , res) => {
    try
    {
        res.send(`Hello User ${req.user.username}`).status(200);  // sending user data
    }
    catch(err)
    {
        console.log(err);
        res.send("Error occured").status(500);  // error message
    }
}
const moderator = (req , res) => {
    try
    {
        res.send(`Hello Moderator ${req.user.username}`).status(200);  // sending moderator data
    }
    catch(err)
    {
        console.log(err);
        res.send("Error occured").status(500);  // error message
    }
}
const admin = (req , res) => {
    try
    {
        res.send(`Hello Admin ${req.user.username}`).status(200);  // sending admin data
    }
    catch(err)
    {
        console.log(err);
        res.send("Error occured").status(500);  // error message
    }
}

export {users , moderator , admin}