import { CardHeader, Avatar } from "@material-ui/core";

export const StatusUser = ({ status }) => {
  return (
    <CardHeader
      style={{ color: "#A8B2CA" }}
      avatar={
        <div style={{ position: "relative" }}>
          <Avatar
            style={{
              width: "35px",
              height: "35px",
            }}
          >
            <img src="/assets/avatar.png" />
          </Avatar>
          <div
            style={{
              position: "absolute",
              right: "5%",
              bottom: "-5%",
              background: status,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "2px solid #1A1D24",
            }}
          ></div>
        </div>
      }
      title="Jenny Wilson"
      subheader={
        <p style={{ color: "#616776", margin: "0", padding: "0" }}>
          Live Performance
        </p>
      }
    />
  );
};
