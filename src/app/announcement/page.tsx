import Link from "next/link";
import Image from "next/image";
import shortLogo from "../../assets/short-logo.svg";
export default function Announcement() {
  return (
    <div className="min-h-screen bg-[#0d0d1a]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800/50 bg-[rgba(13,13,26,0.9)]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="w-12 h-10">
              <Image src={shortLogo} alt="logo" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#home" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/#vision-mission" className="text-gray-300 hover:text-white transition-colors">Vision</Link>
            <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
            <Link href="/#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
            <Link href="/#news" className="text-gray-300 hover:text-white transition-colors">News</Link>
          </nav>
          <button className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center bg-gradient-to-r from-[#8E1076] to-[#E82E5D] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8E1076" />
                    <stop offset="100%" stopColor="#E82E5D" />
                  </linearGradient>
                </defs>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Official Announcement: Launch of the Pactus Nexus Project
              </h1>
              <div className="text-gray-400 space-y-2">
                <p className="text-lg">Date: August 12, 2025</p>
                <p className="text-lg">From: Pactus Nexus Team</p>
              </div>
            </header>

            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are proud to announce the launch of <strong className="text-white">Pactus Nexus</strong>, a transformative blockchain initiative selected through a fair and transparent process under the TrustChain Open Call #5. This project is a bold step toward building a sustainable, scalable, and human-centric blockchain ecosystem, fully aligned with TrustChain's mission and EU regulations. Below, we outline the vision, objectives, and principles of Pactus Nexus, reflecting the collective expertise of our team and our commitment to delivering a groundbreaking blockchain solution.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                1. Our Team: The Majority of Pactus Blockchain Contributors
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pactus Nexus is led by Sensifai and comprises the dominant majority of developers, researchers, partners, and colleagues who have driven the development of the Pactus blockchain over the past three years. Our team's extensive experience contributing to the open-source Pactus blockchain, combined with Sensifai's proven Web3 expertise (e.g., Artogenia.com, IP-captain, Sensilend), forms a robust foundation for Pactus Nexus. The Pactus Nexus proposal and its architecture were independently developed by Sensifai, a key contributor to Pactus's technical R&D over two years, and subsequently received the voluntary support of the majority of Pactus contributors, united by a shared vision to advance decentralized technologies through TrustChain's fair and transparent framework. Leveraging the MIT-licensed Pactus codebase, our team is poised to deliver a cutting-edge DLT solution that meets TrustChain's rigorous standards.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                2. A New Blockchain with an Energy-Efficient Consensus Mechanism
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pactus Nexus is developing a new blockchain featuring a highly energy-efficient consensus mechanism, designed from the ground up to enhance the principles of PoS. This mechanism prioritizes sustainability, scalability, security, and performance, aligning with TrustChain's green DLT objectives. Leveraging the MIT-licensed Pactus blockchain codebase, we will deploy this consensus mechanism on Pactus and explore integration with other publicly available blockchains under permissive licenses. Our commitment to open-source principles ensures widespread adoption and collaboration, delivering a modular, interoperable DLT within the 9-month timeline outlined in our TrustChain proposal.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                3. Democratized, Open, and Human-Centric Governance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pactus Nexus introduces a fully democratized, open, and human-centric governance model, distinct from the Pactus blockchain. We empower all stakeholders—developers, users, and community members—to participate in transparent, inclusive decision-making processes. This framework ensures Pactus Nexus serves individuals and communities across sectors like finance, healthcare, and supply chain management, while maintaining full compliance with EU regulations, including GDPR and eIDAS2. By prioritizing accessibility and equity, we are creating a DLT that embodies TrustChain's user-centric vision.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                4. Democratic Infrastructure and Community Engagement
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pactus Nexus will maintain a fully democratic infrastructure, encompassing its website, tokens, social media, and community platforms. Every aspect of the project's ecosystem will be governed through open, participatory processes, enabling community members to shape its development. We are committed to building a vibrant, inclusive community that reflects the principles of decentralization and collaboration, ensuring Pactus Nexus remains a true public asset. We invite stakeholders to join us via <strong className="bg-gradient-to-r from-[#8E1076] to-[#E82E5D] bg-clip-text text-transparent">Pactusnexus.org</strong> to contribute to this transformative ecosystem.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                5. Independent Identity and Legal Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pactus Nexus operates as an independent platform, building on the open-source Pactus blockchain's MIT-licensed codebase to create a distinct, democratized ecosystem. The Pactus Nexus proposal was developed solely by Sensifai, with no prior partnerships or agreements with external Pactus entities. We clarify that Pactus.org, its social media channels, email addresses, tokens, and related infrastructure are not affiliated with Pactus Nexus and do not represent our mission, objectives, or activities. The Pactus Nexus team is fully committed to complying with intellectual property rights, GDPR, and all applicable EU regulations, ensuring the project's legality and alignment with TrustChain's standards. We are not responsible for claims or representations made through Pactus.org or its associated channels.
              </p>
            </section>

            {/* Commitment Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                Our Commitment
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pactus Nexus is a movement toward a sustainable, inclusive, and decentralized future. With the support of TrustChain Open Call #5, we are committed to delivering a modular, interoperable DLT solution over the next 9 months, integrating seamlessly with existing TrustChain frameworks and meeting the highest standards of energy efficiency, scalability, and regulatory compliance. Our team's expertise, supported by the majority of Pactus contributors (see Annex I) and Sensifai's independent research (see Annex II), ensures the project's success. We are grateful for TrustChain's rigorous and transparent selection process and are dedicated to exceeding expectations through innovation and collaboration.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For more information about Pactus Nexus, including opportunities to collaborate, please visit our website at <strong className="bg-gradient-to-r from-[#8E1076] to-[#E82E5D] bg-clip-text text-transparent">Pactusnexus.org</strong> or contact us at [Insert Sensifai Contact Information]. Stay tuned for updates as we advance toward a transformative blockchain solution.
              </p>
            </section>

            {/* Signature */}
            <div className="text-center pt-8 border-t border-gray-700">
              <p className="text-lg text-gray-300 mb-2">Sincerely,</p>
              <p className="text-xl font-semibold text-white mb-1">The Pactus Nexus Team</p>
              <p className="text-lg bg-gradient-to-r from-[#8E1076] to-[#E82E5D] bg-clip-text text-transparent">Sensifai</p>
            </div>
          </article>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#8E1076]/20 to-[#E82E5D]/20 border border-[#8E1076]/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Revolution</h3>
              <p className="text-gray-300 mb-6">
                Be part of the sustainable blockchain future with Pactus Nexus
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8E1076] to-[#E82E5D] text-white font-medium rounded-md hover:opacity-90 transition-opacity">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex flex-col mb-6">
                <h3 className="text-xl font-semibold text-white">Pactus-Nexus</h3>
                <p className="text-sm text-gray-400">by Sensifai</p>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-400">info@pactusnexus.org</p>
                <p className="text-gray-400">10th Floor, Flexi-Space, Mechelsesteenweg 455, 1950 Kraainem, Belgium</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">(c) 2025 Sensifai BV, All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
