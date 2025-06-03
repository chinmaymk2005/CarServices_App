import { useState } from "react";



const auth = () => { 

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", Email);
        console.log("Password:", Password);
        // You can add API calls here to authenticate the user
        // For example, you might want to send a POST request to your backend
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: Email, password: Password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to dashboard or show success message
            } else {
                // Show error message
            }
        })   
        setEmail("");
        setPassword("");

    }
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Authentication</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                    </div>
                    <button onClick={handleLogin} type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
                </form>
            </div>
        </div>
    )
}
export default auth;