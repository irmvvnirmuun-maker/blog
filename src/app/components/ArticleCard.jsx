import { Hashtag } from "./hashtag";

export function ArticleCard() {
  return (
    <div className="mb-10">
      <a href="#">
        <img
          className="asspect-video "
          src="https://images.unsplash.com/photo-1792957611050-011e2c04d55d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <div>sunday , 1 jan 2023</div>
        <div>Bill Walsh leadership lessons</div>
        <div>
          like to know about the secrets of transforming a 2-14 team into a 3x
          Super bowl winning Dynasty?
        </div>
      </a>
      <div>
        <Hashtag title="leadership" color="blue" />
        <Hashtag title="management" color="green" />
        <Hashtag title="presentation" color="purple" />
      </div>
    </div>
  );
}
