import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
    try {
        const {

            nom,
            prenom,
            email,
            phone,
            message,
            gender,
            day,
            hour,
            duration,
            subject,

        } = await req.json();

        await connectDB();

        await Contact.create({
            nom,
            prenom,
            email,
            phone,
            message,
            gender,
            day,
            hour,
            duration,
            subject,
        });

        return NextResponse.json({ msg: ["Message envoyé avec succès"], success: true });
    } catch (error) {

        if (error instanceof mongoose.Error.ValidationError){
            let errorList = []
            for(let e in error.errors){
                errorList.push(error.errors[e].message)
            }
            return NextResponse.json({msg: errorList, success: false})
        } else {
            return NextResponse.json({msg: ["Erreur lors de l'envoi du message"]})
        }
        // console.error("Erreur API:", error);
        // return NextResponse.json(
        //     { msg: "Erreur lors de l'envoi du message", success: false },
        //     { status: 500 }
        // );
    }
}



