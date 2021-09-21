import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MemberList = (props) => {
  const { members } = props;
  const columns = ['이름', '아이디', '비밀번호', '이메일'];
  return (
    <>
      {!!members.length && (
        <>
          <h1>&nbsp; * Member List *</h1>
          <TableContainer component={Paper}>
            <Table className="member-table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((column, i) => (
                    <TableCell key={i}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((member, i) => {
                  return (
                    <TableRow key={`member-id-${i}`}>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.id}</TableCell>
                      <TableCell>{member.password}</TableCell>
                      <TableCell>{member.email}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <table>
            <thread>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thread>
            <tbody>
              {members.map((member, i) => {
                return (
                  <tr key={`member-id-${i}`}>
                    <td>{member.name}</td>
                    <td>{member.id}</td>
                    <td>{member.password}</td>
                    <td>{member.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
        </>
      )}
    </>
  );
};

export default MemberList;
