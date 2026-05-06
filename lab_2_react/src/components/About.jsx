function About({ theme }) {
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
        Про себе
      </h2>

      <p
        className={`mb-2 leading-relaxed ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        Я — студент, який активно цікавиться сферою інформаційних технологій,
        зокрема веб-розробкою та створенням сучасних інтерфейсів.
      </p>

      <p
        className={`leading-relaxed ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        Постійно вдосконалюю свої навички, працюю над навчальними проєктами,
        вивчаю нові інструменти та прагну отримати практичний досвід у сфері ІТ.
      </p>
    </section>
  );
}

export default About;