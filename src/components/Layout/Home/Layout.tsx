import { Grid, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { ButtonIcon } from "../../styled/Button/Button";
import { Menu, PeopleAlt } from "@mui/icons-material";

type props = {
    title?: string;
    children: ReactNode;
}
export const Layout = ({ children, title }: props) => {
    const [openModalUser, setOpenModalUser] = useState(false);
    const [openModalOptions, setOpenModalOptions] = useState(false);
    useEffect(() => {
        document.title = title || 'App'
    }, []);

    return (
        <>
            <Grid container sx={{ bgcolor: 'primary.main', alignItems: 'center', boxShadow: '3px 3px 6px rgba(0,0,0,0.2)', position: 'relative', zIndex: 200 }}>
                <Grid item xs={1}>
                    <ButtonIcon onClick={() => setOpenModalOptions(st => !st)}>
                        <Menu htmlColor="#FFFFFF" />
                    </ButtonIcon>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h6" color='primary.contrastText'>{title || 'RenderJSON APPS'}</Typography>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ButtonIcon onClick={() => setOpenModalUser(st => !st)}>
                        <PeopleAlt htmlColor="#FFFFFF" />
                    </ButtonIcon>
                </Grid>
            </Grid>
            <div style={{ display: 'flex' }}>
                <div className="modal-options" style={{
                    transform: `translateX(${openModalOptions ? '0%' : '-100%'})`
                }}>
                </div>
                {children}
                <div className="modal-user" style={{ transform: `translateY(${openModalUser ? '22%' : '-100%'})` }}>
                </div>
            </div>
        </>
    )
}
