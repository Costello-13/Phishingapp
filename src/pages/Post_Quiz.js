import React, { useState } from "react";
import { db } from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { mailprop } from "./Explanation2";
import ModalPost from "../components/ModalPost";


function Post_Quiz() {
  const [showPost, setPostModal] = useState(false);


  function posthandler() {
    setPostModal(true);
  }

  const questions = [
    {
      quest_title: "Which of these statements is correct?",
      answers: [
        {
          answer_text:
            "If you get an email that looks like it's from someone you know, you can click on any links as long as you have a spam blocker and anti-virus protection.",
          isCorrect: false,
        },
        {
          answer_text:
            "If you get a message from a colleague who needs your password, you should never give it out unless it's an emergency.",
          isCorrect: false,
        },
        {
          answer_text:
            "If you get an email from HR asking you to provide personal information right away, you should check it out first to make sure they are who they say they are.",
          isCorrect: true,
        },
        {
          answer_text:
            "You can trust an email from a client, when it has the client's logo and contains at least one fact of the client that you know to be true.",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title:
        "You get a text message from a vendor who asks you to click on a link to renew your password so that you can log in to its website. You should:",
      answers: [
        {
          answer_text:
            "Reply to the text message to confirm that you need to renew your password",
          isCorrect: false,
        },
        {
          answer_text:
            "Pick up the phone and call the vendor, using a phone number you know to be correct, to confirm that the request is real.",
          isCorrect: true,
        },
        {
          answer_text:
            "Click on the link. If it takes you to the vendor's website, then you'll know it's not a scam.",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title:
        "Email authentication can help protect against phishing attacks. ",
      answers: [
        { answer_text: "True", isCorrect: true },
        { answer_text: "False", isCorrect: false },
      ],
    },
    {
      quest_title:
        "If you fall for a phishing scam, what should you do to limit the damage?",
      answers: [
        { answer_text: "Delete the phishing email", isCorrect: false },
        { answer_text: "Change your passwords", isCorrect: true },
        {
          answer_text: "Unplug the computer to reduce further damage",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title:
        "What should you do as an employee if you suspect a phishing attack?",
      answers: [
        { answer_text: "Ignore it", isCorrect: false },
        { answer_text: "Report it", isCorrect: true },
        {
          answer_text: "Open it to check if it looks legitimate",
          isCorrect: false,
        },
        {
          answer_text: "Show your coworkers to see what they think",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title: "What are the most common signs of a phishing scams?",
      answers: [
        { answer_text: "Nice graphics and layout", isCorrect: false },
        { answer_text: "Proper spelling and grammar", isCorrect: false },
        { answer_text: "Contains personal information", isCorrect: false },
        {
          answer_text: "Sense of urgency & unexpected attachment",
          isCorrect: true,
        },
      ],
    },
    {
      quest_title: "How many phishing emails are sent each day worldwide?",
      answers: [
        { answer_text: "10 million", isCorrect: false },
        { answer_text: "50 million", isCorrect: false },
        { answer_text: "100 million", isCorrect: false },
        { answer_text: "150 million", isCorrect: true },
      ],
    },
    {
      quest_title:
        "How can a person executing a phishing attack steal someone's identity?",
      answers: [
        {
          answer_text:
            "They pretend they are someone else when emailing phishing messages, so that's like stealing an identity.",
          isCorrect: false,
        },
        {
          answer_text:
            "They ask for personal information on a webpage or pop-up window linked from the phishing email, and they use the information entered to make illegal purchases or commit fraud.",
          isCorrect: true,
        },
        {
          answer_text:
            "They ask for money to purchase your ID on the black market.",
          isCorrect: false,
        },
        {
          answer_text:
            "They send a request for the recipient's driver's license and credit cards.",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title:
        "What can happen if you click on a phishing email link or attachment?",
      answers: [
        {
          answer_text: "The email sender could gain access to company systems.",
          isCorrect: false,
        },
        {
          answer_text:
            "The email sender could steal your personal information or company information.",
          isCorrect: false,
        },
        {
          answer_text:
            "The email sender could distribute malware into the company network.",
          isCorrect: false,
        },
        { answer_text: "All of the above", isCorrect: true },
      ],
    },
    {
      quest_title:
        "Why is it important for me to watch out for phishing emails if my organization has email controls and security in place?",
      answers: [
        {
          answer_text:
            "Phishing emails grow more sophisticated all the time. Each one of us needs to be vigilant.",
          isCorrect: false,
        },
        {
          answer_text:
            "IT has several security precautions in place, but they don't control individual users' non-corporate devices.",
          isCorrect: false,
        },
        {
          answer_text:
            "You most likely receive phishing emails on your personal email accounts as well, so it pays to be aware.",
          isCorrect: false,
        },
        { answer_text: "All of the above", isCorrect: true },
      ],
    },
    {
      quest_title: "What is spear fishing?",
      answers: [
        {
          answer_text:
            "A type of phishing that targets specific groups of people in an organization",
          isCorrect: true,
        },
        {
          answer_text: " A type of phishing that promises a large reward",
          isCorrect: false,
        },
        {
          answer_text:
            "A type of phishing that lures the recipient in with a fun offer and then spreads a virus",
          isCorrect: false,
        },
        {
          answer_text: "A type of phishing that involves vacation offers.",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title:
        "How is mobile phishing security different from PC and laptop phishing security? ",
      answers: [
        {
          answer_text: "Mobile phishing attacks are extremely rare",
          isCorrect: false,
        },
        {
          answer_text: " Users can't preview suspicious links",
          isCorrect: true,
        },
        {
          answer_text: "Email filters don't work on mobile devices",
          isCorrect: false,
        },
        {
          answer_text:
            "Attackers target mobile devices twice as much as laptops",
          isCorrect: false,
        },
      ],
    },
    {
      quest_title:
        "Which of the following options is the most effective way to improve email phishing security?",
      answers: [
        { answer_text: "Two-factor authentication ", isCorrect: false },
        { answer_text: "A virtual private network ", isCorrect: false },
        { answer_text: "A phishing test", isCorrect: true },
        { answer_text: "A corporate firewall", isCorrect: false },
      ],
    },
  ];
  ///////////////////////////////////////////////////////////////////////////////
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const AnswerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setDoc(doc(db, "PostTest", mailprop), formData);
      posthandler();
    }
  };

  const formData = {
    Score: score,
  };

  return (
    <section>
      <h1>Quiz page</h1>
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            <div>{showPost && <ModalPost />}</div>
          </div>
        ) : (
          <>
            <div className="question_section">
              <div className="question_count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question_text">
                {questions[currentQuestion].quest_title}
              </div>
            </div>
            <div className="answer_section">
              {questions[currentQuestion].answers.map((answeroption, index) => (
                <button
                  className="button_quiz"
                  onClick={() => AnswerHandler(answeroption.isCorrect)}
                >
                  {answeroption.answer_text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
export {mailprop};
export default Post_Quiz;
