import Link from 'next/link';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import StudentHeaderCard from '@/components/parent/StudentHeaderCard';
import ResultsTable, { ResultRow } from '../../../../components/parent/ResultTable';
import FinancialsCard from '@/components/parent/FinancialsCard';

type ParentResultsPageProps = {
  params: { student: string };
};

function titleCaseFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function ParentResultsPage({ params }: ParentResultsPageProps) {
  const studentName = titleCaseFromSlug(params.student || 'student');

  // Mock data – replace with real data fetching later
  const classTeacher = 'Carson';
  const averagePercent = 83;

  const results: ResultRow[] = [
    { subject: 'Mathematics', exam: 'Mid-Term Exam', marksPercent: 85, grade: 'A' },
    { subject: 'English', exam: 'Mid-Term Exam', marksPercent: 78, grade: 'B+' },
    { subject: 'Kiswahili', exam: 'Mid-Term Exam', marksPercent: 82, grade: 'A-' },
    { subject: 'Science', exam: 'Mid-Term Exam', marksPercent: 90, grade: 'A' },
    { subject: 'Social Studies', exam: 'Mid-Term Exam', marksPercent: 76, grade: 'B+' },
    { subject: 'Physical Education', exam: 'Mid-Term Exam', marksPercent: 88, grade: 'A' },
  ];

  const totalFees = 45000;
  const amountPaid = 30000;
  const balanceDue = totalFees - amountPaid;
  const dueDate = 'March 31, 2024';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Back link */}
        <Box sx={{ mb: 2 }}>
          <Link href="/parent/access" passHref legacyBehavior>
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
              Back
            </MuiLink>
          </Link>
        </Box>

        {/* Header card */}
        <StudentHeaderCard
          studentName={studentName}
          classTeacher={classTeacher}
          averagePercent={averagePercent}
        />

        {/* Academic results card */}
        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Academic Results
            </Typography>

            <ResultsTable rows={results} />
          </CardContent>
        </Card>

        {/* Financials */}
        <FinancialsCard
          totalFees={totalFees}
          amountPaid={amountPaid}
          balanceDue={balanceDue}
          dueDate={dueDate}
        />
      </Container>
    </Box>
  );
}
