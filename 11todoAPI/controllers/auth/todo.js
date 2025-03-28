let todos=[];

//Add new task
const addData=(req,res,next)=>{
    //logic
    try{
        const { task }=req.body;

        if(!task){
            res.status(400).json({
                message:"Todo is required"
            })
        }

        const newTask={id:todos.length+1,task,completed:false};
        todos.push(newTask);

        res.status(201).json({
            message:"Todo added sucessfully",
            task:newTask

        })

    }catch(error){
        (next)

    }

}

//get data

const getData = (req, res, next) => {
    try {
        res.status(200).json({
            task: todos
        });
    } catch (error) {
        next(error);
    }
}


//UpdateData
const updateData=(req,res,next)=>{
    try {
        const { id } = req.params;
        const { task } = req.body;

        let todo = null;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === parseInt(id)) { // Find the task with the id
                todo = todos[i]; // Get the task
                if (task) {
                    todos[i].task = task; // Update the task if provided
                } else {
                    return res.status(400).json({ message: "Task is required to update" });
                }
                break;
            }
        }

        if (!todo) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated", task: todo });
    } catch (error) {
        next(error);
    }
}


//deleteData
const deleteData=(req,res,next)=>{
    try{
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        const numericId = parseInt(id, 10); // Convert id to a number

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === numericId) {
                todos.splice(i, 1); // Remove the task at index i
                return res.status(200).json({ message: "Todo deleted successfully" });
            }
        }

        res.status(404).json({ message: "Todo not found" });

    }catch(error){ 
         (next)
    }
}


module.exports={getData,addData,updateData,deleteData};
