import React from "react"

const RegistrationForm = () => (
    <form className="ui form container">
        <div className="field">
            <label className="ui pointing below label">Email</label>
            <input type="email" name="email" placeholder="Email" />
        </div>

        <div className="field">
            <label className="ui pointing below label">Password</label>
            <input type="password" name="password" placeholder="Password" />
        </div>

        <div className="field">
            <label className="ui pointing below label">Confirm password</label>
            <input type="password" name="Confirm password" placeholder="Confirm password" />
        </div>

        <button className="ui primary button">
            OK
        </button>
        <button className="ui button red">
            Cancel
        </button>
    </form>
)


export default RegistrationForm;

