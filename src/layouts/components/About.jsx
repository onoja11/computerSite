import { Users, Target, Zap, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white" id='about'>
      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're a team of passionate individuals dedicated to creating exceptional experiences 
              and building lasting relationships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, we started with a simple mission: to deliver innovative solutions 
                that make a real difference. What began as a small startup has grown into a thriving 
                company serving clients worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey has been driven by curiosity, creativity, and an unwavering commitment 
                to excellence. Every project we undertake is an opportunity to push boundaries and 
                exceed expectations.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of collaboration and innovation. By combining cutting-edge 
                technology with human-centered design, we create solutions that are both powerful 
                and intuitive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team brings together diverse perspectives and expertise, ensuring that every 
                project benefits from a holistic approach. We're not just service providers – 
                we're partners in your success.
              </p>
            </div>
          </div>

 
        </div>
      </section>

     
    </div>
  );
}