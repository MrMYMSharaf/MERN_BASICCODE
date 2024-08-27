const User = require("../Model/UserModel");

// data Display
const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    }
    catch (err) {
        console.log(err);
    }

    // not fount
    if (!users) {
        return res.status(404).json({ message: "User not found" });
    }

    // Display all users
    return res.status(200).json({ users });
};

// data Insert
const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body;
    let users;

    try {
        users = new User({ name, gmail, age, address });
        await users.save();
    }
    catch {
        console.log(err)
    }
    if (!users) {
        return res.status(404).send({ message: "unable to add users" });
    }
    return res.status(200).json({ users });

};

//Get by ID
const getById = async (req,res,next)=>
    {
        const id = req.params.id;

        let user;
     try {
            user = await User. findById(id);
         }catch (err) {
                console. log(err);
           }
// not available users
   if (!user) {
            return res.status (404) . json({ message: "User Not Found"})
   }
   return res.status(200).json({user});
};

const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;
    let users;
    try {
         users = await User.findByIdAndUpdate(id,
        { name: name, gmail: gmail, age: age, address: address}) ;
         users = await users.save();
        }
    catch(err){
        console. log(err);
    }
    // not available users
   if (!users) {
    return res.status (404) . json({ message: "Unable to Update User Details"})
}
return res.status(200).json({users});
};

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    
    let user;
    try {
         user = await User.findByIdAndDelete(id) ;
        }
    catch(err){
        console. log(err);
    }
    // not available users
   if (!user) {
    return res.status (404) . json({ message: "Unable to delete User Details"})
}
return res.status(200).json({user});
};



exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;