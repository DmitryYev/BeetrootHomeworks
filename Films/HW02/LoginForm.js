import React from "react"

const LoginForm = () => (
    <form className="ui form container">
        <div className="field">
            <label className="ui pointing below label">Email</label>
            <input type="email" placeholder="Email" />
        </div>

        <div className="field">
            <label className="ui pointing below label">Password</label>
            <input type="password" placeholder="Password" />
        </div>

        <button className="ui primary button">
            OK
        </button>
        <button className="ui button red">
            Cancel
        </button>
    </form>
)


export default LoginForm;

