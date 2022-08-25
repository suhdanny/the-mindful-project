import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { Loader } from '@googlemaps/js-api-loader';

const Contact = () => {
	const form = useRef<HTMLFormElement>(null);
	const googleMap = useRef<HTMLDivElement>(null);
	const [showMessage, setShowMessage] = useState(false);

	const resetForm = () => {
		(document.getElementById('form') as HTMLFormElement).reset();
	};

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);
			resetForm();
			setShowMessage(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const loader = new Loader({
			apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
			version: 'weekly',
		});

		const university = { lat: 43.653, lng: -79.399 };

		let map: google.maps.Map;

		loader.load().then(() => {
			map = new google.maps.Map(googleMap.current, {
				center: university,
				zoom: 12,
			});

			const marker = new google.maps.Marker({
				position: university,
				map: map,
			});
		});
	}, []);

	return (
		<div className={styles.contact} id='contact'>
			<div className={styles.contactHeader}>
				<h1>Contact Us</h1>
			</div>
			<div className={styles.contactContent}>
				<form ref={form} onSubmit={sendEmail} className={styles.contactForm} id='form'>
					{showMessage && <p>Your message has been sent!</p>}
					<label>Your name*</label>
					<input type='text' name='user_name' required />
					<label>Your email*</label>
					<input type='email' name='user_email' required />
					<label>Your message*</label>
					<textarea name='message' required />
					<button type='submit' className={styles.submitButton}>
						<span className={styles.buttonFront}>Send us your message!</span>
					</button>
				</form>
				<div className={styles.contactMap}>
					<div className={styles.googleMap} ref={googleMap} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
