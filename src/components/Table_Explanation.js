import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logoo from "../components/images/LinkedIn_fake.png";
import { db } from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";


function createData(indicator, category, explanation) {

  return {
    indicator,
    category,
    explanation,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.indicator}
        </TableCell>
        <TableCell align="right">{row.category}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Explanation
              </Typography>
              <TableCell>{row.explanation}</TableCell>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "https://linkedin-galileo-142fd5.netlify.app/#sales.co.jp",
    "URL",
    "The official LinkedIn login URL is something like this: --- https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin. --- Indicators like 'galileo' and 'netlify.app' show that this is not the official URL. It is important to always check the URL of a website before entering your personal information."
  ),
  createData(<img src={logoo} className="logo_explain" />, "Lay-out","In this case the wrong LinkedIn logo is being used. It's designed to look a lot like the original one, so that people won't notice it. Always pay attention to the lay-out of the website: logos, colors, etc. can be a clear indication of a malicious website."
  ),
  createData("Linkedin", "Spelling mistake", "The correct spelling: LinkedIn -- Spelling mistakes are a common indicator of phishing attempts. Always pay attention to capital letters and phrasing. Legitimate websites/e-mails rarely contain spelling mistakes, so always pay attention when you find one."
  ),
];

export default function Table_Explanation() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Indicator</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.indicator} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
