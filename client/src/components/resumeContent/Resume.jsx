import {useState, useRef} from "react";
import Header from "../Header";
import myresume from "../../assets/MyResume2024.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

// Import styles
import "@react-pdf-viewer/zoom/lib/styles/index.css";
function Resume() {
  const viewerRef = useRef(null);
  const [zoomPluginInstance] = useState(zoomPlugin());
  const [defaultLayoutPluginInstance] = useState(defaultLayoutPlugin());

  const handleLoadSuccess = () => {
    if (viewerRef.current) {
      const { width } = viewerRef.current.getPageSize(0); // Get the width of the first page
      const containerWidth = viewerRef.current.container.clientWidth; // Get the width of the container
      const zoomLevel = (containerWidth / width) * 100; // Calculate zoom level to fit width

      zoomPluginInstance.setZoom(zoomLevel);
    }
  };
  return (
    <main className="px-10">
      <Header resume />
      <div className=" flex justify-center mt-40">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={myresume}
            plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
            onLoadSuccess={handleLoadSuccess} // Call the custom zoom function when the PDF is loaded
          />
        </Worker>
      </div>
    </main>
  );
}

export default Resume;
