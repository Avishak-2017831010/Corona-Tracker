import React,{useState,useEffect} from 'react'
import {MenuItem,FormControl,Select, Tab} from '@material-ui/core'
import '../componentsstyle/Header.css'
import InfoBox from './InfoBox'
import Map from './Map.js'
import LiveCases from './LiveCases.js'
import { Container, Row, Col,Card } from 'react-bootstrap';
import CasesByGraph from './CasesByGraph';
import {sortData} from './utils.js'
import NavbarCom from './NavbarCom'
import Intro from './Intro'
import FaqSection from './FaqSection'
import CardComponent from './CardComponent'
import FooterSection from './FooterSection'
import { prettyPrintStat } from './utils.js'
import "leaflet/dist/leaflet.css"




function Header() {

    const [countries, setCountries] = useState([])
    const [initial,setinitial]=useState('worldwide')
    const [countryInfo,setcountryInfo]=useState({});
    const [tabledata,setTableData]=useState([]);
    const [mapCenter,setmapCenter]=useState({lat:34.80746,lng:-40.4796})
    const [mapZoom,setmapZoom]=useState(3)
    const [MapCountries,setMapCountries]=useState([])
    const [casesType,setCasesType]=useState('cases')
    
    

    useEffect(() => {       
        const getCountriesData=async()=>{
            await fetch("https://disease.sh/v3/covid-19/countries")
            .then((res)=>res.json())
            .then((data) => {

                const countries=data.map((country)=>(
                    {
                        name: country.country,
                        value: country.countryInfo.iso2
                    }
                ));

                const sortedData=sortData(data)

                setTableData(sortedData)
                setCountries(countries)
                setMapCountries(data)
            })
        }
        getCountriesData()
    }, [])

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then(res=>res.json())
        .then(data=>{
            setcountryInfo(data)
        })
        
    }, [])

   


    const OnCountryChange=async(e)=>{
        const countrycode=e.target.value
         
        const url=countrycode==="worldwide" ? "https://disease.sh/v3/covid-19/all" : 
        `https://disease.sh/v3/covid-19/countries/${countrycode}`

       
        await fetch(url)
        .then(res=>res.json())
        .then(data=>{
             setinitial(countrycode)
             setcountryInfo(data)
             setmapCenter([data.countryInfo.lat,data.countryInfo.long])
             setmapZoom(4)
            
        }).catch(err=>console.log(err))        
    }

    console.log(countryInfo)

    

    
    return (

        <div className="AppClass">
        
        <div className="topBody">

        <div className="header">
        <Row>

        <Col id="logoSection" md={4}>
        <NavbarCom/>
        </Col>
   
            </Row> 
        </div>

        <Intro/>

        <div className="UpdateNews">
        
        <Row id="dropdown">
            <Col>
            <div className="header_dropdown">
            <FormControl className="app_dropdown">
            <Select id="header_dropdown_select" value={initial} variant="outlined" onChange={OnCountryChange}>
            <MenuItem value="worldwide">WorldWide</MenuItem>               
                {
                    countries.map(country=>(
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))
                }    
            </Select>                  
            </FormControl>
            </div>
            </Col> 
        </Row>

              

        <div className="mainBody" id="infoBody">
            <Row className="RowInfo">
                                                     
                <Col xs="12" md="3">
                    <InfoBox title="Cases" 
                    active={casesType==="cases"}
                    onClick={e=>setCasesType('cases')}
                    cases={prettyPrintStat(countryInfo.todayCases)} 
                    total={prettyPrintStat(countryInfo.cases)}
                    imagesrc="https://i.ibb.co/vHjdTrJ/Untitled-design-5.png"/> 
                </Col>               

                <Col xs="12" md="3">
                    <InfoBox title="Recovered" 
                    active={casesType==="recovered"}
                    onClick={e=>setCasesType('recovered')}
                    cases={prettyPrintStat(countryInfo.todayRecovered)} 
                    total={prettyPrintStat(countryInfo.recovered)}
                    imagesrc="https://i.ibb.co/Qb65Bg4/Untitled-design-7.png"
                     /> 
                </Col>

                
                <Col xs="12" md="3">
                    <InfoBox title="Deaths" 
                    active={casesType==='deaths'}
                    onClick={e=>setCasesType('deaths')}
                    cases={prettyPrintStat(countryInfo.todayDeaths)} 
                    total={prettyPrintStat(countryInfo.deaths)}
                    imagesrc="https://i.ibb.co/wQNdzmz/Untitled-design-9.png"/> 
                </Col>
            
            </Row>
        </div> 
        </div>
        </div>
        
        <Row>

                <Col xs="12" md="6">

                <Row>
                <CasesByGraph casesType={casesType}/>
                </Row>

                    <div className="app_right">                                        
                    <LiveCases countries={tabledata}/>                                                                
                    </div>

                     
                </Col> 

                <Col xs="12" md="6">                   
                    <div className="mapCom">
                    <Map
                        countries={MapCountries}
                        center={mapCenter}
                        zoom={mapZoom}
                        casesType={casesType}
                        />
                    </div>

                    <Row>

                    <Col xs="12">
                        <div className="frontliners">
                            <img src="https://i.ibb.co/N2kNxPT/frontliners.png"/>
                        </div>
                    </Col>    
                    </Row>
                    
                  
                </Col>
        </Row>
        
            
        <div className="BottomSection">
            <Container>
               <FaqSection question="What is Covid-19" answer="COVID-19 is an infectious respiratory illness caused by a newly discovered coronavirus called SARS-CoV-2. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease."/> 
               <FaqSection question="What are the common symptoms" answer="The main symptoms of COVID-19 are:

               fever,
               dry cough,
               tiredness,
               loss of taste or smell.
               Some people experience other flu-like symptoms, including: nasal congestion, conjunctivitis (red eyes), sore throat, headache, muscle or joint pain, skin rash, nausea or vomiting, diarrhoea, chills or dizziness. These symptoms can be managed at home.
               Not everyone who has COVID-19 will have symptoms. You can still pass COVID-19 on even if you don’t have symptoms. That’s why it’s important to follow advice to stop the virus from spreading."/>
               
               <FaqSection question="When do symptoms start to appear?" 
               answer="The average time for symptoms of COVID-19 to develop is five to six days, but it can take up to 14 days for people to show symptoms."/>
               
               
               <FaqSection question="Is there a vaccine for Covid-19" 
               answer="Several COVID-19 vaccines are now being distributed around the world. Check the official advice where you live to find out when the vaccine will be available to you.

               COVID-19 vaccines work by helping your body develop immunity to the virus that causes COVID-19. This means your body will be ready to respond faster to the virus if you are exposed to it, so you’ll be less likely to get seriously ill.
               
               Evidence shows the current vaccines can protect people from getting sick from COVID-19. However, we are still learning more about how effective they are at stopping the virus from being passed on between people. That’s why it’s important to continue to follow the prevention advice, even after having the vaccine."/>
               
               <FaqSection question="Are there long-term effects of COVID-19?" 
               answer="Some people have reported experiencing continued symptoms after having COVID-19, such as fatigue, breathing problems and neurological problems. This includes people with less severe cases of COVID-19, as well as those who have needed hospital care.

               Research is currently underway to better understand how many people experience long-term effects of COVID-19, and the nature of these symptoms."/> 
            </Container>
        </div>

        <div className="cardSection">
            <Container>
                <Row>
                    <Col md="4" xs="12">
                        <CardComponent image="https://i.ibb.co/6X0j7fw/Card1.png" title="Always wear a mask when you're outside"/>
                    </Col>

                    <Col md="4" xs="12">
                    <CardComponent image="https://i.ibb.co/dB3gdxy/Card2.png" title="Keep your hands clean"/>
                    </Col>

                    <Col md="4" xs="12">
                    <CardComponent image="https://i.ibb.co/pf0H39g/Card3.png" title="Strongly maintain social distance"/>
                    </Col>

                    <Col md="4" xs="12">
                    <CardComponent image="https://i.ibb.co/8sCQXF6/Card4.png" title="Avoid social gathering"/>
                    </Col>

                    <Col md="4" xs="12">
                    <CardComponent image="https://i.ibb.co/rQ2djbM/Card5.png" title="Wash unpackaged produce, such as fruit and vegetables"/>
                    </Col>

                    <Col md="4" xs="12">
                    <CardComponent image="https://i.ibb.co/qRNVrQz/Card6.png" title="Do some regular exercise at home"/>
                    </Col>
                        
                    
                </Row>
            </Container>
        </div>

    
        <Container>
            <div className="footer">
                <FooterSection/>
            </div>
        </Container>

        </div>

        
    )
}

export default Header


/* 
    https://i.ibb.co/6X0j7fw/Card1.png
    https://i.ibb.co/dB3gdxy/Card2.png
    https://i.ibb.co/pf0H39g/Card3.png
    https://i.ibb.co/8sCQXF6/Card4.png
    https://i.ibb.co/rQ2djbM/Card5.png
    https://i.ibb.co/qRNVrQz/Card6.png

*/