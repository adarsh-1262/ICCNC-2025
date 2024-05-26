// ThemesPage.js
import React from 'react';

const ConferenceThemes = () => {
  // Themes data
  const themes = [
    { id: 1, title: 'Next Generation Communications', description: 'Explore the advancements in communication technologies.' },
    { id: 2, title: 'Wireless Sensor Networks', description: 'Learn about the deployment and applications of wireless sensor networks.' },
    { id: 3, title: 'VANET and MANET', description: 'Discover the latest developments in vehicular ad hoc networks and mobile ad hoc networks.' },
    { id: 4, title: 'Communication Protocols and Design', description: 'Discuss the design and optimization of communication protocols.' },
    { id: 5, title: '5G and Beyond', description: 'Examine the future of 5G networks and emerging communication technologies.' },
    { id: 6, title: 'Wave Propagation and Antenna Design', description: 'Explore wave propagation phenomena and antenna design principles.' },
    { id: 7, title: 'Hardware Design and VLSI Technology', description: 'Learn about hardware design methodologies and VLSI technology trends.' },
    { id: 8, title: 'Smart Grid, Power Optimization and Control', description: 'Understand the integration of smart grid technologies, power optimization strategies, and control systems.' },
    { id: 9, title: 'Renewable Energy Resources', description: 'Explore the utilization of renewable energy sources for sustainable power generation.' },
    { id: 10, title: 'Network and Information Security', description: 'Discuss the latest trends and techniques in network and information security.' },
    { id: 11, title: 'Big Data and Data Analytics', description: 'Explore big data analytics methods and applications.' },
    { id: 12, title: 'Social Networking', description: 'Examine social networking platforms and their impact on society and communication.' },
    { id: 13, title: 'Machine Learning and Optimization Techniques', description: 'Learn about machine learning algorithms and optimization techniques.' },
    { id: 14, title: 'Cloud Computing', description: 'Discuss cloud computing architectures and services.' },
    { id: 15, title: 'IT Enabled Services', description: 'Explore IT-enabled services and their role in digital transformation.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">Tracks & Scope</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {themes.map((theme, index) => (
          <div key={theme.id} className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{`${index + 1}. ${theme.title}`}</h2>
            <p className="text-gray-700">{theme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceThemes;
