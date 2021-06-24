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




function Header() {

    const [countries, setCountries] = useState([])
    const [initial,setinitial]=useState('worldwide')
    const [countryInfo,setcountryInfo]=useState({});
    const [tabledata,setTableData]=useState([]);
    
    

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
         

        // console.log(countrycode)

        const url=countrycode==="worldwide" ? "https://disease.sh/v3/covid-19/all" : 
        `https://disease.sh/v3/covid-19/countries/${countrycode}`

        await fetch(url)
        .then(res=>res.json())
        .then(data=>{
             setinitial(countrycode)
             setcountryInfo(data)
            
        }).catch(err=>console.log(err))

        console.log(countryInfo)
    }

    return (

        

        <div className="AppClass">
        
        <div className="topBody">

        <div className="header">
        <Row>

        <Col id="logoSection" md={4}>
        <NavbarCom/>
        </Col>

        <Col id="dropdown" md={{ span: 4, offset: 4 }}>

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
        </div>

        <Intro/>


        <Card id="card" style={{ border:'0 solid transparent' }}>
        
            


            <Card.ImgOverlay>
            <Card.Body className="cardBody">

            


            
            <Col xs="12">
            <div  className="app_left">                  
                    <div className="app_infobox">
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
            </div>
            </Col>     
            </Card.Body>
            </Card.ImgOverlay>


        </Card>
  

        </div>






            

        <div className="container-fluid app_body">
         <Row>
           

         <Col xs="12" md="3">
         <div className="app_right">                                        
         <LiveCases countries={tabledata}/>
         <CasesByGraph/>                                                                 
         </div>
         </Col>
         </Row>

            
            
            

                       
                  

         

        </div> 
        </div>

        
    )
}

export default Header
