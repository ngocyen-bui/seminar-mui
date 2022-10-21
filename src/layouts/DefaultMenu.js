import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SvgMuiLogo from '../icons/SVGMuiIcon';
import { Divider } from '@mui/material';

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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
