'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';

import TopBar from '@/components/layout/TopBar';
import SideNav, { drawerWidth } from '@/components/layout/SideNav';
import StatCard from '@/components/admin/StatCard';
import QuickActionCard from '@/components/admin/QuickActionCard';
import ActivityList, { ActivityItem } from '@/components/admin/ActivityList';

export default function AdminDashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const activities: ActivityItem[] = [
    {
      id: '1',
      title: 'New student enrolled in Form 1A',
      timeAgo: '2 hours ago',
      icon: <SchoolRoundedIcon fontSize="small" />,
      iconBg: '#fef3c7',
    },
    {
      id: '2',
      title: 'Class schedule updated for Form 3',
      timeAgo: '5 hours ago',
      icon: <ClassRoundedIcon fontSize="small" />,
      iconBg: '#dbeafe',
    },
    {
      id: '3',
      title: 'New teacher added to Mathematics department',
      timeAgo: '1 day ago',
      icon: <PersonRoundedIcon fontSize="small" />,
      iconBg: '#f5d0fe',
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f3f4f6' }}>
      <TopBar onMenuClick={() => setMobileOpen(true)} />
      <SideNav mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: `${drawerWidth}px` },
          mt: { xs: 7, md: 0 },
          p: { xs: 2.5, md: 4 },
          transition: 'margin 0.2s ease-out',
        }}
      >
        <Container maxWidth="lg" sx={{ px: 0 }}>
          {/* Header */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 0.5 }}
            >
              Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Welcome back! Here&apos;s your school overview.
            </Typography>
          </Box>

          {/* Stat cards row */}
          <Grid container spacing={2.5} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                label="Total Classes"
                value={12}
                iconBg="#e0f2fe"
                icon={<SchoolRoundedIcon sx={{ color: '#2563eb' }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                label="Total Students"
                value={487}
                iconBg="#dcfce7"
                icon={<PeopleAltRoundedIcon sx={{ color: '#16a34a' }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                label="Total Teachers"
                value={24}
                iconBg="#ede9fe"
                icon={<PersonRoundedIcon sx={{ color: '#8b5cf6' }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                label="Active Sessions"
                value={8}
                iconBg="#ffedd5"
                icon={<TimelineRoundedIcon sx={{ color: '#ea580c' }} />}
              />
            </Grid>
          </Grid>

          {/* Quick Actions */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 1.5 }}
            >
              Quick Actions
            </Typography>

            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <QuickActionCard
                  title="Add Classes"
                  description="Create new classes and assign teachers"
                  iconBg="#e0f2fe"
                  icon={<AddCircleOutlineRoundedIcon sx={{ color: '#2563eb' }} />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <QuickActionCard
                  title="Manage Classes"
                  description="View and edit existing classes"
                  iconBg="#dbeafe"
                  icon={<ClassRoundedIcon sx={{ color: '#1d4ed8' }} />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <QuickActionCard
                  title="Manage Students"
                  description="Add, edit, or remove student records"
                  iconBg="#dcfce7"
                  icon={<GroupRoundedIcon sx={{ color: '#16a34a' }} />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <QuickActionCard
                  title="Manage Teachers"
                  description="Handle teacher assignments and details"
                  iconBg="#ede9fe"
                  icon={<PersonRoundedIcon sx={{ color: '#8b5cf6' }} />}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Recent Activity full width */}
          <ActivityList items={activities} />
        </Container>
      </Box>
    </Box>
  );
}
