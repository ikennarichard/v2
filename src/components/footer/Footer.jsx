const Footer = () => {
  return (
    <span
      style={{
        fontSize: "0.66rem",
        color: "grey",
        position: "fixed",
        bottom: "5em",
        left: "-2em",
        transition: "transform 0.4s ease, left 0.3s ease",
        transform: "rotate(-90deg)",
        letterSpacing: "0.2px",
      }}
      className="date"
    >
      <i>©2025</i>
    </span>
  );
};

export default Footer;
