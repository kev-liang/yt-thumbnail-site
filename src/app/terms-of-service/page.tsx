import {
  Container,
  Typography,
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "@/app/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Terms of Service
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          Last Updated: 11/05/2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Agreement to Terms
          </Typography>
          <Typography paragraph>
            By installing or using the Thumbnail Swapper Chrome extension ("the
            Service"), you agree to be bound by these Terms of Service. If you
            disagree with any part of the terms, you may not access the Service.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Section 1: Eligibility and Accounts */}
        <Typography variant="h5" gutterBottom fontWeight="bold">
          1. Eligibility and Accounts
        </Typography>
        <Typography paragraph>
          The Service is available to all users regardless of age. When you
          create an account through Google OAuth, you agree to provide accurate
          and complete information. You are responsible for maintaining the
          security of your account and for all activities that occur under your
          account.
        </Typography>

        {/* Section 2: Acceptable Use */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          2. Acceptable Use
        </Typography>
        <Typography paragraph>
          You agree not to use the Service for any illegal or unauthorized
          purpose. You are solely responsible for your conduct and any data,
          text, files, images, or other materials you submit, post, or display
          while using the Service.
        </Typography>
        <Typography paragraph>Prohibited activities include:</Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem>
            <ListItemText primary="Uploading or creating thumbnails/titles that are unlawful, abusive, harassing, threatening, or obscene" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Interfering with or disrupting the Service or servers or networks connected to the Service" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Using the Service for any form of spam, including but not limited to unsolicited advertising or promotional materials" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Creating thumbnails/titles that infringe upon any third-party rights, including copyright, trademark, privacy, or other personal or proprietary rights" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Using the Service to create misleading, deceptive, or fraudulent content" />
          </ListItem>
        </List>

        {/* Section 3: Intellectual Property */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          3. Intellectual Property
        </Typography>
        <Typography paragraph>
          Your content: You retain all intellectual property rights to the
          thumbnails and titles you create and upload using the Service. By
          uploading content, you grant Thumbnail Swapper a worldwide,
          non-exclusive, royalty-free license to host, store, and serve your
          content solely for the purpose of providing and improving the Service.
        </Typography>
        <Typography paragraph>
          Our service: The Thumbnail Swapper extension, including its code,
          design, features, and functionality are and will remain the exclusive
          property of Thumbnail Swapper and its licensors. The Service is
          protected by copyright, trademark, and other laws of both the United
          States and foreign countries.
        </Typography>

        {/* Section 4: Service Terms */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          4. Service Terms
        </Typography>
        <Typography paragraph>
          Free features: The Service offers basic features at no cost. We
          reserve the right to modify or discontinue free features at any time
          without notice.
        </Typography>
        <Typography paragraph>
          Pro features: Certain advanced features may be available through paid
          subscriptions. Payment terms, billing cycles, and specific features
          included in pro plans will be detailed at the point of purchase. All
          payments are non-refundable except as required by law.
        </Typography>

        {/* Section 5: Termination */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          5. Termination
        </Typography>
        <Typography paragraph>
          We may terminate or suspend your account and access to the Service
          immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach these Terms. We
          reserve the right to revoke service for any reason at our sole
          discretion.
        </Typography>
        <Typography paragraph>
          Upon termination, your right to use the Service will cease
          immediately. If you wish to terminate your account, you may simply
          discontinue using the Service or contact us at
          support@thumbnailswapper.com.
        </Typography>

        {/* Section 6: Disclaimer of Warranties */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          6. Disclaimer of Warranties
        </Typography>
        <Typography paragraph>
          Your use of the Service is at your sole risk. The Service is provided
          on an "as is" and "as available" basis. Thumbnail Swapper expressly
          disclaims all warranties of any kind, whether express or implied,
          including, but not limited to the implied warranties of
          merchantability, fitness for a particular purpose and
          non-infringement.
        </Typography>

        {/* Section 7: Limitation of Liability */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          7. Limitation of Liability
        </Typography>
        <Typography paragraph>
          To the fullest extent permitted by applicable law, in no event shall
          Thumbnail Swapper, its directors, employees, partners, agents,
          suppliers, or affiliates be liable for any indirect, incidental,
          special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible
          losses, resulting from your access to or use of or inability to access
          or use the Service.
        </Typography>

        {/* Section 8: Governing Law */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          8. Governing Law
        </Typography>
        <Typography paragraph>
          These Terms shall be governed and construed in accordance with the
          laws of the United States, without regard to its conflict of law
          provisions. Any disputes arising from these Terms or your use of the
          Service shall be resolved in the courts of the United States.
        </Typography>

        {/* Section 9: Changes to Terms */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          9. Changes to Terms
        </Typography>
        <Typography paragraph>
          We reserve the right to modify or replace these terms at any time. The
          most current version will be posted on our website. By continuing to
          access or use our service after any revisions become effective, you
          agree to be bound by the updated terms.
        </Typography>

        {/* Section 10: Contact */}
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
          10. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about these Terms, please contact us at{" "}
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
