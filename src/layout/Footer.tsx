const Footer: React.FC<{}> = (props) => {
  return (
    <footer className="footer">
      <div className="social">
        <ul className="social-list">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ricardo_ch"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ricardo_ch"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/user/ricardo777marketing"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/ricardo.ch/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Ricardo.CH/"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
