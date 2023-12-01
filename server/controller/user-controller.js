import User from "../schema/userSchema.js";

export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ newUser: savedUser });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

export const getUsers = async (req, res)=>{
  try{
    const user = await User.find({})
    res.status(201).json(user)
  }catch(err){
    res.status(409).json({ message: err })
  }
}

export const getUser = async (req, res)=>{
  try{
    const user = await User.find({ _id: req.params.id })
    res.status(201).json(user)
  }catch(err){
    res.status(409).json({ message: err })
  }
}

export const updateUser = async (req, res)=>{
  let user = req.body
  const editUser = new User(user)
  try{
    await User.updateOne({ _id:  req.params.id }, editUser)
    res.status(201).json(editUser)
  }catch(err){
    res.status(409).json({ message: err })
  }
}

export const deleteUser = async (req, res)=>{
  try{
    await User.deleteOne({ _id:  req.params.id })
    res.status(201).json({message: "User deleted succesfully"})
  }catch(err){
    res.status(409).json({ message: err })
  }
}