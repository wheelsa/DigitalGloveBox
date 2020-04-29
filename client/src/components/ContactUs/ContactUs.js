import React from "react";
import {
  LeftHalf,
  Title,
  Paragraph,
  ContactCard,
  RightHalf,
  ImgCar,
  ContactButton,
  ContactLink
} from "../styles/DashBoard"; 
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.titleCont}>
        <Title>About the Developers</Title>
      </div>
    <div style={styles.centerCards}>
      <ContactCard  style={styles.margin}>
        <LeftHalf>
          <ImgCar src="https://res.cloudinary.com/dvnkqa41b/image/upload/v1587586262/Emily_Pena_wnz31p.png" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Emily Pena
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph></Paragraph>
          </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

            
          <div style={{ display: "flex", justifyContent: "space-around", width: '50%' }}>
            <a href ='https://github.com/empena'>
              <img src="https://img.icons8.com/ios-filled/80/000000/github.png" style={{width: '3em'}}/>
                {/* <ContactButton>o to Emily ProfilePag e<ContactButton> */}
            </a>
              <a href='https://www.linkedin.com/in/emilypena/'>
                <img src="https://img.icons8.com/dotty/80/000000/linkedin.png" style={{ width: '3em'}}/>
              </a>
          </div>
            </div>
        </RightHalf>
      </ContactCard>
      <br />
      <ContactCard  style={styles.margin}>
        <LeftHalf>
          <ImgCar src="https://res.cloudinary.com/dvnkqa41b/image/upload/v1587586247/Web-Seth_Wheeler-5801-Edit_t2eo8l.jpg" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Seth Wheeler
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph>
        
             {/* Seth Wheeler is an Army Veteran with a passion for technology that makes the world a better place. He is openly seeking new opportunities in full-stack development */}
            </Paragraph>
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

            
          <div style={{ display: "flex", justifyContent: "space-around", width: '50%' }}>
            <a href ='https://github.com/wheelsa'>
              <img src="https://img.icons8.com/ios-filled/80/000000/github.png" style={{width: '3em'}}/>
                {/* <ContactButton>o to Emily ProfilePag e<ContactButton> */}
            </a>
              <a href ='https://www.linkedin.com/in/wheelerseth/'>
                <img src="https://img.icons8.com/dotty/80/000000/linkedin.png" style={{ width: '3em'}}/>
              </a>
          </div>
            </div>
        </RightHalf>
      </ContactCard>
      <br />
      <ContactCard  style={styles.margin}>
        <LeftHalf>
          <ImgCar src="https://res.cloudinary.com/dvnkqa41b/image/upload/v1587591543/P1049473_k2oigb.jpg" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Thomas Gaston
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph></Paragraph>
          </div>
           <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

            
          <div style={{ display: "flex", justifyContent: "space-around", width: '50%' }}>
            <a href ='https://github.com/T-Gaston'>
              <img src="https://img.icons8.com/ios-filled/80/000000/github.png" style={{width: '3em'}}/>
                {/* <ContactButton>o to Emily ProfilePag e<ContactButton> */}
            </a>
              <a href = 'https://www.linkedin.com/in/Thomas-Gaston'>
                <img src="https://img.icons8.com/dotty/80/000000/linkedin.png" style={{ width: '3em'}}/>
              </a>
          </div>
            </div>
        </RightHalf>
      </ContactCard>
      <br />
      <ContactCard style={styles.margin}>
        <LeftHalf>
          <ImgCar src="https://res.cloudinary.com/dvnkqa41b/image/upload/v1587508561/Qi_l7ps73.jpg" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Qi Cao
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph></Paragraph>
          </div>
           <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

            
          <div style={{ display: "flex", justifyContent: "space-around", width: '50%' }}>
            <a href ='https://github.com/alanqicao'>
              <img src="https://img.icons8.com/ios-filled/80/000000/github.png" style={{width: '3em'}}/>
                {/* <ContactButton>o to Emily ProfilePag e<ContactButton> */}
            </a>
              <a href ='https://www.linkedin.com/in/alanqicao/'>
                <img src="https://img.icons8.com/dotty/80/000000/linkedin.png" style={{ width: '3em'}}/>
              </a>
          </div>
            </div>
        </RightHalf>
      </ContactCard>
    </div>
  </div>
  );
};

export default ContactUs;

const styles = {
  carsRow: {
    display: "table",
    justifyContent: "center",
    width: "100%",
    marginBottom: "3em",
  },
  centerCards: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  },
  colCards: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-evenly'
  },
  margin: {
    margin: '2em'
  },
  titleCont: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '2em 0em'
  },
  container: {
    padding: '5em 10% 6em',
    height: '100%',
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
  },
};
