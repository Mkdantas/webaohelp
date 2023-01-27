import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { tokens } from '../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CodeIcon from '@mui/icons-material/Code';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Create');


  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Link to={to}>
        <MenuItem
          active={selected === title}
          style={{
            color: colors.grey[100],
          }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography>{title}</Typography>

        </MenuItem>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        height: 1,
        "& .sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .menu-icon": {
          backgroundColor: 'transparent !important'
        },
        "& .menu-anchor": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .menu-anchor:hover": {
          color: "#868dfb !important",
          background: `${colors.primary[400]} !important`
        },
        "& .menu-item.active .menu-anchor": {
          color: "#6870fa !important",
          background: `${colors.primary[400]} !important`
        },
        "& aside": {
          borderRight: '0px',
          height: '100%'
        },

      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu>

          {!isCollapsed && (
            <Box mb="25px" sx={{ height: 1 }}>

              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "40px 0 0 0" }}
                >
                  Matheus Dantas
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  SME
                </Typography>
              </Box>
            </Box>
          )}

          <Box sx={{ height: 1 }} paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Criar Ticket"
              to="/create"
              icon={<AddCircleSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {isCollapsed ? '' : 'Filas'}
            </Typography>
            <Item
              title="SME"
              to="/unassigned"
              icon={<CodeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="QA"
              to="/unassigned"
              icon={<ThumbUpAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="TL"
              to="/unassigned"
              icon={<SupervisorAccountIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {isCollapsed ? '' : 'Relatórios'}
            </Typography>
            <Item
              title="Tickets Abertos"
              to="/open"
              icon={<MeetingRoomIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tickets Pendentes"
              to="/pending"
              icon={<HourglassBottomIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tickets Encerrados"
              to="/closed"
              icon={<CheckCircleSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
        <Box sx={{ position: 'absolute', bottom: 0, width: 1 }} paddingLeft={isCollapsed ? undefined : "10%"}>
          <Menu>
            <Item
              title="Sair"
              to="/logout"
              icon={<LogoutSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Box>
      </Sidebar>

    </Box>
  )
}

export default Navbar;