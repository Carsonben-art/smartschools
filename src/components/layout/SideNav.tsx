'use client';

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Stack,
} from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Link from 'next/link';

export const drawerWidth = 260;

type SideNavProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: 'Dashboard', icon: <DashboardRoundedIcon />, href: '/admin/dashboard', active: true },
  { label: 'Classes', icon: <ClassRoundedIcon />, href: '#' },
  { label: 'Students', icon: <PeopleRoundedIcon />, href: '#' },
  { label: 'Teachers', icon: <PeopleRoundedIcon />, href: '#' },
  { label: 'Settings', icon: <SettingsRoundedIcon />, href: '#' },
];

function NavContent() {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#111827',
        color: '#E5E7EB',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Toolbar sx={{ px: 2.5 }}>
        <Stack spacing={1} alignItems="flex-start">
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: '#facc15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SchoolOutlinedIcon sx={{ fontSize: 18, color: '#111827' }} />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: '#F9FAFB' }}
            >
              Bureti SmartSchools
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
            School Admin
          </Typography>
        </Stack>
      </Toolbar>

      <Box sx={{ px: 1.5, mt: 1, flexGrow: 1 }}>
        <List disablePadding>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} passHref legacyBehavior>
              <ListItemButton
                component="a"
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  px: 2,
                  py: 1,
                  bgcolor: item.active ? '#facc15' : 'transparent',
                  color: item.active ? '#111827' : '#E5E7EB',
                  '&:hover': {
                    bgcolor: item.active ? '#facc15' : '#1f2937',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    color: 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: item.active ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          px: 1.5,
          pb: 2,
          pt: 1,
          borderTop: '1px solid rgba(55,65,81,0.9)',
        }}
      >
        <ListItemButton
          sx={{
            borderRadius: 2,
            px: 2,
            py: 1,
            color: '#E5E7EB',
            '&:hover': { bgcolor: '#1f2937' },
          }}
        >
          <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>
            <LogoutRoundedIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default function SideNav({ mobileOpen, onClose }: SideNavProps) {
  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <NavContent />
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <NavContent />
      </Drawer>
    </>
  );
}
