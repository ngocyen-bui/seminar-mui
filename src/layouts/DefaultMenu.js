import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgMuiLogo from '../icons/SVGMuiIcon';
import { Divider } from '@mui/material';
import { listItemMenu } from '../common/constant';

export default function BasicList({height}) {
  return (
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <nav aria-label="main mailbox folders">
        <Box sx={{display: 'flex', padding: '11px 0 11px 16px', height: height, alignItems: 'center'}}>
            <SvgMuiLogo style={{width: 30}}/> 
            <Divider/> 
        </Box>
        <Divider/>
        <List>
          {listItemMenu.map(e=> 
            (
              <ListItem key={e.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} />
              </ListItemButton>
            </ListItem>
            ))}
        </List>
      </nav>
    </Box>
  );
}
