// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaRocket, FaKeyboard, FaBrain } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { RiSpeedFill } from "react-icons/ri";
import {
  FeatureCardProps,
  StepCardProps,
  PricingCardProps,
  FAQItemProps,
} from "./types";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "const life = require('productivity').upgrade();";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent">
              KeyFlow
            </span>
          </div>
          <div className="hidden space-x-8 text-sm md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-indigo-400"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-indigo-400"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-indigo-400"
            >
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-indigo-400">
              FAQ
            </a>
          </div>
          <div>
            <button className="rounded-full bg-indigo-600 px-5 py-2 font-medium transition-all hover:bg-indigo-700">
              Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center px-6 pt-32 pb-20 lg:flex-row">
        <div className="flex flex-col items-start lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-5xl leading-tight font-bold md:text-6xl"
          >
            Your Keyboard{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Finally
            </span>{" "}
            Got Smart.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-xl text-gray-300"
          >
            Autocomplete everywhere. Format anything. Because life's too short
            for typing whole sentences like a caveman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-medium shadow-lg transition-all hover:from-indigo-700 hover:to-purple-700 hover:shadow-indigo-500/30">
              Download Beta
            </button>
            <button className="rounded-full border border-gray-700 px-8 py-4 font-medium transition-all hover:border-indigo-500">
              Watch Demo
            </button>
          </motion.div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-2xl">
              <div className="mb-4 flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-gray-400">KeyFlow Demo</div>
              </div>
              <div className="font-mono text-lg">
                <span className="text-green-400">{">"}</span>{" "}
                <span>{typedText}</span>
                {cursorVisible && <span className="animate-pulse">|</span>}
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-indigo-600 px-4 py-2 text-sm shadow-lg">
                Type less. Do more.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full bg-black/50 py-10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="mb-6 text-center text-sm tracking-wider text-gray-500 uppercase">
            Trusted by people who are probably smarter than you
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            <TbBrandVscode className="h-10 w-10" />
            <FaGithub className="h-9 w-9" />
            <BiCodeAlt className="h-10 w-10" />
            <FaRocket className="h-9 w-9" />
            <FaKeyboard className="h-9 w-9" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Not Just Another Keyboard. A{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Mind Reader
            </span>
            .
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            KeyFlow predicts what you want to type before your brain cells even
            figure it out.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaBrain className="h-8 w-8 text-purple-500" />}
            title="AI Everywhere"
            description="GitHub Copilot-style completions in every app. Yes, even in that weird legacy program your company still uses."
          />
          <FeatureCard
            icon={<BiCodeAlt className="h-8 w-8 text-indigo-500" />}
            title="Auto Formatting"
            description="Prettier-like formatting for everything you type. Your OCD can finally take a vacation."
          />
          <FeatureCard
            icon={<RiSpeedFill className="h-8 w-8 text-pink-500" />}
            title="Blazing Fast"
            description="Written in Rust because we're cool, and also because we like when things don't lag like it's 2005."
          />
          <FeatureCard
            icon={<FaKeyboard className="h-8 w-8 text-blue-500" />}
            title="Custom Training"
            description="Uses RAG to learn your writing style. Like having a clone of yourself typing, but without the existential crisis."
          />
          <FeatureCard
            icon={<FaRocket className="h-8 w-8 text-green-500" />}
            title="Universal"
            description="Works across all your apps. Switch contexts without switching brains."
          />
          <FeatureCard
            icon={<FaGithub className="h-8 w-8 text-gray-400" />}
            title="Open Source"
            description="We build in public because we have nothing to hide. Except that one weird feature nobody uses."
          />
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="w-full bg-gradient-to-r from-indigo-900/20 to-purple-900/20 py-20"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              So Easy, Your Boss Could Use It
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              (But don't tell them about it yet, enjoy the productivity boost
              while they're still writing emails with two fingers)
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <StepCard
              number="01"
              title="Download & Install"
              description="Lightweight, non-intrusive, and doesn't ask for your life story during setup."
            />
            <StepCard
              number="02"
              title="Start Typing"
              description="That's it. KeyFlow starts learning and suggesting immediately. No PhD required."
            />
            <StepCard
              number="03"
              title="Become Superhuman"
              description="Watch as your productivity skyrockets and your coworkers wonder if you've been replaced by an AI."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            No hidden fees. No "contact sales" nonsense. We know you hate that
            as much as we do.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          <PricingCard
            title="Personal"
            price="$9"
            description="For individuals who value their time and sanity."
            features={[
              "AI Completions Everywhere",
              "Basic Formatting",
              "Windows Support",
              "Community Support",
              "10 RAG Training Documents",
            ]}
            cta="Start Free Trial"
            popular={false}
          />

          <PricingCard
            title="Pro"
            price="$19"
            description="For professionals who type for a living."
            features={[
              "Everything in Personal",
              "Advanced Formatting Rules",
              "Priority Support",
              "Unlimited RAG Training",
              "Custom Shortcut Rules",
              "Sync Across 3 Devices",
            ]}
            cta="Start Free Trial"
            popular={true}
          />

          <PricingCard
            title="Team"
            price="$49"
            description="For entire teams that need to level up."
            features={[
              "Everything in Pro",
              "Admin Dashboard",
              "Team Templates",
              "Shared Custom Rules",
              "Advanced Analytics",
              "Unlimited Devices",
            ]}
            cta="Contact Us"
            popular={false}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Questions You're Too Afraid To Ask
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            But we'll answer them anyway because we're nice like that.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <FAQItem
            question="Is this just another keyboard app?"
            answer="Is a Ferrari just another car? KeyFlow combines AI-powered suggestions with formatting tools that work everywhere. It's more like having a tiny, helpful robot inside your keyboard."
          />
          <FAQItem
            question="What about my privacy?"
            answer="We don't store your keystrokes on our servers. All RAG training happens locally on your device. We can't see what you're typing, which is probably for the best."
          />
          <FAQItem
            question="Does it slow down my computer?"
            answer="KeyFlow is built with Rust and optimized for performance. It uses less memory than your browser with three tabs open. We tested it on a laptop from 2015, and it ran just fine."
          />
          <FAQItem
            question="Is it really worth paying for a keyboard?"
            answer="How much is your time worth? If KeyFlow saves you just 10 minutes a day, that's over 60 hours a year. What could you do with an extra 60 hours? Learn to juggle? Finally finish that side project? The possibilities are endless."
          />
          <FAQItem
            question="Can I use it for coding?"
            answer="Absolutely! KeyFlow shines with code, offering GitHub Copilot-style completions in any editor or IDE. It's like having a pair programmer who never gets tired, hungry, or opinionated about tabs vs. spaces."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Type Less and Do More?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl">
            Join thousands of early adopters who are already wondering how they
            ever lived without KeyFlow.
          </p>
          <button className="rounded-full bg-white px-8 py-4 font-medium text-indigo-600 shadow-lg transition-all hover:bg-gray-100">
            Download Beta Access
          </button>
          <p className="mt-4 text-sm opacity-80">
            Available for Windows 10/11. macOS coming soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent">
                KeyFlow
              </span>
              <p className="mt-2 text-gray-500">Your keyboard, supercharged.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="transition-colors hover:text-indigo-400">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-indigo-400">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-indigo-400">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-indigo-400">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-indigo-400">
                Discord
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-800 pt-10 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} KeyFlow. All rights reserved.</p>
            <p className="mt-2">
              Made with ⌨️ by keyboard enthusiasts for everyone else.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Components
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="text-center">
    <div className="mb-6 flex inline-block h-16 w-16 items-center justify-center rounded-full bg-indigo-900/30">
      <span className="text-2xl font-bold text-indigo-400">{number}</span>
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  cta,
  popular,
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`rounded-xl border p-8 backdrop-blur-sm ${
      popular
        ? "border-indigo-500 bg-indigo-900/20 shadow-lg shadow-indigo-500/20"
        : "border-gray-700 bg-gray-800/50"
    } relative flex w-full max-w-sm flex-col`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium shadow-lg">
        Most Popular
      </div>
    )}
    <h3 className="mb-2 text-2xl font-bold">{title}</h3>
    <div className="mb-6 flex items-baseline">
      <span className="text-4xl font-bold">{price}</span>
      <span className="ml-1 text-gray-400">/month</span>
    </div>
    <p className="mb-6 text-gray-400">{description}</p>
    <ul className="mb-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="mr-2 h-5 w-5 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`mt-auto rounded-full px-6 py-3 font-medium ${
        popular
          ? "bg-indigo-600 hover:bg-indigo-700"
          : "bg-gray-700 hover:bg-gray-600"
      } transition-all`}
    >
      {cta}
    </button>
  </motion.div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 py-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <svg
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180 transform" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && <p className="mt-3 text-gray-400">{answer}</p>}
    </div>
  );
};
