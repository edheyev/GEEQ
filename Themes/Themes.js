const palette = {
  darkBlue: "#323B57",
  midBlue: "#2B4A9A",
  lightBlue: "#009FE3",
  green: "#A6D1A1",
  red: "#E6332A",
  black: "#0B0B0B",
  grey: "#676766",
  yellow: "#F2BE2D",
  transparent: "rgba(0,0,0,0)",
};

export const defaultTheme = {
  dark: false,
  colors: {
    primary: palette.yellow,
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    textPrimary: palette.yellow,
    textSecondary: palette.lightBlue,
    border: palette.gray,
    notification: "rgb(255, 69, 58)",
  },
  header: {
    fontSize: 30,
    color: palette.yellow,
    textAlign: "center",
    padding: 10,
  },
  header2: {
    fontSize: 25,
    color: palette.lightBlue,
    textAlign: "left",
    padding: 15,
  },
  header3: {
    fontSize: 20,
    color: palette.grey,
    textAlign: "left",
    fontWeight: "bold",
  },
  header4: { fontSize: 22, color: palette.green, textAlign: "left" },
  header5: { fontSize: 18, color: palette.grey, textAlign: "left" },

  fListText: {
    fontSize: 20,
    color: palette.green,
    textAlign: "left",
    paddingLeft: 20,
  },
  fListText2: { fontSize: 18, color: palette.grey, textAlign: "right" },
  fListCard: { fontSize: 15, color: palette.grey, textAlign: "left" },
  fListArea: {
    backgroundColor: palette.midBlue,
    margin: 1,
    borderRadius: 5,
  },
  fListCard: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    color: palette.midBlue,
    acceptColor: palette.lightBlue,
    declineColor: palette.red,
  },
  logo: {
    marginTop: 100,
    flex: 2,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  container: {
    backgroundColor: palette.darkBlue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  scrollContainer: {
    backgroundColor: palette.darkBlue,
    flexDirection: "column",
    justifyContent: "space_between",
    padding: 5,
  },
  homeContainer: {
    backgroundColor: palette.darkBlue,
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    padding: 5,
  },
  inputContainer: {
    width: "70%",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  loginInput: {
    backgroundColor: palette.yellow,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 200,
  },
  buttonContainer: {
    color: palette.midBlue,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 4,
  },
  inviteCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    color: palette.midBlue,
    justifyContent: "space-around",
    alignItems: "center",

    padding: 10,
  },
  buttonContainerReset: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  button: {
    backgroundColor: palette.transparent,
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: palette.transparent,
    marginTop: 5,
    borderColor: palette.lightBlue,
    borderWidth: 2,
  },
  buttonText: {
    color: palette.yellow,
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: palette.midBlue,
    fontWeight: "700",
    fontSize: 16,
  },
};