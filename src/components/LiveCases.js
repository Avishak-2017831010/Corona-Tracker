import React from 'react'
import '../componentsstyle/LiveCases.css'
import {Card,Container,Table} from 'react-bootstrap'
import { green } from '@material-ui/core/colors'
import { prettyPrintStat } from './utils'

function LiveCases({countries,mapCountries}) {
    let i=1
    return (
        <div class="table">

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Country</th>
      <th>Cases</th>
      <th>Cases/1M</th>
      <th>Deaths</th>
      <th>Deaths/1M</th>       
      <th>Active</th> 
      <th>Critical</th>
      <th>Recovered</th>
      <th>Recovered/1M</th>
      <th>Tests</th>
      <th>Tests/1M</th> 
         
    </tr>
  </thead>
  

        
        {countries.map((country) => (

         <tbody className="tableData">
    <tr>
      <td>{i++}</td>
      <td>{country.country}</td>
      <td style={{color:'#CC1034'}}>{prettyPrintStat(country.cases)}</td>
      <td>{prettyPrintStat(country.casesPerOneMillion)}</td>
      <td style={{color:'#ff002e'}}>{prettyPrintStat(country.deaths)}</td>
      <td>{prettyPrintStat(country.deathsPerOneMillion)}</td>      
      <td style={{color:'#0d5b96'}}>{prettyPrintStat(country.active)}</td>
      <td>{prettyPrintStat(country.critical)}</td>
      <td style={{color:'#06ad17'}}>{prettyPrintStat(country.recovered)}</td>
      <td>{prettyPrintStat(country.recoveredPerOneMillion)}</td>  
      <td>{prettyPrintStat(country.tests)}</td>
      <td>{prettyPrintStat(country.testsPerOneMillion)}</td>
    </tr>
    
  </tbody>
            
            ))}
        </Table>
        </div>
    )
}

export default LiveCases;
