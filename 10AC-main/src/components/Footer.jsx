import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111', color: 'white', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-white)', marginBottom: '1rem' }}>
                            <Shield size={32} color="var(--color-primary)" />
                            <span>10Acious</span>
                        </div>
                        <p style={{ color: '#999', marginBottom: '1rem' }}>
                            Premier SOC & Managed Services Provider. Securing your infrastructure with tenacity and precision.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#ccc' }}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact Us</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#ccc' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={18} /> info@10Acious.com</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={18} /> +1 (555) 123-4567</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={18} /> 123 Cyber Way, Tech City</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #333', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', color: '#666' }}>
                    &copy; {new Date().getFullYear()} 10Acious. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
