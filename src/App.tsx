import { type FormEvent, type ReactNode, useState } from "react";
import { motion } from "framer-motion";

// Drop a headshot at public/headshot.jpg and set this to "/headshot.jpg".
// Leave null and the hero renders a typographic panel instead.
const HEADSHOT: string | null = null;

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.65rem] font-medium uppercase tracking-cap text-slate-500">
      {children}
    </p>
  );
}

const pillars = [
  {
    title: "You work with the CPA",
    body: (
      <>
        Not a portal, not a rotating queue of preparers. The person who reads your
        documents is the person who signs the return and the person who answers
        when you have a question in August.
      </>
    ),
  },
  {
    title: "Twenty years of depth",
    body: (
      <>
        Public accounting audit foundation at{" "}
        <span className="text-navy-900">Singer Lewak</span>. Controllership of a{" "}
        <span className="text-navy-900">$5 billion</span> institutional portfolio
        at <span className="text-navy-900">CBRE</span>. California CPA, license
        #141018. Multi-jurisdiction residency and sourcing work is already the
        core of what I do.
      </>
    ),
  },
  {
    title: "The things that trip people up",
    body: (
      <>
        Foreign accounts and <span className="text-navy-900">FBAR</span>. Local
        mutual funds that turn out to be{" "}
        <span className="text-navy-900">PFICs</span>. Pensions that are quietly
        reportable trusts. Whether the exclusion or the credit leaves you better
        off — not just this year, but across the next five.
      </>
    ),
  },
];

const clients = [
  ["Employed abroad", "Salaried in another country, with a local tax return and a US one that still has to be filed."],
  ["Freelance and remote", "Self-employed from anywhere. Self-employment tax survives the exclusion — that surprises almost everyone."],
  ["Business owners abroad", "A local company you own makes you a shareholder of a controlled foreign corporation, with everything that follows."],
  ["Green card holders going home", "Letting the card lapse does not end your US filing obligations, and leaving has its own rules."],
  ["Married to a non-US spouse", "Filing status, whether to bring their income into the US net, and the ITIN question. The default is rarely the right answer."],
  ["Behind on filings", "Several years unfiled, found out late, and not sure what happens next. This is more common than you think and there are routes back."],
];

const steps = [
  ["Short call", "Twenty minutes, no charge. You describe the situation, I tell you what is actually in scope and whether I am the right fit."],
  ["Scope and fixed quote", "In writing before any work begins, with what is included and what is not. Revised only if your documents reveal something the call did not."],
  ["Documents, then preparation", "A checklist built around your situation rather than a generic form. I prepare, then walk you through the return and the reasoning before anything is filed."],
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to Formspree, Netlify Forms, or your own endpoint before launch.
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 sm:py-5">
          <p className="font-serif text-[2.5rem] leading-[0.95] tracking-tight text-navy-900 max-[420px]:text-[1.75rem] sm:text-[3rem]">
            Burdett Tax &amp; Advisory
          </p>
          <a
            href="#consultation"
            className="shrink-0 text-[0.975rem] font-medium uppercase tracking-cap text-slate-500 transition hover:text-navy-900"
          >
            Enquire
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:px-10 sm:pb-28 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
            >
              <div className="relative mx-auto max-w-md overflow-hidden rounded-sm bg-slate-100 shadow-[0_1px_0_rgba(15,23,42,0.06)] lg:mx-0">
                <div className="aspect-[4/5] w-full">
                  {HEADSHOT ? (
                    <img
                      src={HEADSHOT}
                      alt="Jamin Burdett, CPA"
                      className="h-full w-full object-cover object-top"
                      loading="eager"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col justify-end bg-navy-900 p-8">
                      <p className="font-serif text-4xl leading-tight text-white">
                        Jamin Burdett
                      </p>
                      <p className="mt-2 text-[0.65rem] uppercase tracking-cap text-brass-light">
                        Certified Public Accountant
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
            >
              <Eyebrow>US tax for Americans abroad</Eyebrow>
              <h1 className="mt-6 font-serif text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.25rem]">
                Living overseas does not end your US filing obligations. It only
                makes them harder to get right.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Federal tax preparation and planning for Americans living, working,
                and running businesses outside the United States — handled by one
                CPA, directly, wherever you happen to be.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#consultation"
                  className="border border-navy-900/15 bg-navy-900 px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-cap text-white transition hover:bg-navy-850"
                >
                  Request a call
                </a>
                <a
                  href="#pricing"
                  className="text-[0.65rem] font-medium uppercase tracking-cap text-slate-500 transition hover:text-navy-900"
                >
                  See pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-t border-slate-200/80 bg-slate-50/40 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <FadeIn>
              <Eyebrow>Why work with me</Eyebrow>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
                A senior accountant on your return, not a workflow.
              </h2>
            </FadeIn>

            <motion.ul
              className="mt-14 grid gap-10 sm:gap-12 lg:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-48px" }}
              variants={{
                show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
              }}
            >
              {pillars.map((pillar) => (
                <motion.li
                  key={pillar.title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  className="border-l-2 border-brass-muted/50 pl-6"
                >
                  <h3 className="font-serif text-xl font-semibold text-navy-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                    {pillar.body}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Who this is for */}
        <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <FadeIn>
            <Eyebrow>Who this is for</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
              If one of these is you, we should talk.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map(([title, body], i) => (
              <FadeIn key={title} delay={i * 0.05} className="bg-white p-7">
                <h3 className="font-serif text-lg font-semibold text-navy-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-slate-200/80 bg-slate-50/40 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <FadeIn>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
                Three steps, and you know the price before the second one.
              </h2>
            </FadeIn>
            <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
              {steps.map(([title, body], i) => (
                <FadeIn key={title} delay={i * 0.08}>
                  <li>
                    <p className="font-serif text-4xl text-brass-muted">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                      {body}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <FadeIn>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
              Fixed fees, quoted in writing before work begins.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <div className="border border-slate-200 p-8">
                <Eyebrow>Base package</Eyebrow>
                <p className="mt-4 font-serif text-5xl font-semibold text-navy-900">
                  $750
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
                  {[
                    "Federal individual return",
                    "Foreign earned income exclusion or foreign tax credit, whichever leaves you better off",
                    "FBAR for up to five foreign accounts",
                    "A written summary of the positions taken and why",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.45rem] h-px w-3 shrink-0 bg-brass-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-7">
              <p className="text-sm leading-relaxed text-slate-600">
                Most firms quote a lower base and then bill the FBAR separately, per
                account. Mine is included up to five. Beyond that, these are the common
                additions — priced from, and confirmed in writing once your documents
                are in, so the number you are given is the number you pay.
              </p>
              <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {[
                  ["Additional foreign accounts", "from $25 each, beyond the first five"],
                  ["Form 8938", "from $150"],
                  ["State return", "from $150"],
                  ["Foreign rental property", "from $200 per property"],
                  ["Foreign funds and PFICs", "from $250 per fund, per year"],
                  ["Catch-up filings", "from $600 per year"],
                  ["Foreign pensions and trusts", "quoted — Forms 3520 and 3520-A"],
                  ["Foreign business interests", "quoted — Forms 5471, 8865, 8858"],
                ].map(([label, note]) => (
                  <li key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                    <span className="text-[0.95rem] text-navy-900">{label}</span>
                    <span className="text-sm text-slate-500">{note}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Consultation */}
        <section
          id="consultation"
          className="border-t border-slate-200/80 bg-slate-50/40 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <FadeIn>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
                Tell me roughly where you stand.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
                High level is enough at this stage — no account numbers, no documents.
                If you are behind on filings, say so plainly. It is common, it is
                fixable, and it changes what I need to quote.
              </p>
            </FadeIn>

            <motion.div
              className="mt-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
            >
              {submitted ? (
                <p className="font-serif text-2xl leading-snug text-navy-900">
                  Thank you — I will reply within one business day to arrange a short
                  call.
                </p>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <label className="block text-[0.65rem] font-medium uppercase tracking-cap text-slate-500">
                    Name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-2 text-base text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brass-muted"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="block text-[0.65rem] font-medium uppercase tracking-cap text-slate-500">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-2 text-base text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brass-muted"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="block text-[0.65rem] font-medium uppercase tracking-cap text-slate-500">
                    Country of residence
                    <input
                      required
                      name="country"
                      autoComplete="country-name"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-2 text-base text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brass-muted"
                      placeholder="Where you currently live"
                    />
                  </label>
                  <label className="block text-[0.65rem] font-medium uppercase tracking-cap text-slate-500">
                    Situation
                    <select
                      required
                      name="situation"
                      defaultValue=""
                      className="mt-2 w-full cursor-pointer border-b border-slate-300 bg-transparent py-2 text-base text-navy-900 outline-none transition focus:border-brass-muted"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select one
                      </option>
                      <option value="employed">Employed abroad</option>
                      <option value="freelance">Freelance or remote</option>
                      <option value="business">I own a business abroad</option>
                      <option value="greencard">Green card holder leaving the US</option>
                      <option value="behind">Behind on filings</option>
                      <option value="other">Something else</option>
                    </select>
                  </label>
                  <label className="block text-[0.65rem] font-medium uppercase tracking-cap text-slate-500">
                    Brief description
                    <textarea
                      required
                      name="description"
                      rows={5}
                      className="mt-2 w-full resize-y border border-slate-200 bg-white px-4 py-3 text-base leading-relaxed text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brass-muted"
                      placeholder="Where you live, roughly what you earn and how, whether you have foreign accounts or investments, and how many years are outstanding if any."
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-4 w-full border border-navy-900/15 bg-navy-900 px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-cap text-white transition hover:bg-navy-850 sm:w-auto"
                  >
                    Send message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:px-10">
          <p className="text-[0.65rem] leading-relaxed text-slate-500">
            Jamin Burdett, CPA — licensed by the California Board of Accountancy,
            #141018. Federal tax preparation for US taxpayers worldwide.
          </p>
          <p className="max-w-2xl text-[0.65rem] leading-relaxed text-slate-400">
            This site is general information, not tax advice. No client relationship
            is formed until an engagement letter is signed by both parties.
          </p>
          <p className="text-[0.65rem] text-slate-500">
            © {new Date().getFullYear()} Burdett Tax &amp; Advisory
          </p>
        </div>
      </footer>
    </div>
  );
}
