import React from 'react';

function ContactForm() {
    return (
        <>

            <form className='container'>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label style={{ fontFamily: "Roboto" }} for="emailInput" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="emailInput" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label style={{ fontFamily: "Roboto" }} for="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nameInput" />
                        </div>
                    </div>
                </div>
                <div classNameName="row">
                    <div className="col-sm-12">
                        <div className="mb-3">
                            <label style={{ fontFamily: "Roboto" }} for="mesageInput" className="form-label">Message</label>
                            <textarea class="form-control" id="messageInput" aria-label="textarea"></textarea>
                        </div>
                    </div>
                </div>
                <div classNameName="row">
                    <div classNameName="col-sm-12">  <button type="submit" className="btn btn-warning text-light">Send</button></div>
                </div>
            </form>

        </>
    )
}

export default ContactForm;
