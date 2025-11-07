import { useState } from 'react';
import { Users, Target, Zap, Heart } from 'lucide-react';
import DecorativeBadge from './DecorativeBadge';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-blue-950 text-blue-200" id="about">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h2>
            <p className="text-blue-300 text-lg max-w-3xl mx-auto">
              We’re a team of passionate individuals dedicated to creating exceptional experiences
              and building lasting relationships with our clients.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <DecorativeBadge />

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Story</h3>

              <p className="leading-relaxed">
                X-Lock Ltd is a premier provider of high-quality computer equipment and accessories,
                dedicated to delivering innovative solutions for both personal and professional use.
                Established in <span className="font-semibold text-white">2005</span>, we specialize
                in building a strong networking solution (wired/wireless).
              </p>

              {/* Collapsible Section */}
              {isExpanded && (
                <div
                  className="leading-relaxed text-blue-200 space-y-4 transition-all duration-500 ease-in-out"
                >
                  <p>
                    Our commitment to excellence is reflected in our rigorous quality control
                    processes and our focus on cutting-edge technology. We cater to a diverse
                    clientele  from gamers and creative professionals to businesses and educational
                    institutions  ensuring that our products meet the highest standards of
                    performance and reliability.
                  </p>
                  <p>
                    At X-Lock Ltd, we prioritize customer satisfaction and support, offering expert
                    advice and comprehensive service to help clients find the right equipment to
                    suit their needs. Our mission is to empower users with the tools they need to
                    succeed in an increasingly digital world.
                  </p>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Core Products</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Desktops and Laptops</li>
                      <li>Servers and Workstations</li>
                      <li>Networking Equipment</li>
                      <li>Computer Peripherals (keyboards, mice, monitors)</li>
                      <li>Printers</li>
                      <li>UPS (Uninterrupted Power Supply)</li>
                      <li>Inverters</li>
                      <li>Custom Build Solutions</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm mt-4 text-blue-300 font-semibold hover:text-white transition-colors duration-300 underline underline-offset-4"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
}
