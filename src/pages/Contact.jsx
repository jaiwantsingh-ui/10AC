import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting 10Acious. We will respond shortly.');
    };

    return (
        <Layout>
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Get In <span style={{ color: 'var(--color-primary)' }}>Touch</span></h1>
                        <p style={{ fontSize: '1.25rem', color: '#666' }}>Ready to upgrade your security posture? Let's talk.</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>

                        {/* Contact Info */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '1rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Contact Information</h2>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold' }}>Headquarters</h4>
                                        <p style={{ color: '#666' }}>123 Cyber Way, Tech City<br />CA 90210, USA</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold' }}>Phone</h4>
                                        <p style={{ color: '#666' }}>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold' }}>Email</h4>
                                        <p style={{ color: '#666' }}>support@10Acious.com<br />sales@10Acious.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ flex: 1.5, minWidth: '300px' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                        <input
                                            type="text"
                                            required
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ddd', fontSize: '1rem' }}
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                        <input
                                            type="email"
                                            required
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ddd', fontSize: '1rem' }}
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                    <textarea
                                        rows="6"
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }}
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Send Message <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
