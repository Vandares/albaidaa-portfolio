import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    description:
      'A complete visual identity project including logo direction, colors, typography, and brand applications.',
    image: '/work-brand-1.jpg',
    position: 'box-one',
    works: [
      {
        title: 'Logo Direction',
        image: '/work-brand-1.jpg',
      },
      {
        title: 'Brand Colors',
        image: '/work-brand-2.jpg',
      },
      {
        title: 'Social Media Identity',
        image: '/work-brand-3.jpg',
      },
      {
        title: 'Brand Applications',
        image: '/work-brand-4.jpg',
      },
    ],
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

const preloadedImages = new Set()

function preloadProjectImages(project) {
  const images = [
    project.image,
    ...(project.works ? project.works.map((work) => work.image) : []),
  ]

  images.forEach((src) => {
    if (!src || preloadedImages.has(src)) return

    const img = new Image()
    img.src = src
    preloadedImages.add(src)
  })
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) return

    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <main className="page">
      <section className="map-hero">
        <div className="logo-wrap">
          <img
            className="brand-logo"
            src="/albaidaa-logo.png"
            alt="Albaidaa"
            decoding="async"
            fetchPriority="high"
            draggable="false"
          />
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
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <div className="dust-layer dust-layer-one"></div>
        <div className="dust-layer dust-layer-two"></div>
        <div className="sand-particles sand-particles-one"></div>
        <div className="sand-particles sand-particles-two"></div>
        <div className="map-overlay"></div>

        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={`project-box ${project.position}`}
            onPointerEnter={() => preloadProjectImages(project)}
            onFocus={() => preloadProjectImages(project)}
            onTouchStart={() => preloadProjectImages(project)}
            onClick={() => setSelectedProject(project)}
            aria-label={`Open ${project.title}`}
          >
            <img
              className="treasure-image"
              src="/treasure-chest.png"
              alt=""
              loading="eager"
              decoding="async"
              draggable="false"
            />
            <span className="treasure-number">
              {String(project.id).padStart(2, '0')}
            </span>
          </button>
        ))}
      </section>

      <footer className="footer">
        <p>Albaidaa Studio</p>
        <span>Marketing • Branding • Graphic Design</span>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${selectedProject.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              loading="eager"
              decoding="async"
            />

            <div className="modal-content">
              <p>{selectedProject.category}</p>
              <h2 id={`project-title-${selectedProject.id}`}>
                {selectedProject.title}
              </h2>
              <span>{selectedProject.description}</span>

              {selectedProject.works && selectedProject.works.length > 0 && (
                <div className="works-section">
                  <h3>Our Work</h3>

                  <div className="works-grid">
                    {selectedProject.works.map((work, index) => (
                      <div className="work-card" key={`${work.title}-${index}`}>
                        <img
                          src={work.image}
                          alt={work.title}
                          loading="lazy"
                          decoding="async"
                        />
                        <p>{work.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      )}
    </main>
  )
}

export default App