import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;
