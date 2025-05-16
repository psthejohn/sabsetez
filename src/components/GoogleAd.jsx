import React, { useEffect } from "react";

export default function GoogleAd({ slot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);
  return (
    <div className="flex justify-center my-6">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: 90 }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // <-- replace with your AdSense client!
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
