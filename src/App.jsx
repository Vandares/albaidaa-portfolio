import { useState } from 'react'
import './App.css'

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    description:
      'A complete visual identity project including logo direction, colors, typography, and brand applications.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    position: 'box-one',
  },
  {
    id: 2,
    title: 'Marketing Campaign',
    category: 'Marketing',
    description:
      'A creative marketing campaign designed to communicate the brand message across digital and printed platforms.',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
    position: 'box-two',
  },
  {
    id: 3,
    title: 'Social Media Design',
    category: 'Content Design',
    description:
      'A modern social media design system with consistent layouts, colors, typography, and visual direction.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    position: 'box-three',
  },
  {
    id: 4,
    title: 'Packaging Concept',
    category: 'Packaging',
    description:
      'A premium packaging concept inspired by desert tones, minimal luxury, and tactile brand experiences.',
    image:
      'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1200&q=80',
    position: 'box-four',
  },
  {
    id: 5,
    title: 'Event Visuals',
    category: 'Graphic Design',
    description:
      'A visual direction for an event campaign including key visuals, posters, social posts, and digital assets.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    position: 'box-five',
  },
  {
    id: 6,
    title: 'Website Design',
    category: 'Web Experience',
    description:
      'A website concept designed to present the brand story, services, portfolio, and contact experience beautifully.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    position: 'box-six',
  },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="page">
      <section className="map-hero">
        <div className="brand-panel">
          <p className="eyebrow">Marketing & Graphic Design Studio</p>
          <h1>Albaidaa</h1>
          <p>
            A desert journey through our creative projects. Follow the path and
            open the hidden treasure boxes.
          </p>
        </div>

        <div className="scroll-hint">
          <span></span>
          Scroll to explore
        </div>
      </section>

      <section className="map-section" aria-label="Albaidaa portfolio desert map">
        <img
          className="desert-map-image"
          src="/desert-map.png"
          alt="Albaidaa desert map"
        />

        <div className="map-overlay"></div>

        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={`project-box ${project.position}`}
            onClick={() => setSelectedProject(project)}
            aria-label={`Open ${project.title}`}
          >
            <img
              className="treasure-image"
              src="/treasure-chest.png"
              alt=""
            />
            <span className="treasure-number">0{project.id}</span>
          </button>
        ))}
      </section>

      <footer className="footer">
        <p>Albaidaa Studio</p>
        <span>Marketing • Branding • Graphic Design</span>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <article className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              className="close-button"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
            >
              ×
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} />

            <div className="modal-content">
              <p>{selectedProject.category}</p>
              <h2>{selectedProject.title}</h2>
              <span>{selectedProject.description}</span>
            </div>
          </article>
        </div>
      )}
    </main>
  )
}

export default App