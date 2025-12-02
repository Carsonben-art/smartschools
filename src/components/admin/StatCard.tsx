'use client';

import { Card, CardContent, Stack, Typography, Box } from '@mui/material';

type StatCardProps = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
};

export default function StatCard({ label, value, icon, iconBg }: StatCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5, fontSize: 13 }}
            >
              {label}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700 }}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2.5,
              bgcolor: iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
