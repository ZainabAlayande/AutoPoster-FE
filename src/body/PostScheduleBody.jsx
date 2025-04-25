import React, { useState }  from "react";
import ScheduleTable from "./ScheduleTable";
import '../styles/PostSchedule.css';
import SchedulePostModal from "../modal/SchedulePostModal";

const platforms = ['LinkedIn', 'Twitter', 'Instagram'];

const PostScheduleBody = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const postDetails = Object.fromEntries(formData.entries());
    console.log('Scheduled Post:', postDetails);
    setModalOpen(false);
  };

    const data = [
        {
          platform: "Twitter",
          title: "Product Launch",
          date: "2025-04-25",
          time: "10:00 AM",
          status: "Scheduled",
        },
        {
          platform: "LinkedIn",
          title: "Hiring Announcement",
          date: "2025-04-26",
          time: "2:00 PM",
          status: "Live",
        },
        {
          platform: "Instagram",
          title: "Starting a New Job",
          date: "2025-04-27",
          time: "11:30 AM",
          status: "Scheduled",
        },
        {
            platform: "Twitter",
            title: "Product Launch",
            date: "2025-04-25",
            time: "10:00 AM",
            status: "Scheduled",
          },
          {
            platform: "LinkedIn",
            title: "Hiring Announcement",
            date: "2025-04-26",
            time: "2:00 PM",
            status: "Live",
          },
          {
            platform: "Instagram",
            title: "Starting a New Job",
            date: "2025-04-27",
            time: "11:30 AM",
            status: "Scheduled",
          },
          {
            platform: "Twitter",
            title: "Product Launch",
            date: "2025-04-25",
            time: "10:00 AM",
            status: "Scheduled",
          },
          {
            platform: "LinkedIn",
            title: "Hiring Announcement",
            date: "2025-04-26",
            time: "2:00 PM",
            status: "Live",
          },
          {
            platform: "Instagram",
            title: "",
            date: "2025-04-27",
            time: "11:30 AM",
            status: "Scheduled",
          },
          {
            platform: "Twitter",
            title: "Product Launch",
            date: "2025-04-25",
            time: "10:00 AM",
            status: "Scheduled",
          },
      ];

      
    return (
      <div className="schedule-content">
        
        <div className="schedule">
        <div className="schedule-heading">
        Scheduled Posts
        </div>

        <div className="schedule-new-post-text">
         <button onClick={() => setModalOpen(true)}>+ Schedule New Post</button>
            <SchedulePostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        platforms={platforms}
      />
        </div>
        </div>

        <ScheduleTable data={data}/>

      </div>
    );
  };
  
  export default PostScheduleBody;