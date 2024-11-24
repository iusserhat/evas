import React from 'react';
import "./styles/project.css";


const Projects = () => {
  const projectData = [
    {
      title: 'EatSecure DAO',
      description: 'EatSecure DAO blockchain tabanlı bir tedarik zinciri yönetim ve topluluk temelli ürün denetim platformudur. ',
      link: 'https://github.com/iusserhat/EatSecure-DAO', // Projeye giden bağlantı
     image:"/eat.jpg",
    },
    {
      title: 'Photo Sharing App ',
      description: 'Photo Sharing App; İnstagram ve Facebook benzeri bir fotoğraf paylaşım uygulamasıdır.',
      link: 'https://github.com/iusserhat/photo_sharing_app', // Projeye giden bağlantı
      image:"/photo.jpeg",
    },
    {
      title: 'Weather Quality ',
      description: 'Weather Quality ülkelerin ve şehirlerin hava kalitelerini kullanıcılara gösteren bir projedir.',
      link: 'https://github.com/iusserhat/weatherquality', // Projeye giden bağlantı
      image:"/weats.jpeg"
    },
    {
      title: 'Proof of Stake ',
      description: 'Proof of Stake; POS konsensus mekanizmasını kullanarak çalışan küçük çapta bir mini blockchain ağıdır.',
      link: 'https://github.com/iusserhat/Proof_of_stake', // Projeye giden bağlantı
      image:"/blck.png"
    },

    {
      title: 'Currency Converter ',
      description: 'Currency Converter bir döviz dönüştürme aracıdır.',
      link: 'https://github.com/iusserhat/Currency_converter', // Projeye giden bağlantı
      image:"/dvz.jpeg"
    },

    {
      title: 'BTC Data',
      description: 'BTC data; anlık Bitcoin verilerini sunan bir bottur.',
      link: 'https://github.com/iusserhat/BTC_data', // Projeye giden bağlantı
      image:"/images.png"
    },
    {
      title: 'Lottery App',
      description: 'Lottery App; Blockchain tabanlı bir çekiliş uygulamasıdır.',
      link: 'https://github.com/iusserhat/Lottery-App', // Projeye giden bağlantı
      image:"/images.jpg"
    },

  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>
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
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
