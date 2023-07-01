import './ContactUs.css';
import InquiryForm from './components/InquiryForm';
import GeneralInquiries from './components/GeneralInquiries';

const ContactUs = () => {
  return (
    <div className='contactus'>
      <GeneralInquiries />
      <InquiryForm />
    </div>
  );
};

export default ContactUs;
