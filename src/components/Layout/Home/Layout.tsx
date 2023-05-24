import { Grid, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { ButtonIcon } from "../../styled/Button/Button";
import { Menu } from "@mui/icons-material";

type props = {
    title?: string;
    children: ReactNode;
}
export const Layout = ({ children, title }: props) => {
    useEffect(() => {
        document.title = title || 'Render JSON'
    }, [])
    return (
        <>
            <Grid container sx={{ bgcolor: 'primary.main', alignItems: 'center', boxShadow: '3px 3px 6px rgba(0,0,0,0.2)' }}>
                <Grid item xs={1}>
                    <ButtonIcon>
                        <Menu htmlColor="#FFFFFF" />
                    </ButtonIcon>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h6" color='primary.contrastText'>{title || 'RenderJSON APPS'}</Typography>
                </Grid>
            </Grid>
            {children}
        </>
    )
}
