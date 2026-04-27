function Contacts() {
  return (
    <section className="bg-[#1e1e2f] rounded-xl p-5 shadow-sm hover:shadow-lg transition border border-[#2a2a3d]">
      <h2 className="text-lg text-[#d1d1e0] mb-3">Контакти</h2>

      <p className="text-[#f5f5dc] mb-2">
        Email:{" "}
        <a
          href="mailto:markiyan@example.com"
          className="text-blue-400 hover:underline"
        >
          markiyan@example.com
        </a>
      </p>

      <p className="text-[#f5f5dc]">
        Телефон:{" "}
        <a
          href="tel:+380991112233"
          className="text-blue-400 hover:underline"
        >
          +380991112233
        </a>
      </p>
    </section>
  );
}

export default Contacts;