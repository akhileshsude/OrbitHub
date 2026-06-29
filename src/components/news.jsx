import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=10",
        );

        const data = await response.json();

        setArticles(data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1 className="text-[2vw] luckiest flex flex-row justify-center items-center">
        Space News
      </h1>
      <div className="grid gap-3 max-h-[50vh] overflow-y-scroll pr-2 oswald2 always-scrollbar">
        {articles.map((article) => (
          <div
            key={article.id}
            className=" flex flex-row rounded-xl border border-white/20 p-2 shadow bg-black/30"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-[6vw] h-[6vw] object-cover rounded-lg"
            />
            <div className="p-3">
              <h2 className="text-xl font-bold mt-1">{article.title}</h2>

              {/* <p className="text-gray-500 text-sm">
            {article.news_site} •{" "}
            {new Date(article.published_at).toLocaleDateString()}
          </p> */}

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
