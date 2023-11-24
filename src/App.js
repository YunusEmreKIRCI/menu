import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container , Nav } from 'react-bootstrap'
import {IoEllipsisVerticalOutline} from 'react-icons/io5';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Food from './components/Food';
import api from './api/axiosConfig';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hamburger from './components/tost.png';
import LogoTcdd from './components/logo.png';
import kahve from './Turk-Kahvesi.jpg';
import kola from './Kola.jpg';
import cikolata from './çikolata.jpeg';
import cubuk from './çubuk kraker.jpeg';
import redbull from './red-bull.png';
import trend from './Trendyol.jpeg'



function App() {
  
  const [foods, setFoods] = useState([]);
  useEffect(()=>{

    async function getFoods() {
        try {
            const res = await api.get("/food/listall")
            console.log(res.data.food);
            setFoods(res.data.food);
          }
          
          catch(err){
            console.log(err);
          }
      }
      getFoods();
     
    },[])


  return (
    <>
    
    <Navbar fixed="top"  expand="lg" bg ="primary" data-bs-theme="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  >
          <IoEllipsisVerticalOutline size = "30" style={{color : "white"}}/>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style = {{alignItems: "center"}}>
          <Nav.Link href="#sicak">SICAK İÇECEKLER</Nav.Link>
          <Nav.Link href="#soguk">SOĞUK İÇECEKLER</Nav.Link>
          <Nav.Link href="#yemek">YİYECEKLER</Nav.Link>
          <Nav.Link href="#tatli">TATLI ATIŞTIRMALIKLAR</Nav.Link>
          <Nav.Link href="#tuzlu">TUZLU ATIŞTIRMALIKLAR</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
      {/* Sayfa İçeriği */}
      <div style={{ marginTop: '5px' }}>
        {/* Navbar yüksekliği kadar bir boşluk bırakmak için `marginTop` kullanabilirsiniz */}
        <div id="sicak">
          
          {/* Sayfa içeriği buraya gelecek */}
        </div><br/><br/><br/>
        <h1 style={{textAlign : "center", marginTop: 50}}>SICAK İÇECEKLER</h1><hr/>
        <Container >
        <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kahve" price = "45 tl" src = {kahve}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve1" price = "45 tl" src = {kahve} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve2" price = "45 tl" src = {kahve} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kahve3" price = "45 tl" src = {kahve}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve4" price = "45 tl" src = {kahve} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve5" price = "45 tl" src = {kahve} />
                </Col>
            </Row>
            
        </Container >
        <Container >
        <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kahve6" price = "45 tl" src = {kahve}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve7" price = "45 tl" src = {kahve} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve8" price = "45 tl" src = {kahve} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kahve9" price = "45 tl" src = {kahve}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve10" price = "45 tl" src = {kahve} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kahve11" price = "45 tl" src = {kahve} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <div style={{textAlign : "center", marginTop: 50}}>
                    <a href = "https://www.redbull.com/tr-tr/">
                        <img src = {redbull} style={{width : '60%', height :"80%"}}/>
                    </a>
                </div>
            </Row>
        </Container >
        
        <div id="soguk">
          {/* Sayfa içeriği buraya gelecek */}
        </div>
        <br/><br/>
        <hr/><h1 style={{textAlign : "center", marginTop: 50}}>SOĞUK İÇECEKLER</h1><hr/>
        <Container >
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kola" price = "25 tl" src = {kola}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola1" price = "25 tl" src = {kola} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola2" price = "25 tl" src = {kola} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kola3" price = "25 tl" src = {kola}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola4" price = "25 tl" src = {kola} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola5" price = "25 tl" src = {kola} />
                </Col>
            </Row>
            
        </Container >
        <Container >
        <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kola6" price = "25 tl" src = {kola}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola7" price = "25 tl" src = {kola} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola8" price = "25 tl" src = {kola} />
                </Col>
            </Row>
             <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kola9" price = "25 tl" src = {kola}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola10" price = "25 tl" src = {kola} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="kola11" price = "25 tl" src = {kola} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <div style={{textAlign : "center", marginTop: 50}}>
                    <a href = "https://www.redbull.com/tr-tr/athletes?filter.countryCode=TR">
                        <img src = {redbull} style={{width : '60%', height :"80%"}}/>
                    </a>
                </div>
            </Row>
        </Container >
        <div id="yemek">
          {/* Sayfa içeriği buraya gelecek */}
        </div>
        <br/><br/>
        <hr/><h1 style={{textAlign : "center", marginTop: 50}}>YİYECEKLER</h1>  <hr/>
        <Container >
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src= {hamburger} />
                </Col>
            </Row>
            
        </Container >
        <Container >
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger}/>
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src = {hamburger} />
                </Col>
                <Col xs ="auto" md="auto">
                    <Food name="hamburger" price = "45 tl" src= {hamburger} />
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <div style={{textAlign : "center", marginTop: 50}}>
                    <a href = "https://www.trendyol.com/thull/tg-238f-23-8-1ms-165hz-freesync-premium-fhd-hdr300-hdmi-dp-vga-frameless-va-flat-gaming-p-666195299?boutiqueId=61&merchantId=749763">
                        <img src = {trend} style={{width : '60%', height :"80%"}}/>
                    </a>
                </div>
            </Row>
        </Container >
        <div id="tatli">
          {/* Sayfa içeriği buraya gelecek */}
        </div>
        <br/><br/>
        <hr/><h1 style={{textAlign : "center", marginTop: 50}}>TATLI ATIŞTIRMALIKLAR</h1>  <hr/>
        <Container >
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="çikolata" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata1" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata2" price = "35 tl" src = {cikolata}/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="çikolata3" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata4" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata5" price = "35 tl" src = {cikolata}/>
                </Col>
            </Row>
            
        </Container ><Container >
        <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="çikolata6" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata7" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata8" price = "35 tl" src = {cikolata}/>
                </Col>
            </Row>
              <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="çikolata9" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata10" price = "35 tl" src = {cikolata}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="çikolata11" price = "35 tl" src = {cikolata}/>
                </Col>
            </Row>
            
        </Container >
        <div id="tuzlu">
          {/* Sayfa içeriği buraya gelecek */}
        </div>
        <br/><br/>
        <hr/><h1 style={{textAlign : "center", marginTop: 50}}>TUZLU ATIŞTIRMALIKLAR</h1>  <hr/>
      </div>
      <Container >
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kraker" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker1" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker2" price = "15 tl" src = {cubuk}/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kraker" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker1" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker2" price = "15 tl" src = {cubuk}/>
                </Col>
            </Row>
            
        </Container >
        <Container >
        <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kraker3" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker4" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker5" price = "15 tl" src = {cubuk}/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-center" >
                <Col xs ="auto"  md="auto">
                    <Food name="kraker6" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker7" price = "15 tl" src = {cubuk}/>
                </Col>
                <Col xs ="auto" md="auto">
                <Food name="kraker8" price = "15 tl" src = {cubuk}/>
                </Col>
            </Row>
           
        </Container >
    </>
  );
}

export default App;
{/* <div >
<Navbar fixed="top" expand="lg" className="bg-body-tertiary">
  <Container >
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"  >
      <IoEllipsisVerticalOutline size = "30" style={{color : "white"}}/>
    </Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container >
</Navbar> 
  
  
{foods.map((item, i) => (
  <Food />
))}

</div> */}
