const tasks =require('../models/taskmodel')

// add task
exports.addtaskController = async (req,res)=>{
    console.log("inside addtaskController");
    // const userId = req.userId
    // console.log(userId);
    const {heading,description,startDate,endDate,status,progress,userId} = req.body
    console.log(req.body);
    try{
        const existingProject =await tasks.findOne({userId})
        if(existingProject){
            res.status(406).json("task already exist in our collection... Please upload another!! ")
        }else{
            const newtask = new tasks({
                heading,description,startDate,endDate,status,progress,userId
            })
            await newtask.save()
            res.status(200).json(newtask)
        }
    }catch(err){
        console.log(err);
        
        res.status(401).json(err)
}

}

// get all tasks
