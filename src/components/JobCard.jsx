import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <div className="job-meta">
        <span className="company-badge">{job.company}</span>
        <span className="location-badge">{job.location}</span>
      </div>

      <p>
        {job.description?.slice(0, 120)}...
      </p>

      <Link to={`/jobs/${job.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default JobCard;