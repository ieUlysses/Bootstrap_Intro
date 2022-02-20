import { React, useState } from 'react';

//Formspree import
import { useForm, ValidationError } from '@formspree/react';

function ContactF() {

    const [state, handleSubmit] = useForm("mdobgwdb");
    if (state.succeeded) {
        return <div className='container'>
            <p style={{ fontFamily: "Roboto" }} className='text-start'>
                Message sent successfully
            </p>
        </div>
    }


    return (
        <>

            <form className='container' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb-3">

                            <label style={{ fontFamily: "Roboto" }} htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-control" id="emailInput"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />


                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label style={{ fontFamily: "Roboto" }} htmlFor="name">
                                Name
                            </label>
                            <input
                                className="form-control" id="name"
                                id="name"
                                type="name"
                                name="name"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mb-3">


                            <label style={{ fontFamily: "Roboto" }} for="mesageInput" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control" id="messageInput" aria-label="textarea"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />



                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                        </div>
                    </div>
                </div>
                <div classNameName="row">
                    <div classNameName="col-sm-12">

                        <button className="btn btn-warning text-light" type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>

        </>
    )
}

function ContactForm() {
    return (
        <ContactF />
    );
}
export default ContactForm;




