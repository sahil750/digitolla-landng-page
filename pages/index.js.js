import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-700 to-pink-600 text-white p-6 font-sans">
      <Head>
        <title>Digitolla – Digital Agency in Jammu & Kashmir</title>
        <meta name="description" content="Digitolla is a social media, event, and branding agency based in J&K. We create stunning content, manage digital growth, and cover events like pros." />
        <meta name="keywords" content="Digitolla, social media marketing, event coverage, digital agency, Jammu Kashmir, content creation, video editing" />
        <meta name="author" content="Digitolla" />
      </Head>

      <main className="max-w-3xl mx-auto text-center mt-24">
        <h1 className="text-5xl font-bold mb-6">Digitolla</h1>
        <p className="text-xl italic mb-8">Event hoo ya Social Media, sab set hai!</p>
        <p className="text-lg">
          We’re a creative digital agency helping brands and creators grow with content, event coverage, and strategy. 
          Based in Jammu & Kashmir, serving India-wide 🌍
        </p>

        <a href="mailto:hello@digitolla.com" className="inline-block mt-10 bg-white text-indigo-700 font-bold px-6 py-3 rounded-full shadow hover:bg-opacity-80 transition">
          📩 Contact Us
        </a>
      </main>

      <footer className="text-sm text-center mt-20 text-white/80 border-t border-white/20 pt-4">
        © 2025 Digitolla • Built for growth • hello@digitolla.com
      </footer>
    </div>
  );
}