const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        console.log(posts);
        res.json(posts);
    }catch(err){
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedPost = await post.save()
        console.log(savedPost);
    } catch (err) {
        console.log(err);
    }

});

router.get('/:id', async (req, res)=> {
    try{
        const post = await Post.findById(req.params.id);
        console.log(req.params.id);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const removedPost = await Post.remove({ _id: req.params.id })
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});


router.patch('/:id', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({ _id: req.params.id}, {$set: { title: req.body.title }})
        res.json(updatedPost);
    } catch(err){
        res.json({message: err});
    }
});
module.exports = router;