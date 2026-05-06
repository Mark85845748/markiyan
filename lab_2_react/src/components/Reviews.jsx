import { useEffect, useState } from "react";

function Reviews({ theme }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Помилка завантаження:", error));
  }, []);

  return (
    <section
      className={`rounded-xl p-5 shadow-sm hover:shadow-lg transition border mt-5 ${
        theme === "dark"
          ? "bg-[#1e1e2f] border-[#2a2a3d]"
          : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-lg text-center mb-4 ${
          theme === "dark"
            ? "text-[#d1d1e0]"
            : "text-gray-700"
        }`}
      >
        Відгуки попередніх роботодавців
      </h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`rounded-xl p-4 border transition ${
              theme === "dark"
                ? "bg-[#171725] border-[#2a2a3d]"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3
              className={`font-semibold mb-2 ${
                theme === "dark"
                  ? "text-[#f5f5dc]"
                  : "text-gray-800"
              }`}
            >
              {review.name}
            </h3>

            <p
              className={`text-sm mb-2 ${
                theme === "dark"
                  ? "text-[#d1d1e0]"
                  : "text-gray-500"
              }`}
            >
              {review.email}
            </p>

            <p
              className={`leading-relaxed ${
                theme === "dark"
                  ? "text-[#f5f5dc]"
                  : "text-gray-700"
              }`}
            >
              {review.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;