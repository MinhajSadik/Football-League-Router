import React, { useEffect, useState } from 'react';
import male from './../Photo/male.png';
import female from './../Photo/female.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [leagueInfo, setLeagueInfo] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueInfo(data.leagues))
    }, [idLeague]);
    const headerImg = (leagueInfo[0]) && (leagueInfo[0].strFanart1);
    const desCription = (leagueInfo[0]) && (leagueInfo[0].strDescriptionEN);
    const leagueName = (leagueInfo[0]) && (leagueInfo[0].strLeague);
    const startYear = (leagueInfo[0]) && (leagueInfo[0].intFormedYear);
    const country = (leagueInfo[0]) && (leagueInfo[0].strCountry);
    const sportsType = (leagueInfo[0]) && (leagueInfo[0].strSport);
    const gender = (leagueInfo[0]) && (leagueInfo[0].strGender);
    const twitter = (leagueInfo[0]) && (leagueInfo[0].strTwitter);
    const facebook = (leagueInfo[0]) && (leagueInfo[0].strFacebook);
    const youtube = (leagueInfo[0]) && (leagueInfo[0].strYoutube);
    return (
        <div style={{ backgroundColor: '#0E0A2A' }}>
            <img src={headerImg} width="100%" height="400px" alt="" />
            <div className="container">
                <Container className="mt-3" style={{ backgroundColor: "#ED005F", borderRadius: "10px", color: "white" }}>
                    <Row style={{ padding: '20px' }}>
                        <Col xs={12} md={8}>
                            <h3>{leagueName}</h3>
                            <p><FontAwesomeIcon icon={faPodcast} /> Founded: {startYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {country}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {sportsType}</p>
                            <p><FontAwesomeIcon icon={faMars} /> Gender: {gender}</p>
                        </Col>
                        <Col xs={6} md={4}>
                            {
                                gender === 'Male' ?
                                    <img className="mt-4" src={male} style={{ borderRadius: '10px' }} height="150px" alt="" />
                                    :
                                    <img className="mt-4" src={female} style={{ borderRadius: '10px' }} height="150px" alt="" />

                            }
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <br />
                        <p style={{ color: 'white' }}>{desCription}</p>
                    </Row>
                </Container>
                <div className="d-flex justify-content-center" style={{ fontSize: '40px' }}>
                    <a href={`https://${twitter}`} style={{ color: 'skyblue' }}>
                        <FiTwitter />
                    </a>
                    <a href={`https://${facebook}`} style={{ color: 'white', marginLeft: '20px' }}>
                        <FaFacebookF />
                    </a>
                    <a href={`https://${youtube}`} style={{ color: 'red', marginLeft: '20px' }}>
                        <AiFillYoutube />
                    </a>
                </div>
                <br />
            </div>
        </div>
    );
};

export default LeagueDetail;