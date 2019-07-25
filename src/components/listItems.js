import React from 'react';
import {NavLink} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Dashboard from './Dashboard'



export const mainListItems = (

  <div>

    <ListItem button>

      <ListItemIcon>

        <DashboardIcon />

      </ListItemIcon>
      <NavLink to="/Dashboard">
      <ListItemText primary="Dashboard" />
      </NavLink>
    </ListItem>

    <ListItem button component={NavLink} to="/Dashboard">

      <ListItemIcon>

        <ShoppingCartIcon />

      </ListItemIcon>

      <ListItemText primary="Assigments" />

    </ListItem>
    <NavLink to="/signup">
    <ListItem button>
        
      <ListItemIcon> 

        <PeopleIcon />

      </ListItemIcon>

      <ListItemText primary="Sign-up" />

    </ListItem>
</NavLink>
    <ListItem button  to="/signup">

      <ListItemIcon>

        <BarChartIcon />

      </ListItemIcon>

      <ListItemText primary="Reports" />

    </ListItem>

    <ListItem button>

      <ListItemIcon>

        <LayersIcon />

      </ListItemIcon>

      <ListItemText primary="Integrations" />

    </ListItem>

  </div>

);



export const secondaryListItems = (

  <div>

    <ListSubheader inset>Saved reports</ListSubheader>

    <ListItem button>

      <ListItemIcon>

        <AssignmentIcon />

      </ListItemIcon>

      <ListItemText primary="Current month" />

    </ListItem>

    <ListItem button>

      <ListItemIcon>

        <AssignmentIcon />

      </ListItemIcon>

      <ListItemText primary="Last quarter" />

    </ListItem>

    <ListItem button>

      <ListItemIcon>

        <AssignmentIcon />

      </ListItemIcon>

      <ListItemText primary="Year-end sale" />

    </ListItem>

  </div>

);