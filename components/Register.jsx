import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

const Register = () => {
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    return (
        <div className="register-section">
            <form>
                <h3>Register</h3>

                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Register</button>

                <span>
                    Already have an account? <A href="/login">Login here</A>
                </span>
            </form>
        </div>
    )
}

export default Register;