export default function HomeBody() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfAjoJDAI-HWh9ztoFtLimWsygR-OeIkgG5wii5YGiQCC8lBUpAVgocMwbuTZtVOM31g&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hGb7rrpC1qUtl7VwhDUG_Hh33tyPplf2zIWMPGfMTJSa1J882PWAiVvOSXqvAvfPah8&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
