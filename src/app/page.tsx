import Link from "next/link";
import Image from "next/image";
import foundedByEuropean from "../assets/founded-by-european.png";
import nextGeneration from "../assets/next-generation.png";
import ngiTrustchain from "../assets/ngi-trustchain.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d1a]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800/50 bg-[rgba(13,13,26,0.9)]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-10">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 91">
                <g id="Logogram">
                  <path 
                    d="M57.3652 7.728L39.5522 79.316C38.1662 85.807 32.4322 90.446 25.7952 90.446H6.39522C2.32722 90.446 -0.705775 86.696 0.143225 82.718L17.9562 11.13C19.3422 4.639 25.0762 0 31.7132 0H51.1132C55.1812 0 58.2142 3.75 57.3652 7.728Z" 
                    fill="url(#paint0_linear_1_42)"
                  />
                  <path 
                    d="M106.804 4.071L99.4522 38.499C97.1532 49.266 87.6402 56.961 76.6302 56.961H60.9882C58.8452 56.961 57.2482 54.986 57.6952 52.891L65.0472 18.463C67.3462 7.696 76.8592 0 87.8692 0H103.511C105.654 0 107.251 1.975 106.804 4.071Z" 
                    fill="url(#paint1_linear_1_42)"
                  />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1_42" x1="-5.92807" x2="47.3202" y1="82.4089" y2="25.3161" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#84EC1B"/>
                    <stop offset="1" stopColor="#217A01"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1_42" x1="57.1359" x2="95.6936" y1="55.4078" y2="14.0662" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#25EC1B"/>
                    <stop offset="1" stopColor="#1A9000"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
            <Link href="#news" className="text-gray-300 hover:text-white transition-colors">News</Link>
          </nav>
          <button className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16"/>
              <path d="M4 18h16"/>
              <path d="M4 6h16"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: 'url("/_assets/v10/708837afc3206d85772097da90af3b960eef6960.png")'}}></div>
        <div className="absolute inset-0 bg-[rgba(13,13,26,0.7)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Welcome to Pactus Nexus</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A Secure and Decentralized Machine Learning Platform for Privacy-Preserving AI. Built by Sensifai.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg bg-green-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity mb-12">
            Visit TrustChain
          </button>
          
          {/* EU Funding Section */}
          <div className="mt-12 px-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-80 max-w-6xl mx-auto">
              <div className="flex-shrink-0">
                <Image 
                  src={foundedByEuropean} 
                  alt="Funded by European Union" 
                  width={300} 
                  height={100}
                  className="object-contain w-auto h-12 sm:h-16 md:h-20 lg:h-24 max-w-[120px] sm:max-w-[180px] md:max-w-[250px] lg:max-w-[300px]"
                />
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src={nextGeneration} 
                  alt="Next Generation Internet" 
                  width={200} 
                  height={50}
                  className="object-contain w-auto h-8 sm:h-12 md:h-14 lg:h-16 max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[200px]"
                />
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src={ngiTrustchain} 
                  alt="NGI TrustChain" 
                  width={300} 
                  height={100}
                  className="object-contain w-auto h-12 sm:h-16 md:h-20 lg:h-24 max-w-[120px] sm:max-w-[180px] md:max-w-[250px] lg:max-w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl text-white mb-4">Decentralized Data Control</h4>
              <p className="text-gray-300 leading-relaxed">
                Data owners can share their data for AI model training without losing control or compromising privacy. Our platform ensures data remains encrypted and decentralized.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl text-white mb-4">Secure AI Model Training</h4>
              <p className="text-gray-300 leading-relaxed">
                Leverage our network to train powerful AI models on diverse datasets while respecting user privacy through advanced cryptographic techniques.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl text-white mb-4">Trustworthy Data Monetization</h4>
              <p className="text-gray-300 leading-relaxed">
                A transparent platform that enables data providers to monetize their assets securely, and allows AI developers to access high-quality data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 text-blue-400">01</div>
              <h3 className="text-xl font-semibold text-white mb-4">Decentralized Storage</h3>
              <p className="text-gray-300 leading-relaxed">
                Data is stored on a decentralized network like IPFS. Access is managed via blockchain, ensuring no central point of failure.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 text-purple-500">02</div>
              <h3 className="text-xl font-semibold text-white mb-4">Privacy by Design</h3>
              <p className="text-gray-300 leading-relaxed">
                We use advanced cryptography, including Homomorphic Encryption, so computations are performed directly on encrypted data.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 text-blue-400">03</div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure Computation</h3>
              <p className="text-gray-300 leading-relaxed">
                AI models are trained across the decentralized network, bringing the computation to the data, not the other way around.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 text-purple-500">04</div>
              <h3 className="text-xl font-semibold text-white mb-4">Verifiable Trust</h3>
              <p className="text-gray-300 leading-relaxed">
                All transactions and access controls are recorded on a blockchain, creating a transparent and auditable ecosystem for all participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{backgroundImage: 'url("/_assets/v10/36e3724c0fb49c45de5ca4ea74d80292a07bbe91.png")'}}></div>
        <div className="absolute inset-0 bg-[rgba(13,13,26,0.8)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Planned Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            <div className="space-y-12 md:space-y-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <h3 className="text-xl font-semibold text-white mb-2">Platform Alpha Launch</h3>
                  <p className="text-gray-300">Initial release of the decentralized network and core encryption features.</p>
                </div>
                <div className="hidden md:block w-6 h-6 rounded-full bg-blue-500 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-6 h-6 rounded-full bg-purple-500 z-10"></div>
                <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">First Pilot Projects</h3>
                  <p className="text-gray-300">Onboarding initial partners for private AI model training.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <h3 className="text-xl font-semibold text-white mb-2">Public Beta</h3>
                  <p className="text-gray-300">Opening the platform to a wider audience of developers and data providers.</p>
                </div>
                <div className="hidden md:block w-6 h-6 rounded-full bg-blue-500 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-6 h-6 rounded-full bg-purple-500 z-10"></div>
                <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">Monetization Features</h3>
                  <p className="text-gray-300">Implementing the full suite of data monetization tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Newsroom</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600"></div>
              <div className="p-6">
                <h4 className="text-xl text-white mb-4">Sensifai's Pactus Nexus Wins NGI TrustChain Grant</h4>
                <p className="text-gray-300 leading-relaxed">
                  We are proud to be selected as a winner in the NGI Trustchain open calls, validating our vision for a more secure and trustworthy AI ecosystem.
                </p>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600"></div>
              <div className="p-6">
                <h4 className="text-xl text-white mb-4">The Future of AI is Decentralized</h4>
                <p className="text-gray-300 leading-relaxed">
                  Read our latest blog post on why decentralized architecture is critical for the next generation of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Partners & Supporters</h2>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-8 inline-block">
              <div className="text-2xl font-bold text-white">NGI TrustChain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex flex-col mb-6">
                <h3 className="text-xl font-semibold text-white">Pactus Nexus</h3>
                <p className="text-sm text-gray-400">by Sensifai</p>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
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
                <p className="text-gray-400">sales.support@Sensifai.com</p>
                <p className="text-gray-400">10th Floor, Flexi-Space, Mechelsesteenweg 455, 1950 Kraainem, Belgium</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sensifai. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
