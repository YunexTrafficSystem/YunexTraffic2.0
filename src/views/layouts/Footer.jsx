import { Box, Container, Grid, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box 
        sx={{ backgroundColor: 'black',position:'absolute', bottom: 0, width:'100%', zIndex:1, height:'250'}} >
            <Container >
                <Grid container padding='3%' >

                    <Grid item sm={3} xs={12}>
                        <Typography variant='body2' align='center' color='white'>
                            Compliace
                        </Typography> 
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Typography variant='body2' align='center' color='white'>
                            For Suppliers
                        </Typography>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Typography variant='body2' align='center' color='white'>
                            Data Privacy & Cookies
                        </Typography>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Typography variant='body2' align='center' color='white'>
                            Impripmit
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}