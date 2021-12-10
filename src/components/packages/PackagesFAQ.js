import { Component } from "react";
import { FaCaretDown } from "react-icons/fa";

class PackagesFAQ extends Component {
  constructor(props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
  }

  createQuestion(props) {
    return <h4>{props.questionTXT}</h4>;
  }

  createAnswer(props) {
    return (
      <div className="answer-holder">
        <div className="answer-holder-inner">
          <p>{props.answerTXT}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const ALL_QUESTION_CBS = document.querySelectorAll(".packages-faq-cb");
    const ALL_ANSWERS = document.querySelectorAll(".answer-holder");
    const ALL_FA_ICONS = document.querySelectorAll(".label-fa-icon");

    function triggeringAnswer(question, answer, icon) {
      question.addEventListener("change", (e) => {
        if (e.target.checked) {
          answer.style.maxHeight = "100%";
          icon.style.transform = "rotate(180deg)";
        } else {
          answer.style.maxHeight = 0;
          icon.style.transform = "rotate(0deg)";
        }
      });
    }

    triggeringAnswer(ALL_QUESTION_CBS[0], ALL_ANSWERS[0], ALL_FA_ICONS[0]);
    triggeringAnswer(ALL_QUESTION_CBS[1], ALL_ANSWERS[1], ALL_FA_ICONS[1]);
    triggeringAnswer(ALL_QUESTION_CBS[2], ALL_ANSWERS[2], ALL_FA_ICONS[2]);
    triggeringAnswer(ALL_QUESTION_CBS[3], ALL_ANSWERS[3], ALL_FA_ICONS[3]);
    triggeringAnswer(ALL_QUESTION_CBS[4], ALL_ANSWERS[4], ALL_FA_ICONS[4]);
    triggeringAnswer(ALL_QUESTION_CBS[5], ALL_ANSWERS[5], ALL_FA_ICONS[5]);
    triggeringAnswer(ALL_QUESTION_CBS[6], ALL_ANSWERS[6], ALL_FA_ICONS[6]);
    triggeringAnswer(ALL_QUESTION_CBS[7], ALL_ANSWERS[7], ALL_FA_ICONS[7]);
    triggeringAnswer(ALL_QUESTION_CBS[8], ALL_ANSWERS[8], ALL_FA_ICONS[8]);
    triggeringAnswer(ALL_QUESTION_CBS[9], ALL_ANSWERS[9], ALL_FA_ICONS[9]);
    triggeringAnswer(ALL_QUESTION_CBS[10], ALL_ANSWERS[10], ALL_FA_ICONS[10]);
  }

  render() {
    const questions = [
      "Where will the session held?",
      "What is a session like?",
      "Can I have a friend be present at the session?",
      "What do I wear?",
      "When will I get my photos?",
      "Do you edit the photos?",
      "I don’t know how to model, will you help me?",
      "What should I do to prepare for the session?",
      "How much are the sessions?",
      "How many images will I receive?",
      "Do you offer print packages?",
    ];
    const answers = [
      "Your session will be held in your own home or a location that allows photography, any site fees will be not be included in the price of the package.",
      "RTSY sessions are FUN and unique! The Deluxe package typically takes up to 3-4 hours. I also offer a Mini Session of 1 to 2 hours.",
      "Absolutely, your comfort is extremely important. If you feel nervous, you’ll look nervous.",
      "I would recommend having up to 4 favorite outfits for the Deluxe and 2 for the Mini Session. The most important thing about your selection of outfits is that you feel confident and comfortable i.e. your favorite dress, lingerie, sports jersey or even just a smile.",
      "Turn around for photos is typically one week.",
      "Yes! All of the photos be edited to enhance your natural beauty. As rule of thumb if it won't be there in 30 days, I remove it i.e. pimples, scratches, irritated skin.",
      "I know how awkward this feels for you! I provide direction to capture your vision. This is the type of session that requires a lot of 'chin up', 'arch your back', 'eyes to me', etc. It'll honestly probably feel more like a yoga class and you will probably even be a little sore the following day.",
      "Drink plenty of water and get a lot of sleep, especially the week leading up to the session. Avoid beauty regimes that cause redness/irritation the week before. If you have never gotten a spray tan before, I wouldn't recommend trying it just before the session.",
      "The fee is $500 for Deluxe and $250 for the Mini Session. Half at booking and the remainder at the session. Photos will only be released after full payment.",
      "Typically 7 to 10 per outfit.",
      "The session fee includes a print release so you can print photos at any online print service like Shutterfly or Snapfish. I don’t offer “Special Packages” that are marked up, I’m not going to price gouge you. If you need help finding or organizing a photo book or magazine type printing we can discuss that.",
    ];

    return (
      <div id="packagesFAQ">
        <div className="packages-faq-cnt">
          <div className="packages-faq-cnt-main">
            <h3>FAQ Regarding Packages/Sessions</h3>

            <div className="packages-faq-cnt-main-inner">
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[0]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[0]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[1]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[1]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[2]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[2]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[3]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[3]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[4]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[4]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[5]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[5]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[6]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[6]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[7]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[7]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[8]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[8]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[9]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[9]} />
              </div>
              <div className="packages-faq-item">
                <label>
                  <this.createQuestion questionTXT={questions[10]} />

                  <FaCaretDown className="fa-icon label-fa-icon" />

                  <input type="checkbox" className="packages-faq-cb" />
                </label>

                <this.createAnswer answerTXT={answers[10]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PackagesFAQ;
