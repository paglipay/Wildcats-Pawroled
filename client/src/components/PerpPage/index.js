import React, { useState } from 'react'
import WantedPoster from './WantedPoster'
import { Container, Row, Col } from 'react-bootstrap'
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';
import './PerpPage.css'
import WPModal from './WantedPoster/WPModal';

function PerpPage() {
    const [data, setData] = useState(
        [
            { "src": "images (5).png" },
            { "src": "images (3).png" },
            { "src": "images (4).png" }
        ]
    );

    return (
        <>
            <Container className="perppageContainer" fluid>
                <Row>
                    <Col>
                        <LeftLayout />
                    </Col>
                    <Col>
                        <RightLayout />
                    </Col>
                </Row>
            </Container>
            <img src="sample11-a.png" style={{ "width": '100%' }} />

            {/* <img src="sample2.png" style={{ "width": '100%' }} />
            <img src="sample3.png" style={{ "width": '100%' }} /> */}

            <table>
                <tr>
                    <td>
                        <WantedPoster data={data[0]} />
                        <WPModal poster={
                            <img src="sample11-a.png" style={{ "width": '100%' }} />} />
                        <WPModal poster={<img src="sample11.png" style={{ "width": '50%' }} />} />
                    </td>
                    {/* <td>
                        <WantedPoster data={data[1]} />
                    </td>
                    <td>
                        <WantedPoster data={data[2]} />
                    </td> */}
                </tr>
            </table>
        </>
    )
}

export default PerpPage