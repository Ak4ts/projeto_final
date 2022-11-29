import User from "../schemas/User"
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

class UserController {

  public async index(req: Request, res: Response): Promise<Response>{
    const users = await User.find()
    return res.status(200).json(users)
  }
  public async create(req: Request, res: Response): Promise<Response>{
    const { email } = req.body
    const users = await User.findOne({email})
    console.log(users)
    if(users) return res.status(409).json({ error: "User Already Exists!"})
    const user = await User.create(req.body)
    return res.status(200).json(user)
  }
  public async login(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body
    const user = await User.findOne({email, password})
    console.log(user)
    if(!user) return res.status(403).json({ error: "Check if email and password is correct"})
    user.save();
    return res.status(200).json({user})
  }
  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const { email } = req.body
    const user = await User.findOne({ email })
    if(!user) return res.status(403).json({ error: "User not found" });
    try{
      user?.delete()
      console.log("User deleted")
    } catch(err) {
      return res.status(403).json({ error: "an error occurred while deleting user" });
    }
    return res.status(200)
  }
  public async updateUser(req: Request, res: Response): Promise<Response>{
    const rs = req.body
    const user = await User.findOne({email: rs.email})
    if(user == null) return res.status(404).json({error: "Not Found"})
    
    if(rs.email) user.email = rs.email
    if(rs.password) user.password = rs.password
    if(rs.username) user.username = rs.username
    if(rs.location) user.location = rs.location
    if(rs.bio) user.bio = rs.bio
    if(rs.interests) user.interests = rs.interests
    user.save()
    return res.status(200).json({ user });
  }
}

export default new UserController()