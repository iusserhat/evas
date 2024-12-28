import React from 'react';
import "./styles/project.css";

const Projects = () => {
  const projectData = [
    {
      title: 'Gençlik ve Spor Bakanlığı Eğitim Programları',
      description: 'Gençlik ve Spor Bakanlığı, gençlerin eğitim ihtiyaçlarını karşılamak için çeşitli eğitim programları sunmaktadır. Bu programlar, gençlerin liderlik, takım çalışması ve sosyal beceriler gibi konularda gelişmelerini sağlar.',
      link: '#', // Placeholder for link (if you have one)
      image: "/genclik.png",
    },
    {
      title: 'Kariyer ve Girişimcilik Fırsatları',
      description: 'Bakanlık, gençler için kariyer planlaması, iş bulma, girişimcilik ve liderlik gelişimini destekleyen çeşitli fırsatlar sunmaktadır. Bu fırsatlar, gençlerin kendi işlerini kurmalarına veya kariyerlerinde ilerlemelerine yardımcı olur.',
      link: '#', // Placeholder for link
      image: "/kariyer.png",
    },
    {
      title: 'Spor ve Sağlık Programları',
      description: 'Spor programları, gençlerin fiziksel ve zihinsel sağlıklarını geliştirmelerine yardımcı olan etkinlikler sunmaktadır. Gençler, spor faaliyetleri aracılığıyla disiplin, motivasyon ve sağlık bilinci kazanır.',
      link: '#', // Placeholder for link
      image: "/spor.png",
    },
    {
      title: 'Uluslararası Eğitim ve Değişim Programları',
      description: 'Gençlerin yurtdışında eğitim alarak kültürel deneyim kazanmalarını sağlayan projelerdir. Bu programlar, gençlerin küresel düzeyde rekabet edebilir beceriler kazanmalarına yardımcı olur.',
      link: '#', // Placeholder for link
      image: "/degisim.png",
    },
    {
      title: 'Blockchain ve Web3 Eğitim Programları',
      description: 'Bakanlık, gençlerin dijital dünyada güçlü bir yer edinmeleri için Blockchain ve Web3 teknolojileri üzerine eğitimler düzenlemektedir. Bu eğitimler, gençlerin geleceğin teknolojilerine hakim olmalarını sağlar.',
      link: '#', // Placeholder for link
      image: "/blockchain.png",
    },
    {
      title: 'Kariyer Danışmanlık Hizmetleri',
      description: 'Gençlere kariyer planlama ve iş hayatına hazırlık konusunda profesyonel danışmanlık hizmetleri sunulmaktadır. Bu hizmetler, kişisel gelişim ve profesyonel becerilerin artırılmasına yönelik fırsatlar yaratır.',
      link: '#', // Placeholder for link
      image: "/kariyers.png",
    },
  ];

  return (
    <section id="projects">
      <h1>Eğitimler ve Kariyer Fırsatları</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Detaylar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
