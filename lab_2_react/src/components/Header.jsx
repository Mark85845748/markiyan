function Header({ theme, toggleTheme }) {
  return (
    <header
      className={`rounded-xl p-6 shadow-sm border mb-6 transition ${
        theme === "dark"
          ? "bg-[#1e1e2f] border-[#2a2a3d]"
          : "bg-white border-gray-200"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-2 ${
          theme === "dark" ? "text-[#f5f5dc]" : "text-gray-900"
        }`}
      >
        Фарштей Маркіян
      </h1>

      <p className={theme === "dark" ? "text-[#d1d1e0]" : "text-gray-700"}>
        Студент
      </p>

      <p
        className={`text-sm mb-4 ${
          theme === "dark" ? "text-[#d1d1e0]" : "text-gray-600"
        }`}
      >
        Місто: Львів
      </p>

      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg border text-sm transition ${
          theme === "dark"
            ? "border-[#3a3a55] text-[#d1d1e0] hover:bg-[#2a2a3d]"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
      >
        {theme === "dark" ? "Увімкнути світлу тему" : "Увімкнути темну тему"}
      </button>
    </header>
  );
}

export default Header;