import { useEffect, useState } from "react";
import api from "../services/api";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let filtered = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    });

    setFilteredJobs(filtered);
  }, [search, location, jobs]);

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1>Find Your Next Opportunity</h1>
        <p>Browse jobs from top companies worldwide</p>
      </div>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p className="no-jobs">No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;