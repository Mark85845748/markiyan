function Skills({ theme }) {
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
        Навички
      </h2>

      <ul
        className={`space-y-2 list-disc pl-5 ${
          theme === "dark"
            ? "text-[#f5f5dc]"
            : "text-gray-800"
        }`}
      >
        <li>HTML — впевнений рівень</li>
        <li>CSS — базовий рівень</li>
        <li>JavaScript — базовий рівень</li>
        <li>Git — базове використання</li>
        <li>React — початкове розуміння</li>
      </ul>
    </section>
  );
}

export default Skills;