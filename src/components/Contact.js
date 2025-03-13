import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Contact = () => {

    const [textInputName, setTextInputName] = useState("");
    const [textInputEmail, setTextInputEmail] = useState("");
    const [textArea, setTextArea] = useState("");


     // Event handler untuk mengubah nilai input teks
    const handleTextChangeName = (event) => {
        setTextInputName(event.target.value);
    };

    // Event handler untuk mengubah nilai input teks
    const handleTextChangeEmail = (event) => {
        setTextInputEmail(event.target.value);
    };

    // Event handler untuk mengubah nilai textarea
    const handleTextArea = (event) => {
        setTextArea(event.target.value);
    }; 

    // Event handler untuk mereset formulir
    const resetForm = () => {
        setTextInputName("");
        setTextInputEmail("");
        setTextArea("");
    };

    // Event handler untuk mengirim formulir
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Berhasil disimpan');

        // Data yang dikumpulkan dalam console.log
        console.log('Name :', textInputName);
        console.log('Email :', textInputEmail);
        console.log('Critics/Suggestions :', textArea);

        // Mereset formulir setelah pengiriman
        resetForm();
    };




    return (
        <div>
            <nav>
                <h1 className='title'>SYAFIRA.</h1>
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Portofolio">Portofolio</Link>
                <Link to="/Contact" className="active">Contact</Link>
            </nav>

            <div className='contactContainer'>
                <form onSubmit={handleSubmit}>
                    <div className="containerForm">
                        <div className='cardForm'>
                            <label>
                                <p className='colTitle'><b>Name</b></p>
                                <input type="text" value={textInputName} onChange={handleTextChangeName} autocomplete="off" required/>
                            </label>
                            <label>
                                <p className='colTitle'><b>Email</b></p>
                                <input type="text" value={textInputEmail} onChange={handleTextChangeEmail} autocomplete="off" required/>
                            </label>
                            <label>
                                <p className='colTitle'><b>Critics/Suggestions</b></p>
                                <textarea value={textArea} onChange={handleTextArea} autocomplete="off" required></textarea>
                            </label>
                        </div>
                        <button type="submit" value="Submit"><b>SUBMIT</b></button>
                    </div>
                </form>
                <div className='garisVertikal'></div>
                <div className='contactMe'>
                    <h1 className='formTitle'>Write Your <br />__Opinion</h1>
                    <p className='formSubtitle'>It is very important for me to keep in touch with you, it will make me even better in the future.</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
