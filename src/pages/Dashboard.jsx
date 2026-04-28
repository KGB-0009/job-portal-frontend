import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await api.get(`/applications/user/${user.id}`);
      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async (id) => {
    try {
      await api.delete(`/applications/${id}`);
      alert("Application withdrawn successfully");
      fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-page">
      <h1>My Applications</h1>

      <div className="applications-grid">
        {applications.length > 0 ? (
          applications.map((app) => (
            <div className="application-card" key={app.id}>
              <h3>{app.title}</h3>
              <p>{app.company}</p>
              <p>{app.location}</p>

              <span className={`status ${app.status}`}>
                {app.status}
              </span>

              <a
                href={app.resume}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

              <button
                onClick={() => handleWithdraw(app.id)}
              >
                Withdraw
              </button>
            </div>
          ))
        ) : (
          <p>No applications submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;