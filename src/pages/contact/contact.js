import React from "react";

export const Contact = () => {
    return (
        <>
            <section className="section-contact">
            <div className="heading-page"><h1>contact</h1></div>

            <div className="xmaps"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5022.571357202217!2d-7.4889668687957345!3d33.59867695876177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1690474657247!5m2!1sen!2sma" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="les-input"><h1 className="send-us">Send Us Your Message</h1>
            
            <input type="text" placeholder="        Full Name"/>
            <input type="text" placeholder="        Phone Number"/>
            <input type="text" placeholder="        Adress Email"/>
            <textarea name="" id="" cols="30" rows="3" placeholder="        Message"></textarea>
            <button>Send</button>
            </div>
            </div>

            </section>
        </>
    );
};