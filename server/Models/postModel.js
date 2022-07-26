import mongoose  from "mongoose";

const postSchema = mongoose.Schema({
    userId: {type: String, required: true },
    desc: String, 
    likes: [],
    image: String, 
},
{ 
    timestamps: true

});

var PostModel = mongoose.model("Post", postSchema)
export default PostModel;