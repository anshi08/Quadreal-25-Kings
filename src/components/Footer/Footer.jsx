// import "./styles.css";
import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import image1 from "../../assets/commerceCourt.png"
import './Footer.css'


export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-white py-6 px-6">
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
              src={image1}
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
        <Grid item xs={12} sm={9}>
          <div className="d-flex flex-direction-column text-gray-500 dark:text-gray-400">
            <p className="bottom-text">
              © 2023 Pricing, specifications and information subject to change
              without notice. E. & O. E.
            </p>
            <p className="bottom-text">
              ©2022 25 King West Commerce Court North
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Link href="https://www.quadreal.com/legal/" underline="hover" className="bottom-navigate">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="https://www.52pick-up.com/" underline="hover" className="bottom-navigate">
                Created by 52 Pick-up Inc.
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}