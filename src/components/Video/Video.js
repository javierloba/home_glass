import video from '../../img/pexels-mikhail-nilov-6497972.mp4'

const Video = () => {
  return (
    <video className="videoTag" autoPlay loop muted>
    <source src={video} type="video/mp4" />
  </video>
  );
};

export default Video;
