import { useState } from "react";
import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import logo from "../assets/zepfterlogo.png";

function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();

        try {
            if (isSignup) {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Account created successfully!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }

            navigate("/dashboard");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">

                {/* Logo */}
                <img src={logo} alt="Zepfter Logo" className="auth-logo" />

                <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

                <form onSubmit={handleAuth}>
                    <input
                        type="email"
                        placeholder="📧 Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="🔒 Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        {isSignup ? "Create Account" : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="divider">or</div>

                {/* Switch Section */}
                <div className="auth-switch">
                    <p>
                        {isSignup
                            ? "Already have an account?"
                            : "Don't have an account?"}
                    </p>

                    <button onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? "Login Instead" : "Create Account"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Auth;