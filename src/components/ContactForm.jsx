"use client";

import React, { useState } from "react";

const ContactForm = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("");
    const [subject, setSubject] = useState("");
    const [day, setDay] = useState("");
    const [hour, setHour] = useState("");
    const [duration, setDuration] = useState("");
    const [errmsg, setMsg] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                nom,
                prenom,
                email,
                phone,
                message,
                gender,
                subject,
                day,
                hour,
                duration,
            }),
        });

        const { msg, success } = await res.json();

        setIsError(!success)
        setMsg(msg);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="py-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold mb-4">Vos coordonnées</h2>
                    <div className="flex items-center gap-6">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="femme"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="ml-1">Mme</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="homme"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <span className="ml-1">M</span>
                        </label>
                    </div>

                    {/* Nom and Prénom Inputs (in two columns on md+, stacked on mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                id="nom"
                                placeholder="Nom"
                                className="w-full border rounded px-2 py-1"
                                onChange={(e) => setNom((prev) => `${e.target.value} ${prev.split(" ")[1] || ""}`)}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="prenom"
                                placeholder="Prénom"
                                className="w-full border rounded px-2 py-1"
                                onChange={(e) => setPrenom((prev) => `${prev.split(" ")[0] || ""} ${e.target.value}`)}
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Adresse mail"
                            className="w-full border rounded px-2 py-1"
                        />
                    </div>

                    <div>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            id="phone"
                            placeholder="Téléphone"
                            className="w-full border rounded px-2 py-1"
                        />
                    </div>

                    <h2 className="text-lg font-semibold mb-4 mt-8">Disponibilité pour une visite</h2>
                    <div className="grid grid-cols-3 gap-2">
                        <select
                            onChange={(e) => setDay(e.target.value)}
                            className="border rounded px-2 py-1 appearance-none"
                        >
                            <option>Jour</option>
                            <option>Lundi</option>
                            <option>Mardi</option>
                            <option>Mercredi</option>
                            <option>Jeudi</option>
                            <option>Vendredi</option>
                            <option>Samedi</option>
                        </select>

                        <select
                            onChange={(e) => setHour(e.target.value)}
                            className="border rounded px-2 py-1 appearance-none"
                        >
                            <option>Heure</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                        </select>

                        <select
                            onChange={(e) => setDuration(e.target.value)}
                            className="border rounded px-2 py-1 appearance-none"
                        >
                            <option>Temps</option>
                            <option>15 min</option>
                            <option>30 min</option>
                            <option>45 min</option>
                            <option>60 min</option>
                        </select>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold mb-4">Votre message</h2>

                    <div className="flex gap-2">
                        <label>
                            <input
                                type="radio"
                                name="contactType"
                                value="visite"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <span className="ml-1">Demande de visite</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="contactType"
                                value="rappel"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <span className="ml-1">Être rappelé</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="contactType"
                                value="photos"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <span className="ml-1">Plus de photos</span>
                        </label>
                    </div>

                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="h-32 border rounded px-2 py-1"
                        placeholder="Tapez votre message ici..."
                    ></textarea>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="mt-10 bg-amber-500 text-white px-16 py-1 rounded hover:bg-amber-400 transition-all"
                        >
                            Envoyer
                        </button>
                    </div>
                   
                </div>
            </form>
            
                        {errmsg && errmsg.map((e, index) => (
                            <div key={index} className={`mt-4 text-sm ${isError ? "text-red-600" : "text-green-600"}`}>
                                {e + "  "}
                            </div>
                        ))}
                

        </>
    );
};

export default ContactForm;
