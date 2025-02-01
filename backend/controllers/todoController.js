const Task = require('../models/todo');


const createTask = async (req , res) => {
try{
const { title } = req.body;
const newTask =new Task ({title});
await newTask.save();
res.status(201).json(newTask);
}

catch(error){

    res.status(500).json({message: 'Failed to create task', error});

}
};


const getTasks = async (req,res) => {

    try{

        const tasks = await Task.find();
        res.status(200).json(tasks);

    }

    catch(error){
        res.status(500).json({message: 'Failed to create task', error});
    }

};

const updateTask = async (req,res) => {
    try{

        const { id } = req.params;
        const {title,completed} = req.body;

        const updatedTask = await Task.findByIdAndUpdate(id,{title,completed},{new: true});

        if(!updatedTask){
            return res.status(404).json({message:'Task not found'});
        }

       res.status(200).json(updatedTask);

    }

    catch(error){
        res.status(500).json({message:'Failed to update task',error});
    }
};

const deleteTask = async (req,res) => {
    try{

        const {id} = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
          }
          res.status(200).json({ message: 'Task deleted successfully' });

    }
    catch(error){
        res.status(500).json({ message: 'Failed to delete task', error });
    }
};

module.exports={createTask,getTasks,updateTask,deleteTask};