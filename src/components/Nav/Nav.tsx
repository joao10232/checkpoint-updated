import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export function Nav() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const arrayListagemDePonto = [
        {
            name: "Ponto",
            icon: <DarkModeIcon />,
        },
        {
            name: "Colaboradores",
            icon: <ContrastIcon />,
        },
        {
            name: "Ausências",
            icon: <AcUnitIcon />,
        },
    ];

    const DrawerList = (
        <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
            <List>
                {arrayListagemDePonto.map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 3 === 0 ? (
                                    <AcUnitIcon />
                                ) : index % 3 === 1 ? (
                                    <ContrastIcon />
                                ) : (
                                    <DarkModeIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
