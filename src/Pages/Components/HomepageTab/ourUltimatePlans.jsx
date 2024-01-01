import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { OurUltimateData, Detoxification, WeightManagement } from '../../Homepage/ourUltimateData';

const OurUltimatePlans = () => {
  return (
    <>
        <Tabs
              defaultActiveKey="contact"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Weight Management">
                <WeightManagement />
            </Tab>
            <Tab eventKey="profile" title="Detoxification">
                  <Detoxification />
            </Tab>
            <Tab eventKey="contact" title="Premium Plans">
                <OurUltimateData />
            </Tab>
        </Tabs>
    </>
  )
}

export default OurUltimatePlans;