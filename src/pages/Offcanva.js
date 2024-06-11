import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Manufacture() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{width:"50%"}}>
        Find a Fast Charger
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Audi Comfort</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        The Pakistan is home to over 46,000 public charging stations that are compatible with your Audi e-tron.
        Of Audi's offerings only the Audi-e-tron supports DC fast charging, using the SAE Combined Charging Connector (CCS) plug.
        Fully charging the 95-kWh battery on the standard Audi e-tron takes about 80 hours or 3.3 days. But if you're recharging what you've used to drive to work and run a few errands
         you can add about 4 miles of range per hour of charging.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Manufacture;