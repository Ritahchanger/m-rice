"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="home bg-gradient-to-br from-green-50 to-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Meru University Project Grants Management System
          </h1>
          <p className="text-lg text-gray-700">
            Empowering innovation and research through structured project
            funding.
          </p>
        </header>

        {/* Main Features Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Submit Proposals
            </h3>
            <p className="text-gray-600">
              Easily submit your research or innovation project proposals for
              review and funding consideration.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Track Applications
            </h3>
            <p className="text-gray-600">
              Monitor your project’s funding status and stay updated on every
              stage from submission to approval.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you're a student or staff, start your journey toward
            innovation today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/auth/login"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md shadow"
            >
              Login
            </Link>
            <Link
              href="/user"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md shadow"
            >
              Progress reporting
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Meru University of Science and
          Technology. All rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default HomePage;
