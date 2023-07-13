import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

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
];

const Single = () => {
    const { id} = useParams();
    const selectedImage = serviceRequests[0].image[id];
    return ( 
        <Box> 
            <img src={selectedImage} alt='' key={id} style={{width:'100vw', height:'40vw', marginTop:'50px'}} />
        </Box>
     );
}
 
export default Single;