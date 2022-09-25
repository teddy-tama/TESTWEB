import React, { useEffect, useState } from 'react'
import Navbar from '../component/NavbarComponent'
import AboutUSIcon from '../assets/icon/About US.png'
import {Row, Col} from 'react-bootstrap'
import mobile from 'is-mobile'
import integratedCompanyIcon from '../assets/icon/integratedCompany.png'
import '../pages/css/AboutUs.css'
import Footer from '../component/Footer'
import { useLocation } from 'react-router-dom'

function AboutUs() {
    const isMobile = mobile();
    const location = useLocation()
    // console.log(location.state.section, 'location');
    const language = sessionStorage.getItem('lang')
    const [loading, setLoading] = useState(true)
    function onPageLoad() {
        setLoading(false) 
    }

    useEffect(() => {
        if (document.readyState === 'complete') {
            onPageLoad()
        } else {
            window.addEventListener('load', onPageLoad)
            return () => window.removeEventListener('load', onPageLoad)
        }
        
    }, [])

    console.log(location, 'ini location');

    if (!loading) {
        if (location.state.section === 'companyProfile') {
            const section1 = document.getElementById('company-profile');
            section1.scrollIntoView()
        } else if (location.state.section === 'ourVision') {
            const section2 = document.getElementById('our-vision');
            section2.scrollIntoView()
        } else if (location.state.section === 'ourJourney') {
            const section3 = document.getElementById('our-journey');
            section3.scrollIntoView()
        }
    }

    return (
        <>
            <Navbar />
            <div id='AboutUs' style={{ textAlign: 'left', width: '100%' }}>
                <div style={{ alignContent: 'center' }}>
                    <div>
                        <Row>
                            <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                                {
                                    language === 'eng' ?
                                    <span className='title-head'><b>About Us</b></span> :
                                    <span className='title-head'><b>Tentang Kami</b></span>
                                }
                                <br/>
                                <br/>
                                {
                                    language === 'eng' ?
                                    <span className='subtitle-head'>Ezeelink is an electronic transaction service provider with various products that provide solutions for various financial needs.</span> :
                                    <span className='subtitle-head'>Ezeelink adalah penyedia layanan transaksi elektronik dengan berbagai produk yang memberi solusi untuk berbagai kebutuhan finansial.</span>
                                }
                            </Col>
                            <Col xs={6} style={{paddingTop: 95}}>
                                <img alt="" src={AboutUSIcon} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                            </Col>
                        </Row>
                    </div>
                </div>
                <br />
                <div className='layout4' id='company-profile' style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                    <br />
                    <br />
                    <div style={ isMobile ? { paddingLeft: 35, marginBottom: 10 } : { paddingLeft: 120, marginBottom: 25 }}>
                        {
                            language === 'eng' ?
                            <h1 className='titleBig'>Company Profile</h1> :
                            <h1 className='titleBig'>Profil Perusahaan</h1>
                        }
                    </div>
                    <div style={ isMobile ? { paddingLeft: 35, marginBottom: 10 } : { marginBottom: 30, paddingLeft: 120 }}>
                        {
                            language === 'eng' ?
                            <div className='textWhite'>
                                PT Ezeelink Indonesia owns e-Money license from Bank Indonesia, a QRIS license and various official licences for other financial services.
                            </div> :
                            <div className='textWhite'>
                                PT Ezeelink Indonesia memiliki lisensi e-Money Bank Indonesia, lisensi QRIS dan berbagai lisensi layanan keuangan lainnya.
                            </div>
                        }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
                        <img src={integratedCompanyIcon} alt='' style={{width: '100%', height: 'auto', maxWidth: 496}} />
                    </div>
                    <div style={ isMobile ? { paddingLeft: 35, marginBottom: 30 } : { marginTop: 30, marginBottom: 30, paddingLeft: 120 }}>
                        {
                            language === 'eng' ?
                            <div className='textWhite'>
                                Through Ezeetunai, Ezeelink's e-money product will be integrated with banking accounts and digital wallets as well as other digital transaction systems in Indonesia, such as PPOB transactions and public transportation. 
                                Ezeelink through its financial service platform and application system is also ready to provide fintech services to the public, both individual users and organizations such as SMEs & Cooperatives Institution.
                            </div> :
                            <div className='textWhite'>
                                Melalui Ezeetunai produk e-Money milik Ezeelink akan terintegrasi dengan akun perbankan dan dompet digital maupun sistem transaksi digital di Indonesia seperti transaksi PPOB dan transportasi publik. 
                                Ezeelink melalui platform layanan keuangan dan sistem aplikasinya juga siap memberikan layanan fintech kepada masyarakat baik pengguna perorangan maupun organisasi seperti UMKM & Koperasi.
                            </div>
                        }
                    </div>
                </div>
                <div id='our-vision' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={ isMobile ? { paddingTop: 30, paddingLeft: 35 } : { paddingTop: 80, paddingLeft: 120 }}>
                        {
                            language === 'eng' ?
                            <div className="title-head">Our Vision</div> :
                            <div className="title-head">Visi Ezeelink</div>
                        }
                    </div>
                    <div style={ isMobile ? { paddingTop: 15, paddingBottom: 40, paddingLeft: 35 } : { marginTop: 30, paddingBottom: 80, paddingLeft: 120 }}>
                        {
                            language === 'eng' ?
                            <div className='textBlack'>
                                Ezeelink's vision is to become a credible digital financial service provider at the global level. In line with this vision, Ezeelink wants to help bridge partners and associates with their stakeholders through an effective electronic transaction management platform technology to be able to achieve the company's business goals.
                            </div> :
                            <div className='textBlack'>
                                Visi Ezeelink Indonesia adalah menjadi penyedia layanan financial digital yang kredibel di tingkat global. Sejalan dengan visi ini, Ezeelink ingin membantu menjembatani partner dan mitra dengan para pemangku kepentingan mereka melalui sebuah teknologi platform pengelolaan transaksi elektronik yang efektif untuk dapat meraih tujuan bisnis perusahaan.
                            </div>
                        }
                    </div>
                </div>
                <div id='our-journey' style={ isMobile ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '30px 35px', width: '100%', height: "100%", left: 0, top: 1860, background: '#DF9C43' } : { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '80px 140px', width: '100%', height: "100%", left: 0, top: 1860, background: '#DF9C43' }}>
                    <div style={{ marginBottom: 25 }}>
                        {
                            language === 'eng' ?
                            <h1 className='titleBig'>Our Journey</h1> :
                            <h1 className='titleBig'>Perjalanan Ezeelink</h1>
                        }
                    </div>
                    <div className='subtitle-head2' style={{ marginTop: 30 }}>2012</div>
                    {
                        language === 'eng' ?
                        <div className='textWhite' style={{ marginTop: 6 }}>Officially operating and serving business partners.</div> :
                        <div className='textWhite' style={{ marginTop: 6 }}>Resmi beroperasi dan melayani partner bisnis.</div>
                    }
                    <div className='subtitle-head2' style={{ marginTop: 30 }}>2013</div>
                    {
                        language === 'eng' ?
                        <div className='textWhite' style={{ marginTop: 6 }}>Develop and expand service into the food and beverage, fashion, lifestyle, mini market, convenience store, electronics and other sectors.</div> :
                        <div className='textWhite' style={{ marginTop: 6 }}>Mengembangkan dan melebarkan layanan ke sektor makanan dan minuman, fashion, gaya hidup, mini market, convenience store, elektronik dan lainnya.</div>
                    }
                    <div className='subtitle-head2' style={{ marginTop: 30 }}>2014</div>
                    {
                        language === 'eng' ?
                        <div className='textWhite' style={{ marginTop: 6 }}>Gained the trust of more business partners, institutions, and communities at the national level and succeeded in expanding its reach to 30 cities in Indonesia.</div> :
                        <div className='textWhite' style={{ marginTop: 6 }}>Mendapat kepercayaan dari lebih banyak partner bisnis, institusi, dan komunitas masyarakat di tingkat nasional serta berhasil memperluas jangkauan hingga 30 kota di Indonesia.</div>
                    }
                    <div className='subtitle-head2' style={{ marginTop: 30 }}>2015</div>
                    {
                        language === 'eng' ?
                        <div className='textWhite' style={{ marginTop: 6, height: '100%' }}>Trusted to be a partner of the official association in the retail sector, the Indonesian Retail Entrepreneurs Association (APRINDO) and the Indonesian Hotel and Restaurant Association (PHRI). Ezeelink began collaborating with merchant members of the association and was appointed as a partner in the implementation of the PHRI Reward program.</div> :
                        <div className='textWhite' style={{ marginTop: 6, height: '100%' }}>Dipercaya menjadi mitra dari asosiasi resmi di sektor retail Asosiasi Pengusaha Ritel Indonesia (APRINDO) dan Perhimpunan Hotel dan Restoran Indonesia (PHRI). Ezeelink mulai menjalin kerja sama dengan para merchant anggota asosiasi tersebut dan ditunjuk sebagai partner dalam pelaksanaan program PHRI Reward.</div>
                    }
                    <div className='subtitle-head2' style={{ marginTop: 30 }}>2016</div>
                    {
                        language === 'eng' ?
                        <div className='textWhite' style={{ marginTop: 6, height: '100%' }}>Serving more than 2,400 merchant outlets throughout Indonesia and launching the Loyalty Program.</div> :
                        <div className='textWhite' style={{ marginTop: 6, height: '100%' }}>Melayani lebih dari 2.400 outlet merchant se-Indonesia dan meluncurkan Loyalty Program.</div>
                    }
                    <div className='subtitle-head2' style={{ marginTop: 30 }}>2017</div>
                    {
                        language === 'eng' ?
                        <div className='textWhite' style={{ marginTop: 6, height: '100%' }}>Providing online & offline content regarding merchant info in the form of daily shopping, phone credit, Payment Point Online Banking (PPOB), and electronic vouchers for all communities, companies and employees.</div> :
                        <div className='textWhite' style={{ marginTop: 6, height: '100%' }}>Menyediakan konten online & offline mengenai info merchant berupa belanja harian, pulsa, Payment Point Online Banking (PPOB), dan evoucher untuk semua komunitas, perusahaan dan karyawan.</div>
                    }
                </div>
                <div style={{ top: 3086, width: '100%' }}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AboutUs