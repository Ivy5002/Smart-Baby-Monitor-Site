import React from "react";

export default function Pricing() {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="border p-6 rounded shadow max-w-sm">
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Real-time monitoring</li>
            <li>Environmental tracking</li>
          </ul>
        </div>
        <div className="border p-6 rounded shadow max-w-sm">
          <h3 className="text-xl font-bold mb-2">Premium</h3>
          <ul className="list-disc list-inside mb-4">
            <li>AI sleep coaching</li>
            <li>Weekly wellness report</li>
          </ul>
        </div>
        <div className="border p-6 rounded shadow max-w-sm">
          <h3 className="text-xl font-bold mb-2">Elite</h3>
          <ul className="list-disc list-inside mb-4">
            <li>All features</li>
            <li>Smart home API integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}