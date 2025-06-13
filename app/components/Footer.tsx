import Logos from "../Logos";

const Footer = () => {
  return (
    <footer className="py-4 ">
      <div className="flex flex-col">
        <div className="flex gap-8 justify-center items-center py-4">
          <a
            href="https://linkedin.com/in/reyhan-putra-syailendra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.linkedin />
          </a>
          <a
            href="https://github.com/reyhanputras"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.github />
          </a>
          <a href="mailto:reyhanputra4846@gmail.com">
            <Logos.gmail />
          </a>
          <a
            href="https://wa.me/628999230396"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.whatsapp />
          </a>
          <a
            href="https://www.instagram.com/_rforreyhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.instagram />
          </a>
        </div>
        <div className="py-4 text-center">
          <p>&copy; 2025 Reyhan Putra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
