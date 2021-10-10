import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from '../components/account copy/AccountProfile';
import AccountProfileDetails from '../components/account copy/AccountProfileDetails';

const Driver = () => (
  <>
    <Helmet>
      <title>Account | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Driver;
