import { useState, useEffect } from "react";

import ContactForm from "../components/contact/contact-form";
import Notification from "../ui/notification";
import Head from "next/head";

const ContactPage = () => {
  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    if (notificationData) {
      const timer = setTimeout(() => setNotificationData(null), 200000);
      return () => clearTimeout(timer);
    }
  }, [notificationData]);

  const handleFormSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);

    setNotificationData({
      status: "pending",
      title: "Sending...",
      message: "Message is being send!",
    });
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json((data) => {
          throw new Error("Failed to send message..");
        });
      })
      .then((res) => {
        setNotificationData({
          status: "success",
          title: "Success!",
          message: "Message has been send!",
        });
      })
      .catch((err) => {
        setNotificationData({
          status: "error",
          title: "Error!",
          message: "Message could not be send!",
        });
      });
  };
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Trial for nextjs project. Creating a blog site"
        />
      </Head>
      <ContactForm handleFormSubmit={handleFormSubmit} />
      {notificationData && <Notification {...notificationData} />}
    </>
  );
};

export default ContactPage;
