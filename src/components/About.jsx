import React from 'react';
import "./styles/about.css";
import './DarkMode/DarkMode.css';




function About() {
    return (
        <section id="about">
            <div className="about-container">
                {/* Card */}
                <div className="about-card">
                    {/* Soldaki metin */}
                    <div className="about-text">
                        <h1 className="about-title">Ben Kimim?</h1>
                        <p className="about-description">
                            Merhaba ben Serhat. Yaklaşık 4 senedir yazılım geliştiriyorum. Blockchain teknolojilerine olan ilgim, yenilikçi çözümler üretme ve merkeziyetsiz sistemlerin potansiyelini keşfetme tutkusu ile başladı. Akıllı kontratlar, merkeziyetsiz finans (DeFi), NFT'ler ve Web3 projeleri geliştirme konularında uzmanlaşarak bu alandaki becerilerimi sürekli geliştirdim.

                            Hem kişisel projelerde hem de ekip çalışmalarıyla, blockchain'in gerçek dünya problemlerine getirebileceği çözümleri keşfetmeye odaklandım. Şu anda dApp geliştirme, akıllı kontrat tasarımı ve kripto cüzdanları gibi ileri düzey konulara yoğunlaşmış durumdayım.

                            Amacım, güvenli, şeffaf ve kullanıcı odaklı blockchain projeleri geliştirerek teknoloji dünyasına katkıda bulunmak. Blockchain teknolojisinin geleceği şekillendireceğine inanıyorum ve bu dönüşümün bir parçası olmaktan heyecan duyuyorum.
                        </p>
                    </div>

                    {/* Sağdaki resim */}
                    <div className="about-image">
                        <img className="img-m" src="/logos.png" alt="Blockchain ile ilgili logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
