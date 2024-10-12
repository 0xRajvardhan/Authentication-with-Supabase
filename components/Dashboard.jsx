import { createSignal } from "solid-js";

const Dashboard = () => {
    const[user, getUser] = createSignal({}); //initial user details

    return (
        <div className="dashboard-section">
            <div className="user-details">
                <h3>Dashboard</h3>
                <h4>Welcome, user!</h4>
                <button type="button" class="logout">Logout</button>
            </div>
        </div>
    )
}

export default Dashboard;