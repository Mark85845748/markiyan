import { useEffect, useState } from "react";

function Footer() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const info = {
      browser: navigator.userAgent,
      platform: navigator.platform,
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));

    const saved = JSON.parse(localStorage.getItem("systemInfo"));
    setSystemInfo(saved);
  }, []);

  return (
    <footer className="text-center mt-6 text-[#a1a1aa] text-sm">
      <p>2026 © Фарштей Маркіян</p>

      {systemInfo && (
        <div className="mt-3 text-xs">
          <p><strong>Браузер:</strong> {systemInfo.browser}</p>
          <p><strong>Платформа:</strong> {systemInfo.platform}</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;