function Education() {
  return (
    <section className="bg-[#1e1e2f] rounded-xl p-5 shadow-sm hover:shadow-lg transition border border-[#2a2a3d]">
      <h2 className="text-lg text-[#d1d1e0] mb-3">Освіта</h2>

      <p className="text-[#f5f5dc] mb-2">
        Навчаюся у НУ Львівська політехніка.
      </p>

      <ul className="text-[#f5f5dc] space-y-2 list-disc pl-5">
        <li>Напрям: Кібербезпека</li>
        <li>Статус: Студент</li>
        <li>Рік навчання: 3 курс</li>
      </ul>
    </section>
  );
}

export default Education;