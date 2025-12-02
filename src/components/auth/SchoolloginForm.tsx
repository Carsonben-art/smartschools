'use client';

import { FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type SchoolLoginFormProps = {
  onSubmit?: (data: { identifier: string; password: string }) => void;
};

export default function SchoolLoginForm({ onSubmit }: SchoolLoginFormProps) {
  const router = useRouter();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = { identifier, password };
    onSubmit?.(payload);

    console.log('Login payload:', payload);

    // TODO: Add real authentication logic later
    // For now, redirect to the dashboard:
    router.push('/admin/dashboard');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          fullWidth
          label="Phone Number or Email"
          placeholder="+254719532707 or email@school.com"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          size="medium"
        />

        <Box>
          <TextField
            fullWidth
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="medium"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 1,
            }}
          >
            <Link href="/forgot-password" passHref legacyBehavior>
              <MuiLink
                underline="none"
                sx={{ fontSize: 13, fontWeight: 500, color: 'text.secondary' }}
              >
                Forgot Password?
              </MuiLink>
            </Link>
          </Box>
        </Box>

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
          Login
        </Button>
      </Stack>
    </Box>
  );
}
