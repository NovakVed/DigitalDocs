import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/AIR-FOI-HR/AIR2026">
                AIR2016
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright