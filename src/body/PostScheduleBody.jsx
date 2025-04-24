import React from "react";
import ScheduleTable from "./ScheduleTable";

const PostScheduleBody = () => {

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
        
        <div className="schedule-heading">
        Scheduled Posts

        <div className="schedule-new-post-text">
            <p>+ Schedule New Post</p>
        </div>
        </div>

        <ScheduleTable data={data}/>

      </div>
    );
  };
  
  export default PostScheduleBody;