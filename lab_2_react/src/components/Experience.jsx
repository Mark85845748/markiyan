function Experience({ theme }) {
  return (
    <section
      className={`rounded-xl p-5 shadow-sm hover:shadow-lg transition border ${
        theme === "dark"
          ? "bg-[#1e1e2f] border-[#2a2a3d]"
          : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-lg mb-3 ${
          theme === "dark"
            ? "text-[#d1d1e0]"
            : "text-gray-700"
        }`}
      >
        Досвід
      </h2>

      <p
        className={`mb-2 ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        Практичного комерційного досвіду поки немає, проте активно виконую
        навчальні проєкти та самостійно практикуюсь.
      </p>

      <ul
        className={`space-y-2 list-disc pl-5 ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        <li>Створення HTML-сторінок із семантичною розміткою</li>
        <li>Розробка простих інтерфейсів користувача</li>
        <li>Базова робота з Git та системами контролю версій</li>
        <li>Використання JavaScript для взаємодії з користувачем</li>
      </ul>
    </section>
  );
}

export default Experience;