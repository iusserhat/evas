import React, { useState } from "react";
import "./styles/anasayfa.css";

function AnaSayfa() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [likes, setLikes] = useState(0);

  const storyVideos = ["/Gsb.mp4", "/video.mp4", "/video3.mp4"];

  const sharePlatforms = [
    { name: "WhatsApp", url: "https://wa.me/?text=" },
    { name: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=" },
    { name: "Twitter", url: "https://twitter.com/intent/tweet?url=" },
    { name: "LinkedIn", url: "https://www.linkedin.com/shareArticle?url=" },
  ];

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleShareClick = () => {
    setShowSharePopup(true);
  };

  const closeSharePopup = () => {
    setShowSharePopup(false);
  };

  const handlePlatformShare = (platformUrl) => {
    const videoUrl = window.location.href;
    const shareUrl = `${platformUrl}${encodeURIComponent(videoUrl)}`;
    setUserPoints(userPoints + 50);
    window.open(shareUrl, "_blank");
    closeSharePopup();
  };

  const handleLike = () => {
    setLikes(likes + 1);
    setUserPoints(userPoints + 10);
  };

  return (
    <section id="anasayfa">
      <h1>Ana Sayfa</h1>
      <div className="user-points">Puanınız: {userPoints}</div>

      <div className="anasayfa-container">
        <div className="storybar">
          {storyVideos.map((videoSrc, index) => (
            <div
              key={index}
              className="story-item"
              onClick={() => handleVideoClick(videoSrc)}
            >
              <video className="story-video" loop muted>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <div className="video-container">
          <video controls autoPlay loop muted className="anasayfa-video">
            <source src="/Gsb.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <div className="interaction-section">
            <button className="like-button" onClick={handleLike}>❤️ Beğen ({likes})</button>
            <button className="comment-button">💬 Yorum</button>
            <button className="share-button" onClick={handleShareClick}>📤 Paylaş</button>
          </div>
          <div className="comments-section">
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Yorum yazın..."
                className="comment-input"
              />
              <button type="submit" className="submit-comment">Gönder</button>
            </form>
            <ul className="comments-list">
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content">
            <video controls autoPlay loop muted className="modal-video">
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {showSharePopup && (
        <div className="share-popup">
          <div className="share-popup-content">
            <h2>Paylaşım Yap</h2>
            {sharePlatforms.map((platform, index) => (
              <button
                key={index}
                onClick={() => handlePlatformShare(platform.url)}
                className="share-platform-button"
              >
                {platform.name}
              </button>
            ))}
            <button onClick={closeSharePopup} className="close-popup">Kapat</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default AnaSayfa;
