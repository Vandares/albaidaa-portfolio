<<<<<<< HEAD
import { useMemo, useState } from 'react'
import './App.css'

const mallData = [
  {
    id: 'restrooms',
    nameAr: 'دورات المياه',
    nameEn: 'Restrooms',
    type: 'service',
    floor: 'الدور الأرضي',
    area: 'منطقة العطور',
    near: 'بجانب المصعد الرئيسي',
    directions:
      'دورات المياه موجودة في الدور الأرضي. من المدخل الرئيسي امشِ للأمام حتى تصل إلى منطقة العطور، ثم اتجه يمينًا. ستجدها بجانب المصعد الرئيسي.',
    keywords: [
      'حمام',
      'حمامات',
      'دورة مياه',
      'دورات المياه',
      'وين الحمام',
      'فين الحمام',
      'toilet',
      'bathroom',
      'restroom',
      'restrooms'
    ]
  },
  {
    id: 'prayer-room',
    nameAr: 'المصلى',
    nameEn: 'Prayer Room',
    type: 'service',
    floor: 'الدور الأول',
    area: 'منطقة الخدمات',
    near: 'بجانب المصعد',
    directions:
      'المصلى موجود في الدور الأول. اصعد باستخدام السلم الكهربائي، ثم اتجه يسارًا. ستجد المصلى بجانب المصعد.',
    keywords: [
      'مصلى',
      'الصلاة',
      'اصلي',
      'أصلي',
      'فين اصلي',
      'وين اصلي',
      'prayer',
      'mosque',
      'pray'
    ]
  },
  {
    id: 'gold-area',
    nameAr: 'منطقة الذهب',
    nameEn: 'Gold Shops',
    type: 'category',
    floor: 'الدور الأرضي',
    area: 'وسط المول',
    near: 'بالقرب من المدخل الرئيسي',
    directions:
      'محلات الذهب موجودة في الدور الأرضي بوسط المول. من المدخل الرئيسي امشِ للأمام مباشرة، وستجد منطقة الذهب على الجهتين.',
    keywords: [
      'ذهب',
      'الذهب',
      'محلات الذهب',
      'مجوهرات',
      'jewelry',
      'gold',
      'gold shops'
    ]
  },
  {
    id: 'perfume-area',
    nameAr: 'منطقة العطور',
    nameEn: 'Perfume Shops',
    type: 'category',
    floor: 'الدور الأرضي',
    area: 'يمين المدخل الرئيسي',
    near: 'بجانب منطقة الذهب',
    directions:
      'محلات العطور موجودة في الدور الأرضي. من المدخل الرئيسي اتجه يمينًا، وستجد محلات العطور بجانب منطقة الذهب.',
    keywords: [
      'عطر',
      'عطور',
      'محلات العطور',
      'perfume',
      'perfumes',
      'fragrance'
    ]
  },
  {
    id: 'parking',
    nameAr: 'المواقف',
    nameEn: 'Parking',
    type: 'service',
    floor: 'الخارج',
    area: 'خارج المول',
    near: 'عند البوابة الرئيسية',
    directions:
      'المواقف موجودة خارج المول بالقرب من البوابة الرئيسية. يمكنك الخروج من المدخل الرئيسي وستجد منطقة المواقف أمامك.',
    keywords: [
      'مواقف',
      'المواقف',
      'سيارة',
      'السيارة',
      'parking',
      'car',
      'park'
    ]
  },
  {
    id: 'management-office',
    nameAr: 'مكتب الإدارة',
    nameEn: 'Management Office',
    type: 'service',
    floor: 'الدور الأول',
    area: 'منطقة الإدارة',
    near: 'بجانب المصعد الرئيسي',
    directions:
      'مكتب الإدارة موجود في الدور الأول. اصعد من السلم الكهربائي، ثم اتجه يمينًا باتجاه منطقة الإدارة.',
    keywords: [
      'الإدارة',
      'الادارة',
      'مكتب الإدارة',
      'مكتب الادارة',
      'management',
      'office'
    ]
  }
]

const quickQuestions = [
  'فين دورة المياه؟',
  'فين المصلى؟',
  'فين محلات الذهب؟',
  'فين محلات العطور؟',
  'فين المواقف؟',
  'فين مكتب الإدارة؟'
]

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[؟?.,!]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

function findBestLocation(question) {
  const normalizedQuestion = normalizeText(question)

  let bestMatch = null
  let bestScore = 0

  mallData.forEach((location) => {
    let score = 0

    location.keywords.forEach((keyword) => {
      const normalizedKeyword = normalizeText(keyword)

      if (normalizedQuestion.includes(normalizedKeyword)) {
        score += 5
      }

      const keywordWords = normalizedKeyword.split(' ')
      keywordWords.forEach((word) => {
        if (word.length > 2 && normalizedQuestion.includes(word)) {
          score += 1
        }
      })
    })

    if (score > bestScore) {
      bestScore = score
      bestMatch = location
    }
  })

  return bestScore > 0 ? bestMatch : null
}

function createAnswer(question) {
  const location = findBestLocation(question)

  if (!question.trim()) {
    return {
      found: false,
      text: 'اكتب سؤالك أو اختر أحد الأزرار السريعة.'
    }
  }

  if (!location) {
    return {
      found: false,
      text:
        'عذرًا، لا أملك معلومة مؤكدة عن هذا المكان حاليًا. يمكنك التوجه إلى مكتب الاستعلامات للمساعدة.'
    }
  }

  return {
    found: true,
    location,
    text: location.directions
  }
}

function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(
    'أهلًا وسهلًا، أنا مرشد Lavert الذكي. اسألني عن أي مكان داخل المول.'
  )
  const [activeLocation, setActiveLocation] = useState(null)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const availableLocations = useMemo(() => mallData, [])

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ar-SA'
    utterance.rate = 0.9
    utterance.pitch = 1

    utterance.onstart = () => {
      setIsSpeaking(true)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
    }

    window.speechSynthesis.speak(utterance)
  }

  function handleAsk(customQuestion) {
    const finalQuestion = customQuestion || question
    const result = createAnswer(finalQuestion)

    setQuestion(finalQuestion)
    setAnswer(result.text)
    setActiveLocation(result.location || null)
    speakText(result.text)
  }

  function handleStopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsSpeaking(false)
  }
=======
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Work from "./sections/Work.jsx";
import Showreel from "./sections/Showreel.jsx";
import About from "./sections/About.jsx";
import WhyUs from "./sections/WhyUs.jsx";
import Process from "./sections/Process.jsx";
import Stats from "./sections/Stats.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import { CONTACT } from "./data/content.jsx";
import { WhatsApp } from "./lib/icons.jsx";
>>>>>>> e263e6f (Update BNA website)

export default function App() {
  return (
<<<<<<< HEAD
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-content">
          <div className="brand-badge">LAVERT AI EXPERIENCE</div>

          <h1>
           مرشد لافيرت الذكي
            <span> تجربة خاصة</span>
          </h1>

          <p>
            تجربة أولية لشاشة تفاعلية تساعد الزوار في معرفة الاتجاهات والخدمات
            داخل المكان.
          </p>
        </div>

        <div className="status-card">
          <span className="status-dot"></span>
          Prototype Running
        </div>
      </section>

      <section className="assistant-layout">
        <div className="avatar-card">
          <div className={`avatar ${isSpeaking ? 'speaking' : ''}`}>
            <div className="avatar-head">
              <div className="ghutra"></div>
              <div className="face">
                <div className="eyes">
                  <span></span>
                  <span></span>
                </div>
                <div className={`mouth ${isSpeaking ? 'mouth-speaking' : ''}`}></div>
              </div>
            </div>

            <div className="thobe"></div>
          </div>

          <div className="voice-wave" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2>أهلاً، كيف أقدر أخدمك؟</h2>
          <p>اسألني عن دورات المياه، المصلى، الذهب، العطور، المواقف أو الإدارة.</p>
        </div>

        <div className="chat-card">
          <div className="input-area">
            <label htmlFor="question">اكتب سؤال الزائر</label>

            <div className="input-row">
              <input
                id="question"
                type="text"
                value={question}
                placeholder="مثال: فين دورة المياه؟"
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleAsk()
                  }
                }}
              />

              <button onClick={() => handleAsk()}>اسأل</button>
            </div>
          </div>

          <div className="quick-actions">
            {quickQuestions.map((item) => (
              <button key={item} onClick={() => handleAsk(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="answer-box">
            <div className="answer-header">
              <span>رد المرشد</span>

              {isSpeaking ? (
                <button className="small-button" onClick={handleStopSpeaking}>
                  إيقاف الصوت
                </button>
              ) : null}
            </div>

            <p>{answer}</p>
          </div>

          {activeLocation ? (
            <div className="location-details">
              <h3>{activeLocation.nameAr}</h3>

              <div className="details-grid">
                <div>
                  <span>الدور</span>
                  <strong>{activeLocation.floor}</strong>
                </div>

                <div>
                  <span>المنطقة</span>
                  <strong>{activeLocation.area}</strong>
                </div>

                <div>
                  <span>قريب من</span>
                  <strong>{activeLocation.near}</strong>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="map-section">
        <div className="section-title">
          <span>بيانات المول الحالية</span>
          <h2>الأماكن المسجلة في التجربة</h2>
        </div>

        <div className="locations-grid">
          {availableLocations.map((location) => (
            <button
              className={`location-pill ${
                activeLocation?.id === location.id ? 'active' : ''
              }`}
              key={location.id}
              onClick={() => handleAsk(`فين ${location.nameAr}؟`)}
            >
              <span>{location.nameAr}</span>
              <small>{location.floor}</small>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
=======
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Showreel />
        <About />
        <Stats />
        <WhyUs />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />

      <a
        className="wa-float"
        href={`https://wa.me/${CONTACT.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp width={28} height={28} />
      </a>
    </>
  );
>>>>>>> e263e6f (Update BNA website)
}
