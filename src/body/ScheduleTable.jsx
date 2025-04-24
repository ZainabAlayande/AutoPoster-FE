import React from "react";
import Settings from '../assets/setting.png';

const platformStyles = {
  LinkedIn: { backgroundColor: "#0077B5", color: "white" },
  Twitter: { backgroundColor: "#1DA1F2", color: "white" },
  Instagram: { backgroundColor: "#E1306C", color: "white" },
};

const ScheduleTable = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md mt-6">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Platform</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Time</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-3 px-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={platformStyles[entry.platform] || {}}
                >
                  {entry.platform}
                </span>
              </td>
              <td className="py-3 px-4">{entry.title || "—"}</td>
              <td className="py-3 px-4">{entry.date}</td>
              <td className="py-3 px-4">{entry.time}</td>
              <td className="py-3 px-4">
                <span
                  className={`text-sm font-semibold ${
                    entry.status === "Live"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {entry.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-3 text-blue-600">
                  <button title="Edit">Edit
                    {/* <Settings /> */}
                  </button>
                  <button title="Delete">Delete
                    {/* <Settings className="text-red-600" /> */}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
