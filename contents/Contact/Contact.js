import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
	const form = useRef();
	const [showMessage, setShowMessage] = useState(false);

	const resetForm = () => {
		document.getElementById('form').reset();
	};

	const sendEmail = async e => {
		e.preventDefault();

		try {
			await emailjs.sendForm('service_m5ga7r4', 'template_fxey18x', form.current, 'rzC9tzp05Gdl9lGdO');
			resetForm();
			setShowMessage(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.contact} id='contact'>
			<div className={styles.contactHeader}>
				<h1>Contact Us</h1>
			</div>
			<div className={styles.contactContent}>
				<form ref={form} onSubmit={sendEmail} className={styles.contactForm} id='form'>
					{showMessage && <p>Your message has been sent!</p>}
					<label>Name</label>
					<input type='text' name='user_name' required />
					<label>Email</label>
					<input type='email' name='user_email' required />
					<label>Message</label>
					<textarea name='message' required />
					<input type='submit' value='Send' />
				</form>
				<div className={styles.contactImage}></div>
			</div>
		</div>
	);
};

export default Contact;
