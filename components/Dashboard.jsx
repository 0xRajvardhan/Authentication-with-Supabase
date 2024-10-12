import { createSignal, createEffect } from "solid-js";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "@solidjs/router";

const Dashboard = () => {
    const [user, setUser] = createSignal({}); //initial user details
    const navigate = useNavigate();
    const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

    const getLoggedUser = async () => {
        const { data: { user } } = await supabase.auth.api.getUser();
        setUser(user);
        if (!user) {
            navigate("/login", { replace: true });
        }
    }

    createEffect(() => {
        getLoggedUser();
    });

    const logOut = async () => {
        let{error} = await supabase.auth.signOut();
        if (error) {
            alert(error.message);
            return;
        }
        setUser({});
        navigate("/login", { replace: true });
    }


    return (
        <div className="dashboard-section">
            <div className="user-details">
                <h3>Dashboard</h3>
                <h4>Welcome, {user() && user().email}</h4>
                <button type="button" class="logout" onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard;