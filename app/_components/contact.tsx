"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import './../style/contact.css'; // 追加のCSSファイル

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        emailjs.sendForm('test_01', 'template_c3po9d4', form, 'ji1kxOu0xXZdN2T4n')
            .then((result) => {
                console.log('Message Sent:', result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log('Error:', error.text);
                alert('Failed to send message.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-container">
                <label htmlFor="name">お名前</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="お名前を入力"
                    required
                />
            </div>
            <div className="input-container">
                <label htmlFor="email">メールアドレス</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="メールアドレスを入力"
                    required
                />
            </div>
            <div className="input-container">
                <label htmlFor="subject">件名</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="件名を入力"
                    required
                />
            </div>
            <div className="input-container">
                <label htmlFor="message">メッセージ</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="メッセージを入力"
                    required
                />
            </div>
            <div className='button-container'>
                <button type="submit" className="submit-btn">送信</button>
            </div>
        </form>
    );
};

export default ContactPage;
