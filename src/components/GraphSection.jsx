import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
    { name: 'Mon', threats: 4000, traffic: 2400 },
    { name: 'Tue', threats: 3000, traffic: 1398 },
    { name: 'Wed', threats: 2000, traffic: 9800 },
    { name: 'Thu', threats: 2780, traffic: 3908 },
    { name: 'Fri', threats: 1890, traffic: 4800 },
    { name: 'Sat', threats: 2390, traffic: 3800 },
    { name: 'Sun', threats: 3490, traffic: 4300 },
];

const incidentData = [
    { name: 'Phishing', count: 120 },
    { name: 'Malware', count: 98 },
    { name: 'DDoS', count: 45 },
    { name: 'Intrusion', count: 30 },
];

const GraphSection = () => {
    return (
        <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
                    Real-time <span style={{ color: 'var(--color-primary)' }}>Threat Monitoring</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>

                    {/* Chart 1: Traffic vs Threats */}
                    <div style={{ padding: '2rem', borderRadius: '1rem', background: '#fff', border: '1px solid #eee', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Network Traffic Analysis</h3>
                        <div style={{ height: '300px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#E60000" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#E60000" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#333" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#333" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="threats" stroke="#E60000" fillOpacity={1} fill="url(#colorThreats)" name="Blocked Threats" />
                                    <Area type="monotone" dataKey="traffic" stroke="#333" fillOpacity={1} fill="url(#colorTraffic)" name="Total Traffic (MB)" />
                                    <Legend />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Chart 2: Incident Types */}
                    <div style={{ padding: '2rem', borderRadius: '1rem', background: '#fff', border: '1px solid #eee', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Incident Response Breakdown</h3>
                        <div style={{ height: '300px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={incidentData}>
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <Tooltip
                                        cursor={{ fill: '#f5f5f5' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="count" fill="#E60000" radius={[4, 4, 0, 0]} name="Incidents" />
                                    <Legend />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GraphSection;
