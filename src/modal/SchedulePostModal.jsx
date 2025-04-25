import React from 'react';
import '../styles/PostSchedule.css';

const SchedulePostModal = ({ isOpen, onClose, onSubmit, platforms }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Schedule a Post</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={onSubmit} className="modal-form">
          <label>Platform</label>
          <select name="platform" required>
            <option value="">Select Platform</option>
            {platforms.map((platform, idx) => (
              <option key={idx} value={platform}>{platform}</option>
            ))}
          </select>

          <label>Title (Optional)</label>
          <input type="text" name="title" placeholder="Enter post title..." />

          <label>Date</label>
          <input type="date" name="date" required />

          <label>Time</label>
          <input type="time" name="time" required />

          <label>Content</label>
          <textarea
            name="content"
            placeholder="Write your post... @mention #hashtag"
            rows={4}
            required
          ></textarea>

          <button type="submit" className="schedule-btn">Schedule</button>
        </form>
      </div>
    </div>
  );
};

export default SchedulePostModal;
