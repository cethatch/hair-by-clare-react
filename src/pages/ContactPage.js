import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCircleAlert } from "react-icons/ci";
import { HiOutlineCheckCircle } from "react-icons/hi2";

// Constant definitions
const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : 'https://effervescent-stroopwafel-efe523.netlify.app/.netlify/functions';

const validatePhone = (phone) => {
    if (!phone || !phone.trim()) return ''; // Empty is valid since phone is optional
    
    const digitsOnly = phone.replace(/\D/g, '');
    
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
        return 'Phone number must be at least 10 digits';
    } else if (digitsOnly.length > 11) {
        return 'Phone number cannot exceed 11 digits';
    } else if (digitsOnly.length === 11 && !digitsOnly.startsWith('1')) {
        return '11-digit numbers must start with 1 (US country code)';
    } else if (digitsOnly.length >= 10) {
        // Check invalid patterns for complete phone numbers
        const commonInvalidPatterns = [
            /^0{10,11}$/, // All zeros
            /^1{10,11}$/, // All ones  
            /^1234567890$/, // Sequential
            /^(\d)\1{9,10}$/ // Same digit repeated
        ];
        
        if (commonInvalidPatterns.some(pattern => pattern.test(digitsOnly))) {
            return 'Please enter a valid phone number';
        }
    }
    
    return ''; // No error
};

const validateName = (name) => {
    if (!name.trim()) return "Please enter your name";
    if (name.length < 2) return "Name must be at least 2 characters";
    if (name.length > 100) return "Name must not exceed 100 characters";
    return '';
}

const validateEmail = (email) => {
    if (!email.trim()) return "Please enter your email";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address (e.g., name@domain.com)';
    return '';
}

const validateMessage = (message) => {
    if (!message || !message.trim()) return 'Please enter a message or question.';
    return '';
};

const useCustomValidation = () => {
    useEffect(() => {
        const setCustomAlertMessages = () => {
            const fields = document.querySelectorAll('input, textarea');

            fields.forEach(field => {
                field.addEventListener('invalid', (e) => {
                    const fieldName = e.target.name;
                    const fieldValidity = e.target.validity;

                    if (fieldValidity.valueMissing) {
                        const customMessages = {
                            name: 'Please enter your name.',
                            email: 'Please enter your Email address.',
                            message: 'Please enter a message or question.'
                        };

                        e.target.setCustomValidity(customMessages[fieldName] || "This field is required.");
                    }
                });

                field.addEventListener('input', (e) => {
                    const fieldName = e.target.name;
                    const fieldValue = e.target.value;
                    
                    // Use shared validation functions
                    let errorMessage = '';
                    
                    if (fieldName === 'phone') {
                        errorMessage = validatePhone(fieldValue);
                    } else if (fieldName === 'name') {
                        errorMessage = validateName(fieldValue);
                    } else if (fieldName === 'email') {
                        errorMessage = validateEmail(fieldValue);
                    } else if (fieldName === 'message') {
                        errorMessage = validateMessage(fieldValue);
                    }
                    
                    e.target.setCustomValidity(errorMessage);
                    console.log(`Field: ${fieldName}, Value: "${fieldValue}", Error: "${errorMessage}"`);
                });

                field.addEventListener('blur', (e) => {
                    e.target.checkValidity();
                });
            });
        };

        setCustomAlertMessages();
    }, []);
};

function ContactPage() {
    useCustomValidation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [isSuccessfulSubmission, setIsSuccessfulSubmission] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Set custom validity on each field based on current form data
        const form = e.target;
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const phoneInput = form.querySelector('input[name="phone"]');
        const messageInput = form.querySelector('textarea[name="message"]');
        
        // Apply validation to each field
        nameInput.setCustomValidity(validateName(formData.name));
        emailInput.setCustomValidity(validateEmail(formData.email));
        phoneInput.setCustomValidity(validatePhone(formData.phone));
        messageInput.setCustomValidity(validateMessage(formData.message));
        
        // Check if form is valid and show browser validation messages
        if (!form.checkValidity()) {
            form.reportValidity(); // This shows the validation tooltips
            return; // Stop submission
        }
        
        // If we get here, validation passed, so proceed with submission
        setIsSubmitting(true);
        setConfirmationMessage('');
        
        try {
            console.log('Submitting to:', `${API_BASE_URL}/submit-contact`);
            console.log('Form data:', formData);
            
            const response = await fetch(`${API_BASE_URL}/submit-contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                setIsSuccessfulSubmission(true);
                setConfirmationMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I will get back to you soon!`);
                setFormData({ name: '', phone: '', email: '', message: '' });
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Submit error:', error);
            // Only network/server errors go to confirmation message now
            setConfirmationMessage(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="contact-top-banner-container">
                <div className="checkered-border-left checkered-border-half"></div>
                <h1>Contact Me</h1>
                <div className="checkered-border-right checkered-border-half"></div>
                <div className="checkered-border-mobile"></div>
            </div>

            <div className="contact-page-content-container">
                <section className="form-container">
                    <h2 className="contact-subtitle inquiry-header">Online Inquiry</h2>
                    <p className="form-instructions">Have a question prior to booking an appointment?<br/>Submit an inquiry below.</p>

                    

                    {!isSuccessfulSubmission ? (
                        <>
                            {confirmationMessage && !isSuccessfulSubmission && (
                                <div className="confirmation-message error">
                                    <CiCircleAlert className="error-icon"/> {confirmationMessage}
                                </div>
                            )}

                            <form className="contact-form visible" onSubmit={handleSubmit}>
                                <input 
                                    className="contact-input-field name-input" 
                                    id="name-input" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Name *" 
                                    required 
                                />

                                <input 
                                    className="contact-input-field phone-input" 
                                    id="phone-input" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    type="tel" 
                                    placeholder="Phone Number" 
                                />
                                        
                                <input 
                                    className="contact-input-field email-input" 
                                    id="email-input" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="email" 
                                    placeholder="Email *" 
                                    required
                                />

                                <textarea 
                                    className="contact-input-field message-input" 
                                    id="message-input" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Message *" 
                                    required 
                                />

                                <button 
                                    className="contact-input submit-form-button nav-button" 
                                    name="submit" 
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <AiOutlineLoading3Quarters className="loading-icon"/>
                                            Submitting...
                                        </>
                                    ) : ('Submit')}
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="success-message-container">
                                <HiOutlineCheckCircle className="success-icon" />
                                <div className="confirmation-message success">
                                    {confirmationMessage}
                                </div>
                            </div>
                        </>
                    )}

                    
                </section>

                <div className="checkered-border-mobile"></div>
    
                <section className="details-container">
                    <h2 className="contact-subtitle salon-details-header">Salon Details</h2>
                    <div className="salon-details-container">
                        <h3 className="salon-header">Muse Salon</h3>
                        <p className="muse-address salon-address">131 Pringle Ave, Walnut Creek, CA 94596</p>
                        <p className="muse-phone salon-phone">(925) 297-5786</p>
                        <p className="muse-hours salon-hours">Hours:<br/> Monday - Saturday, 9am - 5pm</p>
                        <a href="https://www.musesalonwc.com/" className="muse-hyperlink salon-hyperlink">www.musesalonwc.com</a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactPage;