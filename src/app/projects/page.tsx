import Projects from '@/components/sections/Projects/Projects';

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: '140px', background: 'var(--background)' }}>
      <Projects />
      <section className="section container" style={{ borderTop: '1px solid var(--border-color)', marginTop: 'var(--spacing-xl)' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.3em', 
            color: 'var(--accent)', 
            fontWeight: 700,
            display: 'block',
            marginBottom: 'var(--spacing-sm)'
          }}>Upcoming Ventures</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--primary)' }}>Future Landmarks</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Stay tuned as we continue to shape the urban landscape of Bangladesh with more premium developments 
            under the trusted banner of <strong>CPH Ltd. Bangladesh</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
