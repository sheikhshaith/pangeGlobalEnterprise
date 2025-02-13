import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    const style = `
      chat-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
      }
    `;

    // Add custom styles
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);

    // Load chat widget script
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.async = true;

    // Check if script is already loaded
    if (
      !document.querySelector(
        'script[src="https://widgets.leadconnectorhq.com/loader.js"]'
      )
    ) {
      document.body.appendChild(script);
    }

    // Cleanup
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <chat-widget
      location-id="RfJOM9hsdaMDshFoyzm2"
      agency-name="PGE"
      show-consent-checkbox="true"
    />
  );
};

export default ChatWidget;
