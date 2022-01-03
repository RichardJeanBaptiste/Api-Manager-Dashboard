//import { useState } from 'react';
import Box from '@mui/material/Box';
import AddQuotes from './AddQuotes';
/*
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FaceIcon from '@mui/icons-material/Face';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import FinancialQuotesGrid from './FinancialQuotesGrid';
*/
/**
 * Create Seperate Components For Each Database
 * Switch Between Components On Click
 * Import Quote Database
 * Display Database with mui/Grid
 * Add Grid Actions
 */


export default function Admin() {

    //let drawerWidth = '200px';

    //const [ CurrentDatabase, setCurrentDatabase ] = useState("Database");

    return (
        <>
            <Box>
                <h1>Admin Route</h1>
                <AddQuotes/>
            </Box>
        </>
    )
}