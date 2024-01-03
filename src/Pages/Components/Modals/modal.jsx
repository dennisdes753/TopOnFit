import React, { useState } from 'react'
import { Button, Modal, Image, Nav, Form } from 'react-bootstrap';
import { ModalLogo, ModalBodyImage, Ultimate1, Detox2, MedicalCondition1, MedicalCondition2, MedicalCondition3, MedicalCondition4, MedicalCondition5 } from '../../../asset/img';
import {NavLink} from 'react-router-dom';
import './modal.scss';

export function BannerModal() {
    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleCloseThankyou = () => setShowThankyou(false);

    const handleShow = () => setShow(true);
    const handleShowSecond = () => {
        setShow(false);
        setShowSecond(true);
    }
    const handleShowThankyou = () => {
        setShow(false);
        setShowSecond(false);
        setShowThankyou(true);
    }
    return (
        <>
            <Button variant="outline-secondary" id="button-addon2" className="input_button global_button" onClick={handleShow}>
                Get Started
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Choose your Goal?</h4>
                    </div>    
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Weight Management</h4>
                                        <p>Diet & Exercise</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={ModalBodyImage} alt="Goal-Image"/> 
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Detox</h4>
                                        <p>I want to get fit with Yoga and Meditation</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Ultimate1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Intermittent Fasting</h4>
                                        <p>I want to be sure about my Natal Health</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Detox2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowSecond}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowSecond}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecond} onHide={handleCloseSecond}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Do you have any medical condition?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Thyroidism</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Cholesterol</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Diabetes</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition3} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalCondition">
                                    <div className="content">
                                        <h4>Hypertension</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition4} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalConditionSecond">
                                    <div className="content">
                                        <h4>PCOD/PCOS</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition5} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowThankyou}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowThankyou}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showThankyou} onHide={handleCloseThankyou}>
                <Modal.Body className="modal_body_thankyou">
                    <div className="thankyou_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                            <g clip-path="url(#clip0_690_43272)">
                                <path d="M44.5 0C19.9617 0 0 19.9617 0 44.5C0 69.0383 19.9617 89 44.5 89C69.0383 89 89 69.0383 89 44.5C89 19.9617 69.0383 0 44.5 0Z" fill="white" />
                                <path d="M67.0538 35.0699L42.9494 59.1736C42.2263 59.8968 41.277 60.2607 40.3277 60.2607C39.3785 60.2607 38.4292 59.8968 37.706 59.1736L25.6542 47.1218C24.2038 45.6721 24.2038 43.3281 25.6542 41.8784C27.1039 40.428 29.4472 40.428 30.8976 41.8784L40.3277 51.3086L61.8104 29.8266C63.2601 28.3762 65.6034 28.3762 67.0538 29.8266C68.5035 31.2763 68.5035 33.6195 67.0538 35.0699Z" fill="#15C06E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_690_43272">
                                    <rect width="89" height="89" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h4>Thank You </h4>
                        <p>An expert from our team will reach out to you shortly.</p>
                    </div>
                    <div className="back_link">
                        <NavLink to="#(0)" onClick={handleCloseThankyou}>
                            <h4>Redirecting to ToneOp Fit plans page...</h4>
                        </NavLink>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export function ClaimOffer() {
    const [show, setShow] = useState(false);
    const [showGoal, setShowGoal] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseGoal = () => setShowGoal(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleCloseThankyou = () => setShowThankyou(false);

    const handleShow = () => setShow(true);
    const handleShowGoal = () => {
        setShow(false);
        setShowGoal(true);
    }
    const handleShowSecond = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(true);
    }
    const handleShowThankyou = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(false);
        setShowThankyou(true);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className="claim_button">
                <button className="btn btn-primary global_button" onClick={handleShow}>Claim your Offer</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Fill the details to claim offer</h4>
                    </div>
                    <div className="modal_body_content">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group md="4" controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="common_button">
                        <Button variant="primary" className="global_button" onClick={handleShowGoal}>
                            Submit
                        </Button>
                    </div>    
                </Modal.Footer>
            </Modal>

            <Modal show={showGoal} onHide={handleCloseGoal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Choose your Goal?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Weight Management</h4>
                                        <p>Diet & Exercise</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={ModalBodyImage} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Detox</h4>
                                        <p>I want to get fit with Yoga and Meditation</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Ultimate1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Intermittent Fasting</h4>
                                        <p>I want to be sure about my Natal Health</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Detox2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowSecond}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowSecond}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecond} onHide={handleCloseSecond}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Do you have any medical condition?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Thyroidism</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Cholesterol</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Diabetes</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition3} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalCondition">
                                    <div className="content">
                                        <h4>Hypertension</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition4} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalConditionSecond">
                                    <div className="content">
                                        <h4>PCOD/PCOS</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition5} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowThankyou}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowThankyou}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showThankyou} onHide={handleCloseThankyou}>
                <Modal.Body className="modal_body_thankyou">
                    <div className="thankyou_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                            <g clip-path="url(#clip0_690_43272)">
                                <path d="M44.5 0C19.9617 0 0 19.9617 0 44.5C0 69.0383 19.9617 89 44.5 89C69.0383 89 89 69.0383 89 44.5C89 19.9617 69.0383 0 44.5 0Z" fill="white" />
                                <path d="M67.0538 35.0699L42.9494 59.1736C42.2263 59.8968 41.277 60.2607 40.3277 60.2607C39.3785 60.2607 38.4292 59.8968 37.706 59.1736L25.6542 47.1218C24.2038 45.6721 24.2038 43.3281 25.6542 41.8784C27.1039 40.428 29.4472 40.428 30.8976 41.8784L40.3277 51.3086L61.8104 29.8266C63.2601 28.3762 65.6034 28.3762 67.0538 29.8266C68.5035 31.2763 68.5035 33.6195 67.0538 35.0699Z" fill="#15C06E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_690_43272">
                                    <rect width="89" height="89" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h4>Thank You </h4>
                        <p>An expert from our team will reach out to you shortly.</p>
                    </div>
                    <div className="back_link">
                        <NavLink to="#(0)" onClick={handleCloseThankyou}>
                            <h4>Redirecting to ToneOp Fit plans page...</h4>
                        </NavLink>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export function AskExpert() {
    const [show, setShow] = useState(false);
    const [showGoal, setShowGoal] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseGoal = () => setShowGoal(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleCloseThankyou = () => setShowThankyou(false);

    const handleShow = () => setShow(true);
    const handleShowGoal = () => {
        setShow(false);
        setShowGoal(true);
    }
    const handleShowSecond = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(true);
    }
    const handleShowThankyou = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(false);
        setShowThankyou(true);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            
            <div className="common_button">
                <button className="btn btn-primary global_button" onClick={handleShow}>Ask the Expert</button>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Fill the details to claim offer</h4>
                    </div>
                    <div className="modal_body_content">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group md="4" controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="common_button">
                        <Button variant="primary" className="global_button" onClick={handleShowGoal}>
                            Submit
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={showGoal} onHide={handleCloseGoal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Choose your Goal?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Weight Management</h4>
                                        <p>Diet & Exercise</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={ModalBodyImage} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Detox</h4>
                                        <p>I want to get fit with Yoga and Meditation</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Ultimate1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Intermittent Fasting</h4>
                                        <p>I want to be sure about my Natal Health</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Detox2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowSecond}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowSecond}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecond} onHide={handleCloseSecond}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Do you have any medical condition?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Thyroidism</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Cholesterol</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Diabetes</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition3} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalCondition">
                                    <div className="content">
                                        <h4>Hypertension</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition4} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalConditionSecond">
                                    <div className="content">
                                        <h4>PCOD/PCOS</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition5} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowThankyou}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowThankyou}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showThankyou} onHide={handleCloseThankyou}>
                <Modal.Body className="modal_body_thankyou">
                    <div className="thankyou_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                            <g clip-path="url(#clip0_690_43272)">
                                <path d="M44.5 0C19.9617 0 0 19.9617 0 44.5C0 69.0383 19.9617 89 44.5 89C69.0383 89 89 69.0383 89 44.5C89 19.9617 69.0383 0 44.5 0Z" fill="white" />
                                <path d="M67.0538 35.0699L42.9494 59.1736C42.2263 59.8968 41.277 60.2607 40.3277 60.2607C39.3785 60.2607 38.4292 59.8968 37.706 59.1736L25.6542 47.1218C24.2038 45.6721 24.2038 43.3281 25.6542 41.8784C27.1039 40.428 29.4472 40.428 30.8976 41.8784L40.3277 51.3086L61.8104 29.8266C63.2601 28.3762 65.6034 28.3762 67.0538 29.8266C68.5035 31.2763 68.5035 33.6195 67.0538 35.0699Z" fill="#15C06E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_690_43272">
                                    <rect width="89" height="89" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h4>Thank You </h4>
                        <p>An expert from our team will reach out to you shortly.</p>
                    </div>
                    <div className="back_link">
                        <NavLink to="#(0)" onClick={handleCloseThankyou}>
                            <h4>Redirecting to ToneOp Fit plans page...</h4>
                        </NavLink>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export function HowUse() {
    const [show, setShow] = useState(false);
    const [showGoal, setShowGoal] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseGoal = () => setShowGoal(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleCloseThankyou = () => setShowThankyou(false);

    const handleShow = () => setShow(true);
    const handleShowGoal = () => {
        setShow(false);
        setShowGoal(true);
    }
    const handleShowSecond = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(true);
    }
    const handleShowThankyou = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(false);
        setShowThankyou(true);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>

            <div className="common_button">
                <button className="btn btn-primary global_button" onClick={handleShow}>Free Consultation</button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Fill the details to claim offer</h4>
                    </div>
                    <div className="modal_body_content">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group md="4" controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="common_button">
                        <Button variant="primary" className="global_button" onClick={handleShowGoal}>
                            Submit
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={showGoal} onHide={handleCloseGoal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Choose your Goal?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Weight Management</h4>
                                        <p>Diet & Exercise</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={ModalBodyImage} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Detox</h4>
                                        <p>I want to get fit with Yoga and Meditation</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Ultimate1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Intermittent Fasting</h4>
                                        <p>I want to be sure about my Natal Health</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Detox2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowSecond}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowSecond}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecond} onHide={handleCloseSecond}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Do you have any medical condition?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Thyroidism</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Cholesterol</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Diabetes</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition3} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalCondition">
                                    <div className="content">
                                        <h4>Hypertension</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition4} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalConditionSecond">
                                    <div className="content">
                                        <h4>PCOD/PCOS</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition5} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowThankyou}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowThankyou}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showThankyou} onHide={handleCloseThankyou}>
                <Modal.Body className="modal_body_thankyou">
                    <div className="thankyou_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                            <g clip-path="url(#clip0_690_43272)">
                                <path d="M44.5 0C19.9617 0 0 19.9617 0 44.5C0 69.0383 19.9617 89 44.5 89C69.0383 89 89 69.0383 89 44.5C89 19.9617 69.0383 0 44.5 0Z" fill="white" />
                                <path d="M67.0538 35.0699L42.9494 59.1736C42.2263 59.8968 41.277 60.2607 40.3277 60.2607C39.3785 60.2607 38.4292 59.8968 37.706 59.1736L25.6542 47.1218C24.2038 45.6721 24.2038 43.3281 25.6542 41.8784C27.1039 40.428 29.4472 40.428 30.8976 41.8784L40.3277 51.3086L61.8104 29.8266C63.2601 28.3762 65.6034 28.3762 67.0538 29.8266C68.5035 31.2763 68.5035 33.6195 67.0538 35.0699Z" fill="#15C06E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_690_43272">
                                    <rect width="89" height="89" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h4>Thank You </h4>
                        <p>An expert from our team will reach out to you shortly.</p>
                    </div>
                    <div className="back_link">
                        <NavLink to="#(0)" onClick={handleCloseThankyou}>
                            <h4>Redirecting to ToneOp Fit plans page...</h4>
                        </NavLink>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export function BookConsultation() {
    const [show, setShow] = useState(false);
    const [showGoal, setShowGoal] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseGoal = () => setShowGoal(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleCloseThankyou = () => setShowThankyou(false);

    const handleShow = () => setShow(true);
    const handleShowGoal = () => {
        setShow(false);
        setShowGoal(true);
    }
    const handleShowSecond = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(true);
    }
    const handleShowThankyou = () => {
        setShow(false);
        setShowGoal(false);
        setShowSecond(false);
        setShowThankyou(true);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>

            <div className="common_button">
                <button className="btn btn-primary global_button" onClick={handleShow}>Book Consultation</button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Fill the details to claim offer</h4>
                    </div>
                    <div className="modal_body_content">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group md="4" controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="common_button">
                        <Button variant="primary" className="global_button" onClick={handleShowGoal}>
                            Submit
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={showGoal} onHide={handleCloseGoal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Choose your Goal?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Weight Management</h4>
                                        <p>Diet & Exercise</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={ModalBodyImage} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Detox</h4>
                                        <p>I want to get fit with Yoga and Meditation</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Ultimate1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Intermittent Fasting</h4>
                                        <p>I want to be sure about my Natal Health</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={Detox2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowSecond}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowSecond}>
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecond} onHide={handleCloseSecond}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image className="img-fluid" src={ModalLogo} alt="Header Logo" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_heading">
                        <h4>Do you have any medical condition?</h4>
                    </div>
                    <div className="modal_body_content">
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">
                                    <div className="content">
                                        <h4>Thyroidism</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition1} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/profile">
                                    <div className="content">
                                        <h4>Cholesterol</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition2} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/custom">
                                    <div className="content">
                                        <h4>Diabetes</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition3} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalCondition">
                                    <div className="content">
                                        <h4>Hypertension</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition4} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/medicalConditionSecond">
                                    <div className="content">
                                        <h4>PCOD/PCOS</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                    <div className="image">
                                        <Image className="img-fluid" src={MedicalCondition5} alt="Goal-Image" />
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="skip_button" onClick={handleShowThankyou}>
                        Skip
                    </Button>
                    <Button variant="primary" className="global_button" onClick={handleShowThankyou}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showThankyou} onHide={handleCloseThankyou}>
                <Modal.Body className="modal_body_thankyou">
                    <div className="thankyou_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                            <g clip-path="url(#clip0_690_43272)">
                                <path d="M44.5 0C19.9617 0 0 19.9617 0 44.5C0 69.0383 19.9617 89 44.5 89C69.0383 89 89 69.0383 89 44.5C89 19.9617 69.0383 0 44.5 0Z" fill="white" />
                                <path d="M67.0538 35.0699L42.9494 59.1736C42.2263 59.8968 41.277 60.2607 40.3277 60.2607C39.3785 60.2607 38.4292 59.8968 37.706 59.1736L25.6542 47.1218C24.2038 45.6721 24.2038 43.3281 25.6542 41.8784C27.1039 40.428 29.4472 40.428 30.8976 41.8784L40.3277 51.3086L61.8104 29.8266C63.2601 28.3762 65.6034 28.3762 67.0538 29.8266C68.5035 31.2763 68.5035 33.6195 67.0538 35.0699Z" fill="#15C06E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_690_43272">
                                    <rect width="89" height="89" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h4>Thank You </h4>
                        <p>An expert from our team will reach out to you shortly.</p>
                    </div>
                    <div className="back_link">
                        <NavLink to="#(0)" onClick={handleCloseThankyou}>
                            <h4>Redirecting to ToneOp Fit plans page...</h4>
                        </NavLink>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

