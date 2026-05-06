function Contacts({ theme }) {
  return (
    <section
      className={`rounded-xl p-5 shadow-sm hover:shadow-lg transition border mt-5 ${
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
        Контакти
      </h2>

      <p
        className={`mb-2 ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        Email:{" "}
        <a
          href="mailto:markiyan@example.com"
          className={`hover:underline ${
            theme === "dark"
              ? "text-blue-400"
              : "text-blue-600"
          }`}
        >
          markiyan@example.com
        </a>
      </p>

      <p
        className={
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }
      >
        Телефон:{" "}
        <a
          href="tel:+380991112233"
          className={`hover:underline ${
            theme === "dark"
              ? "text-blue-400"
              : "text-blue-600"
          }`}
        >
          +380991112233
        </a>
      </p>
    </section>
  );
}

export default Contacts;