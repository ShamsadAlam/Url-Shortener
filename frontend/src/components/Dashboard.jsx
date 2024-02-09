import React, { useState, useContext } from "react";
import { Shorten, GetAllUrls, DeleteUrls, Redirect } from "../API/UrlsAPI";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [originalUrl, setOriginalUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const token = location.state?.token;

  const handleCreateUrl = async () => {
    try {
      const response = await Shorten(originalUrl, token);
      console.log("response.data: ", response);

      const urlsResponse = await GetAllUrls(token);
      setUrls(urlsResponse.data.userUrls);
      setShowPopup(false);
    } catch (error) {
      console.error("URL creation failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {urls.length === 0 ? (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">No URL generated</p>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={() => setShowPopup(true)}
            >
              Create Now
            </button>
          </div>
        ) : (
          <div>
            {/* Display the list of generated URLs */}
            <ul>
              {urls.map((url) => (
                <li key={url._id}>{url.shortUrl}</li>
              ))}
            </ul>
          </div>
        )}

        {/* URL creation popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-4">Create New URL</h3>
              <input
                type="url"
                placeholder="Enter the URL"
                className="w-full p-2 mb-4 border"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleCreateUrl}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white p-2 rounded ml-2"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
