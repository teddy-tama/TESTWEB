import React, {useEffect, useState} from 'react'
import Navbar from '../../component/NavbarComponent'
import {Row, Col, Container} from 'react-bootstrap'
import mobile from 'is-mobile'
import IconProductsAndServices from '../../assets/icon/ProductsAndServices.svg'
import LayananAPIIcon from '../../assets/icon/LayananAPI.png'
import LayananPluginIcon from '../../assets/icon/LayananPlugin.png'
import LayananPortalIcon from '../../assets/icon/Layanan Portal.png'
import CorporateSMEIcon from '../../assets/icon/CorporateAndSME.svg'
import QrisIcon from '../../assets/icon/qris.svg'
import MoneyIcon from '../../assets/icon/duit.svg'
import VoucherIcon from '../../assets/icon/Voucher2.svg'
import UangMasukIcon from '../../assets/icon/uang_masuk.svg'
import EwalletIcon from '../../assets/icon/eWallet.svg'
import LaporanTransaksiIcon from '../../assets/icon/Laporan_Transaksi.svg'
import StarBlackIcon from '../../assets/icon/stars_black.svg'
import MetodeBayarIcon from '../../assets/icon/Metode_Bayar.svg'
import PersonalConsumerIcon from '../../assets/icon/PersonalConsumer.svg'
import RemittanceIcon from '../../assets/icon/Remittance.svg'
import Footer from '../../component/Footer'
import {useLocation} from 'react-router-dom'
import $ from 'jquery'
function ProductServicePage() {
    const isMobile = mobile();
    const language = sessionStorage.getItem('lang')
    const location = useLocation();
    const section = location.state.section;
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const onPageLoad = () => {
            SetLoading(false);
          };

          if (document.readyState === "complete") {
            onPageLoad();
          } else {
            window.addEventListener("load", onPageLoad);
            return () => window.removeEventListener("load", onPageLoad);
          }
    },[])

    console.log(section, 'ini section');

    if(!loading){
        if(section === 'qris'){
            document.getElementById( 'qrissection' ).scrollIntoView();
        }else if(section === 'eMoney'){
            document.getElementById( 'eMoneysection' ).scrollIntoView();
        }else if(section === 'trfpayment'){
            document.getElementById( 'trfpaymentsection' ).scrollIntoView();
        }else if(section === 'voucher'){
            document.getElementById( 'vouchersection' ).scrollIntoView();
        }else if(section === 'wallet'){
            document.getElementById( 'walletsection' ).scrollIntoView();
        }else if(section === 'billsCredit'){
            document.getElementById( 'billscreditsection' ).scrollIntoView();
        }else if(section === 'loyalty'){
            document.getElementById( 'loyaltysection' ).scrollIntoView();
        }else if(section === 'remittance'){
            document.getElementById( 'remittancesection' ).scrollIntoView();
        }
    }
  return (
    <>
        <Navbar/>
        <div style={{textAlign: 'left', width: '100%'}}>
            <div>
                {/* <Container> */}
                    <Row>
                        <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                            {
                                language === 'eng' ?
                                <span className='title-head'><b>Product and Service</b></span> :
                                <span className='title-head'><b>Produk dan Layanan</b></span>
                            }
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='subtitle-head'>Products from Ezeelink platform are suitable for Corporate & SME use as well as for Personal (Consumer) use which are specified into 3 main types of services.</span> :
                                <span className='subtitle-head'>Produk-produk dari platform Ezeelink sesuai untuk penggunaan Korporat & UMKM maupun untuk penggunaan Personal (Konsumer) yang terbagi dalam 3 tipe layanan utama.</span>
                            }
                        </Col>
                        <Col xs={6} style={{paddingTop: 95}}>
                            <img alt="" src={IconProductsAndServices} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='layout4'>
            <br/>
                <div>
                    {
                        language === 'eng' ?
                        <h1 className='titleBig'>3 Type Service</h1> :
                        <h1 className='titleBig'>3 Tipe Layanan</h1>
                    }
                </div>
                <br/>
                <br/>
                {/* <Container> */}
                    <Row>
                        <Col xs={12} style={{ flexWrap: 'nowrap'}}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananAPIIcon} alt="" className='imgLayAPI' />
                                        {
                                            language === 'eng' ?
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                API-based services integrate with your system and provide a better user experience while allowing you to customize the system. 
                                            </div> :
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Layanan berbasis API terintegrasi dengan sistem Anda dan memberi pengalaman lebih kepada pengguna sekaligus memungkinkan Anda untuk mengkostumisasi sistem.
                                            </div>
                                        }
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPluginIcon} alt="" className='imgLayAPI' />
                                        {
                                            language === 'eng' ?
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Plugin-based services add features to your application and provide convenience to both you and your business users.
                                            </div> :
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Layanan berbasis Plugin menambahkan fitur untuk aplikasi Anda dan memberi kemudahan baik kepada Anda maupun kepada pengguna bisnis Anda.
                                            </div>
                                        }
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPortalIcon} alt="" className='imgLayAPI' />
                                        {
                                            language === 'eng' ?
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Portal-based services are practical digital transaction services because they do not require integration or installation.
                                            </div> :
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Layanan berbasis Portal merupakan layanan transaksi digital praktis karena tidak memerlukan integrasi maupun instalasi.
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                <br/>
                {/* </Container> */}
            </div>
            <br/>
            <div>
                <Row>
                    <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                        {
                            language === 'eng' ?
                            <span className='title-head'><b>Corporate & SME</b></span> :
                            <span className='title-head'><b>Korporat & UMKM</b></span>
                        }
                        <br/>
                        {
                            language === 'eng' ?
                            <span className='subtitle-head'>Maximize effectiveness and efficiency in financial traffic for your business and ventures through API integration, Plugin connection or Transaction portal with Ezeelink products.</span> :
                            <span className='subtitle-head'>Maksimalkan efektifitas dan efisiensi dalam lalu lintas keuangan untuk bisnis dan usaha Anda melalui integrasi API, koneksi Plugin atau Portal transaksi produk-produk Ezeelink</span>
                        }
                    </Col>
                    <Col xs={6} style={{paddingTop: 95}}>
                        <img alt="" src={CorporateSMEIcon} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <div style={isMobile ? {paddingLeft: 45} : {paddingLeft: 140}}>
                    <Row>
                        <Col xs={12}>
                            <div id="qrissection">
                                <img alt="" src={QrisIcon} className='icon-img' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className='service-title'><b>QRIS</b></span>
                                <br/>
                                <br/>
                                {
                                    language === 'eng' ?
                                    <span className='sub-title-service'>Quick Response Code Indonesian Standard is Indonesia’s QR code standard to facilitate QR code-based transactions in Indonesia through Ezeelink which has a license to issue QRIS and provide QRIS solutions in your application or business</span> :
                                    <span className='sub-title-service'>Quick Response Code Indonesian Standard merupakan standar kode QR Nasional untuk memfasilitasi transaksi berbasis kode QR di Indonesia melalui Ezeelink yang memiliki izin mengadakan QRIS (issuer) dan menyediakan solusi QRIS di aplikasi atau usaha Anda.</span>
                                }
                            </div>
                        </Col>
                        <Col xs={12} id="trfpaymentsection">
                            <img alt="" src={UangMasukIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Transfer Payment</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Get the convenience of free payment transfers to various banks throughout Indonesia!</span> :
                                <span className='sub-title-service'>Dapatkan kemudahan transfer pembayaran tanpa biaya ke berbagai bank di seluruh Indonesia!</span>
                            }
                        </Col>
                        <Col xs={12} id="walletsection">
                            <img alt="" src={EwalletIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>White-Label Wallet</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Upgrade your level of business transaction with a digital wallet that can be customized according to your characteristics and brand identity</span> :
                                <span className='sub-title-service'>Upgrade level usaha Anda dengan dompet digital yang bisa dikostumisasi sesuai dengan ciri khas dan identitas brand Anda.</span>
                            }
                        </Col>
                        <Col xs={12} id="loyaltysection">
                            <img alt="" src={StarBlackIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Loyalty</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Our Loyalty Program is designed to support your business by providing additional benefits to establish closeness and build customer loyalty to your brand.</span> :
                                <span className='sub-title-service'>Program Loyalty yang kami rancang dan sesuai dengan usaha Anda akan memberikan benefit tambahan untuk menjalin kedekatan dan membangun loyalitas pelanggan terhadap brand Anda.</span>
                            }
                        </Col>
                        <Col xs={12} id="remittancesection">
                            <img alt="" src={RemittanceIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Remittance</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Send or receive money, to and from abroad. Cross-border fund transfers are faster, easier and affordable with the Remittance service from Ezeelink.</span> :
                                <span className='sub-title-service'>Kirim atau terima uang, dari dan ke luar negeri. Transfer dana lintas batas negara lebih cepat, mudah dan terjangkau dengan layanan Remittance dari Ezeelink.</span>
                            }
                        </Col>
                    </Row>
                </div>
            </div>
            <br/>
            <hr style={{backgroundColor: '#F5F5F5', height: 10}}/>
            <div>
                <Row>
                    <Col xs={6} className="columnHead" style={isMobile ? { paddingLeft: 45} : {paddingLeft: 140}}>
                        {
                            language === 'eng' ?
                            <span className='title-head'><b>Personal (Consumer)</b></span> :
                            <span className='title-head'><b>Personal (Konsumer)</b></span>
                        }
                        <br/>
                        {
                            language === 'eng' ?
                            <span className='subtitle-head'>Get the optimal experience in your daily digital transaction with various products from Ezeelink</span> :
                            <span className='subtitle-head'>Dapatkan pengalaman optimal dalam tiap transaksi keuangan digital bersama produk-produk dari Ezeelink.</span>
                        }
                    </Col>
                    <Col xs={6} style={{paddingTop: 95}}>
                        <img alt="" src={PersonalConsumerIcon} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <div>
                    <Row style={isMobile ? {paddingLeft: 45} : {paddingLeft: 140}}>
                        <Col xs={12} id="eMoneysection">
                            <img alt="" src={MoneyIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                                language === 'eng' ?
                                <span className='service-title'><b>Electronic Money</b></span> :
                                <span className='service-title'><b>Uang Elektronik</b></span>
                            }
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Simplify the activity and increase the security of digital transactions with licensed electronic money managed by Ezeelink as a means of payment at various merchants that is easy to use or top up</span> :
                                <span className='sub-title-service'>Permudah kegiatan dan tingkatkan keamanan transaksi digital dengan uang elektronik yang di kelola Ezeelink sebagai alat pembayaran di berbagai merchant yang mudah digunakan maupun diisi kembali (top up) dan dapat dikostumisasi sesuai keinginan Anda.</span>
                            }
                        </Col>
                        <Col xs={12} id="vouchersection">
                            <img alt="" src={VoucherIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                                language === 'eng' ?
                                <span className='service-title'><b>Digital Voucher</b></span> :
                                <span className='service-title'><b>Voucher Digital</b></span>
                            }
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>A concise and dynamic digital transaction method, easy to transfer as a gift, or used directly to help manage expenses</span> :
                                <span className='sub-title-service'>Metode transaksi digital yang ringkas dan dinamis, mudah dipindahtangankan sebagai hadiah, maupun digunakan langsung untuk membantu pengaturan pengeluaran</span>
                            }
                        </Col>
                        <Col xs={12} id="billscreditsection">
                            <img alt="" src={LaporanTransaksiIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                                language === 'eng' ?
                                <span className='service-title'><b>Bills & Credits</b></span> :
                                <span className='service-title'><b>Pulsa & Tagihan</b></span>
                            }
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Ease of access facilitated by Ezeelink to pay various bills or routine expenses, ranging from electricity or telephone credit,  internet bills, water and various other services</span> :
                                <span className='sub-title-service'>Gunakan akses mudah dari Ezeelink untuk pembayaran berbagai tagihan atau pengeluaran rutin, mulai dari listrik, pulsa telepon, tagihan internet, air dan berbagai layanan lainnya.</span>
                            }
                        </Col>
                        <Col xs={12} id="">
                            <img alt="" src={EwalletIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Wallet</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Our wallet feature makes it easy for users to set up and make financial transactions digitally.</span> :
                                <span className='sub-title-service'>Fitur wallet dari Ezeelink memudahkan pengguna dalam pengaturan dan melakukan transaksi keuangan secara digital.</span>
                            }
                        </Col>
                        <Col xs={12} id="cardlesssection">
                            <img alt="" src={MetodeBayarIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Cardless Cash Withdrawal</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>An Inclusive Financial Solutions for people without a bank account will be able to make cash withdrawal.</span> :
                                <span className='sub-title-service'>Tarik Tunai Tanpa Kartu sebagai Solusi Inklusi Keuangan untuk masyarakat yang tidak memiliki rekening di bank. </span>
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <br/>
        <Footer/>
    </>
  )
}

export default ProductServicePage