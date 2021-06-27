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
import "leaflet/dist/leaflet.css"




function Header() {

    const [countries, setCountries] = useState([])
    const [initial,setinitial]=useState('worldwide')
    const [countryInfo,setcountryInfo]=useState({});
    const [tabledata,setTableData]=useState([]);
    const [mapCenter,setmapCenter]=useState({lat:34.80746,lng:-40.4796})
    const [mapZoom,setmapZoom]=useState(3)
    const [MapCountries,setMapCountries]=useState([])
    
    

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

        
            
        <Container>.

        <div className="mainBody">
            <Row>                              
                <Col xs="12" md="4">
                    <InfoBox title="Cases" 
                    cases={countryInfo.todayCases} 
                    total={countryInfo.cases}
                    imagesrc="https://i.ibb.co/sVqDbPV/Preventing-Covid-19-Instagram-Post-7.png"/> 
                </Col>

                <Col xs="12" md="4">
                    <InfoBox title="Deaths" 
                    cases={countryInfo.todayDeaths} 
                    total={countryInfo.deaths}
                    imagesrc="https://i.ibb.co/QM8yDG2/cdc-w9-KEokhaj-Kw-unsplash.jpg"/> 
                </Col>

                <Col xs="12" md="4">
                    <InfoBox title="Recovered" 
                    cases={countryInfo.todayRecovered} 
                    total={countryInfo.recovered}
                    imagesrc="https://i.ibb.co/C82HJ19/martin-sanchez-Q-rw-B5-ECC2-Y-unsplash.jpg"
                     /> 
                </Col>                
            </Row>
        </div>
        </Container>  
        </div>
        </div>







            
        <div className="app_body">
            <Row>

            <Col xs="12" md="2" id="midimage">
                <img src="https://i.ibb.co/wrCvnRz/Untitled-design-3.png"/>
            </Col>
                <Col xs="12" md="4">
                <div className="app_right">                                        
                <LiveCases countries={tabledata}/>                                                                
                </div>
                </Col>

                <Col xs="12" md="4">
                    <CasesByGraph/>
                </Col>

            <Col xs="12" md="2" id="secondMiddleImage">
                <img src="https://i.ibb.co/wh9DNCn/Untitled-design-4.png"/>
            </Col>
            </Row>                                  
        </div>
        
        <Container>
            <Map
            countries={MapCountries}
            center={mapCenter}
            zoom={mapZoom}/>
        </Container>
        

        </div>

        
    )
}

export default Header
