import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import ColorPanel from "./ColorPanel/ColorPanel";
import MetaPanel from "./MetaPanel/MetaPanel";
import Messages from "./Messages/Messages";
import SidePanel from "./SidePanel/SidePanel";
import { connect } from "react-redux";

const App = ({ currentUser, currentChannel }) => (
  <Grid columns="equal" className="app" style={{ backgound: "#eee" }}>
    <ColorPanel />
    <SidePanel
      key={currentChannel && currentChannel.uid}
      currentUser={currentUser}
    />
    <Grid.Column style={{ marginLeft: "320px" }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
      />
    </Grid.Column>
    <Grid.Column>
      <MetaPanel width={4} />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel
});
export default connect(mapStateToProps)(App);
