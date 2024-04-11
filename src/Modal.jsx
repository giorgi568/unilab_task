import styles from './styles/modal.module.css';
import PropTypes from 'prop-types';

function Modal({ setModalOpen }) {
  window.onclick = (e) => {
    if (e.target == document.getElementById('modal')) {
      setModalOpen(false);
    }
  };
  return (
    <div className={styles.modal} id='modal'>
      <div className={styles.modalContent}>
        <h3>Terms and conditions</h3>
        <p>
          Before you use our website or services, please carefully read the
          following Terms and Conditions. By accessing or using our platform,
          you agree to comply with and be bound by these terms. If you do not
          agree with any part of these terms, please do not use our services.
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and disclose information about you. By
          using our services, you consent to our privacy practices.
        </p>
        <h3>Privacy policy</h3>
        <p>
          We may collect personal information, such as your name, email address,
          and other details, when you register an account, make a purchase, or
          interact with our services. We also automatically collect certain
          information, such as IP addresses, browser type, and usage patterns,
          through cookies and similar technologies. Our website may contain
          links to third-party websites or services.
        </p>
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(false);
          }}
        >
          I agree
        </button>
      </div>
    </div>
  );
}
Modal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default Modal;
