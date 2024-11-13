import React from 'react';

const TabContent = ({ activeTab, formData, onChange }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#F9F3A1' }}>
      {activeTab === 'personal' && (
        <div>
          <h2 style={{ color: '#66B032' }}>Personal Information</h2>
          <label>
            First Name:
            <input
              type="text"
              value={formData.firstName || ''}
              onChange={(e) => onChange('firstName', e.target.value)}
              placeholder="Enter your first name"
              required
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={formData.lastName || ''}
              onChange={(e) => onChange('lastName', e.target.value)}
              placeholder="Enter your last name"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              value={formData.dob || ''}
              onChange={(e) => onChange('dob', e.target.value)}
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Gender:
            <select
              value={formData.gender || ''}
              onChange={(e) => onChange('gender', e.target.value)}
              style={{ margin: '10px', padding: '5px' }}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
      )}

      {activeTab === 'contact' && (
        <div>
          <h2 style={{ color: '#66B032' }}>Contact Information</h2>
          <label>
            Email:
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="Enter your email"
              required
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => onChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={formData.address || ''}
              onChange={(e) => onChange('address', e.target.value)}
              placeholder="Enter your address"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={formData.city || ''}
              onChange={(e) => onChange('city', e.target.value)}
              placeholder="Enter your city"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
        </div>
      )}

      {activeTab === 'academic' && (
        <div>
          <h2 style={{ color: '#66B032' }}>Academic Information</h2>
          <label>
            Student ID:
            <input
              type="text"
              value={formData.studentId || ''}
              onChange={(e) => onChange('studentId', e.target.value)}
              placeholder="Enter your student ID"
              required
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Program:
            <input
              type="text"
              value={formData.program || ''}
              onChange={(e) => onChange('program', e.target.value)}
              placeholder="Enter your program"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Year Level:
            <input
              type="number"
              value={formData.yearLevel || ''}
              onChange={(e) => onChange('yearLevel', e.target.value)}
              placeholder="Enter your year level"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            GPA:
            <input
              type="number"
              value={formData.gpa || ''}
              onChange={(e) => onChange('gpa', e.target.value)}
              placeholder="Enter your GPA"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
        </div>
      )}

      {activeTab === 'additional' && (
        <div>
          <h2 style={{ color: '#66B032' }}>Additional Details</h2>
          <label>
            Hobbies:
            <input
              type="text"
              value={formData.hobbies || ''}
              onChange={(e) => onChange('hobbies', e.target.value)}
              placeholder="Enter your hobbies"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Skills:
            <input
              type="text"
              value={formData.skills || ''}
              onChange={(e) => onChange('skills', e.target.value)}
              placeholder="Enter your skills"
              style={{ margin: '10px', padding: '5px' }}
            />
          </label>
          <label>
            Other Notes:
            <textarea
              value={formData.notes || ''}
              onChange={(e) => onChange('notes', e.target.value)}
              placeholder="Enter any other notes"
              style={{ margin: '10px', padding: '5px', width: '100%', height: '80px' }}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default TabContent;
