import TheMain from "./TheMain";
import TheNewsletter from "./TheNewsletter";


export default function ReviewsPage({ title, text }) {
  return (
    <>
      <TheMain title={title} text={text} />
      <div className="max-w-7xl mx-auto">
        <TheNewsletter />
      </div>
    </>
  );
}
