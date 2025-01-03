import './Contact.css'

function Contact({ isOpen, onClose }) {
    return (
        <div className={`contact-page ${isOpen ? 'open' : ''}`}>
            <h1>contact</h1>
        </div>
    );
}

export default Contact;