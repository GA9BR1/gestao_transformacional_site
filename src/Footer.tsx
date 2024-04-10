import './Footer.css';
import instagramIcon from './assets/instagram-icon.svg'
import facebookIcon from './assets/facebook-icon.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className="social-media">
          <a href="https://www.facebook.com/gestaotransformacional?mibextid=dGKdO6" target="_blank">
            <img src={facebookIcon} alt="Ícone do Facebook" />
          </a>
          <a href="https://www.instagram.com/gestaotransformacional/" target="_blank">
            <img src={instagramIcon} alt="Ícone do Instagram" />
          </a>
        </div>
        <p>&copy; 2024 Gestão Transformacional. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;