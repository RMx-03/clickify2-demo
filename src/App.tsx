import { useEffect, useRef, ReactNode } from 'react';
import './index.css';
import { Camera, ChevronRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  // Import the AnimatedSection component
  const AnimatedSection = ({ children, delay = 0, className = "" }: {
    children: ReactNode;
    delay?: number;
    className?: string;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    
    return (
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white">
        {/* Top Navigation */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center px-8 py-4 border-b border-gray-200"
        >
          <motion.div 
            className="text-sm tracking-wider flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Camera className="text-red-600 mr-2" size={20} />
            </motion.div>
            <span className="mr-2 text-red-600 font-bold">THE</span>
            <span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-base font-semibold">CLICKIFY STUDIO</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs tracking-widest text-gray-500"
          >
            CAPTURING MOMENTS THAT LAST FOREVER
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[600px] bg-[#f2f2f2] relative overflow-hidden"
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
              alt="Photographer with camera" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          
          {/* Right Column - Text */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 p-12 flex flex-col justify-center"
          >
            <h1 className="text-4xl mb-1 tracking-wide"><span className="font-bold">THE</span><span className="text-red-600" style={{ fontFamily: "'Dancing Script', cursive" }}>Clickify</span></h1>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">PROFESSIONAL PHOTOGRAPHY SERVICES</p>
            
            <h2 className="text-3xl font-medium leading-tight mb-8">
              Capturing Your Perfect<br />
              Moments Through Our Lens.
            </h2>
            
            <p className="text-sm leading-relaxed mb-8">
              At TheClickify Studio, we specialize in translating emotions, stories, and milestones into timeless imagery. Our professional photographers combine technical expertise with creative vision to deliver exceptional photography services tailored to your unique needs and style.
            </p>
            
            <motion.button 
              className="border border-red-600 text-red-600 text-xs tracking-wider py-2 px-6 w-fit hover:bg-red-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(220, 38, 38, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              BOOK A SESSION
            </motion.button>
          </motion.div>
        </div>
        
        {/* Services Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex overflow-x-auto py-4 border-t border-b border-gray-200 whitespace-nowrap bg-gray-50"
        >
          {["EVENT SHOOTS", "COMMERCIAL SHOOTS", "WEDDING & PRE-WEDDING", "CORPORATE SHOOTS", "EVENT SHOOTS", "COMMERCIAL SHOOTS"].map((text, index) => (
            <motion.div 
              key={index} 
              className="flex-none px-6 text-xs tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#dc2626" }}
            >
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tagline Section */}
        <AnimatedSection className="py-16 px-12 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-red-600"
          >"</motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl uppercase mb-6 tracking-wide"
          >
            EVERY MOMENT TELLS A STORY, WE MAKE SURE IT'S BEAUTIFULLY TOLD
          </motion.h3>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl text-red-600"
          >"</motion.span>
        </AnimatedSection>
        
        {/* Services Section */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Services */}
          <AnimatedSection className="w-full md:w-1/2 border-t border-gray-200">
            {[
              { title: "01 / EVENT SHOOTS", desc: "COMPREHENSIVE COVERAGE OF CORPORATE EVENTS, PARTIES, CONFERENCES & CELEBRATIONS" },
              { title: "02 / COMMERCIAL SHOOTS", desc: "PROFESSIONAL PRODUCT PHOTOGRAPHY, BRANDING SESSIONS & MARKETING ASSETS" },
              { title: "03 / WEDDING & PRE-WEDDING", desc: "CAPTURING YOUR SPECIAL DAY FROM ENGAGEMENT SESSIONS TO THE FINAL DANCE" },
              { title: "04 / CORPORATE SHOOTS", desc: "BUSINESS PORTRAITS, TEAM PHOTOS, ARCHITECTURAL & WORKPLACE PHOTOGRAPHY" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  backgroundColor: "#f9fafb",
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                className="border-b border-gray-200 p-8 group"
              >
                <motion.h4 
                  className="text-sm font-medium tracking-wide mb-1 group-hover:text-red-600 transition-colors"
                  whileHover={{ color: "#dc2626" }}
                >{item.title}</motion.h4>
                <p className="text-xs text-gray-500 tracking-wide">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
          
          {/* Right Column - Portfolio Images */}
          <AnimatedSection delay={0.2} className="w-full md:w-1/2 grid grid-cols-2">
            <motion.div 
              className="h-[200px] bg-gray-100 overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                whileHover={{ scale: 1.1, rotate: -1 }}
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Corporate event" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="h-[200px] bg-gray-200 overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 1 }}
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Product photography" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="h-[200px] bg-gray-200 col-span-2 overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Wedding photography" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
        </div>
        
        {/* Featured In Section */}
        <div className="py-6 border-t border-b border-gray-200 flex justify-center items-center space-x-8 bg-gray-50">
          <span className="text-xs tracking-wider text-gray-600">AS SEEN IN</span>
          {["WEDDING MAG", "MODERN PHOTOGRAPHY", "BUSINESS INSIDER", "LOCAL NEWS"].map((brand, index) => (
            <span key={index} className="text-xs font-medium tracking-wider text-gray-900">{brand}</span>
          ))}
        </div>
        
        {/* Contact Section */}
        <div className="py-16 bg-gray-50 flex">
          <div className="w-full md:w-1/2 ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Photography equipment" 
              className="h-[300px] w-full object-cover"
            />
          </div>
          <AnimatedSection delay={0.3} className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-widest text-gray-500 mb-2"
            >
              BOOK YOUR SESSION
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-medium leading-tight mb-4"
            >
              LET'S CREATE<br />
              SOMETHING<br />
              <motion.span 
                initial={{ color: "#111827" }}
                animate={{ color: "#dc2626" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-red-600"
              >
                AMAZING
              </motion.span> TOGETHER
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm mb-6"
            >
              Contact us today to discuss your photography needs. Our team is ready to bring your vision to life with our expertise, creativity, and professional equipment.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-red-600 text-white w-full py-3 text-xs tracking-widest hover:bg-red-700 transition-colors"
            >
              CONTACT US
            </motion.button>
          </AnimatedSection>
        </div>
        
        {/* Footer */}
        <footer className="px-8 py-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-8">
              <span className="text-xs">HOME</span>
              <span className="text-xs">PORTFOLIO</span>
            </div>
            <div className="flex space-x-4">
              <Twitter size={16} className="text-red-600" />
              <Instagram size={16} className="text-red-600" />
              <Linkedin size={16} className="text-red-600" />
            </div>
            <div className="flex space-x-8">
              <span className="text-xs">SERVICES</span>
              <span className="text-xs">CONTACT</span>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex py-4 border-t border-gray-200">
            <div className="w-1/3">
              <div className="h-[120px] w-full flex flex-col justify-center px-4">
                <h4 className="text-sm font-medium mb-2">CONTACT US</h4>
                <div className="flex items-center text-xs text-gray-600 mb-1">
                  <Phone size={12} className="mr-2" /> +1 (555) 123-4567
                </div>
                <div className="flex items-center text-xs text-gray-600 mb-1">
                  <Mail size={12} className="mr-2" /> info@theclickify.com
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <MapPin size={12} className="mr-2" /> 123 Photo St, New York, NY
                </div>
              </div>
            </div>
            <div className="w-1/3 px-4 flex items-center justify-center">
              <button className="border border-red-600 text-red-600 text-xs tracking-wider py-2 px-4 hover:bg-red-600 hover:text-white transition-colors">
                VIEW PORTFOLIO
              </button>
            </div>
            <div className="w-1/3 flex items-center justify-center bg-white">
              <div className="text-center">
                <h4 className="text-sm font-medium mb-1">BOOK NOW</h4>
                <p className="text-xs text-gray-500">FOR PRIORITY SCHEDULING</p>
                <ChevronRight size={16} className="mx-auto mt-2 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="pt-4 text-center text-xs text-gray-400">
            <p>© 2025 THECLICKIFY STUDIO | PRIVACY POLICY | TERMS OF SERVICE</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
