import React, { useState } from 'react';
import '../styles/TeamPage.css';
import Modal from '../components/Modal';
import RegistrationForm from '../components/RegistrationForm';

const teamMembers = [
  {
    name: 'Prasanta Ray',
    role: 'Leader | AI & Systems Developer',
    bio: 'Leads the team with a vision to build innovative AI and system solutions, passionate about coding and learning.',
    img: 'https://via.placeholder.com/150',
    social: { instagram: '#', discord: '#', linkedin: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Donbill Mwshahary',
    role: 'Backend Developer',
    bio: 'Responsible for backend systems, database management, and server-side coding.',
    img: 'https://via.placeholder.com/150',
    social: { instagram: '#', discord: '#', linkedin: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Binod Shaw',
    role: 'Frontend Developer & Social Media Manager',
    bio: 'Designs the user interface and manages the team\'s social media presence.',
    img: 'https://via.placeholder.com/150',
    social: { instagram: '#', discord: '#', linkedin: '#', twitter: '#', youtube: '#' },
  },
  {
    name: 'Aditya Kumar Jha',
    role: 'Frontend Developer',
    bio: 'Supports frontend development, focusing on clean, responsive designs and user experience.',
    img: 'https://via.placeholder.com/150',
    social: { instagram: '#', discord: '#', linkedin: '#', twitter: '#', youtube: '#' },
  },
];

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} onClick={() => openModal(member)}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      {selectedMember && (
        <Modal onClose={closeModal}>
          <div className="team-member-modal">
            <img src={selectedMember.img} alt={selectedMember.name} />
            <h2>{selectedMember.name}</h2>
            <p><strong>{selectedMember.role}</strong></p>
            <p>{selectedMember.bio}</p>
            <div className="social-links">
              <a href={selectedMember.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={selectedMember.social.discord} target="_blank" rel="noopener noreferrer">Discord</a>
              <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href={selectedMember.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            <RegistrationForm />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default TeamPage;
