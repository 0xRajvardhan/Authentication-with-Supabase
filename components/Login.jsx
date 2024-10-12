import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

const Login = () => {
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    return (
        <div className="account-section">
            <form>
                <h3>Login</h3>

                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>

                <span>
                    Don't have an account? <A href="/register">Register here</A>
                </span>

            </form>
        </div>
    )
}

export default Login;