const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Todo Deleted"
        })


    }
    catch(error){
        console.log(error)
        console.error(error)
        
        res.status(500).json({
            success:false,
            data:"Data cant be fetched!",
            message:error.message,

        })

    }
}