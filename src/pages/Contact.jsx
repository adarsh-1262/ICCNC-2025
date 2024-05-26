import React from 'react';

const Contact = () => {
  // Contact persons data
  const contactPersons = [
    { id: 1, name: 'John Doe', position: 'Conference Chair', email: 'john.doe@example.com', phone: '+1234567890' },
    { id: 2, name: 'Jane Smith', position: 'Program Chair', email: 'jane.smith@example.com', phone: '+1234567891' },
    { id: 3, name: 'Michael Johnson', position: 'Publicity Chair', email: 'michael.johnson@example.com', phone: '+1234567892' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">Contact Us</h1>
      <div className="max-w-4xl mx-auto">
        {contactPersons.map(person => (
          <div key={person.id} className="p-6 bg-white rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{person.name}</h2>
            <p className="text-gray-700 mb-2">{person.position}</p>
            <p className="text-gray-700 mb-2">Email: {person.email}</p>
            <p className="text-gray-700">Phone: {person.phone}</p>
          </div>
        ))}
        {/* Embedded Google Maps */}
        <iframe
          title="Venue Location"
          className="w-full h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.6298475942817!2d83.08251117444901!3d24.636439478076106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ef0a42d1e6d61%3A0xc2d8333b7271f3b0!2sRajkiya%20Engineering%20College%20Sonbhadra!5e0!3m2!1sen!2sin!4v1716707049577!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
