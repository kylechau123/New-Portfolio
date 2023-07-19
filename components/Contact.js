import React, { useState } from 'react';

const Contact = () => {

    const [formMessage, setFormMessage] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const onChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'email') {
            const email = e.target.value;
            if (validateEmail(email)) {
                setFormMessage('');
            } else {
                setFormMessage('Please enter a valid email address');
            }
        }
        else if (e.target.name === 'name') {
            const name = e.target.value;
            if (name.length > 0) {
                setFormMessage('');
            } else {
                setFormMessage('Please enter a name');
            }
        }
        else if (e.target.name === 'message') {
            const message = e.target.value;
            if (message.length > 0) {
                setFormMessage('');
            } else {
                setFormMessage('Please enter a message');
            }
        }
        else {
            setFormMessage('');
        }
    }

    return (
        <section>
            <div className="contact">
                <h1>Contact</h1>
                <p>Phone: 201-741-5015</p>
                <p>Email: <a href="mailto:kylechau123@gmail.com">
                    kylechau123@gmail.com
                </a>
                </p>

                <form method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" required onBlur={onChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required onBlur={onChange} />
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" required onBlur={onChange}></textarea>

                    {formMessage && <p className="form-message">{formMessage}</p>}

                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );

}

export default Contact;
