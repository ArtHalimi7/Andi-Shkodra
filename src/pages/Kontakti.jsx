import React, { useState, useRef } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import emailjs from '@emailjs/browser'

const ContactInfoItem = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col items-center mb-6 text-center">
      <div className="flex flex-col items-center mb-1">
        {/* Fixed the centering of the icon by making the container a flex container */}
        <div className="bg-red-100 rounded-full p-2 mb-1.5 flex items-center justify-center w-10 h-10">
          <div className="text-red-600 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-700">{content}</p>
    </div>
  );
};

const Kontakti = () => {
  const { t } = useTranslation()
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',         // Changed from emri to from_name
    from_email: '',        // Changed from email to from_email
    phone: '',             // Added phone field
    subject: '',           // Changed from subjekti to subject
    message: ''            // Changed from mesazhi to message
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    
    // Add current timestamp for the sent_at field
    const templateParams = {
      ...formData,
      sent_at: new Date().toLocaleString()
    };
    
    // Using EmailJS to send the email
    emailjs.send(
      'service_l33ug9r',   // Your service ID
      'template_8t959el',  // Your template ID
      templateParams,      // Pass all form data plus timestamp
      '-NWp731-hJ2KBhmcB'  // Your public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setLoading(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setLoading(false);
      setSubmitStatus('error');
      
      // Show error message
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 sm:py-16 md:mt-[-90px]" id="kontakti">
      {/* Header Section */}
      <div className="text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-red-500 text-red-500 text-sm mb-4">
          {t('contact.label')}
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          {t('contact.title')}
        </h1>
        
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
          {t('contact.description')}
        </p>
      </div>
      
      {/* Contact Section with Form and Sidebar */}
      <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-8">
        {/* Contact Form - Takes full width on mobile, 2/3 on desktop */}
        <div className="order-1 lg:order-1 lg:col-span-2 bg-white rounded-lg shadow-sm p-6 sm:p-8">
          {submitStatus === 'success' && (
            <div className="bg-green-50 text-green-800 p-4 mb-6 rounded-md border border-green-200">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('contact.successMessage')}
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50 text-red-800 p-4 mb-6 rounded-md border border-red-200">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t('contact.errorMessage')}
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {/* Name and Email fields */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label htmlFor="from_name" className="block text-gray-700 font-medium mb-2">{t('contact.form.name').toUpperCase()}</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>
              
              <div className="flex-1">
                <label htmlFor="from_email" className="block text-gray-700 font-medium mb-2">{t('contact.form.email').toUpperCase()}</label>
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email" 
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
            </div>
            
            {/* Phone field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">{t('contact.form.phone').toUpperCase()}</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder={t('contact.form.phonePlaceholder')}
              />
            </div>
            
            {/* Subject field */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">{t('contact.form.subject').toUpperCase()}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder={t('contact.form.subjectPlaceholder')}
                required
              />
            </div>
            
            {/* Message field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('contact.form.message').toUpperCase()}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder={t('contact.form.messagePlaceholder')}
                rows="6"
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div>
              <button 
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-lg flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Information Sidebar - Below form on mobile, beside form on desktop */}
        <div className="order-2 lg:order-2 bg-white rounded-lg shadow-sm p-6 sm:p-8 mt-0">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b pb-3">{t('contact.info.title')}</h2>
          
          <ContactInfoItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title={t('contact.info.phone')}
            content={t('contact.info.phoneNumber')}
          />
          
          <ContactInfoItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title={t('contact.info.email')}
            content={t('contact.info.emailAddress')}
          />
          
          <ContactInfoItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title={t('contact.info.location')}
            content={t('contact.info.locationDetails')}
          />
          
          {/* Social Media Links - Centered */}
          <div className="mt-8 pt-4 border-t text-center">
            <h3 className="text-lg font-medium mb-4 text-center">{t('contact.social.title')}</h3>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/ANDIISHKODRA" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/andiishkodra/" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakti