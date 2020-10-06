import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  List,
  Divider,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItem,
  ListSubheader,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCall from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  logo: {
      height: 25,
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
      paddingTop: 4,
      paddingBottom: 4
  },
  subheader: {
      textTransform: 'uppercase'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.icons}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src='/images/preto.png' alt='logo' className={classes.logo}/>
          <div className={classes.grow} />
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <VideoCall />
          </IconButton>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <Apps />
          </IconButton>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
          
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<HomeIcon/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Início'} />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<Whatshot/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Em alta'} />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<Subscriptions/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Inscrições'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<VideoLibrary/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Biblioteca'} />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<History/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Histórico'} />
            </ListItem>
          </List>
          <Divider />
          <Box p={4}>
            <Typography variant='body2'>
                Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box>
                <Button
                    variant='outlined'
                    color='secondary'
                    startIcon={<AccountCircle/>}
                >Fazer login</Button>
            </Box>
          </Box>
          <Divider />
          <List>
              <ListSubheader className={classes.subheader}>O melhor do Youtube</ListSubheader>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<VideoLibrary/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Biblioteca'} />
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<History/>}</ListItemIcon> 
                <ListItemText classes={{
                    primary: classes.listItemText
                }}primary={'Histórico'} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
