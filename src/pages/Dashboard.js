import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Dashboard() {

    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <h1>Zepfter Pharma Dashboard</h1>

            <button onClick={handleLogout}>Logout</button>

            <h3>Modules:</h3>
            <ul>
                <li>Pharma Skills</li>
                <li>IT Skills</li>
                <li>Courses</li>
                <li>Documents</li>
                <li>LIMS</li>
                <li>Compliance</li>
            </ul>
        </div>
    );
}

export default Dashboard;