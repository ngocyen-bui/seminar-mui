import { Box, Card, Divider, Paper } from "@mui/material";
import DefaultHeader from "./DefaultHeader";
import BasicList from "./DefaultMenu";


const HEIGHT = 65;
export default function DefaultLayout(){
    return (
      <>
        <Paper variant="outlined" sx={{display: 'flex'}}>
          <BasicList height={HEIGHT}/>
          <div style={{flex: 1}}>
            <DefaultHeader height={HEIGHT}/>
            <Box sx={{fontSize: 100}}>Body </Box>
          </div>
        </Paper>
      </>
    );
}