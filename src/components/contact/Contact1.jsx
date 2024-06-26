import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "ayNRV79WV";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message, name, email, phone, subject });
    setSubmitted(true);
    setMessage("");
    setName("");
    setEMail("");
    setPhone("");
    setSubject("");
    // alert("Form submitted");
  };

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Great! We're excited to hear from you and let's start something special together. Call us for any inquery."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Don't be afraid ! "}
                  <br />
                  Say Hello
                </h3>
                <ul>
                  <li>
                    <Link href="tel:+436609242214">+43 (660) 92 42 214</Link>
                  </li>
                  <li>
                    <Link href="tel:+4915147055256">+49 (151) 47 05 52 56</Link>
                  </li>
                  <li>
                    <a href="mailto:contact@nunosoft.net">
                      contact@nunosoft.net
                    </a>
                  </li>
                  <li>
                    <span>
                      Fischzug 1a, <br /> 10245 Berlin (Germany)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={email}
                        required
                        onChange={(e) => setEMail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Messages *"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {submitted && (
                    <div className="row g-3">
                      <div className="col-12">
                        <p>Successfully sent contact message!</p>
                      </div>
                    </div>
                  )}
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button
                          className="wc-btn-primary btn-hover btn-item"
                          disabled={submitting}
                        >
                          <span></span> Send <br />
                          Message <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
