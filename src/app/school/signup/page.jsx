import Link from 'next/link';
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolSignupForm from '@/components/auth/SchoolSignupForm';

export default function SchoolSignupPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        {/* Back link */}
        <Box sx={{ mb: 2 }}>
          <Link href="/" passHref legacyBehavior>
            <MuiLink
              underline="none"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: 'text.secondary',
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 16 }} />
              Back to Home
            </MuiLink>
          </Link>
        </Box>

        {/* Signup card */}
        <Card
          elevation={4}
          sx={{
            borderRadius: 4,
            px: { xs: 3, sm: 6 },
            py: { xs: 4, sm: 5 },
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Stack spacing={3.5} alignItems="center">
              {/* Icon circle */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                }}
              >
                <SchoolOutlinedIcon sx={{ color: '#fff' }} />
              </Box>

              {/* Title & subtitle */}
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 0.5 }}
                >
                  Create School Account
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Join Bureti SmartSchools today
                </Typography>
              </Box>

              {/* Form */}
              <Box width="100%">
                <SchoolSignupForm />
              </Box>

              {/* Bottom text */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Already have an account?{' '}
                <Link href="/school/login" passHref legacyBehavior>
                  <MuiLink
                    underline="none"
                    sx={{ color: 'primary.main', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Login here
                  </MuiLink>
                </Link>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
