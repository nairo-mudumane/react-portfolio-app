import styled, { createGlobalStyle } from "styled-components";
import { GlobalColors } from "../../global";

export const HeaderStyles = styled.div`
    padding: 2rem 0;

    @media only screen and (max-width: 768px) {
        .mobile-menu-icon {
            display: block;
        }
    }
`;

export const StyledTabletOrMobile = styled.div`
    width: max-content;
    margin-left: auto;

    .menu-icon {
        color: ${GlobalColors.white1};
        font-size: 1.4em;
    }
`;

export const StyledPaperProps = {
    minWidth: "200px",
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
    color: ${GlobalColors.black1};
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

export const StyledDesktopHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    .title {
        font-weight: 700;
        font-size: 1.5em;
    }

    .navigation {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
    }

    .link.desktop:not(.link.active) {
        color: ${GlobalColors.white1};
    }

    .btn {
        color: ${GlobalColors.white1};
        background: ${GlobalColors.blue2};

        &:hover,
        &:focus {
            background: ${GlobalColors.blue2};
            opacity: 0.7;
        }
    }
`;
