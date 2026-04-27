function Experience() {
  return (
    <section className="bg-[#1e1e2f] rounded-xl p-5 shadow-sm hover:shadow-lg transition border border-[#2a2a3d]">
      <h2 className="text-lg text-[#d1d1e0] mb-3">Досвід</h2>

      <p className="text-[#f5f5dc] mb-2">
        Практичного комерційного досвіду поки немає, проте активно виконую
        навчальні проєкти та самостійно практикуюсь.
      </p>

      <ul className="text-[#f5f5dc] space-y-2 list-disc pl-5">
        <li>Створення HTML-сторінок із семантичною розміткою</li>
        <li>Розробка простих інтерфейсів користувача</li>
        <li>Базова робота з Git та системами контролю версій</li>
        <li>Використання JavaScript для взаємодії з користувачем</li>
      </ul>
    </section>
  );
}

export default Experience;