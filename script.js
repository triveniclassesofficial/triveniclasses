const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const languageToggle = document.querySelector(".language-toggle");
const originalTextNodes = new WeakMap();

const hindiTranslations = {
  "Courses": "कोर्स",
  "Watch lectures": "कक्षाएँ देखें",
  "Our community": "हमारा समुदाय",
  "Let’s talk": "बात करें",
  "A learning space in Paliganj, Bihar": "पालीगंज, बिहार में सीखने की एक जगह",
  "Make every": "हर",
  "concept": "अवधारणा को",
  "count.": "समझें।",
  "Great results start with understanding. Build strong fundamentals, ask better questions, and feel ready for what’s next.": "अच्छे परिणाम समझ से शुरू होते हैं। बुनियादी बातें मज़बूत करें, सवाल पूछें और आगे की तैयारी आत्मविश्वास से करें।",
  "Find your class": "अपनी कक्षा चुनें",
  "Get to know us": "हमारे बारे में जानें",
  "Classes 9–12": "कक्षा 9–12",
  "School exams + competitive prep": "स्कूल परीक्षा + प्रतियोगी तैयारी",
  "Curiosity, encouraged.": "जिज्ञासा को बढ़ावा।",
  "today’s big idea": "आज का खास विचार",
  "A little progress, every day": "हर दिन थोड़ी प्रगति",
  "Understand the why": "कारण को समझें",
  "Then master the how": "फिर तरीका सीखें",
  "Think deeper": "गहराई से सोचें",
  "Learn beyond the formula": "सूत्रों से आगे सीखें",
  "Grow with confidence": "आत्मविश्वास से आगे बढ़ें",
  "One concept at a time": "एक बार में एक अवधारणा",
  "PALIGANJ": "पालीगंज",
  "PATNA": "पटना",
  "Scroll to explore": "आगे देखने के लिए स्क्रॉल करें",
  "Clear concepts": "अवधारणाएँ स्पष्ट",
  "Strong fundamentals": "मज़बूत बुनियाद",
  "Steady progress": "निरंतर प्रगति",
  "Learning that sticks": "सीखना जो याद रहे",
  "Less memorising.": "रटना कम।",
  "More meaning.": "समझ ज़्यादा।",
  "At Triveni Classes, we believe the best learning happens when things finally make sense.": "Triveni Classes में हमारा मानना है कि सबसे अच्छी पढ़ाई तब होती है जब विषय सचमुच समझ में आता है।",
  "We turn big ideas into clear, manageable steps—so students can build confidence in class, at exam time, and in everything that comes after.": "हम मुश्किल विषयों को आसान और स्पष्ट चरणों में समझाते हैं, ताकि विद्यार्थी कक्षा, परीक्षा और आगे की पढ़ाई में आत्मविश्वास से बढ़ें।",
  "Come see how we teach": "हमारे पढ़ाने का तरीका जानें",
  "01 / Understand": "01 / समझें",
  "Start with the “why”": "“क्यों” से शुरुआत करें",
  "Clear explanations make complex topics feel approachable—and easier to remember.": "स्पष्ट समझाइश कठिन विषयों को आसान और याद रखने योग्य बनाती है।",
  "02 / Practise": "02 / अभ्यास करें",
  "Make practice count": "अभ्यास को असरदार बनाएँ",
  "Structured, exam-oriented learning helps turn a good understanding into real progress.": "व्यवस्थित और परीक्षा-केंद्रित पढ़ाई, समझ को वास्तविक प्रगति में बदलती है।",
  "03 / Keep growing": "03 / आगे बढ़ते रहें",
  "Build lasting confidence": "आत्मविश्वास मज़बूत करें",
  "Regular learning support gives students the momentum to keep improving, day by day.": "नियमित पढ़ाई का सहयोग विद्यार्थियों को हर दिन बेहतर बनने की प्रेरणा देता है।",
  "Course information": "कोर्स की जानकारी",
  "Find your focus.": "अपनी रुचि पहचानें।",
  "Build your future.": "अपना भविष्य बनाएँ।",
  "Focused academic classes in Paliganj for students in Classes 9–12, with support for school exams and competitive exam preparation.": "पालीगंज में कक्षा 9–12 के विद्यार्थियों के लिए केंद्रित पढ़ाई। स्कूल और प्रतियोगी परीक्षाओं की तैयारी में सहयोग।",
  "Classes we teach": "हमारी कक्षाएँ",
  "Academic support for Classes 9, 10, 11 and 12.": "कक्षा 9, 10, 11 और 12 के लिए पढ़ाई में सहयोग।",
  "Subjects covered": "पढ़ाए जाने वाले विषय",
  "Science, Mathematics and General Knowledge.": "विज्ञान, गणित और सामान्य ज्ञान।",
  "Learning focus": "हमारा शिक्षण",
  "Clear concepts, strong fundamentals and structured, exam-oriented teaching.": "स्पष्ट अवधारणाएँ, मज़बूत बुनियाद और व्यवस्थित, परीक्षा-केंद्रित पढ़ाई।",
  "Preparation": "परीक्षा की तैयारी",
  "Support for school exams and competitive exam preparation, with regular learning support.": "स्कूल और प्रतियोगी परीक्षाओं की तैयारी के साथ नियमित पढ़ाई में सहयोग।",
  "Need details on timings or fees?": "समय या फीस की जानकारी चाहिए?",
  "Message us on WhatsApp": "WhatsApp पर संदेश भेजें",
  "Patterns · Logic · Problem-solving": "पैटर्न · तर्क · समस्या-समाधान",
  "Mathematics": "गणित",
  "Find the logic behind the numbers and the confidence to solve what’s next.": "संख्याओं के पीछे का तर्क समझें और अगले सवाल हल करने का आत्मविश्वास पाएँ।",
  "Explore · Experiment · Explain": "खोजें · प्रयोग करें · समझाएँ",
  "Science": "विज्ञान",
  "Make sense of the world through clear concepts and curious thinking.": "स्पष्ट अवधारणाओं और जिज्ञासु सोच से दुनिया को समझें।",
  "Awareness · Discovery · Perspective": "जागरूकता · खोज · दृष्टिकोण",
  "General Knowledge": "सामान्य ज्ञान",
  "Stay informed, ask thoughtful questions, and connect ideas beyond the classroom.": "जानकारी से जुड़े रहें, विचारपूर्ण सवाल पूछें और कक्षा से आगे की बातें जानें।",
  "FOR CLASSES": "कक्षाओं के लिए",
  "School exams + competitive exam preparation": "स्कूल परीक्षा + प्रतियोगी परीक्षा की तैयारी",
  "Curiosity": "जिज्ञासा",
  "looks good": "आपको",
  "on you.": "खास बनाती है।",
  "keep asking →": "सवाल पूछते रहें →",
  "A little encouragement goes a long way.": "थोड़ा प्रोत्साहन बहुत आगे ले जाता है।",
  "LEARN": "सीखें",
  "TOGETHER": "साथ मिलकर",
  "Your learning community": "आपका सीखने का समुदाय",
  "Good questions": "अच्छे सवाल",
  "belong": "यहाँ",
  "here.": "पूछें।",
  "A little support can change the way a student sees a subject—and themselves.": "थोड़ा सहयोग किसी विषय और खुद को देखने का नज़रिया बदल सकता है।",
  "Join the Triveni Classes community for learning updates, helpful resources, and a steady dose of encouragement wherever you are.": "पढ़ाई से जुड़े अपडेट, उपयोगी सामग्री और प्रोत्साहन के लिए Triveni Classes समुदाय से जुड़ें।",
  "Join us on Telegram": "Telegram पर जुड़ें",
  "Learn and connect, your way": "अपनी पसंद से सीखें और जुड़ें",
  "More ways to learn.": "सीखने के और तरीके।",
  "Explore Triveni Classes online, watch lessons on YouTube, or follow updates on your preferred channel.": "Triveni Classes को ऑनलाइन देखें, YouTube पर पाठ पढ़ें या अपने पसंदीदा चैनल पर अपडेट पाएँ।",
  "YouTube lectures": "YouTube पर पाठ",
  "YouTube 2.0": "YouTube 2.0",
  "Telegram": "Telegram",
  "WhatsApp Channel": "WhatsApp चैनल",
  "Instagram": "Instagram",
  "Facebook": "Facebook",
  "Learning app": "पढ़ाई का ऐप",
  "Take the next step": "अगला कदम बढ़ाएँ",
  "Let’s make": "आइए, पढ़ाई को",
  "learning": "आसान",
  "click.": "बनाएँ।",
  "Ask about classes, subjects, current batches, timings or fees. We’d love to help you find the right next step.": "कक्षाओं, विषयों, मौजूदा बैच, समय या फीस के बारे में पूछें। सही अगला कदम चुनने में हमें खुशी होगी।",
  "Ask about courses": "कोर्स की जानकारी लें",
  "Call or WhatsApp": "कॉल या WhatsApp",
  "Drop us a note": "हमें ईमेल लिखें",
  "Address · Paliganj, Patna": "पता · पालीगंज, पटना",
  "Paliganj, Patna, Bihar, India": "पालीगंज, पटना, बिहार, भारत",
  "LEARN ON THE GO": "कहीं भी पढ़ें",
  "Get the Triveni Classes app": "Triveni Classes ऐप पाएँ",
  "Focused learning. Clear concepts. Strong results.": "केंद्रित पढ़ाई। स्पष्ट अवधारणाएँ। बेहतर परिणाम।",
  "Back to top ↑": "ऊपर जाएँ ↑",
  "CALL / WHATSAPP": "कॉल / WhatsApp",
  "EMAIL": "ईमेल",
  "ADDRESS · OPEN MAP": "पता · नक्शा खोलें",
  "Paliganj, Patna, Bihar, India ↗": "पालीगंज, पटना, बिहार, भारत ↗",
  "LEARNING APP": "पढ़ाई का ऐप",
  "Get the Triveni Classes app ↗": "Triveni Classes ऐप पाएँ ↗",
  "FOLLOW US": "हमें फ़ॉलो करें",
  "Instagram @triveniclassesofficial ↗": "Instagram @triveniclassesofficial ↗",
  "Made for curious minds in Paliganj, Bihar.": "पालीगंज, बिहार के जिज्ञासु विद्यार्थियों के लिए।"
};

function setLanguage(language) {
  const isHindi = language === "hi";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const originalText = node.nodeValue;
    const text = originalText.trim();
    const translatedText = isHindi ? hindiTranslations[text] : originalTextNodes.get(node);

    if (isHindi && translatedText) {
      originalTextNodes.set(node, originalText);
      node.nodeValue = originalText.replace(text, translatedText);
    } else if (!isHindi && translatedText) {
      node.nodeValue = translatedText;
      originalTextNodes.delete(node);
    }
  }

  document.documentElement.lang = isHindi ? "hi" : "en";
  document.title = isHindi
    ? "Triveni Classes — हर अवधारणा को समझें"
    : "Triveni Classes — Make every concept count";
  document.querySelector('meta[name="description"]').content = isHindi
    ? "पालीगंज, पटना में कक्षा 9–12 के विद्यार्थियों के लिए Triveni Classes। स्पष्ट अवधारणाएँ, मज़बूत बुनियाद और परीक्षा की तैयारी।"
    : "Focused learning, clear concepts and strong results for Classes 9–12 at Triveni Classes, Paliganj, Patna.";
  languageToggle.textContent = isHindi ? "English" : "हिन्दी";
  languageToggle.lang = isHindi ? "en" : "hi";
  languageToggle.setAttribute("aria-label", isHindi ? "Switch to English" : "हिंदी में बदलें");
  languageToggle.setAttribute("aria-pressed", String(isHindi));
  document.querySelector(".main-nav").setAttribute("aria-label", isHindi ? "मुख्य नेविगेशन" : "Main navigation");
  menuToggle.setAttribute(
    "aria-label",
    isHindi
      ? menuToggle.getAttribute("aria-expanded") === "true" ? "नेविगेशन मेनू बंद करें" : "नेविगेशन मेनू खोलें"
      : menuToggle.getAttribute("aria-expanded") === "true" ? "Close navigation menu" : "Open navigation menu"
  );
  document.querySelector(".brand").setAttribute("aria-label", isHindi ? "Triveni Classes का होम पेज" : "Triveni Classes home");
  document.querySelector(".footer-brand").setAttribute("aria-label", isHindi ? "Triveni Classes का होम पेज" : "Triveni Classes home");
  document.querySelector(".hero-art").setAttribute("aria-label", isHindi ? "ध्यानपूर्वक पढ़ाई के सत्र का चित्र" : "Illustration of a focused learning session");
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    if (isHindi) {
      link.href = `https://wa.me/919279126720?text=${encodeURIComponent("नमस्ते Triveni Classes, मुझे कक्षाओं और कोर्स की जानकारी चाहिए।")}`;
    } else if (link.classList.contains("button-dark")) {
      link.href = "https://wa.me/919279126720?text=Hello%20Triveni%20Classes%2C%20I%27d%20like%20to%20know%20more%20about%20enrollment.";
    } else if (link.classList.contains("course-enquiry-link")) {
      link.href = "https://wa.me/919279126720?text=Hello%20Triveni%20Classes%2C%20please%20share%20current%20batch%20timings%20and%20course%20fees.";
    } else {
      link.href = "https://wa.me/919279126720?text=Hello%20Triveni%20Classes%2C%20I%27d%20like%20course%20information%20for%20Classes%209%E2%80%9312%2C%20including%20subjects%2C%20batches%2C%20timings%20and%20fees.";
    }
  });
  localStorage.setItem("triveni-language", language);
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  const isHindi = document.documentElement.lang === "hi";
  menuToggle.setAttribute(
    "aria-label",
    isHindi
      ? isExpanded ? "नेविगेशन मेनू खोलें" : "नेविगेशन मेनू बंद करें"
      : isExpanded ? "Open navigation menu" : "Close navigation menu"
  );
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", document.documentElement.lang === "hi" ? "नेविगेशन मेनू खोलें" : "Open navigation menu");
    mainNav.classList.remove("is-open");
  }
});

languageToggle.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "hi" ? "en" : "hi";
  setLanguage(nextLanguage);
  if (window.matchMedia("(max-width: 680px)").matches) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", document.documentElement.lang === "hi" ? "नेविगेशन मेनू खोलें" : "Open navigation menu");
    mainNav.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("triveni-language") === "hi" ? "hi" : "en");
