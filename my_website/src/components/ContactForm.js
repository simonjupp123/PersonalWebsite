import React, {useState} from 'react'


const domain_name = "https://simonjupp123.github.io/PersonalWebsite"
function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData, 
          [name]: value 
        }));
      };
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    // };

    const post_submision_url = domain_name.concat("/thankyou")

    return (
        <form action="https://formsubmit.co/simon.jupp@yale.edu" method="POST">
            <div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={post_submision_url} />
                <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="text">Message:</label>
                <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
    
export default ContactForm;