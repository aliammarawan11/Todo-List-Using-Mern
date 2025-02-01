import axios from 'axios';

const API_URI = 'http://localhost:4000/api/tasks'

const fetchTasks = async() => {
    try{

        const response =await axios.get(API_URI);
        return response.data;

    }

    catch(error)
    {

        console.error('Error fetching tasks',error);
        throw error;

    }
};

const createTask = async (title) => {

    try{
    const response = await axios.post(API_URI,{title});
    return response.data;
    }
    catch (error) {
        console.error('Error creating task', error);
        throw error;
      }

};

const updateTask = async (id,title,completed) => {
    try{
        const response = await axios.put(`${API_URI}/${id}`,{title,completed});
        return response.data;

    }
    catch (error) {
        console.error('Error updating task', error);
        throw error;
      }
};

const deleteTask=async (id) => {
    try {
        const response =await axios.delete(`${API_URI}/${id}`);
        return response.data;
        
    } catch (error) {
        console.error('Error deleting task', error);
    throw error;
    }
    
};

export { fetchTasks, createTask, updateTask, deleteTask };