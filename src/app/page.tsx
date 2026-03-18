import Hero from '@/components/sections/Hero/Hero';
import Projects from '@/components/sections/Projects/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <section className="section" style={{ background: 'var(--primary-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Our Mission</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            To deliver exceptional real estate projects that combine innovative design with sustainable building practices, 
            creating lasting value for our clients and communities.
          </p>
        </div>
      </section>
    </>
  );
}
