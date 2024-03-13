// import "./styles.css";
import { Grid, Typography} from "@mui/material";
import {Link} from 'react-router-dom'

 
export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-white py-6">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <a
            href="https://www.commercecourt.ca/"
            target="_blank"
            className="mx-5"
          >
            <img
              src="http://127.0.0.1:5500/media/6844e96a5db04195bf7e3413f8a6c0da/7224648ae2705a8928576c4c71f830e03773da5c-full.png"
              alt="Commerce Court"
            />
          </a>
        </div>
        <div style={{ borderLeft: "1px solid gray", margin: "0 2rem" }}></div>
        <div>
          <Link to="https://www.quadreal.com/" target="_blank" className="mx-5">
          <img
            src="https://the-renovation.azurewebsites.net/media/70ce93a8ac0cb49c280b2c30e95aaa54/quadreal-at-2x-tenth.png"
            alt="Quadreal logo"
            // className="w-32 h-auto"
          />
          </Link>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto " />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="d-flex flex-direction-column text-gray-500 dark:text-gray-400">
            <Typography variant="body2" gutterBottom>
              © 2023 Pricing, specifications and information subject to change
              without notice. E. & O. E.
            </Typography>
            <Typography variant="body2" gutterBottom>
              ©2022 25 King West Commerce Court North
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <Link href="https://www.quadreal.com/legal/" underline="hover">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="https://www.52pick-up.com/" underline="hover">
                Created by 52 Pick-up Inc.
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}