import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect, useState } from 'react';

const avatarArray = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10'
];
const LatestOrders = (props) => {
  const [trips, setTrips] = useState([]);

  useEffect(async () => {
    try {
      console.log('am i in');
      const res = await fetch('http://localhost:8000/api/trips/');
      const offences = await fetch('http://localhost:8000/api/offences/');
      const driver = await fetch('http://localhost:8000/api/drivers/');
      const todoList = await res.json();
      const offencesList = await offences.json();
      const driversList = await driver.json();
      const driverId = [];
      const driverName = [];
      driversList.map((v) => {
        driverId.push(v.id);
        driverName.push(v.name);
      });
      const accidents = [];
      offencesList.map((val) => accidents.push(val.trip));
      console.log('trips: ', todoList);
      let processed = [];

      todoList.map((value, index) => {
        let index2 = driverId.indexOf(value.driver);
        let driver = {
          ref: '1900 - 231231 - ' + index,
          dateStart: value.dateStart,
          dateEnd: value.dateEnd,
          id: value.id,
          title: value.title,
          driver: driverName[index2],
          status: accidents.includes(value.id) ? 'Violation' : 'Safe'
        };
        processed.push(driver);
      });

      setTrips(processed);
    } catch (e) {
      console.log(e);
    }
  });
  return (
    <Card {...props}>
      <CardHeader title="Latest Trips" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Ref</TableCell>
                <TableCell>Trip name</TableCell>
                <TableCell>Driver</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date Start
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date End
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trips.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.ref}</TableCell>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>{order.driver}</TableCell>
                  <TableCell>{order.dateStart}</TableCell>
                  <TableCell>{order.dateEnd}</TableCell>
                  <TableCell>
                    <Chip
                      color={order.status === 'Violation' ? 'error' : 'success'}
                      label={order.status}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestOrders;
