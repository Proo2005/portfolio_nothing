import React, { useState } from "react";
import "../styles/certificate.css";

const certificates = [
  {
    name: "Deloitte Technology Job Stimulation",
    provider: "Deloitte",
    image: "/Deloitte.png",
  },
  {
    name: "Information Theory",
    provider: "The Chinese University of Hong Kong",
    image: "/it.png",
  },
  
  {
    name: "Google Analytics Certification",
    provider: "Linkedin Learning",
    image: "/ga.png",
  },
  
  {
    name: "Internship Common Aptitude Test",
    provider: "ICAT",
    image: "/icat.png",
  }
];

function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certificate-page">
      <h2 className="certificate-header">My Certificates</h2>

      <table className="certificate-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Provider</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((cert, index) => (
            <tr key={index}>
              <td>{cert.name}</td>
              <td>{cert.provider}</td>
              <td>
                <button className="view-button" onClick={() => setSelectedCert(cert)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.image} alt={selectedCert.name} />
            <button className="close-button" onClick={() => setSelectedCert(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificatePage;
