import React from "react";
import "./Dossier.scss";

export default function Dossier() {
  return (
    <div className="hobby-card">
      <h3 className="hobby-name">Информация обо мне</h3>
      <ul className="hobby-list">
        <li>ФИО: Недбальский Федор Дмитриевич</li>
        <li>Дата рождения: 23.07.2002</li>
        <li>Место рождения: г. Мурманск</li>
        <li>
          Род деятельности: пью пиво, смотрю приколы, иногда кодю на джсе,
          сиэсэс, хтмл, солидити, реакте
        </li>
      </ul>
    </div>
  );
}
