import React, { useState } from 'react';
import axios from 'axios';

function PrePurchaseInspection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/leads', { ...formData, serviceType: 'Pre-Purchase Inspection' });
            alert('Form submitted successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Pre-Purchase Inspection</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Additional Message" value={formData.message} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PrePurchaseInspection;
