import React from "react";

export default function Contact() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="email" placeholder="Your email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your message" className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send</button>
      </form>
    </section>
  );
}