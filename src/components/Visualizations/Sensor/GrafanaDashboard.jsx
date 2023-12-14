import React from "react";

const GrafanaDashboard = () => {
  const dashboardUrl = "http://localhost:3000/goto/zfT7pyDSR?orgId=1&kiosk";

  return (
    <div style={{ width: "100%", height: "800px", marginLeft: "15px" }}>
      {/* //! make this responsive */}
      <iframe
        src={dashboardUrl}
        width="100%"
        height="100%"
        style={{ border: "2px solid #00e1b4" }}
      ></iframe>
    </div>
  );
};

export default GrafanaDashboard;
