import React from 'react';
import moment from 'moment';
import { random } from 'lodash';
//  use react-table version 6.10.3
// implement his css in this version only
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { useHistory } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';

import BookJson from '../../constain/booksJson';

const BooksDeteils = (props) => {
  // use useHistory() for changing url
  let history = useHistory();

  // Create columns for Table in react-table
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      sortable: true,
      filterable: false,
      style: { textAlign: 'left' },
    },
    {
      Header: 'Website',
      accessor: 'website',
      sortable: true,
      filterable: false,
    },
    {
      Header: 'Author',
      accessor: 'author',
      sortable: true,
      filterable: false,
    },
    {
      Header: 'Published',
      accessor: 'published',
      sortable: true,
      filterable: false,
      // use Cell to modify some value in perticular columns
      Cell: ({ row }) => moment(row._original.published).format('DD-MM-YYYY'),
    },
    {
      Header: 'Pages',
      accessor: 'pages',
      sortable: true,
      filterable: false,
    },
    {
      Header: 'Price',
      sortable: false,
      filterable: false,
      // use Cell to modify some value in perticular columns.
      // use random component from lodash  for generate random value for price.
      Cell: ({ row }) => `${random(250, 500)} Rs`,
    },
  ];
  return (
    //  Paper is to implement dark/Light mode
    <Paper
      style={{
        height: '100%',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '20px',
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push('/home')}
        >
          Back
        </Button>
      </div>
      <ReactTable
        noDataText="No Books Available"
        defaultPageSize={10}
        data={BookJson}
        columns={columns}
      />
    </Paper>
  );
};

export default BooksDeteils;
