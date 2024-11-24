import React from 'react';
import './styles/anasayfa.css'; // CSS dosyasını burada çağırın
function AnaSayfa() {

return(
<section id ="anasayfa">
<h1>Ana Sayfa</h1>
<div className="anasayfa-container">
      <h1 className="anasayfa-title">Merhaba, Ben Serhat </h1>
      <p className="anasayfa-description">
        Blockchain Developer
      </p>
      <div className="video-container">
        <video controls autoPlay loop muted className="anasayfa-video">
          <source src="/video.mp4" type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>


</section>



);





}

export default AnaSayfa;