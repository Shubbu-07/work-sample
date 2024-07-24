import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../Style.css";

const PriceCalculator = () => {
  return (
    <>
    <Container className="d-flex flex-column price-calculator-container p-0">
    <Container className="price-calculator mt-5 p-4">
        <h2>Price Calculator</h2>
        <Row className="calculator-container mt-4">
          <Col md={6} className="calculator-section">
            <h3>HW/ Software Appliance</h3>
            <Form.Group controlId="formHwSoftware">
              <Form.Control as="select">
                <option>Select value</option>
                <option>
                    <span>2TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>4T0B Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>6TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>8TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>10TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>12TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>16TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>20TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>24TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>32TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>
                <option>
                    <span>40TB Capacity w/ Support </span>
                    <span>Price: $ 91.00</span>
                </option>

              </Form.Control>
            </Form.Group>
            <SliderComponent
              label="Cloud 1-Year Retention + DRaaS per 500GB Protected"
              max={500}
              price={20}
            />
            <SliderComponent
              label="Google Workspace Backup: Gmail, Drive"
              max={2000}
              price={50}
            />
            <SliderComponent label="Endpoint Backup" max={2000} price={40} />
          </Col>
          <Col md={6} className="calculator-section">
            <h3>CLOUD RETENTION ONLY 500GB Protected</h3>
            <Form.Group controlId="formCloudRetention">
              <Form.Control as="select">
                <option>Select value</option>
                <option value="">Cloud 90 days</option>
                <option value="">Cloud 1 year</option>
                <option value="">Cloud 2 years</option>
                <option value="">Cloud 3 years</option>
                <option value="">Cloud 4 years</option>
              </Form.Control>
            </Form.Group>
            <SliderComponent
              label="M365 Backup: Email, OneDrive"
              max={2000}
              price={50}
            />
            <SliderComponent
              label="Salesforce SaaS Backup: All data & meta data Unlimited"
              max={2000}
              price={50}
            />
            <SliderComponent
              label="vAppliance per Socket Licenses w/ Support"
              max={2000}
              price={50}
            />
          </Col>
          <Col></Col>
        </Row>
        <div className="onboarding-section mt-4">
          <h3>Onboarding/Activation Fee</h3>
          <CheckboxComponent label="SureEssentials Basic Installation ProServices" />
          <CheckboxComponent label="Cloud seeding device for fast upload overnight to cloud" />
          <CheckboxComponent label="Professional setup for disaster recovery as a service" />
        </div>
      </Container>

      <Container className="summary-section mt-4 p-4">
        <h2>Summary</h2>
        <div className="list-accordion d-flex flex-column mt-3">
          <div className="d-flex justify-content-between">
            <span>HW/ Software Appliance</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>CLOUD RETENTION ONLY 500GB Protected</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>Cloud 1-Year Retention + DRaaS Per 500GB Protected</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>M365 Backup: Email, OneDrive</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>Google Workspace Backup: Gmail, Drive</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>Salesforce SaaS Backup: All Data & Meta Data Unlimited</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>Endpoint Backup</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>VAppliance Per Socket Licenses W/ Support</span>
            <span>$20</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>Onboarding/Activation Fee</span>
            <span>$20</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 total-amount">
            <span>Total</span>
            <span>$180</span>
        </div>
      </Container>
    </Container>
 
    </>
  );
};

const SliderComponent = ({ label, max, price }) => (
  <Form.Group className="slider-component my-3">
    <div className="d-flex justify-content-between">
      <Form.Label>{label}</Form.Label>
      <span className="float-end">${price}</span>
    </div>
    <Form.Control type="range" min="0" max={max} />
    <div className="d-flex justify-content-between mt-1 min-max-span">
      <span>0</span>
      <span>{max}</span>
    </div>
  </Form.Group>
);

const CheckboxComponent = ({ label }) => (
  <Form.Group className="checkbox-component my-2">
    <Form.Check type="checkbox" label={label} />
  </Form.Group>
);

export default PriceCalculator;
