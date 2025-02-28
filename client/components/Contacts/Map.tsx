import "./Map.scss";

export default function Map() {
  return (
    <div className="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0763776408!2d24.02231491571478!3d49.83815797939652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d1a744b63%3A0x9a5a63d3ed5b5a91!2sIvana%20Franka%20St%2C%2048%2C%20L&#39;viv%2C%20Lviv%20Oblast%2C%20Ukraine%2C%2079000!5e0!3m2!1sen!2sus!4v1614267938919!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта офиса"
        className="map"
      ></iframe>
    </div>
  );
}
