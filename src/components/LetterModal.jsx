import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const LetterModal = ({ isOpen, onClose, image, title, buttonText = "Open Full Letter" }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark border border-white/10 rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/5 bg-white dark:bg-dark">
              <h3 className="text-lg font-bold text-light truncate pr-8">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-text-muted hover:text-light"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Scrollable for A4 readability */}
            <div className="flex-grow overflow-auto p-4 md:p-8 bg-black/5 dark:bg-black/20">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-contain shadow-lg rounded-sm mx-auto"
                style={{ minHeight: '100%' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-black/5 dark:border-white/5 bg-white dark:bg-dark flex justify-center">
              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-2 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
              >
                <ExternalLink size={18} />
                <span>{buttonText}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetterModal;
