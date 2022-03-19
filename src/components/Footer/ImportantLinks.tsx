import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ImportantLinks = () => {
    return (
        <React.Fragment>
            <Typography variant="h5" className="heading" sx={{ mb: 2 }}>
                Important links
            </Typography>

            <List>
                <ListItem>
                    <NavLink to="/">Home</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/about">About</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/projects">Projects</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/contacts">Contacts</NavLink>
                </ListItem>
            </List>
        </React.Fragment>
    );
};
