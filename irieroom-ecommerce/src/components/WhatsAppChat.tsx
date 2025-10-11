import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  // WhatsApp business number (replace with actual number)
  const whatsappNumber = '18765551234'; // Format: country code + number (no spaces or special chars)

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear message and close chat
    setMessage('');
    setIsOpen(false);
  };

  const quickMessages = [
    "Hi! I'd like to know about your products",
    "What are your business hours?",
    "I have a question about my order",
    "Can I visit your café today?",
  ];

  const handleQuickMessage = (msg: string) => {
    setMessage(msg);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="whatsapp-chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4>The Irie Room</h4>
                  <span className="chat-status">
                    <span className="status-dot"></span>
                    Online
                  </span>
                </div>
              </div>
              <button
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="chat-body">
              <div className="chat-welcome-message">
                <p>👋 Hello! Welcome to The Irie Room!</p>
                <p>How can we help you today?</p>
              </div>

              <div className="quick-replies">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickMessage(msg)}
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            <div className="chat-footer">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="chat-input"
              />
              <button
                className="chat-send-btn"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <Send size={20} />
              </button>
            </div>

            <div className="chat-powered">
              <span>Powered by WhatsApp</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;

