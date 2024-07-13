
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    Name:"Titanic",
    Category:"Romance",
    Director:"James",
    Release_year:"1997",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qCzTjHhNqaCUv0xDkDG7yRovNNldbrDXLg&s"
  },
  {
    Name:"Home-Alone",
    Category:"Comedy",
    Director:"Chris-James",
    Release_year:"1990",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopasHWayLYJMaNE3R6UD3wbslDPJfAc6lGQ&s"
  },
 {Name:"Inside-out",
  Category:"Drama",
  Director:"Pete-Docter",
  Release_year:"2015",
  Image:"https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg"
}
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release_year</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell>{row.Category}</TableCell>
              <TableCell>{row.Director}</TableCell>
              <TableCell>{row.Release_year}</TableCell>
              <TableCell><img src={row.Image} alt="" width="100" height="100"></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}