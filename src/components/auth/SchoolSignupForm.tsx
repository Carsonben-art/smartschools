'use client';

import { FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useRouter } from 'next/navigation';

export default function SchoolSignupForm() {
  const router = useRouter();

  const [schoolName, setSchoolName] = useState('');
  const [schoolMotto, setSchoolMotto] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [schoolType, setSchoolType] = useState('Junior Secondary School');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: replace with real API call
    const payload = {
      schoolName,
      schoolMotto,
      phone,
      password,
      schoolType,
    };
    console.log('Signup payload:', payload);

    // Simulate successful signup
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessOpen(true);
    }, 500);
  };

  const handleContinue = () => {
    setSuccessOpen(false);
    router.push('/school/login');
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
          <TextField
            fullWidth
            label="School Name"
            placeholder="Enter your school name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />

          <TextField
            fullWidth
            label="School Motto"
            placeholder="Enter your school motto"
            value={schoolMotto}
            onChange={(e) => setSchoolMotto(e.target.value)}
          />

          <TextField
            fullWidth
            label="Active Phone Number"
            placeholder="+254719532707"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            select
            fullWidth
            label="School Type"
            value={schoolType}
            onChange={(e) => setSchoolType(e.target.value)}
          >
            <MenuItem value="Primary School">Primary School</MenuItem>
            <MenuItem value="Junior Secondary School">
              Junior Secondary School
            </MenuItem>
            <MenuItem value="Secondary School">Secondary School</MenuItem>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              mt: 1,
              py: 1.3,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            {isSubmitting ? 'Creating Account…' : 'Create Account'}
          </Button>
        </Stack>
      </Box>

      {/* Success Popup */}
      <Dialog
        open={successOpen}
        onClose={handleContinue}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent
          sx={{
            py: 5,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              bgcolor: 'rgba(46, 204, 113, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <CheckCircleOutlineOutlinedIcon
              sx={{ fontSize: 38, color: '#2ecc71' }}
            />
          </Box>

          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Account Created!
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Your school has been successfully registered. You can now login to
            your dashboard.
          </Typography>

          <Button
            variant="contained"
            onClick={handleContinue}
            sx={{
              px: 5,
              py: 1.1,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
