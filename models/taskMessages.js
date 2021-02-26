import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    id: String,
    title: String,
    description: String,
    status: String,
    date: {
        type: Date,
        default: new Date,
    }
});

const TaskModel = mongoose.model('TaskModel', taskSchema);

export default TaskModel;