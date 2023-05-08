import {
  Button,
  Container,
  Form,
  Modal,
  ProgressBar,
  Table,
} from "react-bootstrap";
import GlobalNavbar from "../shared/Navbar/GlobalNavbar";
import Cards from "./Cards";
import HomeSlider from "./HomeSlider";

export default function HomePage() {
  return (
    <div>
      <GlobalNavbar></GlobalNavbar>
      <Container>
        {/* slider section */}
        <div className="mt-2">
          <HomeSlider></HomeSlider>
        </div>
        {/* card section */}
        <div className="row mt-2 justify-content-center">
          <div className="col-md-3">
            <Cards></Cards>
          </div>
          <div className="col-md-3">
            <Cards></Cards>
          </div>
          <div className="col-md-3">
            <Cards></Cards>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <ProgressBar now={60} />
        </div>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="mt-5">
          <Form>
            <fieldset disabled>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Disabled input
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Disabled input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">
                  Disabled select menu
                </Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Disabled select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="Can't check this"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
        </div>
        {/* modal function */}
        {/* <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div> */}
      </Container>
    </div>
  );
}
