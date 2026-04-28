import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      /**
       * TEMP ADMIN LOGIN
       * Replace with backend admin auth later
       */

      if (
        formData.email === "admin@gmail.com" &&
        formData.password === "admin123"
      ) {
        localStorage.setItem("admin", "true");

        alert("Admin login successful");

        navigate("/admin/dashboard");
      } else {
        setError("Invalid admin credentials");
      }

      /**
       * REAL BACKEND LOGIN VERSION (use later)
       *
       * const res = await api.post("/auth/admin-login", formData)
       *
       * localStorage.setItem("adminToken", res.data.token)
       * navigate("/admin/dashboard")
       */
    } catch (error) {
      console.log(error);
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Admin Login</h1>
        <p>Access admin dashboard</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;