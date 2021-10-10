import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from '../components/customer/CustomerListResults';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';
import customers from '../__mocks__/customers';
import { useEffect, useState } from 'react';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(async () => {
    try {
      console.log('am i in');
      const res = await fetch('http://localhost:8000/api/drivers/');
      const todoList = await res.json();
      console.log('drivers: ', todoList);
      let processed = [];

      todoList.map((value) => {
        let driver = {
          date: value.date,
          email: value.email,
          id: value.id,
          name: value.name,
          phone: 98765432,
          address: {
            country: 'Singapore',
            state: 'Bedok',
            city: 'Street 41',
            street: '2849 Fulton Street'
          },
          avatarUrl: '/static/images/avatars/avatar_3.png',
          createdAt: 1555016400000
        };
        processed.push(driver);
      });

      setCustomers(processed);
    } catch (e) {
      console.log(e);
    }
  });

  // {
  //   id: uuid(),
  //   address: {
  //     country: 'USA',
  //     state: 'West Virginia',
  //     city: 'Parkersburg',
  //     street: '2849 Fulton Street'
  //   },
  //   avatarUrl: '/static/images/avatars/avatar_3.png',
  //   createdAt: 1555016400000,
  //   email: 'ekaterina.tankova@devias.io',
  //   name: 'Ekaterina Tankova',
  //   phone: '304-428-3097'
  // }

  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
