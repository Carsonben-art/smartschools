'use client';

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

type StudentHeaderCardProps = {
  studentName: string;
  classTeacher: string;
  averagePercent: number;
};

export default function StudentHeaderCard({
  studentName,
  classTeacher,
  averagePercent,
}: StudentHeaderCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        mb: 3,
      }}
    >
      <CardContent
        sx={{
          p: 3,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          {/* Left side: avatar + names */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ color: '#fff' }} />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700 }}
              >
                {studentName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Class Teacher: {classTeacher}
              </Typography>
            </Box>
          </Stack>

          {/* Right side: average badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 999,
              bgcolor: 'rgba(255, 215, 130, 0.45)',
            }}
          >
            <EmojiEventsOutlinedIcon
              sx={{ fontSize: 18, color: 'primary.main' }}
            />
            <Box>
              <Typography
                variant="caption"
                sx={{ display: 'block', lineHeight: 1.2 }}
              >
                Average
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                {averagePercent}%
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
