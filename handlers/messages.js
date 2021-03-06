const db = require('../models');

exports.createMessage = async function(req, res, next) {
    try {
        let message = await db.Message.create({
            content: req.body.content,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.messages.push(message.id);
        await foundUser.save();
        let foundMessage = await db.Message.findById(message.id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status('200').json(foundMessage);

    }catch(err) {
        return next(err);
    }

};

exports.getMessage = async function(req, res, next) {
    try {
        let message = await db.Message.findById(req.params.message_id);
        return res.status(200).json(message);
    } catch(err){
        return next(err);
    }
    
}

exports.deleteMessage = async function(req, res, next) {
    try {
        let foundMessage = await db.Message.findById(req.params.message_id);
        await foundMessage.remove();
        // we can't use findAndRemoveById here because of our pre-hook
        return res.status(200).json(foundMessage);
    } catch(err){
        return next(err);
    }
}