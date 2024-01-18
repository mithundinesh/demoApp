import React, { useState } from "react"
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DrawerIcon from "../../assets/drawerIcon.svg"

function Header({ setContinent, continent }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTabs = (e) => {
        setContinent(e);
        setShow(false)
    }
    return (
        <div className="d-flex p-4 justify-content-between">
            <div className="fs-4 fw-bolder">Countries</div>
            <div className="d-none d-sm-block"> <Nav variant="underline" defaultActiveKey="all" onSelect={handleTabs}>
                <Nav.Item>
                    <Nav.Link style={{ color: "grey" }} eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: "grey" }} eventKey="Asia">Asia</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: "grey" }} eventKey="Europe">Europe</Nav.Link>
                </Nav.Item>
            </Nav></div>
            <div className="d-block d-sm-none">

                <img src={DrawerIcon} onClick={handleShow} />

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Continents</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div>
                            <div onClick={() => handleTabs("all")} style={{ backgroundColor: continent === "all" ? "blue" : "" }} className="border my-2 p-3 fs-3">All</div>
                            <div onClick={() => handleTabs("Asia")} style={{ backgroundColor: continent === "Asia" ? "blue" : "" }} className="border my-2 p-3 fs-3">Asia</div>
                            <div onClick={() => handleTabs("Europe")} style={{ backgroundColor: continent === "Europe" ? "blue" : "" }} className="border my-2 p-3 fs-3">Europe</div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

export default Header;