import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#15151f] p-6 shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="float-right rounded-lg bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
        >
          Закрити
        </button>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Форма зворотного зв’язку
        </h2>

        <form
          action="https://formspree.io/f/mkoyreen"
          method="POST"
          className="flex flex-col gap-4"
        >
          <label className="text-sm text-[#d4d4d8]">
            Ім’я
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white outline-none"
            />
          </label>

          <label className="text-sm text-[#d4d4d8]">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white outline-none"
            />
          </label>

          <label className="text-sm text-[#d4d4d8]">
            Номер телефону
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white outline-none"
            />
          </label>

          <label className="text-sm text-[#d4d4d8]">
            Повідомлення
            <textarea
              name="message"
              required
              className="mt-1 min-h-28 w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white outline-none"
            ></textarea>
          </label>

          <button
            type="submit"
            className="rounded-xl bg-white px-4 py-3 font-semibold text-black hover:bg-[#e4e4e7]"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;