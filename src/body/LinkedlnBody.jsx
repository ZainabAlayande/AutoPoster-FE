import React, { useState } from "react";
import '../styles/Linkedln.css';
import '../styles/Font.css';
import PostIcon from '../assets/PostIcon.svg';

const LinkedlnBody = () => {
    const [showPanel, setShowPanel] = useState(false);

    const handleBoxClick = () => {
        setShowPanel(true);
    };

    const handleClosePanel = () => {
        setShowPanel(false);
    };

    return (
        <div className="linkedln-body">
            <div className="linkedln-box-container" onClick={handleBoxClick}>
                <div className="linkedln-box">
                    <div className="first-div">
                        <img src={PostIcon} alt="PostIcon" />
                    </div>
                    <div className="second-div">
                        <p>Schedule</p>
                        <p>Post content later</p>
                    </div>
                </div>
            </div>

            <div className="linkedln-second-container">
                <div className="recent-transaction">
                    <p className="recent-transaction-text">Recent Transaction</p>
                </div>

                <div className="table-subject">
                    <p className="scheduled-post">Scheduled Posts</p>
                    <p className="live-post">Live Posts</p>
                </div>

                <div className="linkedln-overall-table">
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Due Date</th>
                                <th>Created At</th>
                                <th>Title</th>
                                <th>Platform</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01.</td>
                                <td>2025-01-01 12:00</td>
                                <td>2025-01-01 12:00</td>
                                <td>Getting Married This Weekend</td>
                                <td>LinkedIn</td>
                                <td className="action-buttons">
                                    <button className="view-button">View</button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>02.</td>
                                <td>2025-01-02 13:00</td>
                                <td>2025-01-01 12:00</td>
                                <td>The Grace I never sought for</td>
                                <td>Linkedln</td>
                                <td className="action-buttons">
                                    <button className="view-button">View</button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>03.</td>
                                <td>2025-01-02 13:00</td>
                                <td>2025-01-01 12:00</td>
                                <td>Getting Started With Me</td>
                                <td>Linkedln</td>
                                <td className="action-buttons">
                                    <button className="view-button">View</button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>04.</td>
                                <td>2025-01-02 13:00</td>
                                <td>2025-01-01 12:00</td>
                                <td>Be Audacious in 2025</td>
                                <td>Linkedln</td>
                                <td className="action-buttons">
                                    <button className="view-button">View</button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>05.</td>
                                <td>2025-01-02 13:00</td>
                                <td>2025-01-01 12:00</td>
                                <td>A day in the My Life</td>
                                <td>Linkedln</td>
                                <td className="action-buttons">
                                    <button className="view-button">View</button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="pagination">
                        <a href="#">&laquo; Previous</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">Next &raquo;</a>
                    </div>
                </div>
            </div>

            {showPanel && (
                <div className="slide-in-panel">
                    <div className="panel-header">
                        <h2>Schedule a Post</h2>
                        <button onClick={handleClosePanel}>Close</button>
                    </div>
                    <div className="panel-content">
                        <label>Title</label>
                        <input type="text" />
                        <label>Content</label>
                        <textarea></textarea>
                        <label>Image</label>
                        <input type="file" />
                        <label>Tags</label>
                        <input type="text" />
                        <label>Hashtags</label>
                        <input type="text" />
                        <button className="schedule-button">Schedule</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LinkedlnBody;
