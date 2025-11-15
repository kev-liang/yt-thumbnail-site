import { Container, Typography, Box, Divider, Link } from "@mui/material";
import NavBar from "../components/nav/NavBar";
import Footer from "@/app/components/home/Footer";

export default function Privacy() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Privacy Policy for Thumbnail Swapper
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          Last Updated: 11/05/2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Extension Name:
          </Typography>
          <Typography paragraph>
            Thumbnail Swapper: Test YouTube Title/Thumbnail
          </Typography>

          <Typography variant="h6" gutterBottom fontWeight="bold">
            Contact Email:
          </Typography>
          <Typography paragraph>
            <Link href="mailto:support@thumbnailswapper.com">
              support@thumbnailswapper.com
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom fontWeight="bold">
          1. Introduction
        </Typography>
        <Typography paragraph>
          This Privacy Policy describes how the Thumbnail Swapper Chrome
          extension ("the Extension") handles your information. We are committed
          to transparency and protecting your privacy. This policy explains what
          data we collect, why we collect it, and how you can control it.
        </Typography>

        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          2. Information We Collect and How We Use It
        </Typography>
        <Typography paragraph>
          The Extension's operation differs for guest and logged-in users.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          For All Users:
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Google Analytics:</strong> We use Google Analytics to
          collect <strong>anonymized</strong> data about how the Extension is
          used. This includes events like button clicks, thumbnail swaps, and
          installation events. This data does not identify you personally and is
          used solely to analyze usage patterns and improve the Extension's
          features and performance.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          For Guest Users (Not Logged In):
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • All data processed by the Extension for guest users remains{" "}
          <strong>locally on your device</strong>. We use the "storage"
          permission to save your custom thumbnails, titles, and extension
          settings to your browser's local storage via chrome.storage.local.
          This data is never sent to our servers or any third party.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          For Logged-In Users:
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Google Account Information:</strong> We use the "identity"
          permission and Google OAuth to authenticate you. With your consent, we
          collect the following from your Google profile: your Google ID,
          account name, and profile picture. This information is stored in our
          secure AWS database and is used to create and manage your account.
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Extension Data:</strong> The custom thumbnails and titles
          you create and upload are stored in our AWS cloud database. This
          allows you to access your content from any browser where you are
          logged in.
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Host Permissions:</strong> The extension can run on all urls
          to upload your custom thumbnails and titles from any webpage you are
          on. The Extension does not access, read, or transmit data from other
          websites for any other purpose.
        </Typography>

        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          3. Data Storage
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Guest Data:</strong> Stored locally on your device.
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Logged-in User Data:</strong> Stored securely on Amazon Web
          Services (AWS) servers. This includes your Google profile information
          (ID, name, picture) and your uploaded thumbnails and titles.
        </Typography>

        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          4. Data Sharing
        </Typography>
        <Typography paragraph>
          We do not sell, trade, or rent your personal data to third parties.
          Your thumbnails, titles, and account information are kept
          confidential.
        </Typography>
        <Typography paragraph>
          Data is shared only with the following trusted third-party service
          providers under strict confidentiality agreements:
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Google Analytics:</strong> For anonymized usage analytics as
          described above.
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Amazon Web Services (AWS):</strong> For secure cloud data
          storage.
        </Typography>

        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          5. Your Control Over Your Data
        </Typography>
        <Typography paragraph>
          You have full control over your information:
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Local Data (Guest Users):</strong> You can delete all local
          data at any time by uninstalling the Extension from Chrome.
        </Typography>
        <Typography paragraph sx={{ ml: 2 }}>
          • <strong>Cloud Data (Logged-in Users):</strong> You can request the
          deletion of all your cloud-stored data (including your account
          information, thumbnails, and titles) by contacting us at{" "}
          <Link href="mailto:support@thumbnailswapper.com">
            support@thumbnailswapper.com
          </Link>
          . We will process your request promptly.
        </Typography>

        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          6. Changes to This Privacy Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the "Last Updated" date.
        </Typography>

        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          7. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy or your data,
          please do not hesitate to contact us at{" "}
          <Link href="mailto:support@thumbnailswapper.com">
            support@thumbnailswapper.com
          </Link>
          .
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
