import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useAPI } from '../../context/AppContext';
import { ToastContainer, toast } from "react-toastify";


export default function ContactSection() {
  const { messageAPI } = useAPI();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const notify = () => toast.success("Message Sent successfully!");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      // Construct message payload
      await messageAPI.create({
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message
      });

      setFeedback("✅ Message sent successfully!");
          notify();
      
      

      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setFeedback(""), 3000);
    } catch (error) {
      console.error(error);
      setFeedback("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 py-16 px-4" id='contact'>
      <ToastContainer/>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
            <p className="text-blue-200 mb-2">Drop us an email anytime</p>
            <a href="mailto: Xlockltd21@gmail.com" className="text-blue-300 font-medium hover:underline">
             Xlockltd21@gmail.com
            </a>
          </div>

          <div className="bg-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Call Us</h3>
            <p className="text-blue-200 mb-2">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+2348033197477" className="text-blue-300 font-medium hover:underline">
              +234(0)8033197477
            </a>
            <br></br>
            <a href="tel:+2348037042808" className="text-blue-300 font-medium hover:underline">
               +234(0)8037042808
            </a>
          </div>

          <div className="bg-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Visit Us</h3>
            <p className="text-blue-200 mb-2">Come say hello at our office</p>
            <p className="text-blue-300 font-medium"> suite A12 commerce plaza<br/>garki , area 1 Abuja</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-blue-900 rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-700 bg-blue-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-700 bg-blue-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-blue-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-blue-200 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-700 bg-blue-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-blue-200 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Tell us more about your inquiry..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-700 bg-blue-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-blue-400"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {feedback && (
            <p className="text-sm text-center mt-4 text-gray-300">{feedback}</p>
          )}
        </div>
      </div>
    </div>
  );
}
