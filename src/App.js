import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MaterialTable from 'material-table'

function App() {
  const columns = [
    { title: "Name", field: "name", align: "centre" },
    { title: "Username", field: "username", align: "centre", sorting: false },
    { title: "Email", field: "email", align: "centre", sorting: false },
    { title: "Phone", field: "phone", align: "centre", sorting: false },
    { title: "Website", field: "website", align: "centre", sorting: false },
  ]
  const [tabledata, settabledata] = useState([
    { name: "Satyam", username: "satyam2334", email: "satyam95611@gmail.com", phone: "9561127729", website: "www.xyz.com" },
    { name: "XYZ", username: "XYZ1234", email: "xyz@", phone: "1234567890", website: "www.xyz.com" }
  ])
  return (
    <div style={{backgroundColor:'lightblue'}}>
      <h1 style={{ textAlign: 'center',textDecoration:'underline',fontWeight:'bold' }}>Material Table</h1>
      <MaterialTable style={{backgroundColor:'lightpink'}} columns={columns} data={tabledata} title="User Details :"
        editable={{

          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            settabledata([...tabledata, newRow])
            setTimeout(() => resolve(), 500)
          }),

          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

            setTimeout(() => resolve(), 500)

            const updateData = [...tabledata];
            const index = oldRow.tableData.id;
            updateData[index] = newRow;
            settabledata([...updateData]);
          }),

          onRowDelete: oldRow =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...tabledata];
                const index = oldRow.tableData.id;
                dataDelete.splice(index, 1);
                settabledata([...dataDelete]);

                resolve();
              }, 1000);
            })

        }}
        options={{
          actionsColumnIndex: -1,
          sorting: true,

        }}

      />
    </div>
  );
}

export default App;
