const Todo = require("../models/Todo")

exports.getTodo = async(req,res) =>{
    try{
        const result = await Todo.find({});


        res.status(200).json({
        success:true,
        data:result,
        message:"data is fetched successfully"

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


exports.getTodoById = async(req,res)=>{
    try{

        const {id} = req.params;

        const todo = await Todo.findById({_id:id})

        if(!todo){
        res.status(404).json({
            success:false,
            message:"No Data Found with the given id"

        })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo for ${id} data is successfully fetched!`,
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