import React, { useState } from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap'
import PerpStats from './PerpStats/PerpStats';

function LeftLayout() {
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
        <Container style={{ backgroundColor: 'black', padding: 20, border: 10, borderColor: 'gray', height: '100%', color: 'white' }}>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <Table style={{ color: 'white' }} striped bordered hover variant="dark">
                                    <tr>
                                        <th>
                                            Paw-Leashed Department
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src='images (5).png' style={{ height: 500 }} wrapped ui={false} />
                                            <Table  striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        {hProps.map((c, j) => (<th key={j}>{c}</th>))}
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {data && data.map((e, i) => {
                                                        return (<tr key={i}>
                                                            {hProps.map((c, j) => (<td key={`${c}-${j}`}>{e[c]}</td>))}
                                                        </tr>)
                                                    })}
                                                </tbody>
                                            </Table>

                                        </td>
                                    </tr>
                                </Table>
                            </Col>
                            <Col>
                                <PerpStats />
                                <Table  striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            {hProps.map((c, j) => (<th key={j}>{c}</th>))}
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {data && data.map((e, i) => {
                                            return (<tr key={i}>
                                                {hProps.map((c, j) => (<td key={`${c}-${j}`}>{e[c]}</td>))}
                                            </tr>)
                                        })}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftLayout