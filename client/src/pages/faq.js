import React, { useContext, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { UserContext } from "../UserContext.js";

const useStyles = makeStyles(() => ({
  text: {
    fontFamily: "Nunito Sans",
    fontWeight: "600",
  },
}));

const FAQ = ({ navbar, setNavbar }) => {
  const classes = useStyles();
  useEffect(() => {
    setNavbar(true);
  }, []);
  const { mode } = useContext(UserContext);

  const faqs = [
    {
      question: "What is admission counselling?",
      answer: "Medical Admission Counselling involves guiding clients to make the best choices regarding college selection while considering budget constraints. The admission to a medical college is facilitated through a counselling process based on a candidate's NEET Rank, Domicile, Category, and Fee Budget. Students might not have comprehensive knowledge about the counselling procedures for different colleges across India. Additionally, various scenarios can influence the admission process. Expert Educational Consultancy provides thorough guidance throughout the counselling process to help you secure admission to the best college at the most affordable fee."
    },
    {
      question: "What is the basis of medical UG/PG admission?",
      answer: "Medical postgraduate admissions in India are based on NEET Rank, category, domicile, and fee budget. As of 23rd October 2024, there are approximately 540 NEET PG colleges in India with total seats of 47,182, including 290 government colleges with 27,154 seats, 208 private colleges with 14,374 seats, and 42 deemed universities with 5654 seats. Each state has its own quotas and admission criteria, making it challenging for students to navigate the process on their own. Expert Educational Consultancy, with over 29 years of experience, is here to guide you through this complex landscape."
    },
    {
      question: "Can I take admission on my own? Why do I need an admission counsellor?",
      answer: "A high NEET rank is a significant advantage when applying to top colleges. However, even if your rank isn't as high as you hoped, a well-thought-out and strategic approach to choice filling during counselling can dramatically improve your chances of getting into a reputable institution. By selecting the appropriate colleges, you can secure admission to the best institution within your budget. On the other hand, choosing without careful planning might result in losing a spot at your dream college or facing higher fees. Expert Educational Consultancy will guide you in making informed choices, ensuring you get admitted to the best college at the lowest possible cost. In extreme cases, students may lose their security deposits during State/MCC counselling, resulting in financial loss or even disqualification from the NEET PG Exam 2026. Expert Educational Consultancy will help you navigate the admission counselling process, safeguarding you from such risks."
    },
    {
      question: "What will Expert Educational Consultancy do if I enroll for their services?",
      answer: "Expert Educational Consultancy ensures you receive all the necessary information regarding college forms, deadlines, counselling schedules, and fee deposit dates. They guide you in selecting the right forms to fill and making the best choices for admission counseling. Expert Educational Consultancy saves you time, money, and the hassle of the admission counselling process. Candidates' admission chances can be affected by various external factors. With awareness of these factors, Expert Educational Consultancy helps clients secure admission to the best possible college at the lowest fees. They also help you avoid financial loss. For instance, if you fill out a form for a college where admission is unlikely, you could waste your hard-earned money and experience the anxiety of the counselling process. Expert Educational Consultancy prevents such issues by providing informed guidance throughout."
    },
    {
      question: "Will Expert Educational Consultancy offer any guaranteed admission?",
      answer: "No. Admission to medical colleges occurs through a government-mandated counselling process. Expert Educational Consultancy or any other agency or person cannot influence this process. Expert Educational Consultancy does not believe in making any false claims, as we have been in this profession for the last 29 years. We will guide you through our expertise in the defined admission counselling process."
    },
    {
      question: "Why is there a difference in consultancy fees?",
      answer: "Expert Educational Consultancy offers the most honest and transparent consultancy fee structure, based on NEET Rank, Fee Budget, and Category. In fact, our services are free for those scoring NEET AIR up to 1700. The counselling fees are determined by the time and effort required to secure admission for the candidate."
    },
    {
      question: "How shall I pay the fees? Is the consultancy fee refundable in case I don't get admission?",
      answer: "Expert Educational Consultancy's professional fees shall be payable in advance through Cash/Cheque/Bank Transfer/UPI. You are most welcome to visit Expert Educational Consultancy office to get help on payment of fees. This fee is not refundable except for NRI/Management quota fees which may be refunded in case Expert Educational Consultancy fails to get a seat for the candidate. Please read the service conditions for more details."
    },
    {
      question: "Can I get information without paying consultancy fees?",
      answer: "Expert Educational Consultancy firmly believes that medical admission counselling requires intelligence, not just information. Over the past 29 years, we have observed many individuals struggle because they couldn't turn information into actionable intelligence. Therefore, as a policy, we avoid misleading or overwhelming students with excessive information. After all, Google provides information freely to everyone. However, Expert Educational Consultancy shares accurate and reliable information through Email and WhatsApp. You can stay in touch on WhatsApp/ Email to receive trustworthy guidance. Your primary concern should be securing admission to the best college at the lowest fees. Expert Educational Consultancy will ensure this through our accumulated wisdom and experience."
    },
    {
      question: "How can I trust Expert Educational Consultancy?",
      answer: "Expert Educational Consultancy is a professionally managed company owned by Mr. Shamsher Rana, a Mechanical Engineer by education and a certified admission counsellor by profession. With a permanent office in Prashant Vihar, New Delhi, Expert Educational Consultancy has been operating in this field for over 29 years. The consultancy has offices in Delhi, Haryana, Rajasthan, Punjab, J&K, Maharashtra, Karnataka, Bihar, and Jharkhand, with more than 60 employees dedicated to guiding and helping students through the admission counseling process. In the past 29 years, Expert Educational Consultancy has assisted over 12,050 students in gaining admission to their dream colleges. Mr. Shamsher Rana has references and past clients in practically every district of India. His reputation can be confirmed by contacting past clients, whose references can be provided upon request."
    }
  ];

  return (
    <Container style={{ margin: "80px auto" }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Nunito Sans",
          fontWeight: "600",
          color: "darkorange",
          margin: "0px 15px",
        }}
        align="left"
      >
        FAQs for NEET {mode}
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} style={{ borderRadius: '10px', margin: '10px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className={classes.text}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#e6ffe6", borderRadius: '10px' }}>
            <Typography className={classes.text}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
