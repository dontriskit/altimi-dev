"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "currentStack",
    title: "1. What is your current tech stack?",
    type: "checkbox" as const,
    options: [
      "Java (legacy versions)",
      ".NET / ASP.NET (legacy)",
      "Python / Django / Flask",
      "PHP / Symfony / Laravel",
      "AngularJS / Angular (legacy)",
      "jQuery / vanilla JS frontend",
      "Meteor",
      "Other legacy framework",
    ],
  },
  {
    id: "primaryDriver",
    title: "2. What is the primary driver for modernization?",
    type: "radio" as const,
    options: [
      "Scaling — the system can't handle growth.",
      "Compliance — regulatory deadline approaching.",
      "Developer productivity — too slow to ship features.",
      "Security — legacy stack has known vulnerabilities.",
      "Cost reduction — maintenance overhead is too high.",
      "Roadmap velocity — tech debt is blocking the product plan.",
    ],
  },
  {
    id: "previousAttempts",
    title: "3. What has been tried before?",
    type: "radio" as const,
    options: [
      "Nothing — this is the first modernization effort.",
      "Partial migration was started but abandoned.",
      "New features are built in a new stack, legacy remains.",
      "A full rewrite was attempted but didn't succeed.",
    ],
  },
  {
    id: "teamSize",
    title: "4. What is your engineering team size?",
    type: "radio" as const,
    options: ["1–5 engineers", "6–15 engineers", "16–50 engineers", "50+ engineers"],
  },
  {
    id: "timelinePressure",
    title: "5. What is your timeline pressure?",
    type: "radio" as const,
    options: [
      "No hard deadline — strategic initiative.",
      "Within 6 months.",
      "Within 3 months — urgent.",
      "Regulatory or contractual deadline.",
    ],
  },
  {
    id: "areasFocus",
    title: "6. Which areas matter most?",
    type: "checkbox" as const,
    options: [
      "Frontend modernization",
      "Backend refactoring",
      "Infrastructure & cloud",
      "CI/CD & DevOps",
      "Testing & QA automation",
      "Documentation & knowledge transfer",
    ],
  },
  {
    id: "outputNeeded",
    title: "7. What output do you need?",
    type: "radio" as const,
    options: [
      "Assessment only — understand the current state.",
      "Assessment + execution roadmap.",
      "Full modernization engagement with a dedicated team.",
    ],
  },
];

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  currentStack: string[];
  primaryDriver: string;
  previousAttempts: string;
  teamSize: string;
  timelinePressure: string;
  areasFocus: string[];
  outputNeeded: string;
};

export default function IntakePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    currentStack: [],
    primaryDriver: "",
    previousAttempts: "",
    teamSize: "",
    timelinePressure: "",
    areasFocus: [],
    outputNeeded: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleRadioChange = (questionId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleCheckboxChange = (questionId: string, value: string) => {
    setFormData((prev) => {
      const current = prev[questionId as keyof FormData] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [questionId]: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-[500px]">
          <h1 className="text-[36px] font-normal text-[#0a1926] mb-4">
            Thank you
          </h1>
          <p className="text-[#333333] text-[18px] leading-[1.6] mb-8">
            Your modernization intake form has been submitted. Our team will
            review your answers and reach out to schedule the Discovery Sprint.
          </p>
          <Link
            href="/"
            className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-[#0a1926] text-white h-[52px] px-8 rounded-[6.5px] inline-flex items-center hover:bg-[#0a1926]/90 transition-colors"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-6 py-[80px] max-md:py-[40px]">
        <Link
          href="/"
          className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/50 hover:text-[#0a1926] transition-colors mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <h1 className="text-[clamp(28px,5vw,48px)] leading-[1.15] font-normal text-[#0a1926] mb-4">
          Modernization Intake Form
        </h1>
        <p className="text-[#333333] text-[18px] leading-[1.6] mb-12">
          These questions help us scope the Discovery Sprint and tailor the
          modernization assessment to your specific system and business context.
        </p>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-6 pb-12 border-b border-[#0a1926]/10">
            <h2 className="text-[22px] font-medium text-[#0a1926]">
              Your details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[14px] font-medium text-[#0a1926] mb-2">Name *</label>
                <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} className="w-full h-[48px] px-4 rounded-lg border border-[#0a1926]/20 text-[16px] text-[#0a1926] focus:outline-none focus:border-[#0a1926]/50 transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[14px] font-medium text-[#0a1926] mb-2">Email *</label>
                <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} className="w-full h-[48px] px-4 rounded-lg border border-[#0a1926]/20 text-[16px] text-[#0a1926] focus:outline-none focus:border-[#0a1926]/50 transition-colors" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-[14px] font-medium text-[#0a1926] mb-2">Company</label>
                <input id="company" type="text" value={formData.company} onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))} className="w-full h-[48px] px-4 rounded-lg border border-[#0a1926]/20 text-[16px] text-[#0a1926] focus:outline-none focus:border-[#0a1926]/50 transition-colors" />
              </div>
              <div>
                <label htmlFor="role" className="block text-[14px] font-medium text-[#0a1926] mb-2">Role</label>
                <input id="role" type="text" value={formData.role} onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))} className="w-full h-[48px] px-4 rounded-lg border border-[#0a1926]/20 text-[16px] text-[#0a1926] focus:outline-none focus:border-[#0a1926]/50 transition-colors" />
              </div>
            </div>
          </div>

          {questions.map((q) => (
            <fieldset key={q.id} className="space-y-4">
              <legend className="text-[20px] font-medium text-[#0a1926] mb-2">
                {q.title}
              </legend>
              <div className="space-y-3">
                {q.options.map((option) => {
                  const isChecked =
                    q.type === "checkbox"
                      ? (formData[q.id as keyof FormData] as string[]).includes(option)
                      : formData[q.id as keyof FormData] === option;

                  return (
                    <label
                      key={option}
                      className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                        isChecked
                          ? "border-[#0a1926] bg-[#0a1926]/[0.03]"
                          : "border-[#0a1926]/10 hover:border-[#0a1926]/30"
                      }`}
                    >
                      <input
                        type={q.type === "checkbox" ? "checkbox" : "radio"}
                        name={q.id}
                        value={option}
                        checked={isChecked}
                        onChange={() =>
                          q.type === "checkbox"
                            ? handleCheckboxChange(q.id, option)
                            : handleRadioChange(q.id, option)
                        }
                        className="mt-0.5 shrink-0"
                      />
                      <span className="text-[15px] text-[#333333] leading-[1.5]">
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          {error && <p className="text-red-600 text-[15px]">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-[#0a1926] text-white h-[52px] px-8 rounded-[6.5px] flex items-center justify-center hover:bg-[#0a1926]/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit intake form"}
          </button>
        </form>
      </div>
    </div>
  );
}
