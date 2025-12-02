'use client';

import { FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ParentAccessForm() {
  const router = useRouter();

  const [studentName, setStudentName] = useState('');
  const [teacherName, setTeacherName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Replace with real lookup logic
    const slug =
      studentName.trim() !== ''
        ? encodeURIComponent(studentName.trim().toLowerCase().replace(/\s+/g, '-'))
        : 'student';

    router.push(`/parent/results/${slug}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          fullWidth
          label="Student Name"
          placeholder="Enter student's full name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Teacher Name"
          placeholder="Enter class teacher's name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            mt: 1,
            py: 1.3,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          View Results
        </Button>

        {/* Note box */}
        <Box
          sx={{
            mt: 1.5,
            px: 2,
            py: 1.5,
            borderRadius: 2,
            bgcolor: 'rgba(255, 215, 130, 0.25)',
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, mb: 0.5, fontSize: 13 }}
          >
            Note:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 13 }}
          >
            Please ensure you enter the correct student and teacher names to
            access results.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
