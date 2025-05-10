import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ArcadeButton from '../components/ArcadeButton';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <PageTransition>
      <div className="py-8">
        <SectionTitle centered>CONTACT ME</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[#fbd000] text-xl mb-6">GET IN TOUCH</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-black border-2 border-[#4166f5] p-4">
                <div className="flex items-center text-white mb-2">
                  <User size={16} className="mr-2" />
                  <label htmlFor="name" className="text-sm">NAME</label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#181818] border-2 border-[#fbd000] text-white p-2 text-sm focus:outline-none focus:border-[#e7372c]"
                />
              </div>
              
              <div className="bg-black border-2 border-[#4166f5] p-4">
                <div className="flex items-center text-white mb-2">
                  <Mail size={16} className="mr-2" />
                  <label htmlFor="email" className="text-sm">EMAIL</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#181818] border-2 border-[#fbd000] text-white p-2 text-sm focus:outline-none focus:border-[#e7372c]"
                />
              </div>
              
              <div className="bg-black border-2 border-[#4166f5] p-4">
                <div className="flex items-center text-white mb-2">
                  <Phone size={16} className="mr-2" />
                  <label htmlFor="phone" className="text-sm">PHONE</label>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#181818] border-2 border-[#fbd000] text-white p-2 text-sm focus:outline-none focus:border-[#e7372c]"
                />
              </div>
              
              <div className="bg-black border-2 border-[#4166f5] p-4">
                <div className="flex items-center text-white mb-2">
                  <MessageSquare size={16} className="mr-2" />
                  <label htmlFor="message" className="text-sm">MESSAGE</label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#181818] border-2 border-[#fbd000] text-white p-2 text-sm focus:outline-none focus:border-[#e7372c] resize-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <ArcadeButton 
                  type="submit"
                  color="green"
                  className={`flex items-center mx-auto ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  onClick={status === 'sending' ? (e) => e.preventDefault() : undefined}
                >
                  <Send size={16} className="mr-2" />
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </ArcadeButton>
                
                {status === 'success' && (
                  <motion.p 
                    className="text-[#58b847] mt-4 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                
                {status === 'error' && (
                  <motion.p 
                    className="text-[#e7372c] mt-4 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Error sending message. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[#fbd000] text-xl mb-6">CONTACT INFO</h3>
            
            <div className="space-y-6">
              <div className="bg-black border-2 border-[#e7372c] p-6">
                <div className="flex mb-4">
                  <div className="w-10 h-10 bg-[#4166f5] border-2 border-[#fbd000] flex items-center justify-center mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">EMAIL</h4>
                    <p className="text-[#fbd000] text-xs">ravenampere0123@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <div className="w-10 h-10 bg-[#4166f5] border-2 border-[#fbd000] flex items-center justify-center mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">PHONE</h4>
                    <p className="text-[#fbd000] text-xs">09924313554</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 bg-[#4166f5] border-2 border-[#fbd000] flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">LOCATION</h4>
                    <p className="text-[#fbd000] text-xs">Las Piñas City, Philippines</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;