const User = require("../models/User")

const strategy = async(accessToken, refreshToken, profile, done)=>{
    const newUser = {
        googleId:profile.id,
        firstname:profile.name.givenName,
        lastname:profile.name.familyName,
        image:profile.photos[0].value
    }
    try{
        const user = await User.findOne({googleId:profile.id})
        if(user){
            done(null,user)
        }
        else{
            user = await User.create(newUser)
            done(null,user)
        }
    }catch(err){
        console.log(err)
    }
    
}

module.exports = strategy