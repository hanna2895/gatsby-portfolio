import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { css } from 'react-emotion';

const styles = {
    drawer: {
        backgroundColor: 'transparent',
        padding: '5vh',
        fontFamily: 'inherit',
    }
}


class SwipeableTemporaryDrawer extends React.Component {
    state = {
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        })
    };

    render() {
        const { classes } = this.props; 

        const sideList = (
            <div>
                <List className={css`
                    width: 20vw;
                    font-family: inherit;
                    @media (max-width: 415px) {
                        width: 34vw;
                    }
                `}>
                    <Link to={`/about/`} style={{ textDecoration: 'none', marginRight: '0', fontFamily: 'inherit'}}>
                        <ListItem button key={'about'} style={{ fontFamily: 'inherit' }}>
                            <ListItemText primary={"About"} style={{ fontFamily: 'inherit' }}/>
                        </ListItem>
                    </Link>
                    <Link to={`/blog/`} style={{ textDecoration: 'none', marginRight: '0'}}>
                        <ListItem button key={'blog'}>
                            <ListItemText primary={"Blog"}/>
                        </ListItem>
                    </Link>
                    <Link to={`/portfolio/`} style={{ textDecoration: 'none', marginRight: '0'}}>
                        <ListItem button key={"portfolio"}>
                            <ListItemText primary={"Portfolio"}/>
                        </ListItem>
                    </Link>
                    <Link to={`/skills/`} style={{ textDecoration: 'none', marginRight: '0'}}>
                        <ListItem button key={'skills'}>
                            <ListItemText primary={"Skills"}/>
                        </ListItem>
                    </Link>
                    <Link to={`/contact/`} style={{ textDecoration: 'none', marginRight: '0'}}>
                        <ListItem button key={"hire"}>
                            <ListItemText primary={"Hire"}/>
                        </ListItem>
                    </Link>
                </List>
            </div>
        )

        return (
            <div>
                <MenuIcon onClick={this.toggleDrawer('right', true)}/>
                <SwipeableDrawer 
                    anchor="right"
                    disableBackdropTransition={true}
                    open={this.state.right}
                    onClose={this.toggleDrawer('right', false)}
                    onOpen={this.toggleDrawer('right', true)}
                    BackdropProps={{ classes: {
                        root: classes.drawer
                    }
                    }}
                    onBackdropClick={this.toggleDrawer('right', false)}
                >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('right', false)}
                            onKeyDown={this.toggleDrawer('right', false)}
                        >
                            {sideList}
                        </div>
                    </SwipeableDrawer>
            </div>
        )
    }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);