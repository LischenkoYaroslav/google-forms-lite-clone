const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  },
  info: {
    flex: 1,
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: "0.2rem",
  },
  controlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "0.5rem",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.2rem",
  },
};

export default styles;
