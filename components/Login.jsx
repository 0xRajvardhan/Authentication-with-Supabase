import { createSignal } from "solid-js";
import { useNavigate, A } from "@solidjs/router";
import { createClient } from '@supabase/supabase-js';

const Login = () => {
    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
    const navigate = useNavigate();
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    const LoginUser = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email(),
            password: password()
        });
        if (error) {
            alert(error.message);
            return;
        }
        if (data) {
            navigate("/dashboard");
        }
    }

    return (
        <div className="account-section">
            <form onSubmit={(e)=> LoginUser(e)}>
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