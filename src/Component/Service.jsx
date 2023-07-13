import React, { useState } from 'react';
import { TextField, Table, TableHead, TableRow, TableCell, TableBody, Menu, MenuItem, Typography, FormControlLabel, Checkbox  } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import TableContainer from '@mui/material/TableContainer';
import { Link } from 'react-router-dom';





const Service = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [filterDepartments, setFilterDepartments] = useState([]);
  const [filterCities, setFilterCities] = useState([]);
  
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorElSort(null);
  };

  
  let handleSortOptionSelect = (option) => {
    setSortOption(option);
    setAnchorElSort(null);
  };
 

  const handleFilterClick = (event) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorElFilter(null);
  };

  const handleDepartmentCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFilterDepartments([...filterDepartments, value]);
    } else {
      setFilterDepartments(filterDepartments.filter((dept) => dept !== value));
    }
  };

  const handleCityCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFilterCities([...filterCities, value]);
    } else {
      setFilterCities(filterCities.filter((city) => city !== value));
    }
  };

  const getServiceRequests = () => {
    
    const serviceRequests = [
      {
        id:1,
        hospital: 'Apolo Hospital',
        asset: 'PFT USB',
        city: 'Banglore',
        department: 'ECG',
        issue: 'Issue 2 rangnath MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKKkkmmsdksmamcn nsananajdnxc njashbdjabxcxncjn nbcahbkacnad',
        date: '2023/07/01',
        image:[
          'https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg','https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=', 'https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg'
        ]
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
    
    let filteredData = [...serviceRequests];

    if (filterDepartments.length > 0) {
      filteredData = filteredData.filter((request) => filterDepartments.includes(request.department));
    }

    if (filterCities.length > 0) {
      filteredData = filteredData.filter((request) => filterCities.includes(request.city));
    }

    
    if (sortOption === 'newestToOldest') {
      filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'oldestToNewest') {
      filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === 'aToZ') {
      filteredData.sort((a, b) => a.hospital.localeCompare(b.hospital));
    } else if (sortOption === 'zToA') {
      filteredData.sort((a, b) => b.hospital.localeCompare(a.hospital));
    }

    return filteredData;
  };

  const filteredServiceRequests = getServiceRequests().filter((request) =>
    request.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

 

  
    return ( 
        <Box minWidth='100vw' background='#FAF5EE'>
         <Box marginLeft={{xl:'250px', lg:'90px'}}>
         <Box display='flex' >
                <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D',marginTop:'35px', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }} >Service Requests</Typography>
                <Box display='flex' marginLeft={{xl:'31%', lg:'34%', md:'28%', sm:'20%', xs:'10%'}} marginTop={{xl:'10px', lg:'10px', md:'10px', sm:'30px', xs:'30px'}}>
                <Box>
                <TextField value={searchQuery} onChange={handleSearchChange} InputProps={{startAdornment: (<InputAdornment><IconButton><SearchIcon /></IconButton></InputAdornment>)}} placeholder='Search' sx={{  "& fieldset": { borderRadius:'36px',border: "1px solid black", height:'56px', width:{xl:'247px', lg:'247px', md:'247px', sm:'200px', xs:'180px'} } }}></TextField>
                </Box>
                <Box  display='flex' marginTop='-10px'>
                <IconButton onClick={handleSortClick} type='button'><SortIcon sx={{width:'60px', height:'40px', color:'#FF731D'}}></SortIcon></IconButton>
                <Menu
                    anchorEl={anchorElSort}
                    open={Boolean(anchorElSort)}
                    onClose={handleSortClose}
                >
                   <MenuItem onClick={() => handleSortOptionSelect('newestToOldest')} sx={{color: sortOption === 'newestToOldest' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Newest to Oldest</MenuItem>
                   <MenuItem onClick={() => handleSortOptionSelect('oldestToNewest')} sx={{color: sortOption === 'oldestToNewest' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Oldest to Newest</MenuItem>
                   <MenuItem onClick={() => handleSortOptionSelect('aToZ')} sx={{color: sortOption === 'aToZ' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>A-Z</MenuItem>
                   <MenuItem onClick={() => handleSortOptionSelect('zToA')} sx={{color: sortOption === 'zToA' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Z-A</MenuItem>
                </Menu>
              <IconButton onClick={handleFilterClick} ><FilterAltOutlinedIcon  sx={{width:'60px', height:'40px', color:'#FF731D',marginLeft:'-20px' }}></FilterAltOutlinedIcon></IconButton>
                <Menu
                    anchorEl={anchorElFilter}
                    open={Boolean(anchorElFilter)}
                    onClose={handleFilterClose}
                >
                  <Typography sx={{color:'#1746A2', fontSize:'18px', fontWeight:'500', marginLeft:'18px'}}>Department</Typography>
                  <MenuItem>
                    <FormControlLabel
                     control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterDepartments.includes('Radiology')} onChange={handleDepartmentCheckboxChange} value="Radiology" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Radiology</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterDepartments.includes('ECG')} onChange={handleDepartmentCheckboxChange} value="ECG" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>ECG</Typography>}
                    />
                  <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterDepartments.includes('ICU')} onChange={handleDepartmentCheckboxChange} value="ICU" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>ICU</Typography>}
                    />
                 </MenuItem>
                 <Typography sx={{color:'#1746A2', fontSize:'18px', fontWeight:'500', marginLeft:'18px'}}>City</Typography>
                  <MenuItem>
                 <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterCities.includes('Banglore')} onChange={handleCityCheckboxChange} value="Banglore" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Banglore</Typography>}
                    />
                  <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterCities.includes('Shivamogga')} onChange={handleCityCheckboxChange} value="Shivamogga" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Shivamogga</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterCities.includes('Davangere')} onChange={handleCityCheckboxChange} value="Davangere" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Davangere</Typography>}
                    />
                  </MenuItem>
                </Menu>
                </Box>
                </Box>
            </Box>
            <Box maxWidth='1030px' height='937px' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'0px', lg:'0px', md:'25px'}}} >
                <TableContainer sx={{ minWidth:{xl:1030, lg:1030, md:850, sm:500, xs:400}, height:'937px',borderRadius:'15px', }} aria-label="simple table">
                <Table>
                    <TableHead width='1030px' height='50px'>
                    <TableRow sx={{background:'#EFF5FE' }}>
                        <Box width='1030px' display="flex">
                        <TableCell align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'250px',height:'30px'}} >Hospital Name</TableCell>
                        <TableCell align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'180px',height:'30px'}} >Asset Name</TableCell>
                        <TableCell align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'120px',height:'30px'}} >City</TableCell>
                        <TableCell align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'120px',height:'30px'}} >Department</TableCell>
                        <TableCell align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'100px',height:'30px'}} >Issue</TableCell>
                        <TableCell align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'120px',height:'30px'}} >Date</TableCell>
                        </Box>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredServiceRequests.map((request, index) => (
                        <Box width='1030px'>
                        <TableRow display="flex" key={index}>
                        <TableCell align="left" sx={{fontSize:'18px', fontWeight:'400',color:'#212427', width:'250px',height:'35px',borderColor:'black'}} component="th"><Link  to={`/issuepage/${request.hospital}`} style={{color:'#1746A2', textDecoration:'none', borderBottom:'2px solid #1746A2'}}>{request.hospital}</Link></TableCell>
                        <TableCell align="left" sx={{fontSize:'18px', fontWeight:'400', color:'#212427', width:'180px',height:'35px',borderColor:'black'}} >{request.asset}</TableCell>
                        <TableCell align="left" sx={{fontSize:'18px', fontWeight:'400', color:'#212427', width:'120px',height:'35px',borderColor:'black'}} >{request.city}</TableCell>
                        <TableCell align="left" sx={{fontSize:'18px', fontWeight:'400', color:'#212427', width:'120px',height:'35px',borderColor:'black'}}>{request.department}</TableCell>
                        <TableCell align="left" sx={{fontSize:'18px', fontWeight:'400', color:'#212427', width:'100px',height:'35px',borderColor:'black',overflow: 'hidden', textOverflow: "ellipsis", display: "-webkit-box",  "-webkit-line-clamp": '2', "-webkit-box-orient": "vertical",}}>{request.issue}</TableCell>
                        <TableCell align="left" sx={{fontSize:'18px', fontWeight:'400', color:'#212427', width:'120px',height:'35px',borderColor:'black'}}>{request.date}</TableCell>
                        </TableRow>
                        </Box>
                    ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
         </Box>
        </Box>
     );
}
 
export default Service;