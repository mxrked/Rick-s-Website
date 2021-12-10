const AboutMain = () => {
  return (
    <div id="aboutMain">
      <div className="about-main-top">
        <div className="about-main-top-cnt">
          <div className="about-main-top-cnt-span-holder">
            <span className="outer-span" />
            <span />
          </div>

          <div
            className="about-main-top-cnt-bg lazyload blur-up"
            data-bg="https://rtsyvisuals.com/RTSYVisualIMAGES/about/about-img-1.jpg"
          />

          <div className="about-main-top-cnt-span-holder">
            <span />
            <span className="outer-span" />
          </div>
        </div>
      </div>

      <div className="about-main-bottom">
        <div className="about-main-bottom-text-holder">
          <p>
            Hi, I’m Rick, I am happily married healthcare professional. I
            decided to start RTSY Visuals to express myself and create art. I
            have always been adventurous and enjoy being an “out of the box”
            thinker. I decided to invest in a quality camera several years ago
            and took some classes to develop skills. My photography style is to
            try something new, unique, or experimental.
          </p>
        </div>

        <div className="about-main-bottom-text-holder">
          <p>
            I want to capture that “Wow” photo. I am a photographer, not a
            digital artist. I won’t use Photoshop to make you taller, thinner,
            or change you into something you are not. I use lighting and
            positioning to achieve the best about you.{" "}
          </p>
        </div>

        <div className="about-main-bottom-text-holder">
          <p>
            I have been published over 50 times in a variety of magazines.
            Including 10 covers.
          </p>
        </div>

        <div className="about-main-bottom-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
