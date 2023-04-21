import React from "react";
import styles from "@/components/login/Register.module.css";
import { useState } from "react";

function Register() {
	const [formState, setFormState] = useState({ name: "", email: "", password: "" });
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({ ...prevState, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState); // Do something with the form data
	};
	return (
		<div className={styles.card}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2 className={styles.title}>Register</h2>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required />

				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" value={formState.password} onChange={handleChange} required />

				<button type="submit">register</button>
			</form>
		</div>
	);
}

export default Register;