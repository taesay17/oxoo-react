import React, { useState, useEffect, useRef } from "react";

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false);
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Ваш браузер не поддерживает Web Speech API");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      setText(command);
      handleCommand(command.toLowerCase());
    };

    recognition.onerror = (e) => {
      console.log("Ошибка:", e.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (!recognizationAvailable()) return;
    setListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (!recognizationAvailable()) return;
    setListening(false);
    recognitionRef.current.stop();
  };

  const recognizationAvailable = () =>
    recognitionRef.current && "start" in recognitionRef.current;

  // Голосовой ответ (Web Speech Synthesis)
  const speak = (msg) => {
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = "ru-RU";
    u.rate = 1;
    u.pitch = 1;
    speechSynthesis.speak(u);
  };

  const handleCommand = (cmd) => {
    if (cmd.includes("семья")) {
      speak("Открываю остров Семья");
      window.location.href = "/islands/family";
    }

    if (cmd.includes("труд")) {
      speak("Переход на остров Труд");
      window.location.href = "/islands/labor";
    }

    if (cmd.includes("профессии")) {
      speak("Открываю остров Профессии");
      window.location.href = "/islands/professions";
    }

    if (cmd.includes("карта")) {
      speak("Открываю карту");
      window.location.href = "/map";
    }

    if (cmd.includes("истории")) {
      speak("Перехожу к историям");
      window.location.href = "/stories";
    }

    if (cmd.includes("артефакты")) {
      speak("Показываю артефакты");
      window.location.href = "/artifacts";
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      
      {/* Микрофон */}
      <div className={`mic-container ${listening ? "pulse" : ""}`}>
        <button
          onClick={listening ? stopListening : startListening}
          className="mic-btn"
        >
          🎤
        </button>
      </div>

      {/* Текст */}
      <div style={{ marginTop: 12, color: "#fff", width: 260 }}>
        <strong>Вы сказали:</strong> {text || "—"}
      </div>

      {/* Волны */}
      {listening && (
        <div className="waves">
          <span></span><span></span><span></span>
        </div>
      )}
    </div>
  );
}
