import { Link } from "react-router-dom";

export default function HomeAcordionCard({ singleBlog }) {
  return (
    <div className="accordion-item" key={singleBlog.id}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          {singleBlog.title} - {singleBlog.id}
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{singleBlog.content}</div>
        <div className="d-flex justify-content-center">
          {singleBlog.tags &&
            singleBlog.tags.map((sbt) => (
              <p key={sbt} className="border p-2">
                # {sbt}
              </p>
            ))}
        </div>
        <div className="text-center p-2">
          <Link
            to={`/blogs/${singleBlog.id}`}
            className="btn btn-primary text-center"
          >
            Read <span className="badge text-bg-secondary">More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
