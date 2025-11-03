import { Users, Target, Zap, Heart, Mail, Phone, MapPin } from 'lucide-react';
import DecorativeBadge from './DecorativeBadge';

export default function About() {
  return (
    <div className="bg-blue-950" id='about'>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              We're a team of passionate individuals dedicated to creating exceptional experiences 
              and building lasting relationships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
                      <DecorativeBadge/>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
              <p className="text-blue-200 leading-relaxed">
                Founded in 2006, we started with a simple mission: to deliver innovative solutions 
                that make a real difference. What began as a small startup has grown into a thriving 
                company serving clients worldwide.
              </p>
              <p className="text-blue-200 leading-relaxed">
                Our journey has been driven by curiosity, creativity, and an unwavering commitment 
                to excellence. Every project we undertake is an opportunity to push boundaries and 
                exceed expectations.
              </p>
            </div>

          </div>

 
        </div>
      </section>

     
    </div>
  );
}