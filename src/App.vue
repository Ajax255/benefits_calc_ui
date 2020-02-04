<template>
    

  
     <div id="app">

    <HelloWorld/>
    <CalcTable />
    
   <table style="margin:auto; width:1300px; height: 1200px" bgcolor="black">
                <tr>
                    <td >
                 <table style="width: 98%; height: 98%" bgcolor="#026937" align="center">
    <tr>
        <td>
            <table style="margin:auto; width:94%; height: 94%" bgcolor="#D99132">
                <tr>
                    <td >
                 
                 <table style="margin:auto; width:98%; height: 98%" bgcolor="white">
                <tr algin="right">
                    <td >
                                  <table style=" margin-left: 5px; margin-bottom: 850px;width:18%; height: 10%" bgcolor="pink">
                <tr>
                    <td>
                  <img alt="Vue logo"  align= "left" src="./assets/logoo.jpg" width=350px >
                    </td>                    
                </tr>
            </table> 
                
                    </td>    

                <table style=" margin-left:85px; margin-top: 7px; width:85%; height: 20%" bgcolor="pink">
                  <tr><td>Total Compensation Statement</td></tr>
                  <tr><td align= right >Full-time staff (.75FTE or Greater)</td></tr>
                  <tr><td align= right>Estimate & Illustrative of Approximate Salary</td></tr>
                </table>                 
                

                <table style=" margin-left: -515px; margin-top: 10px;width:85%; height: 40%"  >
                <tr>
                <td>
                   <table style= "width:100%; height: 100%">
                    <tr><th style="color: white;" align= "left" colspan="2" bgcolor= green >Salary</th></tr>
                    <tr> <td align="left">Base Salary</td> <td align="right">$45,000.00</td> </tr>
                    <tr><td align="left">Total Salary</td><td align="right">$45,000.00</td></tr>
                    <tr><td></td></tr>
                     <th style="color: white;" align= "left" colspan="2" bgcolor= #CEA052 >Benefits (WSU paid)</th>
                     <tr><td align="left">Medical-Single(HDHP)</td> <td align="right">$5,568.00</td></tr>
                    <tr><td align="left">Dental-Single</td>
                    <td align="right">$355.00</td></tr>
                    <tr><td align="left">Vision-Single</td> <td align="right">$77.00</td> </tr>
                    <tr><td align="left">Retirement</td><td align="right">$6,300.00</td> </tr>
                    <tr><td align="left">Health Savings Accounts (HSA)</td> <td align="right">$500.00</td></tr>
                    <tr><td align="left">Life Insurance</td><td align="right">$144.00</td></tr>
                    <tr><td align="left">Accidental Death & Dismemberment</td><td align="right">$22.00</td></tr>
                    <tr><td align="left">Long Term Disability</td><td align="right">$108.00</td></tr>
                    <tr><td align="left">Medicare</td><td align="right">$653.00</td></tr>
                    <tr><td align="left">Holidays (10 days)</td><td align="right">$1,731.00</td></tr>
                    <tr><td align="left">Winter Leave (2 days)</td><td align="right">$346</td></tr>
                    <tr><td align="left"><b>Approximate Total Benefits</b></td><td align="right">$15,804.00</td></tr>
                    <tr><td></td></tr>
                    <tr style="color: white;" align= "left" bgcolor= green ><td align="left" ><b>Approximate Total Compensation</b></td>
                    <td align="right">$60,804.00</td></tr>
                    
                    </table>
                    </td>   
                                     
                </tr>
            </table> 
                <table style=" margin-left:-515px; margin-top: 0px; width:180%; height: 38%" bgcolor="lightgrey">
                <tr>
                    <td>
                  
                    </td>      
                                  
                </tr>
                </table>  
                  <table style=" margin-left:28px; margin-top: -830px; width:94%; height: 39%" bgcolor="lightyellow">
                <tr>
                    <td>
                 
                    </td>      
                                  
                </tr>
                </table>  
                </tr>
            </table> 
                 
                    </td>           
                             
                </tr>
            </table> 
        </td>                    
    </tr>
</table>
                    </td>                    
                </tr>
            </table>
 
     </div>
  
</template>
        <style>
    
    
        </style>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CalcTable from './components/CalcTable.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CalcTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
