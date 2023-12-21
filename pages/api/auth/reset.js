import React from 'react';
import nc from "next-connect";
import bcrypt from 'bcrypt';
import {validateEmail} from "../../../utils/validation";
import db from "../../../utils/db";
import User from '../../../models/User';
import {createActivationToken, createReseToken} from '../../../utils/tokens';
import {sendEmail} from "../../../utils/sendEmails";
import {resetEmailTemplate} from "../../../emails/resetEmailTemplate";
import { errorMonitor } from 'nodemailer/lib/xoauth2';

const handler = nc();

handler.put(async (req,res) =>{
  try{
    await db.connectDb();
    const {user_id, password} = req.body;
    const user = await User.findById(user_id);
    if(!user){
      return res.status(400).json({message: "This Accounnt does not exist"});
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: cryptedPassword,
    });

    res.status(200).json({email: user.email});
    await db.disconnectDb();
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

export default handler;