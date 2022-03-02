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
            { "src": "images (4).png" },
            { "src": "images (10).png" },
            { "src": "images (11).png" },
            { "src": "download (1).png" },
            { "src": "images (a).png" },
            { "src": "images (b).png" },
            { "src": "images (c).png" }
        ]
    );

    return (
        <>
            {/* <img src="sample11-a.png" style={{ "width": '100%' }} /> */}
            <Container className="perppageContainer" fluid>
                {data && data.map(e => (<>
                    <Row>
                        <Col>
                            <LeftLayout data={e} />
                        </Col>
                        <Col>
                            <RightLayout />
                        </Col>
                    </Row>
                    <br />
                </>

                ))}


            </Container>
            <table>
                {data && data.map(e => (<>
                    <tr>
                        <td>
                            <WantedPoster data={e} />
                            {/* <WPModal poster={
                                <img src="sample11-a.png" style={{ "width": '100%' }} />} />
                            <WPModal poster={<img src="sample11.png" style={{ "width": '50%' }} />} /> */}
                        </td>
                    </tr>
                </>
                )
                )}

            </table>
        </>
    )
}

export default PerpPage