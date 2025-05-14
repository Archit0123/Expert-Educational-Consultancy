import React, { useContext, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Container, Typography } from '@mui/material';
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

  return (
    <Container style={{ margin: "80px auto" }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Nunito Sans",
          fontWeight: "600",
          color: "darkorange",
          // textShadow: "1px 1px 4px black",
          margin: "0px 15px",
        }}
        align="left"
      >
        FAQs for NEET {mode}
      </Typography>
      {mode === "UG" ?
        <>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                What is Medical Admission Counseling?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "khaki", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Medical Admission Counseling is the process of guiding the client
                in making the right decision on choice of best college in lowest
                fees. The admission to a medical college is done through process
                of counseling which is based on candidate's choice filling based
                on NEET Rank, Domicile, Category, Fees Budget. A student may not
                know all the important information about counseling process for
                all the colleges in India. Moreover, there are different scenarios
                which effect the admission process. Expert Educational Consultancy
                will guide you through the counseling process to secure admission
                in best college in lowest fee.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                What is the basis of medical UG admission?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightblue", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Ans. The Medical UG admission is done on the basis of NEET Rank, Category, Domicile and Fees budget.
There are > 650 MBBS Colleges in India and in which there are 389 Government Colleges with 56300
                Seats and 317 Private Colleges with 52615 Seats. (As on 03-12-2024).
                There are multiple quotas and admission criteria of colleges in different states and it is practically impossible
                for a student to have all the knowledge of those quotas and criteria. Expert Educational Consultancy will help
                you with more than 28 years of expertise in this field.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Can I take admission on my own? Why do I need an admission
                counselor?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightgreen", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Yes, You can. If your NEET Rank is very good then you can secure admission in college of your choice
                because your top rank is in the counselling cut off list however as the NEET Rank gets  lower, the admission to
                the choicest college becomes a matter of strategy decided on the basis of choice filling.
                If you fill in the right choice of college, you can get the admission in best college with lowest fees budget. If you
                don't fill the right choice, you may lose the seat in Dream College and/or pay higher fees. Expert Educational
                Consultancy will help you in making the right choices to ensure you get the admission in best college in lowest
                fees.
                On the extreme case, student may lose its security deposit in State/MCC counselling which may lead to
                financial loss or even get debarred in giving NEET UG Exam 2025. Expert Educational Consultancy will help you
                save those losses by guiding you through the admission counselling process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                What will Expert Educational Consultancy do if I enroll for their
                services?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightpink", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy will ensure that you get all the
                required information regarding college forms, last dates,
                counseling schedule and fees deposit dates. Expert Educational
                Consultancy will guide you in choosing the right forms to be
                filled and right choices to be entered for admission counseling.
                Expert Educational Consultancy will help you save time, money and
                hassles on admission counseling. There are many instances wherein
                candidate's admission chances are impacted by environmental
                influences. Expert Educational Consultancy has awareness of these
                variables to help the client get admission in best possible
                college in lowest fees. Expert Educational Consultancy will help
                save you money as well. If you fill in the form of a college where
                there is no chance of your admission, then you will waste money on
                form filling as well as hassle and anxiety of counseling process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Will Expert Educational Consultancy offer any guaranteed
                admission?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightcyan", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                No. Admission to medical colleges happen through a government mandated counselling process. Expert
                Educational Consultancy or any other agency or person can influence this process. Expert Educational
                Consultancy doesn't believe in making any false claim in this regard as we are in this profession for last 28
                years. Expert Educational Consultancy will help you through their expertise in the defined admission
                counselling process. {" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Why there is difference in consultancy fees of Expert Educational
                Consultancy? Others charge flat fees
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "aquamarine", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy offers the most honest and transparent consultancy fee’s structure which 
is based on NEET Rank, Fee's budget and Category (In fact it is free if your score is >670). The counselling fees is
                defined on the basis of time and efforts involved in securing the admission for candidate.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                How shall I pay the fees? Is the consultancy fee refundable in
                case I don't get admission?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "violet", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy's professional fees shall be payable in advance through cash, cheque or
                online bank transfer. You are most welcome to visit Expert Educational Consultancy office to get help on
                payment of fees. This fee is not refundable except for NRI/Management quota fees which may be refunded in
                case Expert Educational Consultancy fails to get a seat for the candidate. Please read the service conditions for
                more details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                I want to know some information about admission criteria and
                process. Can Expert Educational Consultancy provide me information
                only without charging any consultancy fees?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightgreen", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy strongly believe that medical admission counselling requires intelligence
                not the information. In fact, over last 28 years we have seen many people who suffered because they could
                not convert information into intelligence. That's the reason we as policy don't want to misguide or confuse
                students with information. Moreover, Google has made the information freely available to all, one can always
                get information from internet.
                Expert Educational Consultancy however shares the right & authentic information through virtual webinars /
                WhatsApp. You can attend those webinars or can stay in touch on WhatsApp to get reliable information. Your
                concern shall be securing admission for the child in best college in lowest fees and Expert Educational
                Consultancy will assure you the admission through their acquired wisdom.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: '10px', margin: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                How can I trust Expert Educational Consultancy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "bisque", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy is a professionally managed company which is owned by Mr. Shamsher
                Rana who is a Mechanical Engineer by education and certified admission counselor by profession. Expert
                Educational Consultancy is operating in this profession for over 28 years now through a permanent office in
                Prashant Vihar, New Delhi.
                Expert Educational Consultancy has offices in Delhi, Haryana, Rajasthan, Punjab, J&K, Maharashtra, Karnataka,
                Bihar, and Jharkhand with more than 60 employees to guide and help students during the process of admission
                counseling.
                Over 28 years, Expert Educational Consultancy has helped more than 10,900 students get admission in their
                dream colleges. That's the reason, Mr. Shamsher Rana has reference/ past client in practically every district of
                India. His reputation can be confirmed by contacting the past clients/references which can be furnished on
                request.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
        :
        <>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                What is admission counselling?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "bisque", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Medical Admission Counselling involves guiding clients to make the best choices regarding college selection
                while considering budget constraints. The admission to a medical college is facilitated through a counselling
                process based on a candidate's NEET Rank, Domicile, Category, and Fee Budget.

                Students might not have comprehensive knowledge about the counselling procedures for different colleges
                across India. Additionally, various scenarios can influence the admission process. Expert Educational Consultancy
                provides thorough guidance throughout the counselling process to help you secure admission to the best college
                at the most affordable fee.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                What is the basis of medical PG admission?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightpink", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Medical postgraduate admissions in India are based on NEET Rank, category, domicile, and fee budget. As of
                23rd October 2024, there are approximately 540 NEET PG colleges in India with total seats of 47,182, including 290
                government colleges with 27,154 seats, 208 private colleges with 14,374 seats, and 42 deemed universities with
                5654 seats.

                Each state has its own quotas and admission criteria, making it challenging for students to navigate the process on
                their own. Expert Educational Consultancy, with over 29 years of experience, is here to guide you through this
                complex landscape.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Can I take admission on my own? Why do I need an admission
                counsellor?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "cyan", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                A high NEET rank is a significant advantage when applying to top colleges. However, even if your rank isn't
                as high as you hoped, a well-thought-out and strategic approach to choice filling during counselling can
                dramatically improve your chances of getting into a reputable institution.

                By selecting the appropriate colleges, you can secure admission to the best institution within your budget. On the
                other hand, choosing without careful planning might result in losing a spot at your dream college or facing higher
                fees. Expert Educational Consultancy will guide you in making informed choices, ensuring you get admitted to the
                best college at the lowest possible cost.

                In extreme cases, students may lose their security deposits during State/MCC counselling, resulting in financial
                loss or even disqualification from the NEET PG Exam 2026. Expert Educational Consultancy will help you navigate
                the admission counselling process, safeguarding you from such risks.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                What will Expert Educational Consultancy do if I enrol for their
                services?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "goldenrod", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy ensures you receive all the necessary information regarding college forms,
                deadlines, counselling schedules, and fee deposit dates. They guide you in selecting the right forms to fill and
                making the best choices for admission counseling.
                Expert Educational Consultancy saves you time, money, and the hassle of the admission counselling process.
                Candidates' admission chances can be affected by various external factors. With awareness of these factors,
                Expert Educational Consultancy helps clients secure admission to the best possible college at the lowest fees.
                They also help you avoid financial loss. For instance, if you fill out a form for a college where admission is unlikely,
                you could waste your hard-earned money and experience the anxiety of the counselling process. Expert
                Educational Consultancy prevents such issues by providing informed guidance throughout.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Will Expert Educational Consultancy offer any guaranteed
                admission?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "greenyellow", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                No. Admission to medical colleges occurs through a government-mandated counselling process. Expert
                Educational Consultancy or any other agency or person cannot influence this process. Expert Educational
                Consultancy does not believe in making any false claims, as we have been in this profession for the last 29 years.
                We will guide you through our expertise in the defined admission counselling process.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Why there is difference in consultancy fees of Expert Educational
                Consultancy? Others charge flat fees.{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "yellow", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy offers the most honest and transparent consultancy fee structure, based on
                NEET Rank, Fee Budget, and Category. In fact, our services are free for those scoring NEET AIR up to 1700. The
                counselling fees are determined by the time and effort required to secure admission for the candidate.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                How shall I pay the fees? Is the consultancy fee refundable in
                case I don't get admission?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightblue", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy's professional fees shall be payable in advance through Cash/Cheque/Bank
                Transfer/UPI. You are most welcome to visit Expert Educational Consultancy office to get help on payment of
                fees. This fee is not refundable except for NRI/Management quota fees which may be refunded in case Expert
                Educational Consultancy fails to get a seat for the candidate. Please read the service conditions for more details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                I want to know some information about admission criteria and
                process. Can Expert Educational Consultancy provide me information
                only without charging any consultancy fees?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "lightgreen", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy firmly believes that medical admission counselling requires intelligence, not
                just information. Over the past 29 years, we have observed many individuals struggle because they couldn't turn
                information into actionable intelligence. Therefore, as a policy, we avoid misleading or overwhelming students
                with excessive information. After all, Google provides information freely to everyone.

                However, Expert Educational Consultancy shares accurate and reliable information through Email and WhatsApp.
                You can stay in touch on WhatsApp/ Email to receive trustworthy guidance. Your primary concern should be
                securing admission to the best college at the lowest fees. Expert Educational Consultancy will ensure this through
                our accumulated wisdom and experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: '10px', borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                How can I trust Expert Educational Consultancy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "hotpink", borderRadius: '10px', margin: '10px' }}>
              <Typography
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: "600",
                }}
              >
                Expert Educational Consultancy is a professionally managed company owned by Mr. Shamsher Rana, a
                Mechanical Engineer by education and a certified admission counsellor by profession. With a permanent office in
                Prashant Vihar, New Delhi, Expert Educational Consultancy has been operating in this field for over 29 years.

                The consultancy has offices in Delhi, Haryana, Rajasthan, Punjab, J&K, Maharashtra, Karnataka, Bihar, and
                Jharkhand, with more than 60 employees dedicated to guiding and helping students through the admission
                counseling process.

                In the past 29 years, Expert Educational Consultancy has assisted over 12,050 students in gaining admission to
                their dream colleges. Mr. Shamsher Rana has references and past clients in practically every district of India. His
                reputation can be confirmed by contacting past clients, whose references can be provided upon request.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      }
    </Container>
  );
};

export default FAQ;
