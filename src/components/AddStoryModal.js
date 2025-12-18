import React, { useState } from "react";
import "./AddStoryModal.css";

export default function AddStoryModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    region: "",
    text: "",
    photos: [],
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо! Ваша история отправлена на модерацию.");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Добавить историю</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше имя"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <select
            required
            onChange={(e) => setForm({ ...form, region: e.target.value })}
          >
            <option value="">Регион</option>
            <option value="Ош">Ош</option>
            <option value="Нарын">Нарын</option>
            <option value="Баткен">Баткен</option>
            <option value="Бишкек">Бишкек</option>
          </select>

          <textarea
            placeholder="Ваша история..."
            required
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setForm({ ...form, photos: e.target.files })}
          />

          <label>
            <input
              type="checkbox"
              required
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            Я согласен(а) на публикацию
          </label>

          <div className="modal-actions">
            <button type="submit" className="btn-primary">
              Отправить
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
