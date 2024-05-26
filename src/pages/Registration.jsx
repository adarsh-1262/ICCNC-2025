// RegistrationPage.js
import React from 'react';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Registration</h1>
        
        {/* Registration Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Registration Details</h2>
          <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus justo vitae elit laoreet, vel cursus dui volutpat. Fusce at ipsum vel nibh iaculis fermentum id in nunc.</p>
          <p className="text-gray-700">Vestibulum aliquam erat felis, sit amet tristique est commodo nec. Mauris efficitur lorem sit amet tellus fermentum tempor. Nam gravida rhoncus sollicitudin.</p>
        </div>

        {/* Fee Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Fee Information</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Category</th>
                <th className="text-left">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Regular Attendee</td>
                <td className="border px-4 py-2">$200</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Student</td>
                <td className="border px-4 py-2">$100</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Registration Link */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Registration Link</h2>
          <p className="text-gray-700 mb-2">To register for the conference, please visit the registration page:</p>
          <a href="https://example.com/registration" className="text-blue-600 hover:underline">Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
