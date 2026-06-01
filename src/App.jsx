import React from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, Bot, Newspaper, BookOpen, Users, ShieldCheck, BarChart3, Workflow, QrCode } from "lucide-react";

export default function ClubWebsite() {
  const outputs = [
    { icon: BookOpen, title: "Student Handbook", text: "A practical guide on fact-checking, source evaluation, bias detection, and responsible AI use." },
    { icon: Newspaper, title: "Monthly Newsletter", text: "Real-world cases, misinformation alerts, tool tips, and data literacy highlights." },
    { icon: Users, title: "Workshops", text: "Interactive sessions for lower-grade students on digital literacy and academic integrity." },
    { icon: Bot, title: "AI Agent Showcase", text: "Members design and present AI agents or verification workflows for real academic tasks." },
  ];

  const learn = [
    "Fact-checking information",
    "Source verification",
    "Data literacy and bias detection",
    "Academic integrity",
    "Responsible AI evaluation",
    "Workflow and AI agent design",
  ];

  return (
    <main className="min-h-screen bg-[#f4f8ff] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071b3a] via-[#10376b] to-[#1e5aa5] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">BBSZ Student-led Club</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Information Verification & Digital Literacy Club</h1>
            <p className="mt-6 text-xl text-blue-100">In the age of AI, finding information is easy. Knowing whether to trust it is the real skill.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#10376b] shadow-lg transition hover:scale-105">Join / Learn More</a>
              <a href="#outputs" className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">See Outputs</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 text-center text-slate-900">
                <Users className="mx-auto mb-3 h-8 w-8 text-blue-700" />
                <p className="text-4xl font-black text-blue-700">73%</p>
                <p className="mt-2 text-sm">Students use AI weekly*</p>
              </div>
              <div className="rounded-3xl bg-white p-5 text-center text-slate-900">
                <BarChart3 className="mx-auto mb-3 h-8 w-8 text-blue-700" />
                <p className="text-3xl font-black text-blue-700">Thousands</p>
                <p className="mt-2 text-sm">Pieces of information seen daily</p>
              </div>
              <div className="rounded-3xl bg-white p-5 text-center text-slate-900">
                <Search className="mx-auto mb-3 h-8 w-8 text-blue-700" />
                <p className="text-3xl font-black text-blue-700">1 Question</p>
                <p className="mt-2 text-sm">Can you trust it?</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-blue-100">*Use your own survey/source if needed before publishing.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#10376b]">Why This Club?</h2>
            <p className="mt-4 leading-7 text-slate-700">We live in an era of information overload. AI tools are powerful, but not perfect. Misinformation, bias, hallucinations, and misleading statistics can affect how students think, research, and make decisions.</p>
            <p className="mt-4 font-semibold text-blue-700">We build the skills to question, verify, and understand information with confidence.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#10376b]">What We Learn</h2>
            <div className="mt-5 grid gap-3">
              {learn.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-blue-50 p-3">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[#10376b]">Verification Workflow</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Good research is not about finding more information. It is about finding the right information.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              ["1", "Ask", "Define a clear question."],
              ["2", "Search", "Gather information from multiple sources."],
              ["3", "Compare", "Check different sources and perspectives."],
              ["4", "Verify", "Evaluate evidence and detect bias."],
              ["5", "Conclude", "Synthesize and cite responsibly."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-blue-100 bg-[#f4f8ff] p-5 text-center shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#10376b] font-bold text-white">{num}</div>
                <h3 className="mt-4 text-xl font-bold text-[#10376b]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outputs" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-[#10376b]">What We Create</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {outputs.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] bg-white p-6 shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <Icon className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-[#10376b]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071b3a] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Try Our Challenges</h2>
            <div className="mt-6 grid gap-4">
              {[
                "Fake or Real? Spot fake news in 30 seconds.",
                "AI or Human? Guess which text was AI-generated.",
                "Which Source? Choose the most reliable source.",
                "Build a Workflow: Design your own AI verification process.",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 backdrop-blur">{item}</div>
              ))}
            </div>
          </div>
          <div id="join" className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#10376b]">Interested?</h2>
            <p className="mt-4 text-slate-700">Open to all grades G9–G12. No prior experience is needed. Curious minds, critical thinkers, researchers, writers, and tech students are all welcome.</p>
            <div className="mt-6 rounded-2xl bg-blue-50 p-5">
              <p><strong>Student Leader:</strong> Benson Tseng (G11)</p>
              <p className="mt-2"><strong>Club Advisor:</strong> Mr. Shon</p>
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-dashed border-blue-300 p-4">
              <QrCode className="h-12 w-12 text-blue-700" />
              <p className="text-sm text-slate-600">Add your real Google Form / Notion link here, then generate a QR code for the poster.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">Think Critically · Verify Wisely · Use AI Responsibly</footer>
    </main>
  );
}
