import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import logoEzeeLinkIcon from '../assets/icon/logoEzeeLink.png'
import googlePlayStoreIcon from '../assets/icon/googlePlayStoreIcon.png'
import iosAppStoreIcon from '../assets/icon/iosAppStoreIcon.png'
import contactUsIcon from '../assets/icon/contactUs.png'
import mobile from 'is-mobile'
import '../pages/css/HomePage.css'
function Footer() {
    const isMobile = mobile();
    const language = sessionStorage.getItem('lang')

  return (
    <>
    <div className='layout6'>
        <br/>
            <div>
                {
                    language === 'eng' ?
                    <h1 className='titleBig3'>Discover More about Ezeelink!</h1> :
                    <h1 className='titleBig3'>Temukan Lebih Banyak tentang Ezeelink!</h1>
                }
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        <img src={logoEzeeLinkIcon} alt="" className='logoEZL' style={{ paddingLeft: 60, marginTop: 15 }} />
                    </Col>
                    {
                        isMobile ? <>
                        <Col xs={6}>                                            
                            <img src={contactUsIcon} alt="" className='logoContactUs' style={{ marginTop: 20 }} />
                        </Col></> : <></>
                    }
                </Row>
            </div>
            {/* <Container> */}
                <Row>
                    <Col xs={12} style={{ flexWrap: 'nowrap', overflowX: 'unset' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Col xs={!isMobile ? 3 : 6} style={{ marginTop: 80 }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                                    {
                                        language === 'eng' ?
                                        <div className='text4' style={{ textAlign: 'left', marginTop: 20 }}>
                                            Address
                                        </div> :
                                        <div className='text4' style={{ textAlign: 'left', marginTop: 20 }}>
                                            Alamat
                                        </div>
                                    }
                                    <div className='text5' style={{ textAlign: 'left', marginTop: 15 }}>
                                        Wisma Techking 2 JL. AM Sangaji No.24 Jakarta Pusat 10130 Indonesia
                                    </div>
                                </div>
                            </Col>
                            <Col xs={!isMobile ? 3 : 6} style={{ marginTop: 100 }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                                    {
                                        language === 'eng' ?
                                        <div className='text4' style={{ textAlign: 'left' }}>
                                            Download Application
                                        </div> :
                                        <div className='text4' style={{ textAlign: 'left' }}>
                                            Download Aplikasi
                                        </div>
                                    }
                                    <div className='' style={{ textAlign: 'left', marginTop: 15 }}>
                                        <img style={{ marginBottom: 10 }} className="logoStore" src={googlePlayStoreIcon} alt="" />
                                        <img src={iosAppStoreIcon} alt="" className="logoStore"/>
                                    </div>
                                </div>
                            </Col>
                            {
                                !isMobile ? 
                                <>
                                    <Col xs={3} style={{ marginTop: 100 }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                            {
                                                language === 'eng' ?
                                                <div className='text4' style={{ textAlign: 'left',  }}>
                                                    Our Contact
                                                    <br/>
                                                    <img src={contactUsIcon} alt="" className='logoContactUs' style={{ marginTop: 20 }} />
                                                </div> :
                                                <div className='text4' style={{ textAlign: 'left',  }}>
                                                    Kontak Kami
                                                    <br/>
                                                    <img src={contactUsIcon} alt="" className='logoContactUs' style={{ marginTop: 20 }} />
                                                </div>
                                            }
                                        </div>
                                    </Col>
                                </> : <></>
                            }
                        </div>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    </>
  )
}

export default Footer