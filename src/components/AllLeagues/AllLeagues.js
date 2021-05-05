import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './Header/Header';
import Leagues from './Leagues/Leagues';

const AllLeagues = () => {
    const [allLeagues, setAllLeagues] = useState({});
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllLeagues(data))
    }, []);
    return (
        <div style={{ backgroundColor: '#0E0A2A' }}>
            <Header></Header>
            <Container>
                <Row>
                    {
                        (allLeagues.leagues) && ((allLeagues.leagues).slice(0, 15)).map(lg => <Leagues key={lg.idLeague} lg={lg}></Leagues>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllLeagues;