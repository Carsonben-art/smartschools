'use client';

import { Card, CardContent, Stack, Typography, Box } from '@mui/material';

type QuickActionCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
};

export default function QuickActionCard({
  title,
  description,
  icon,
  iconBg,
}: QuickActionCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 5,
        },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2.5,
              bgcolor: iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 0.3 }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {description}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
