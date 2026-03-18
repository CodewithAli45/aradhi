import styles from './Projects.module.css';
import PropertyCard from '@/components/common/PropertyCard/PropertyCard';

const featuredProjects = [
  {
    id: 1,
    title: "Azure Heights",
    location: "Downtown Marina",
    price: "From $1.2M",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    type: "Residential"
  },
  {
    id: 2,
    title: "Eco Valley Villas",
    location: "Green Ridge",
    price: "From $850k",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    type: "Villa"
  },
  {
    id: 3,
    title: "The Zenith Office",
    location: "Business District",
    price: "From $2.1M",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    type: "Commercial"
  }
];

const Projects = () => {
  return (
    <section className={`${styles.projects} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Featured Projects</h2>
          <p>Discover our award-winning architectural masterpieces.</p>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map(project => (
            <PropertyCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
