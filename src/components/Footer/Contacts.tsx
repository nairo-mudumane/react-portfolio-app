import React from "react";
import { List, ListItem, Typography } from "@mui/material";

export default function Contacts() {
    return (
        <React.Fragment>
            <Typography variant="h5" className="heading" sx={{ mb: 2 }}>
                Contacts
            </Typography>

            <List>
                <ListItem>
                    <a
                        href="tel:+258821053328"
                        target="_blank"
                        rel="noreferrer"
                    >
                        +258 821 053 328
                    </a>
                </ListItem>

                <ListItem>
                    <a
                        href="tel:+258845121839"
                        target="_blank"
                        rel="noreferrer"
                    >
                        +258 845 121 839
                    </a>
                </ListItem>
                <ListItem>
                    <a
                        href="mailto:nairomudumane@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        nairomudumane@outlook.com
                    </a>
                </ListItem>
                <ListItem>
                    <a
                        href="mailto:nazirmudumane@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        nazirmudumane@gmail.com
                    </a>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        Moçambique, Maputo, Hulene
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}
