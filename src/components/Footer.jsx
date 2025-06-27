import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-superior">
        <div className="redes">
          <h4>Seguime en redes</h4>
          <div className="iconosFooter">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="contactos">
          <h4>Contactame directamente</h4>
          <div className="iconosFooter">
            <a
              href="https://wa.me/5491153363908"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://t.me/german_op"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="mailto:german.oliverapere@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <h4>&copy; 2025 | Alquimia Femenina</h4>
      </div>
    </footer>
  );
};
export default Footer;
