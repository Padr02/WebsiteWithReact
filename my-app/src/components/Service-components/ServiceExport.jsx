import React from "react";
import Service from "./Service";
import { service1, service2, service3 } from "./Data";

function ServiceExport() {
  return (
    <div>
      {/* styr hur många kort som ska exporteras */}
      <Service {...service1} />
      <Service {...service2} />
      <Service {...service3} />
    </div>
  );
}

export default ServiceExport;
