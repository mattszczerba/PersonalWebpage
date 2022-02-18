import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
    const [state, handleSubmit] = useForm("xlezbwaj");
    return (
        <div>
            <div>
                <h2>Contact: </h2>
                <p>Feel free to contact me via my email address or form below:</p>
                <a href = "mailto: mattszczerba@outlook.com">mattszczerba@outlook.com</a><br/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                      Name:
                    </label>
                    <input
                      id="name"
                      type="name" 
                      name="name"
                    />
                    <label htmlFor="email">
                      Email Address:
                    </label>
                    <input
                      id="email"
                      type="email" 
                      name="email"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                    <label htmlFor="message">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                      Submit
                    </button>
                </form>
            </div>
            {state.succeeded && <p>Message sent!</p>}
        </div>
    );
}