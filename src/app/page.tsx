import Hero from '@/components/sections/Hero/Hero';
import Projects from '@/components/sections/Projects/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <section className="section" style={{ background: 'var(--background-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.3em', 
            color: 'var(--accent)', 
            fontWeight: 700,
            display: 'block',
            marginBottom: 'var(--spacing-sm)'
          }}>Our Commitment</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>The Aradhi Distinction</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            At Aradhi Tower, we believe that luxury is in the details. As a premier project of <strong>CPH Ltd. Bangladesh</strong>, 
            we set out to redefine the skyline of Bangladesh with architectural masterpieces that stand the test of time. 
            Our philosophy is simple: we don't just build apartments; we craft homes where every corner tells a story of elegance and comfort.
          </p>
          <div style={{ marginTop: 'var(--spacing-lg)' }}>
            <button className="btn">Learn More About Us</button>
          </div>
        </div>
      </section>
    </>
  );
}
