import React, { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";


function OffCanvas() {
    const [showCanvas,setShowCanvas] = useState(false)
    const handleClose = () => setShowCanvas(false);
    const handleShow = () => setShowCanvas(true);

  return (
    <div className=" w-full bg-red-700" >
         <Navbar className="Navbar-con  ">
        <Navbar.Brand className="w-full mt-0 pt-0 bg-slate-400 " onClick={handleShow}>
        <IoMenu className="ml-10 text-3xl" />

        </Navbar.Brand>
      </Navbar>

      <Offcanvas show={showCanvas} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          {/* Ensure vertical stacking with flex-column */}
          <Nav className="flex flex-col">
            <Nav.Link className="w-full  bg-fuchsia-500" as={Link} to="/" onClick={handleClose}>
              <FaHome/> Home
            </Nav.Link>

            <Nav.Link as={Link} to="/menu" onClick={handleClose}>
              <IoMenu/> Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/review" onClick={handleClose}>
             <MdRateReview/> Review
            </Nav.Link>
            <Nav.Link as={Link} to="/order" onClick={handleClose}>
             <BiSolidDish/> Order
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default OffCanvas