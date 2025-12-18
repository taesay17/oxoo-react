// src/pages/TicketsPage.jsx
import React, { useState } from "react";
import "../styles/tickets.css";

export default function TicketsPage() {
  const [ticketType, setTicketType] = useState("adult");
  const [quantity, setQuantity] = useState(1);

  const prices = {
    adult: 500,
    student: 300,
    child: 200,
  };

  const total = prices[ticketType] * quantity;

  return (
    <div className="tickets-page">

      <h1>Купить билет</h1>
      <p className="subtitle">
        Посетите музей общества ОХОО! и исследуйте три уникальных острова — Семья, Труд и Профессии.
      </p>

      <div className="ticket-card">

        {/* Выбор типа билета */}
        <div className="ticket-section">
          <h2>Тип билета</h2>

          <div className="options">
            <label>
              <input
                type="radio"
                value="adult"
                checked={ticketType === "adult"}
                onChange={() => setTicketType("adult")}
              />
              Взрослый — 500 KGS
            </label>

            <label>
              <input
                type="radio"
                value="student"
                checked={ticketType === "student"}
                onChange={() => setTicketType("student")}
              />
              Студенческий — 300 KGS
            </label>

            <label>
              <input
                type="radio"
                value="child"
                checked={ticketType === "child"}
                onChange={() => setTicketType("child")}
              />
              Детский — 200 KGS
            </label>
          </div>
        </div>

        {/* Количество */}
        <div className="ticket-section">
          <h2>Количество</h2>

          <div className="quantity-box">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              –
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Итог */}
        <div className="ticket-section total-section">
          <h2>Итого</h2>
          <div className="total">{total} KGS</div>

          <button className="btn-buy">
            Оплатить
          </button>

          <p className="note">
            После оплаты вы получите QR-код для входа.
          </p>
        </div>

      </div>
    </div>
  );
}
