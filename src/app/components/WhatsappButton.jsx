import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "6282233083081";
  const message = "Hi, I have a question about your services!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "15px",
        borderRadius: "50%",
        fontSize: "24px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
