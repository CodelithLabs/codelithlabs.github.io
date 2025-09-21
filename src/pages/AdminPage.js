import React, { useState, useEffect } from 'react';
import '../styles/AdminPage.css';

function AdminPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  const clearSubmissions = () => {
    localStorage.removeItem('formSubmissions');
    setSubmissions([]);
  };

  return (
    <div className="admin-page">
      <h2>Admin Portal - Form Submissions</h2>
      {submissions.length > 0 ? (
        <>
          <button onClick={clearSubmissions} className="cta-button clear-button">Clear All Submissions</button>
          <div className="submissions-grid">
            {submissions.map((submission, index) => (
              <div className="submission-card" key={index}>
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Message:</strong> {submission.message}</p>
                <p><strong>Date:</strong> {new Date(submission.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No submissions yet.</p>
      )}
    </div>
  );
}

export default AdminPage;
