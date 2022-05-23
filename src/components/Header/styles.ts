import styled, { createGlobalStyle } from "styled-components";
import { GlobalColors } from "../../global";

export const HeaderStyles = styled.div`
    width: max-content;
    padding: 2rem 0;
    margin-left: auto;
    position: relative;

    @media only screen and (max-width: 768px) {
        .mobile-menu-icon {
            display: block;
        }
    }
`;

export const StyledTabletOrMobile = styled.div`
    .btn-container {
    }

    .menu-icon {
        color: ${GlobalColors.white1};
        font-size: 1.4em;
    }
`;

export const StyledPaperProps = {
    minWidth: "300px",
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
    },
    "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
    },

    MenuItem: {
        width: "100%",
    },
    link: {
        width: "100%",
    },
    textLink: {
        textDecoration: "none",
    },
};

export const ActiveLinkStyles = createGlobalStyle`
.link {
    color: ${GlobalColors.gray1};
    text-transform: uppercase;
    text-decoration: none;
}

.icon.link {
    margin-top: 2px;
}

.link.active,
.link.active .link {
    color: ${GlobalColors.blue1};
}
`;
