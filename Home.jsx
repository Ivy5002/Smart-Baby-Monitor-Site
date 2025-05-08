import React from "react";

export default function Home() {
  return (
    <section className="text-center p-10 bg-white shadow-md">
      <h1 className="text-4xl font-bold mb-4">Smart Baby Monitor</h1>
      <p className="text-lg mb-6">AI-Powered Peace of Mind for Every Parent</p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Pre-order Now</button>
        <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded">Download App</button>
      </div>
    </section>
  );
}