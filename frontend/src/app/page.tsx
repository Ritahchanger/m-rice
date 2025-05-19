"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  FileText,
  BarChart2,
  Rocket,
  Users,
  Lightbulb,
  ShieldCheck,
  ArrowRightCircle,
} from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-green-100 via-white to-blue-100 min-h-screen px-4 py-10 pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <header className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 text-green-700 mb-4">
              <Rocket size={26} />
              <span className="uppercase font-semibold tracking-wide text-sm">
                Empower Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight mb-4">
              Grants Management System
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Empowering innovation and research through structured project
              funding and seamless grant tracking.
            </p>
          </header>

          {/* Features */}
          <section className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="rounded-sm p-8 border border-green-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4 text-green-700">
                <FileText size={24} />
                <h3 className="text-xl font-semibold">Submit Proposals</h3>
              </div>
              <p className="text-gray-600">
                Submit your research or innovation proposals and increase your
                funding opportunities.
              </p>
            </div>

            <div className="rounded-sm p-8 border border-green-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                <BarChart2 size={24} />
                <h3 className="text-xl font-semibold">Track Applications</h3>
              </div>
              <p className="text-gray-600">
                Monitor the status of your applications in real-time, from
                submission to approval.
              </p>
            </div>

            <div className="rounded-sm p-8 border border-green-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4 text-green-600">
                <ShieldCheck size={24} />
                <h3 className="text-xl font-semibold">Transparent Process</h3>
              </div>
              <p className="text-gray-600">
                Experience a secure and transparent funding process with timely
                notifications and updates.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 text-blue-700 mb-2">
              <Lightbulb size={22} />
              <span className="text-sm font-medium">Ready to innovate?</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              Let’s Get Started
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Whether you're a student or a staff member, take the next step in
              advancing your academic journey through innovation and funding.
            </p>
            <Link
              href="/user/task"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition shadow"
            >
              Progress Reporting
              <ArrowRightCircle size={20} />
            </Link>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center text-sm text-gray-500 flex flex-col items-center gap-2">
            <Users size={18} className="text-green-600" />©{" "}
            {new Date().getFullYear()} Meru University of Science and
            Technology. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
};

export default HomePage;
