import mongoose from 'mongoose';

// created db to store projects
// can efficiently search, store, and manage projects in atlas gui

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    languages: {
        type: [String],
        required: true,
    },
    tech: {
        type: [String],
        required: true
    },
    link: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;