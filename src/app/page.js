import { ArticleCard } from "./components/ArticleCard";

export default function Home() {
  return (
    <div className="m-5">
      <div className="md:grid md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 ">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
