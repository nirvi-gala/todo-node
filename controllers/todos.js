import mongoose from "mongoose";
import TaskModel from "../models/taskMessages.js";

export const getTodos = async (req,res) => {
    try {
        let todos = await TaskModel.find();
        res.status(200).json({ result: todos})
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const createTodos = async (req,res) => {
    const todo = req.body;
    const newTodo = new TaskModel(todo);
    try {
        await newTodo.save();
        res.status(201).json({ result: newTodo})
    } catch (error) {
        res.status(409).json({ message: error })
    }
} 

export const updateTodos = async (req,res) => {
    try {
        const { id: _id } = req.params;
        const todo = req.body;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that Id')
        const updatedTodo = await TaskModel.findByIdAndUpdate(_id, {...todo, _id}, { new: true });
        // res.status(200).json({ result: updatedTodo });
        res.status(200).json({ result: updatedTodo  })
    } catch (error) {
        // res.status(400).json({ message: error })
        console.log(error)
    }

}