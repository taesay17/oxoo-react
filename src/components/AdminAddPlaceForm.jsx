import { useState } from "react";

useEffect(() => {
  if (selectedCoords) {
    setForm(f => ({
      ...f,
      lat: selectedCoords.lat,
      lng: selectedCoords.lng,
    }));
  }
}, [selectedCoords]);


export default function AdminAddPlaceForm({ onPlaceAdded }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    lat: "",
    lng: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    const res = await fetch("http://localhost:8080/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Успешно добавлено!");
      onPlaceAdded(); // обновление карты
      setForm({ name: "", description: "", lat: "", lng: "", imageUrl: "" });
    } else {
      alert("Ошибка при добавлении");
    }
  };

  return (
    <div style={styles.box}>
      <h3>Добавить достопримечательность</h3>

      <input
        name="name"
        placeholder="Название"
        onChange={handleChange}
        value={form.name}
        style={styles.input}
      />

      <textarea
        name="description"
        placeholder="Описание"
        onChange={handleChange}
        value={form.description}
        style={styles.textarea}
      />

      <input
        name="lat"
        placeholder="Latitude"
        onChange={handleChange}
        value={form.lat}
        style={styles.input}
      />
      <input
        name="lng"
        placeholder="Longitude"
        onChange={handleChange}
        value={form.lng}
        style={styles.input}
      />

      <input
        name="imageUrl"
        placeholder="URL фото"
        onChange={handleChange}
        value={form.imageUrl}
        style={styles.input}
      />

      <button onClick={sendData} style={styles.button}>
        Добавить
      </button>
    </div>
  );
}

const styles = {
  box: {
    padding: "20px",
    background: "#ffffffdd",
    borderRadius: "12px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #aaa"
  },
  textarea: {
    padding: "10px",
    height: "80px",
    borderRadius: "8px",
    border: "1px solid #aaa"
  },
  button: {
    padding: "12px",
    background: "#4a6cf7",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
  }
};
