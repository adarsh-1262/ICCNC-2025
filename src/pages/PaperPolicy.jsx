// import React from 'react';

// const PaperPolicy = () => {
//   return (
//     <div className="container p-4">
//       {/* Container with margin from all sides */}
//       <h2 className="text-2xl font-semibold"></h2>
//       {/* Heading */}
//       <p className="mt-4">
//         {/* Paragraph with some margin from the top */}
//         All submissions must be in English only.
//         <br/><br/>
//         Authors are invited to submit the full paper as a PDF using the IEEE templates. Paper drafts must be prepared in English with a maximum of six (6) printed pages in IEEE format (10-point font, double-column and A4) including figures, tables and references. The conference reserves the right to refrain from reviewing papers that are significantly longer than 6 pages.
//         <br/><br/>
//         The review process for this conference is a double-peer review. The identity of reviewers will not be disclosed.
//         <br/><br/>
//         The maximum no. of words allowed in the abstract is 250 words and at least 5 keywords are also required.
//         <br/><br/>
//         All papers submitted to ICCNC-2025 will be checked for plagiarism according to IEEE guidelines. If found free of plagiarism, it will be peer-reviewed and evaluated based on NOVELTY, Presentation, Correctness and Relevance to the conference. In case of minor plagiarism, the authors will be asked to rewrite the paper. In other cases, the paper will be immediately rejected.
//         <br/><br/>
//         The acceptance of papers along with referees’ comments will be communicated to authors by email. Authors are required to incorporate the comments received in the CAMERA-READY PAPER before final submission.
//         <br/><br/>
//         The accepted conference papers will be scheduled for presentation either in offline or online mode. The total time allotted for presentation at the technical session will be 15 min including Q&A. Presentation of an accepted paper at the conference is a requirement of publication in the conference proceedings. The presented paper will be processed for indexing in IEEE Xplore for publication compliance.
//       </p>
//     </div>
//   );
// };

// export default PaperPolicy;


// // ThemesPage.js
import React from 'react';

const PaperPolicy = () => {
  // Themes data
  const themes = [
    { id: 1, title: 'All submissions must be in English only.' },
    { id: 2, title: 'Authors are invited to submit the full paper as a PDF using the IEEE templates. Paper drafts must be prepared in English with a maximum of six (6) printed pages in IEEE format (10-point font, double-column and A4) including figures, tables and references. The conference reserves the right to refrain from reviewing papers that are significantly longer than 6 pages.' },
    { id: 3, title: 'The review process for this conference is a double-peer review. The identity of reviewers will not be disclosed.' },
    { id: 4, title: 'The maximum no. of words allowed in the abstract is 250 words and at least 5 keywords are also required.' },
    { id: 5, title: 'All papers submitted to ICCNC-2025 will be checked for plagiarism according to IEEE guidelines. If found free of plagiarism, it will be peer-reviewed and evaluated based on NOVELTY, Presentation, Correctness and Relevance to the conference. In case of minor plagiarism, the authors will be asked to rewrite the paper. In other cases, the paper will be immediately rejected.' },
    { id: 6, title: 'The acceptance of papers along with referees’ comments will be communicated to authors by email. Authors are required to incorporate the comments received in the CAMERA-READY PAPER before final submission.' },
    { id: 7, title: 'The accepted conference papers will be scheduled for presentation either in offline or online mode. The total time allotted for presentation at the technical session will be 15 min including Q&A. Presentation of an accepted paper at the conference is a requirement of publication in the conference proceedings. The presented paper will be processed for indexing in IEEE Xplore for publication compliance.' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">Guidelines for Paper Submission</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {themes.map((theme, index) => (
          <div key={theme.id} className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold text-black mb-2">{`${index + 1}. ${theme.title}`}</h2>
            <p className="text-gray-700">{theme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperPolicy;
