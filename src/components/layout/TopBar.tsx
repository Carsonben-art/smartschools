'use client';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

type TopBarProps = {
  onMenuClick?: () => void;
};

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      color="inherit"
      sx={{
        display: { xs: 'block', md: 'none' }, // only show on mobile
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ px: 2 }}>
        <IconButton edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              bgcolor: '#facc15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SchoolOutlinedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Bureti SmartSchools
            </Typography>
            <Typography variant="caption" color="text.secondary">
              School Admin
            </Typography>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
