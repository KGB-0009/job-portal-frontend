import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      console.log(error);
      setError("Failed to load job details");
    } finally {
      setLoading(false);
    }
  };

const handleApply = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  if (!resume) {
    alert("Please upload your PDF resume");
    return;
  }

  const formData = new FormData();
  formData.append("user_id", user.id);
  formData.append("job_id", id);
  formData.append("resume", resume);

  try {
    setApplying(true);

    const res = await api.post(
      "/applications/apply",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    alert(res.data.message);
    setResume(null);
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Application failed"
    );
  } finally {
    setApplying(false);
  }
};

  if (loading) {
    return (
      <div className="loading-page">
        <h2>Loading job details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-page">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="loading-page">
        <h2>Job not found</h2>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      <div className="job-details-card">
        {/* Job Header */}
        <div className="job-header">
          <h1>{job.title}</h1>

          <div className="job-details-meta">
            <span>{job.company}</span>
            <span>{job.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="job-description">
          <h2>Job Description</h2>
          <p>{job.description}</p>
        </div>

        {/* Requirements (Optional future section) */}
        <div className="job-description">
          <h2>Why Join This Company?</h2>
          <p>
            Work with talented professionals, build impactful
            products, and grow your career in a supportive
            environment.
          </p>
        </div>

        {/* Apply Section */}
        <div className="apply-section">
          <h2>Apply For This Job</h2>
          <p>
            Submit your resume/portfolio link below.
          </p>

          <form onSubmit={handleApply}>
            <textarea
              placeholder="Paste your resume link, LinkedIn profile, GitHub portfolio, or Google Drive resume link..."
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              required
            />

            <button type="submit">
              {applying ? "Submitting..." : "Apply Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

<button
  className="back-btn"
  onClick={() => navigate(-1)}
>
  ← Back
</button>

export default JobDetails;