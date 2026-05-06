function Education({ theme }) {
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
        Освіта
      </h2>

      <p
        className={`mb-2 ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        Навчаюся у НУ Львівська політехніка.
      </p>

      <ul
        className={`space-y-2 list-disc pl-5 ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        <li>Напрям: Кібербезпека</li>
        <li>Статус: Студент</li>
        <li>Рік навчання: 3 курс</li>
      </ul>
    </section>
  );
}

export default Education;