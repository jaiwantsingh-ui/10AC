import React from 'react';
import Layout from '../components/Layout';
import { Award, Users, Globe } from 'lucide-react';

const About = () => {
    return (
        <Layout>
            <section style={{ background: '#111', color: 'white', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>About <span style={{ color: 'var(--color-primary)' }}>10Acious</span></h1>
                    <p style={{ fontSize: '1.25rem', color: '#aaa', maxWidth: '700px', margin: '0 auto' }}>
                        We are a team of dedicated cybersecurity experts committed to defending the digital frontier.
                    </p>
                </div>
            </section>

            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Tenacity is in our <span style={{ color: 'var(--color-primary)' }}>DNA</span>.
                            </h2>
                            <p style={{ marginBottom: '1.5rem', color: '#444', fontSize: '1.1rem' }}>
                                Founded in 2024, 10Acious emerged from a simple belief: that modern threats require more than just software—they require a relentless, human-led defense strategy.
                            </p>
                            <p style={{ marginBottom: '1.5rem', color: '#444', fontSize: '1.1rem' }}>
                                As a Managed Services Provider and SOC, we integrate seamlessly with your organization. We don't just alert you to problems; we solve them. Our state-of-the-art facility monitors global threat intelligence feeds to proactively shield our clients.
                            </p>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            {/* Placeholder for an image or graphic */}
                            <div style={{ width: '100%', height: '400px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #eee 0%, #ddd 100%)' }}>
                                <div style={{ textAlign: 'center', color: '#888' }}>
                                    <Users size={64} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                    <p>Team Office / SOC Floor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Globe size={48} /></div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>50+</h3>
                            <p style={{ color: '#666' }}>Countries Served</p>
                        </div>
                        <div>
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Users size={48} /></div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>24/7</h3>
                            <p style={{ color: '#666' }}>Expert Support</p>
                        </div>
                        <div>
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Award size={48} /></div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>100%</h3>
                            <p style={{ color: '#666' }}>Client Retention</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
