import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.433422920773!2d-103.320171825395!3d20.651938500615593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3b333c8a255%3A0x87df3d0506d6a5ab!2sServicio%20Industrial%20Alimenticio!5e0!3m2!1sen!2smx!4v1726538666213!5m2!1sen!2smx"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
