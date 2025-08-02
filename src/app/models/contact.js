import mongoose, { Schema } from "mongoose";
import { type } from "os";

const contactSchema = new Schema({
    nom: {
        type: String,
        required: [true, "Le nom est requis"],
        trim: true,
        minlength: [2, "Le nom doit contenir au moins 2 caractères"],
        maxlength: [50, "Le nom doit contenir moins de 50 caractères"]
    },
    prenom: {
        type: String,
        required: [true, "Le prénom est requis"],
        trim: true,
        minlength: [2, "Le prénom doit contenir au moins 2 caractères"],
        maxlength: [50, "Le prénom doit contenir moins de 50 caractères"]
    },
    email: {
        type: String,
        required: [true, "L'email est requis"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Adresse e-mail invalide"]
    },
    gender: {
        type: String,
        required: [true, "Le genre est requis"]
    },
    day: {
        type: String,
    },
    hour: {
        type: String,
    },
    duration: {
        type: String,
    },
    subject: {
        type: String,
        required: [true, "Le sujet est requis"]
    },
    message: {
        type: String,
        required: [true, "Le message est requis"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
