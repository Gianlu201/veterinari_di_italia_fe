import { Button } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <>
      <div id="backGroundFooter" className="text-center">
        <p className="text-white pt-3">Cookie Policy</p>
        <Button className="mb-3">SEGNALAZIONI WHISTLEBLOWING</Button>

        <p className="text-white" style={{ fontSize: "15px" }}>
          Benessere Animali s.p.a | via Milano 15,Milano
        </p>
      </div>
    </>
  );
};

export default FooterComponent;
