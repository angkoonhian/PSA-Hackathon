import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { v4 as uuid } from 'uuid';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Grid
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import { withSnackbar, useSnackbar } from 'notistack';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = () => {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = (key) => (
    <Button
      onClick={() => {
        closeSnackbar(key);
      }}
      variant="text"
      color="error"
    >
      X
    </Button>
  );

  const handleClick = () => {
    enqueueSnackbar(
      <Alert severity="error" sx={{ width: '100%' }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar src={placeHolderCustomer.avatarUrl} sx={{ mr: 2 }}>
            {getInitials(placeHolderCustomer.name)}
          </Avatar>
          <Grid container direction="column">
            <Typography variant="body1" color="common.white">
              {placeHolderCustomer.name} has been detected using his phone while
              driving Vehicle SMQ9526Y
            </Typography>
            <Typography variant="body2" color="common.white">
              Contact: {placeHolderCustomer.phone}
            </Typography>
          </Grid>
        </Box>
      </Alert>,
      {
        persist: true,
        action
      }
    );
  };

  const handleClose = (key) => {
    closeSnackbar(key);
  };

  const placeHolderCustomer = {
    address: {
      country: 'USA',
      state: 'California',
      city: 'Bakerfield',
      street: '317 Angus Road'
    },
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1554670800000,
    email: 'adam.denisov@devias.io',
    name: 'Adam Denisov',
    phone: '858-602-3409'
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={12000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Avatar src={placeHolderCustomer.avatarUrl} sx={{ mr: 2 }}>
              {getInitials(placeHolderCustomer.name)}
            </Avatar>
            <Grid container direction="column">
              <Typography variant="body1" color="common.white">
                {placeHolderCustomer.name} has been detected using his phone
                while driving Vehicle SMQ9526Y
              </Typography>
              <Typography variant="body2" color="common.white">
                Contact: {placeHolderCustomer.phone}
              </Typography>
            </Grid>
          </Box>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default withSnackbar(CustomizedSnackbars);
