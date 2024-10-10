import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Pagination,
  Select,
  Card,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#CFD8DC",
    backgroundColor: "#0046AD",
    console: "#616161",
    // color: "#616161",
    color: "white",
    // fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F3F5F7",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableUser({ rows = [] }) {
  const route = useRouter();
  const defaultRowHeight = 50;
  const rowsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [paginatedRows, setPaginatedRows] = React.useState([]);

  const pageCount = Math.ceil(rows.length / rowsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSelectChange = (event) => {
    setPage(event.target.value);
  };

  React.useEffect(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const newPaginatedRows = rows.slice(startIndex, startIndex + rowsPerPage);
    setPaginatedRows(newPaginatedRows);
  }, [page, rows]);

  const headers = [
    { name: "ชื่อผู้ใช้", align: "" },
    { name: "อีเมล", align: "left" },
    { name: "สิทธิ์", align: "left" },
    { name: "สถานะ", align: "center" },
  ];

  return (
    <Box component={Card} sx={{ borderRadius: "8px", bgcolor: "#F3F5F7" }}>
      <TableContainer
        style={{
          minHeight: defaultRowHeight * 9.5,
          maxHeight: defaultRowHeight * 9.5,
          overflow: "auto",
          borderRadius: "7px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <StyledTableCell key={index} align={header.align}>
                  {header.name}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={headers.length} sx={{ border: "none" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Stack
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 60,
                          marginTop: 10,
                        }}
                      >
                        <SearchOffIcon
                          sx={{ color: "#455A64", fontSize: 40 }}
                        />
                        <Typography
                          sx={{ color: "#455A64", fontWeight: "bold" }}
                        >
                          ไม่พบผลลัพธ์ที่คุณค้นหา
                        </Typography>
                        <Typography sx={{ color: "#455A64" }}>
                          กรุณาลองใช้คำค้นอื่น แล้วลองค้นหาใหม่อีกครั้ง
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, index) => (
                <StyledTableRow
                  key={index}
                  sx={{
                    minHeight: 60,
                    cursor: "pointer",
                    ":hover": { bgcolor: "#EEEEEE" },
                  }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.role}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.status}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          paddingTop: 2,
        }}
      >
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{ textAlign: "left", paddingLeft: 2, paddingBottom: 1 }}
          >
            <Typography variant="caption">
              ทั้งหมด {rows.length} รายการ
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 2,
              paddingBottom: 1,
            }}
          >
            <Typography variant="caption" sx={{ marginRight: 1 }}>
              หน้า
            </Typography>
            <Select
              size="small"
              value={page}
              onChange={handleSelectChange}
              MenuProps={{
                PaperProps: { style: { maxHeight: 48 * 4.5 + 8, width: 250 } },
              }}
            >
              {Array.from({ length: pageCount }, (_, index) => (
                <MenuItem key={index + 1} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
