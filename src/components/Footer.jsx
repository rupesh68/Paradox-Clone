import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div className="hero-container11">
      <MDBFooter bgColor="light" className="text-center text-lg-left ">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Product</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Download
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Company</h5>

              <ul className="list-unstyled">
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Community</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Discord
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="text-dark">
                    Lined in
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-8">
                <img
                  className="logo-img  w-25 mb-6 "
                  src="/src/images/new-relic-logo-E7CC1E9143-seeklogo.com.png"
                  alt=""
                />

                <h3 className="w-1">
                  The Real-Time & powerful 3D design for web.
                </h3>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-down text-center p-3 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:Ul8,Ltd.{" "}
          <a className="text-dark float-end" href="">
            Terms & Conditions,Privacy
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
