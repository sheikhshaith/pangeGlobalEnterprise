import React, { useState, useEffect } from "react";

const BookingWidget = () => {
  const [height, setHeight] = useState("800px");

  useEffect(() => {
    // Add the external script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Function to handle iframe messages
    const handleMessage = (event) => {
      if (event.data && event.data.type === "setHeight") {
        setHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-lg overflow-hidden shadow-lg p-1">
        <div className="rounded-lg p-2">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/6OTJ7qM4mDGVVqeF1mn6"
            style={{
              width: "100%",
              height: height,
              border: "none",
              overflow: "hidden",
            }}
            scrolling="no"
            id="dLFIlzEAVtB15BhwWoKh_1738669869218"
            className="w-full transition-all duration-300"
            title="Booking Widget"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
