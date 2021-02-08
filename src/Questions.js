import React, { useState } from "react";
import "./Questions.css";
import FAQ from "./FAQ";

function Questions() {
  const [signIn, setSignIn] = useState(false);
  const [faqs, setfaqs] = useState([
    {
      question: "What can i watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer.",
      open: true,
    },
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      open: false,
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from €7,99 a month. No extra costs or contracts.",
      open: false,
    },
    {
      question: "Where can i watch?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. From your personal computer or on any internet-connected device including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      open: false,
    },
    {
      question: "How do i cancel?",
      answer:
        "Netflix is flexible.You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      open: false,
    },
    {
      question: "How does the free trial works?",
      answer:
        "Try us free for 30 days! Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, Cancel online anytime, 24 hours a day.",
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="Questions">
      <div className="faqHeading">
        <h1>Frequently Ask Questions</h1>
      </div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        <div className="loginScreen__input">
          <form>
            <input type="email" placeholder="Email Address" />
            <button
              onClick={() => setSignIn(true)}
              className="loginScreen__getStarted"
            >
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Questions;