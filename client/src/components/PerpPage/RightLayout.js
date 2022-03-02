import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function RightLayout() {
    const [data, setData] = useState([
        {
            "id": "1",
            "fullname": "",
        }
    ]);
    const [hProps, setHProps] = useState([
        'id',
        'fullname'
    ]);
    return (
        <Container style={{ backgroundColor: 'black', padding: 0, border: 0, borderColor: 'gray', height: '100%' }}>
            <Row>
                <Col>

                    <Image src='rightLayout.png' style={{ height: '800px' }} wrapped ui={false} />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default RightLayout