import React from "react";

export default function Features() {
  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-6">Features</h2>
      <ul className="space-y-4 max-w-3xl mx-auto text-left list-disc list-inside">
        <li>AI-powered detection of breathing, crying, and movement</li>
        <li>Environmental monitoring: temperature, humidity, and air quality</li>
        <li>Smart home integration with automatic adjustments</li>
        <li>Sleep analytics and wellness recommendations</li>
        <li>In-app pediatrician consultations and AI insights</li>
      </ul>
    </section>
  );
}