"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterEffect from "@/components/ui/TypewriterEffect";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Strategic Problem Solver &{" "}
              <span className="text-blue-600">Technical Leader</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Crafting digital experiences that bridge strategy and technology.
              Leading cross-functional teams to deliver solutions that drive real
              business impact.
            </p>
            <div className="mt-4">
              <TypewriterEffect
                texts={[
                  "Solving complex challenges with strategic technical solutions",
                  "Leading teams to build scalable, impactful products",
                  "Bridging business strategy and technical execution",
                  "Turning ambitious ideas into working solutions",
                  "Driving innovation through strategic technical leadership",
                ]}
                className="text-base text-blue-600 font-medium"
                speed={40}
                deleteSpeed={20}
                pauseTime={3000}
              />
            </div>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#work"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors inline-flex items-center gap-2"
                >
                  Explore Collaboration
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#work"
                  className="text-sm font-semibold leading-6 text-foreground hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                >
                  View Strategic Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </section>

      {/* Quick sections placeholder */}
      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Section
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Coming soon in Phase 2...
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Professional Work
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Coming soon in Phase 2...
            </p>
          </div>
        </div>
      </section>

      <section id="creative" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Creative Showcase
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Coming soon in Phase 3...
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Ready to collaborate? Let&apos;s connect and create something amazing
              together.
            </p>
            <div className="mt-8">
              <Link
                href="mailto:hello@sreedeepnarayan.com"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
