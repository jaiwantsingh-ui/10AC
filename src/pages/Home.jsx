import React from 'react';
import Layout from '../components/Layout';
import GraphSection from '../components/GraphSection';
import { ShieldCheck, Eye, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                color: 'white',
                padding: '5rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract background element */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,0,0,0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div className="animate-fade-in">
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Uncompromising <span style={{ color: 'var(--color-primary)' }}>Security</span><br />
                            For The Modern Enterprise
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            10Acious delivers next-generation SOC and Managed Services. We turn vulnerability into strength with 24/7 monitoring and rapid threat neutralization.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                                Start Protection
                            </Link>
                            <Link to="/about" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '5rem 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                        <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(230, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                <Eye size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>24/7 Monitoring</h3>
                            <p style={{ color: '#666' }}>Round-the-clock vigilance. We see threats before they impact your business operations.</p>
                        </div>

                        <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(230, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                <ShieldCheck size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Managed SOC</h3>
                            <p style={{ color: '#666' }}>A dedicated security operations center acting as an extension of your IT team.</p>
                        </div>

                        <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(230, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                <Zap size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Rapid Response</h3>
                            <p style={{ color: '#666' }}>Automated containment and expert remediation to minimize downtime and damage.</p>
                        </div>

                        <div style={{ padding: '2rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(230, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                <Lock size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Compliance Ready</h3>
                            <p style={{ color: '#666' }}>Helping you meet regulatory standards (GDPR, HIPAA, SOC2) with comprehensive reporting.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Graph Section */}
            <GraphSection />

            {/* CTA Section */}
            <section style={{ padding: '5rem 0', background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to secure your infrastructure?</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Join the leading organizations that trust 10Acious with their most critical assets.
                    </p>
                    <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--color-primary)', fontWeight: 'bold', padding: '1rem 3rem' }}>
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
