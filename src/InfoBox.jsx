import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URl =
    "https://images.unsplash.com/photo-1550077404-c00d89693129?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URl
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              component={"span"}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              <p>
                <b>Tempeature = </b>
                {info.temp}&deg;C{" "}
                {info.humidity > 80 ? (
                  <WaterDropIcon />
                ) : info.temp > 15 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </p>
              <p>
                <b>Humidity = </b>
                {info.humidity}
              </p>
              <p>
                <b>Minimum Temperature =</b> {info.tempMin}&deg;C
              </p>
              <p>
                <b>Maximum Temperature =</b> {info.tempMax}&deg;C
              </p>
              <p>
                <b>
                  The weather can be described as <i>{info.weather}</i> and
                  feels like {info.feelsLike}&deg;C
                </b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
