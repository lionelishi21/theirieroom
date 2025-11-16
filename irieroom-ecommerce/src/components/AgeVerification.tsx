import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const AgeVerification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setIsVisible(true);
      // Prevent scrolling when modal is visible
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    // Control body scroll based on modal visibility
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVisible]);

  const handleVerify = (isOldEnough: boolean) => {
    if (isOldEnough) {
      localStorage.setItem('ageVerified', 'true');
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    } else {
      // Redirect to a safe page or show message
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="age-verification-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="age-verification-modal"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
              scale: isExiting ? 0.8 : 1, 
              opacity: isExiting ? 0 : 1,
              y: isExiting ? 50 : 0
            }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="age-verification-content">
              <div className="age-verification-icon">
                <AlertTriangle size={48} />
              </div>
              <h2 className="age-verification-title">
                Age Verification Required
              </h2>
              <p className="age-verification-text">
                You must be <strong>18 years or older</strong> to enter this website.
                <br />
                By clicking "I am 18 or older", you confirm that you meet the age requirement.
              </p>
              <div className="age-verification-buttons">
                <motion.button
                  className="age-verify-btn age-verify-yes"
                  onClick={() => handleVerify(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  I am 18 or older
                </motion.button>
                <motion.button
                  className="age-verify-btn age-verify-no"
                  onClick={() => handleVerify(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  I am under 18
                </motion.button>
              </div>
              <p className="age-verification-disclaimer">
                This website contains age-restricted content. Please verify your age to continue.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerification;

