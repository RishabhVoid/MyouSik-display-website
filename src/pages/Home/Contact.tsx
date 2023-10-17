import { styled } from "styled-components";
import CustomButton from "../../components/CustomButton";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type props = {
  contactRef: React.MutableRefObject<null | HTMLDivElement>;
  mainRef: React.MutableRefObject<null | HTMLDivElement>;
};

const Contact = ({ contactRef, mainRef }: props) => {
  const nameInputRef = useRef<null | HTMLInputElement>(null);
  const emailInputRef = useRef<null | HTMLInputElement>(null);
  const messageInputRef = useRef<null | HTMLTextAreaElement>(null);
  const formRef = useRef<null | HTMLFormElement>(null);

  const [alertMessages, setAlertMessages] = useState<Array<string>>([]);
  const [isAlertError, setIsAlertError] = useState(true);

  const clearForm = () => {
    if (
      !nameInputRef.current ||
      !emailInputRef.current ||
      !messageInputRef.current
    )
      return;
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  const showAlert = (list: Array<string>, type: "error" | "msg" = "error") => {
    setAlertMessages(list);
    if (type === "msg") {
      setIsAlertError(false);
    }
    setTimeout(() => {
      setAlertMessages([]);
      setIsAlertError(true);
      if (type === "msg") {
        if (!mainRef.current) return;
        mainRef.current.scrollTop = 0;
      }
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !nameInputRef.current ||
      !emailInputRef.current ||
      !messageInputRef.current
    )
      return;

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    const alertMessagesList = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alertMessagesList.push("Invalid email!");
    }
    if (!name.trim() || !email.trim() || !message.trim()) {
      alertMessagesList.push("Please fill in all the fields!");
    }

    if (alertMessagesList.length) {
      showAlert(alertMessagesList);
      clearForm();
      return;
    }

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "gmail",
        "template_5tzjrzm",
        formRef.current,
        import.meta.env.VITE_USER_ID
      )
      .then(
        () => {
          showAlert(
            [
              "Your message was sent successfully!",
              "Expect an answer within 1-3 days.",
            ],
            "msg"
          );
        },
        () => {
          showAlert(
            [
              "Due to some problem your message wasn't sent!",
              "Please try later.",
            ],
            "msg"
          );
        }
      );
    clearForm();
  };

  return (
    <Wrapper ref={contactRef}>
      <h1>Contact us</h1>
      <Layout>
        <Form onSubmit={handleFormSubmit} ref={formRef}>
          {alertMessages.length !== 0 && (
            <AlertWrapper
              style={{
                backgroundColor: isAlertError ? "#f44336" : "#0663e5",
              }}
            >
              {alertMessages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </AlertWrapper>
          )}
          <PrimaryInputWrapper>
            <input
              type="text"
              placeholder="Your name here..."
              ref={nameInputRef}
              name="name"
            />
            <input
              type="email"
              placeholder="Your email here..."
              ref={emailInputRef}
              name="email"
            />
          </PrimaryInputWrapper>
          <SecondaryInputWrapper>
            <textarea
              placeholder="Type the message here..."
              ref={messageInputRef}
              name="msg"
            />
          </SecondaryInputWrapper>
          <ButtonWrapper>
            <CustomButton type="submit" title="Send" />
          </ButtonWrapper>
        </Form>
        <Illustration>
          <img src="/images/contact_bg.png" alt="contact_bg.png" />
          <h1>We'd be happy to hear your thoughts, send em over 'ere!</h1>
          <hr />
        </Illustration>
      </Layout>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 50;
  background-color: var(--colors-bg-pr);

  h1 {
    font-size: 2rem;
    color: white;
    padding: 1rem;
  }
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;

  @media (max-width: 1020px) {
    display: none;
  }

  h1 {
    position: relative;
    z-index: 57;
    text-align: center;
    color: black;
    max-width: 40rem;
    font-size: 2.5rem;
    padding: 1rem;
  }

  hr {
    position: relative;
    z-index: 57;
    left: -20%;
    height: 5px;
    width: 200px;
    border: 0px;
    background: var(--colors-accent-pr);
  }

  img {
    position: absolute;
    border-radius: 100px 0px 0px 0px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const AlertWrapper = styled.div`
  width: 90%;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  color: var(--colors-font-pr);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    list-style: none;
  }

  @media (max-width: 1020px) {
    padding-inline: 10px;
  }
`;

const PrimaryInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  gap: 1rem;

  input {
    width: 300px;
    padding: 10px 5px;
    border: 0px;
    background-color: transparent;
    color: var(--colors-font-pr);
    border-bottom: 1px solid var(--colors-accent-pr);
    transition: 0.2s;
    font-family: var(--font-family-pr);
    font-size: 1rem;

    &:focus {
      outline: none;
      background-color: var(--colors-bg-sec);
    }
  }
`;

const SecondaryInputWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  textarea {
    resize: none;
    width: calc(1rem + 600px);
    background-color: transparent;
    border: 0;
    color: var(--colors-font-pr);
    border-bottom: 1px solid var(--colors-accent-pr);
    transition: 0.2s;
    font-family: var(--font-family-pr);
    font-size: 1rem;
    padding: 10px 5px;
    height: 30vh;

    @media (max-width: 650px) {
      width: 300px;
    }

    &:focus {
      outline: none;
      background-color: var(--colors-bg-sec);
    }
  }
`;

const ButtonWrapper = styled.div`
  max-width: calc(1rem + 600px);
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
