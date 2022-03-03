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
            {
                "src": "images (5).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (3).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (4).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (10).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (11).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "download (1).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (a).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (b).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "images (c).png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "cat-with-attitude.png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "attitude-feat.png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "cat-4694065_960_720.png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "quy3t9tjvia61.png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "shutterstock_129390089_1.png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },
            {
                "src": "grumpy_cat.png",
                "fullname": "NIKOLAI ONDREJKO",
                "alias": "DINGGLE BERRY BANDIT",
                "dob": "FEB 09, 2022",
                "sex": "M",
                "ht": "2' 2\"",
                "wt": "BRN",
                "eyes": "BRN",
                "hair": "BRN",
            },


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

                            <WPModal />
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