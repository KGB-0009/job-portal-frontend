import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      text: 'JobNet helped me secure a role at Google in less than a month.'
    },
    {
      name: 'Michael Brown',
      role: 'Backend Engineer',
      text: 'The platform is clean, fast and easy to use.'
    },
    {
        name: 'Linda Smith',
      role: 'UI Designer',
      text: 'I found amazing remote opportunities through JobNet.'
    }
  ]

  const categories = [
    'Software Engineering',
    'UI/UX Design',
    'Marketing',
    'Data Science',
    'Finance',
    'Remote Jobs'
  ]

  return (
    <div>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Connect with top companies, apply easily, and build your future.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="btn">Browse Jobs</Link>
            <Link to="/register" className="btn secondary-btn">Get Started</Link>
          </div>
        </div>
      </section>

       {/* Companies */}
      <section className="companies-section">
        <h2>Trusted By Top Companies</h2>

        <div className="company-grid">
          <div>Google</div>
          <div>Amazon</div>
          <div>Meta</div>
          <div>Netflix</div>
          <div>Microsoft</div>
        </div>
      </section>

       {/* Categories */}
      <section className="categories-section">
        <h2>Popular Categories</h2>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              {category}
            </div>
          ))}
        </div>
      </section>
      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div>
            <h2>10K+</h2>
            <p>Jobs Posted</p>
          </div>

          <div>
            <h2>5K+</h2>
            <p>Successful Hires</p>
          </div>

          <div>
            <h2>2K+</h2>
            <p>Companies</p>
          </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Success Stories</h2>

         <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p>“{item.text}”</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready To Start Your Career?</h2>
        <p>Join thousands of professionals using JobNet.</p>
         <Link to="/register" className="btn">
          Create Free Account
        </Link>
      </section>

      <Footer />
    </div>
  )
}

export default Home

    

