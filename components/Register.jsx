import { createSignal } from "solid-js";
import { useNavigate, A } from "@solidjs/router";

import { createClient } from '@supabase/supabase-js';

const Register = () => {
    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
    const navigate = useNavigate();
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    const RegisterUser = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email: email(),
            password: password()
        });
        if (error) {
            alert(error.message);
            return;
        }
        if (data) {
            navigate("/");
        }
    }

    return (
        <div className="register-section">
            <form onSubmit={(e)=> RegisterUser(e)}>
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