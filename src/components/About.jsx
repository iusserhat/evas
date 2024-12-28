import React from 'react';
import './styles/about.css';
import './DarkMode/DarkMode.css';

function About() {
  const services = [
    {
      title: 'Gençlik Merkezleri',
      description:
        'Gençlerin eğitim alabileceği, sosyal faaliyetlere katılabileceği ve liderlik becerilerini geliştirebileceği merkezler.',
    },
    {
      title: 'Sportif Faaliyetler',
      description:
        'Spor müsabakalara katılım, sporcu gelişimi ve spor altyapısının güçlendirilmesi.',
    },
    {
      title: 'Girişimcilik ve Kariyer Gelişimi',
      description:
        'Gençlere girişimcilik fırsatları sunan programlar ve kariyer planlama danışmanlık hizmetleri.',
    },
    {
      title: 'Uluslararası Gençlik Projeleri',
      description:
        'Gençlerin yurtdışında eğitim ve kültürel değişim fırsatları ile deneyim kazanmalarını sağlamak.',
    },
  ];

  return (
    <section id="about">
      <div className="about-container">
        {/* Card for the title and description */}
        <div className="about-card">
          <div className="about-text">
            <h1 className="about-title">Gençlik ve Spor Bakanlığı Hizmetleri</h1>
            <p className="about-description">
              Gençlik ve Spor Bakanlığı, gençlerin sosyal, kültürel ve sportif gelişimlerini desteklemek amacıyla çeşitli
              hizmetler sunmaktadır. Bu hizmetler, gençlerin potansiyellerini en üst düzeye çıkaracak projeleri
              kapsamaktadır. Bakanlık, gençler için eğitim, liderlik, spor ve sosyal etkinlikler gibi alanlarda pek çok
              fırsat sağlamaktadır.
            </p>
          </div>
        </div>

        {/* Cards for each service */}
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="about-image">
          <img className="img-m" src="/logos.png" alt="Gençlik ve Spor Bakanlığı" />
        </div>
      </div>
    </section>
  );
}

export default About;
