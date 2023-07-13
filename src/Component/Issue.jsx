import '../Styles/Issue.css'
import { Box } from '@mui/system';
import {  Typography } from '@mui/material';
import {useParams, Link} from 'react-router-dom'


const serviceRequests = [
    {
        id:1,
        hospital: 'Apolo Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2 MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKKkkmmsdksmamcn nsananajdnxc njashbdjabxcxncjn nbcahbkacnad',
        date: '2023/07/01',
        image:[ 'https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg' , 'https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=', 'https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg']    
      },
      {
        id:2,
        hospital: 'Megan Hospital',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 2 msdddfdfssasd fdsfdsvcdc',
        date: '2023/07/02',
      },
      {
        id:3,
        hospital: 'KIMS Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 3 fdfssasd fdsfdsvcdc hhhdnnadkjdj',
        date: '2023/07/03',
      },
      {
        id:4,
        hospital: 'Narayana Hrudayalaya',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 4',
        date: '2023/07/04',
      },
      {
        id:5,
        hospital: 'Subbhaiah Hospital',
        asset: 'PFT USB',
        city: 'Shivmogga',
        department: 'ECG',
        issue: 'Issue 5',
        date: '2023/07/05',
      },
      {
        id:6,
        hospital: 'SS Hospital',
        asset: 'PFT USB',
        city: 'Davangere',
        department: 'Radiology',
        issue: 'Issue 3',
        date: '2023/07/06',
      },
      {
        id:7,
        hospital: 'MAX Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2',
        date: '2023/07/02',
      },
      {
        id:1,
        hospital: 'Apolo Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2 MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKK',
        date: '2023/07/01',
      },
      {
        id:2,
        hospital: 'Megan Hospital',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 2 msdddfdfssasd fdsfdsvcdc',
        date: '2023/07/02',
      },
      {
        id:3,
        hospital: 'KIMS Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 3 fdfssasd fdsfdsvcdc hhhdnnadkjdj',
        date: '2023/07/03',
      },
      {
        id:4,
        hospital: 'Narayana Hrudayalaya',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 4',
        date: '2023/07/04',
      },
      {
        id:5,
        hospital: 'Subbhaiah Hospital',
        asset: 'PFT USB',
        city: 'Shivmogga',
        department: 'ECG',
        issue: 'Issue 5',
        date: '2023/07/05',
      },
      {
        id:6,
        hospital: 'SS Hospital',
        asset: 'PFT USB',
        city: 'Davangere',
        department: 'Radiology',
        issue: 'Issue 3',
        date: '2023/07/06',
      },
      {
        id:7,
        hospital: 'MAX Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2',
        date: '2023/07/02',
      },
      {
        id:1,
        hospital: 'Apolo Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2 MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKK',
        date: '2023/07/01',
      },
      {
        id:2,
        hospital: 'Megan Hospital',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 2 msdddfdfssasd fdsfdsvcdc',
        date: '2023/07/02',
      },
      {
        id:3,
        hospital: 'KIMS Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 3 fdfssasd fdsfdsvcdc hhhdnnadkjdj',
        date: '2023/07/03',
      },
      {
        id:4,
        hospital: 'Narayana Hrudayalaya',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 4',
        date: '2023/07/04',
      },
      {
        id:5,
        hospital: 'Subbhaiah Hospital',
        asset: 'PFT USB',
        city: 'Shivmogga',
        department: 'ECG',
        issue: 'Issue 5',
        date: '2023/07/05',
      },
      {
        id:6,
        hospital: 'SS Hospital',
        asset: 'PFT USB',
        city: 'Davangere',
        department: 'Radiology',
        issue: 'Issue 3',
        date: '2023/07/06',
      },
      {
        id:7,
        hospital: 'MAX Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2',
        date: '2023/07/02',
      },
      {
        id:1,
        hospital: 'Apolo Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2 MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKK',
        date: '2023/07/01',
      },
      {
        id:2,
        hospital: 'Megan Hospital',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 2 msdddfdfssasd fdsfdsvcdc',
        date: '2023/07/02',
      },
      {
        id:3,
        hospital: 'KIMS Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 3 fdfssasd fdsfdsvcdc hhhdnnadkjdj',
        date: '2023/07/03',
      },
      {
        id:4,
        hospital: 'Narayana Hrudayalaya',
        asset: 'PFT USB',
        city: 'Shivamogga',
        department: 'ICU',
        issue: 'Issue 4',
        date: '2023/07/04',
      },
      {
        id:5,
        hospital: 'Subbhaiah Hospital',
        asset: 'PFT USB',
        city: 'Shivmogga',
        department: 'ECG',
        issue: 'Issue 5',
        date: '2023/07/05',
      },
      {
        id:6,
        hospital: 'SS Hospital',
        asset: 'PFT USB',
        city: 'Davangere',
        department: 'Radiology',
        issue: 'Issue 3',
        date: '2023/07/06',
      },
      {
        id:7,
        hospital: 'MAX Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2',
        date: '2023/07/02',
      },
];

const Issue = () => {
    const {hospital} = useParams();
    const selectedHospital = serviceRequests.find(item => item.hospital === hospital);

    return ( 
        <Box width='100%' minHeight='100vh' backgroundColor='#FAF5EE'>
         <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D', marginLeft:{xl:'250px', lg:'85px', md:'45px', sm:'50px', xs:'40px'}, width:{xl:'220px', lg:'220px', md:'220px', sm:'200px', xs:'200px'} }}>Service Request</Typography>
         <Box width={{xl:'1030px', lg:'1030px', md:'820px', sm:'500px', xs:'400px'}} minHeight='100%' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px',background:'#FFFFFF'}, marginLeft:{xl:'250px', lg:'80px', md:'40px', sm:'65px', xs:'38px'}}}>
         <Box sx={{padding:'50px', marginLeft:{xl:'80px',lg:'85px', md:'-10px',sm:'-30px', xs:''}, marginTop:'10px', borderRadius:'15px', background:'#FFFFFF' ,width:{xl:'800px', lg:'800px', md:'600px', sm:'400px'}}}>
         <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block'}} >
         <Box display='flex'>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:{xl:'270px', lg:'270px', md:'270px',sm:'320px',},height:'30px'}}>Hospital Name:</Typography>
         <Typography sx={{fontSize:{xl:'20px', lg:'20px',md:'20px',sm:'20px',xs:'20px'}, fontWeight:'500', color:'#212427',width:{xl:'300px', lg:'300px', md:'300px',sm:'300px', xs:'200px'},height:'30px',marginLeft:{xl:'-100px', lg:'-100px', md:'-100px', sm:'-100px',xs:'50px'} ,}}>{hospital}</Typography>
         </Box>
         <Box display='flex' marginTop={{xl:'0px', lg:'0px', md:'0px', sm:'0px', xs:'30px'}}>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'150px',height:'30px',}}>Department:</Typography>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#212427',width:'150px',height:'30px',marginLeft:{xl:'2px', lg:'2px', md:'2px', sm:'8px', xs:'17px'} }}>{selectedHospital.department}</Typography>
         </Box>
         </Box>
         <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block'}} marginTop={{xl:'20px', lg:'20px', md:'20px',sm:'10px'}}>
         <Box display='flex'>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'170px',height:'30px'}}>Asset Name:</Typography>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#212427',width:'300px',height:'30px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'18px', xs:'75px'} }}>{selectedHospital.asset}</Typography>
         </Box>
         <Box display='flex' marginTop={{xl:'0px', lg:'0px', md:'0px', sm:'0px', xs:'30px'}}>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'100px',height:'30px',}}>Date:</Typography>
         <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#212427',width:'100px',height:'30px',marginLeft:{xl:'50px',lg:'50px',md:'50px', sm:'55px', xs:'55px'}}}>{selectedHospital.date}</Typography>
         </Box>
         </Box>
         <Box>
            <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block'}} marginTop={{xl:'20px', lg:'20px', md:'20px',sm:'10px'}}>
            <Box display='flex'  marginLeft={{xl:'470px',lg:'470px', md:'470px'}}>
            <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'100px',height:'30px',}}>City:</Typography>
            <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#212427',width:'150px',height:'30px',marginLeft:{xl:'50px',lg:'50px',md:'50px', sm:'55px', xs:'55px'} }}>{selectedHospital.city}</Typography>
            </Box>
            </Box>
            <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'200px',height:'30px'}}>Issue:</Typography>
           <Box sx={{width:{xl:'750px',lg:'750px',md:'750px', sm:'450px', xs:'320px'},height:'150px',marginTop:'20px',border: "2px solid #212427",}}>
           <Typography sx={{fontWeight:'400', fontSize:{xl:'18px', lg:'18px', md:'18px', sm:'17px',xs:'15px'}, color:'#212427'}} >{selectedHospital.issue}</Typography>
           </Box>
         </Box>
         <Box >
         {selectedHospital.image && selectedHospital.image.length > 0 && (
            <Box>
            <Box>
            <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'100px',height:'30px'}}>Photo:</Typography>
            </Box>
            <Box display='flex' gap='2rem'>
            {selectedHospital.image.map((image, id) => (
            <Link to={`/image/${id}`} key={id}><img   src={image} alt='' style={{maxWidth:'15vw', maxHeight:'30vw', border:'none'}}/></Link>
            ))}
            </Box>
            </Box>
            )}
         </Box>
         </Box>
         </Box>
        </Box>
     );
}
 
export default Issue;