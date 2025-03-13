import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const faqs = [
  {
    question: "Will this affect my Youtube account?",
    answer:
      "No, this extension only modifies the images and text in your browser and does not interact with your Youtube account.",
  },
  {
    question: "How is my data used?",
    answer:
      " Your data is only used when displaying data in the extension or on the Youtube page. It is not sold to any third-parties ",
  },
  {
    question: "Is it free?",
    answer:
      "Yes there is a free tier plan with 5 uploads and 10 swaps per month.",
  },
  {
    question: "Can I downgrade / cancel my plan?",
    answer:
      "Yes, you can change your plan at any time. If you cancel your subscription, it will last until the end of the current billing cycle.",
  },
];

const FAQ = () => {
  return (
    <Box
      component="section"
      sx={{ mx: "auto", width: { sm: "80%", md: "48rem" }, mb: 8 }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", textAlign: "center", my: 8 }}
      >
        FAQ
      </Typography>
      {faqs.map((faq) => (
        <Accordion sx={{ boxShadow: "none" }} disableGutters>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
