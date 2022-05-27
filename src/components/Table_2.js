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
import { mailprop } from "./RegisterForm.js";
import { useState, useEffect } from "react";
import { getStepConnectorUtilityClass } from "@mui/material";

var logo;
var url;
var brandname;
var subtitle;

getDoc(doc(db, "Gamescores", "Game_2")).then((docSnap) => {
  if (docSnap.exists()) {
    const scores = docSnap.data();

    url = scores.url;
    console.log(url);
    brandname = scores.brandname;
    console.log(brandname);
    subtitle = scores.subtitle;
    console.log(subtitle);
    logo = scores.logo;
    console.log(logo);
  }
});

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
    "Response required",
    "Sense of urgency",
    "Attackers frequently make the e-mail seem urgent or important to scare users into revealing their personal data. An urgent and seemingly important e-mail attracts more attention and is thus often used by attackers. Always watch out if an e-mail asks you to do something as soon as possible."
  ),
  createData(
    "Dear Customer",
    "Impersonal",
    "A common indicator of a phishing e-mail is the impersonal approach to the victim. Frequently, the attacker doesn't have a lot of personal information about the victim and thus uses a general approach such as: customer, user, etc. NOTE: As of late, phishing e-mails are getting more specific and personal, so a personal approach doesn't automatically equal a legitimate e-mail."
  ),
  createData(
    "Please login to  ...",
    "Asking for personal information",
    "Attackers will often trick users into revealing their personal information by asking them to log in to their accounts. If you are ever asked to log in to your account, always visit the website directly from your browser. Never click the log in button directly in the e-mail. It's less convenient, but much safer!"
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
