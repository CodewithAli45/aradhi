import Projects from '@/components/sections/Projects/Projects';

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 'var(--spacing-xl)' }}>
      <Projects />
      <section className="section container" style={{ borderTop: '1px solid rgba(144, 163, 176, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>All Developments</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          Explore our complete portfolio including upcoming and past successful projects.
        </p>
        {/* Additional project listing could go here */}
      </section>
    </div>
  );
}
